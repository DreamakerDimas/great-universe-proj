import React, { useState, useEffect } from 'react';
import SVGZones from './SVGZones/SVGZones';
import styles from './Map.module.sass';

const pngPath = process.env.PUBLIC_URL + '/map/png/Milky_Way_Longitude.png';
const grabIconPath = process.env.PUBLIC_URL + '/icons/svg/grab-icon.svg';
const cursorIconPath = process.env.PUBLIC_URL + '/icons/svg/cursor-icon.svg';

const mapMouseModes = { SELECT: 'default', DRAG: 'grab' };

const Map = () => {
  const [mouseMode, setMouseMode] = useState(mapMouseModes.SELECT);

  const [mouseDown, setMouseDown] = useState(false);

  const [zoom, setZoom] = useState(1.1);

  const [width, setWidth] = useState(Math.trunc(zoom * window.innerWidth));
  const [zoomMultiplier, setZoomMultiplier] = useState(1);

  const [mapPosition, setMapPosition] = useState([0, 0]);
  const [borderValues, setBorderValues] = useState({
    top: window.innerHeight - width,
    left: window.innerWidth - width + 10,
    zero: 0,
  });

  const setPosition = () => {
    setMapPosition((prevPosition) => {
      const x =
        prevPosition[1] * zoomMultiplier -
        (window.innerWidth * zoomMultiplier - window.innerWidth) / 2;
      const y =
        prevPosition[0] * zoomMultiplier -
        (window.innerHeight * zoomMultiplier - window.innerHeight) / 2;
      return [y, x];
    });
  };

  const moveHandler = (e) => {
    if (!mouseDown) return;
    const newMapPosition = [
      mapPosition[0] + e.movementY,
      mapPosition[1] + e.movementX,
    ];
    // x; if newPos - and < border
    if (newMapPosition[1] < 0 && newMapPosition[1] < borderValues.left)
      newMapPosition[1] = borderValues.left;

    // y; if newPos - and < border
    if (newMapPosition[0] < 0 && newMapPosition[0] < borderValues.top)
      newMapPosition[0] = borderValues.top;

    // y; if newPos +
    if (newMapPosition[0] > 0) newMapPosition[0] = borderValues.zero;

    // x; if newPos +
    if (newMapPosition[1] > 0) newMapPosition[1] = borderValues.zero;

    console.log('w-ow', width - e.currentTarget.offsetWidth);
    console.log('x', mapPosition[1]);
    setMapPosition(newMapPosition);
  };

  const mouseDownHandler = (e) => {
    console.log('mouseDown', mouseDown);
    if (mouseMode !== mapMouseModes.DRAG) return;
    setMouseDown(true);
  };

  const mouseUpHandler = (e) => {
    console.log('mouseUp');
    setMouseDown(false);
  };

  // zoom controllers
  const zoomInHandler = () => {
    setZoom((prevZoom) => {
      if (prevZoom >= 3) return 3;
      return Number((prevZoom + 0.1).toFixed(1));
    });
  };
  const zoomOutHandler = () => {
    setZoom((prevZoom) => {
      if (prevZoom <= 1) return 1;
      return Number((prevZoom - 0.1).toFixed(1));
    });
  };

  // mode setters
  const toDragMode = () => {
    setMouseMode(mapMouseModes.DRAG);
  };
  const toSelectMode = () => {
    setMouseMode(mapMouseModes.SELECT);
  };

  // styles setters
  const imagesStyle = {
    width: `${width}px`,
    top: mapPosition[0],
    left: mapPosition[1],
    transition: 'width 0.1s, top 0.1s, left 0.1s',
  };
  const mouseStyle = { cursor: mouseMode };

  useEffect(() => {}, [mouseDown, mapPosition]);

  useEffect(() => {
    setWidth((prevWidth) => {
      const newWidth = Math.trunc(zoom * window.innerWidth);
      setZoomMultiplier(newWidth / prevWidth);
      return newWidth;
    });
  }, [zoom]);

  useEffect(() => {
    setPosition();
    setBorderValues({
      top: window.innerHeight - width,
      left: window.innerWidth - width + 10,
      zero: 0,
    });
  }, [width]);
  return (
    <>
      <div className={styles.mapContainer} style={mouseStyle}>
        <div className={styles.buttonsContainer}>
          <button onClick={zoomInHandler}>+</button>
          <button onClick={zoomOutHandler}>-</button>
          <button onClick={toDragMode}>
            <img src={grabIconPath} />
          </button>
          <button onClick={toSelectMode}>
            <img src={cursorIconPath} />
          </button>
        </div>
        <div
          className={styles.imagesContainer}
          onMouseDown={mouseDownHandler}
          onMouseMove={moveHandler}
          onMouseUp={mouseUpHandler}
        >
          <img src={pngPath} style={imagesStyle} />
          <SVGZones style={imagesStyle} />
        </div>
      </div>
    </>
  );
};

export default Map;
