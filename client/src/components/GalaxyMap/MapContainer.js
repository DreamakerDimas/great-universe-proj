import React, { useState, useEffect } from 'react';
import { MAP_MOUSE_MODES } from '../../constants';
import MapImages from './MapImages';
import MapInterface from './MapInterface';
import styles from './MapContainer.module.sass';
import {
  getWidth,
  getCheckedPosition,
  getBoundaries,
} from './functions/mapFunctions';

const { DRAG, SELECT } = MAP_MOUSE_MODES;

const MapContainer = () => {
  // --- Modes --- //
  const [mouseMode, setMouseMode] = useState(SELECT);
  const [mouseDown, setMouseDown] = useState(false);

  const [zoom, setZoom] = useState(1.1); // map zoom value
  const [width, setWidth] = useState(() => getWidth(zoom)); // map size
  const [currentZoomMultiplier, setCurrentZoomMultiplier] = useState(1); // For correct centering while zoom happens

  const [mapPosition, setMapPosition] = useState({ top: 0, left: 0 });

  const [boundaryValues, setBoundaryValues] = useState(() =>
    getBoundaries(width)
  );

  // Mouse handlers
  const moveHandler = (e) => {
    if (!mouseDown) return;

    let top = mapPosition.top + e.movementY;
    let left = mapPosition.left + e.movementX;

    setMapPosition(getCheckedPosition(top, left, boundaryValues));
  };

  const reCalcPosition = () => {
    setMapPosition((prevPosition) => {
      const top =
        prevPosition.top * currentZoomMultiplier -
        (window.innerHeight * currentZoomMultiplier - window.innerHeight) / 2;

      const left =
        prevPosition.left * currentZoomMultiplier -
        (window.innerWidth * currentZoomMultiplier - window.innerWidth) / 2;

      return getCheckedPosition(
        Math.trunc(top),
        Math.trunc(left),
        boundaryValues
      );
    });
  };

  // set new multiplier for new position
  useEffect(() => {
    setWidth((prevWidth) => {
      const newWidth = getWidth(zoom);

      setCurrentZoomMultiplier(newWidth / prevWidth);
      return newWidth;
    });
  }, [zoom]);

  useEffect(() => {
    setBoundaryValues(getBoundaries(width));
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
      <MapInterface setZoom={setZoom} setMouseMode={setMouseMode} />

      <MapImages
        mouseMode={mouseMode}
        setMouseDown={setMouseDown}
        moveHandler={moveHandler}
        imagesStyle={imagesStyle}
      />
    </div>
  );
};

export default MapContainer;
