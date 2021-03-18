import React, { useState, useEffect } from 'react';
import { MAP_MOUSE_MODES } from '../../constants';
import MapImages from './MapImages';
import MapInterface from './MapInterface';
import styles from './MapContainer.module.sass';

const { DRAG, SELECT } = MAP_MOUSE_MODES;

const MapContainer = () => {
  // --- Modes --- //
  const [mouseMode, setMouseMode] = useState(SELECT);
  const [mouseDown, setMouseDown] = useState(false);
  // mode setters
  const toDragMode = () => {
    setMouseMode(DRAG);
  };
  const toSelectMode = () => {
    setMouseMode(SELECT);
  };

  // --- Map interaction controller --- //
  const [zoom, setZoom] = useState(1.1);
  const getWidth = () => Math.trunc(zoom * window.innerWidth);
  const [width, setWidth] = useState(() => getWidth());
  const [currentZoomMultiplier, setCurrentZoomMultiplier] = useState(1);

  const [mapPosition, setMapPosition] = useState({ top: 0, left: 0 });

  const getBoundaries = () => ({
    top: window.innerHeight - width,
    left: window.innerWidth - width + 10,
    zero: 0,
  });
  const [boundaryValues, setBoundaryValues] = useState(getBoundaries());

  // check new position and change if beyond boundaries
  const getCheckedPosition = (top, left) => {
    // x; if newPos - and < border
    if (left < 0 && left < boundaryValues.left) left = boundaryValues.left;
    // y; if newPos - and < border
    if (top < 0 && top < boundaryValues.top) top = boundaryValues.top;

    // x; if newPos +
    if (left > 0) left = boundaryValues.zero;
    // y; if newPos +
    if (top > 0) top = boundaryValues.zero;

    return { top, left };
  };

  // Mouse handlers
  const moveHandler = (e) => {
    if (!mouseDown) return;
    let top = mapPosition.top + e.movementY;
    let left = mapPosition.left + e.movementX;

    setMapPosition(getCheckedPosition(top, left));
  };

  const mouseDownHandler = (e) => {
    console.log('mouseDown', mouseDown);
    if (mouseMode !== DRAG) return;
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

  const reCalcPosition = () => {
    setMapPosition((prevPosition) => {
      const top =
        prevPosition.top * currentZoomMultiplier -
        (window.innerHeight * currentZoomMultiplier - window.innerHeight) / 2;
      const left =
        prevPosition.left * currentZoomMultiplier -
        (window.innerWidth * currentZoomMultiplier - window.innerWidth) / 2;
      return getCheckedPosition(Math.trunc(top), Math.trunc(left));
    });
  };

  useEffect(() => {
    setWidth((prevWidth) => {
      const newWidth = getWidth();
      // set multiplier for reCalc position
      setCurrentZoomMultiplier(newWidth / prevWidth);
      return newWidth;
    });
  }, [zoom]);

  useEffect(() => {
    setBoundaryValues(getBoundaries());
  }, [width]);

  useEffect(() => {
    reCalcPosition();
  }, [boundaryValues]);

  // styles setters
  const imagesStyle = {
    width: `${width}px`,
    top: mapPosition.top,
    left: mapPosition.left,
  };
  const mouseStyle = { cursor: mouseMode };

  return (
    <div className={styles.mapContainer} style={mouseStyle}>
      <MapInterface
        zoomInHandler={zoomInHandler}
        zoomOutHandler={zoomOutHandler}
        toDragMode={toDragMode}
        toSelectMode={toSelectMode}
      />

      <MapImages
        mouseDownHandler={mouseDownHandler}
        mouseUpHandler={mouseUpHandler}
        moveHandler={moveHandler}
        imagesStyle={imagesStyle}
      />
    </div>
  );
};

export default MapContainer;
