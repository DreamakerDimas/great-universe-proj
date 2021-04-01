import React, { useCallback } from 'react';
import { MAP_MOUSE_MODES, MAP_PNG_PATH } from '../../constants';
import SlicedMap from './SlicedMap/SlicedMap';
import SVGZones from './SVGZones/SVGZones';
import styles from './MapImages.module.sass';

const { DRAG } = MAP_MOUSE_MODES;

const MapImages = (props) => {
  const { mouseMode, setMouseDown, moveHandler, imagesStyle, width } = props;

  const mouseDownHandler = (e) => {
    console.log('mouseDown');
    if (mouseMode !== DRAG) return;
    setMouseDown(true);
  };

  const mouseUpHandler = (e) => {
    console.log('mouseUp');
    setMouseDown(false);
  };

  return (
    <div
      className={styles.imagesContainer}
      onMouseDown={mouseDownHandler}
      onMouseMove={moveHandler}
      onMouseUp={mouseUpHandler}
    >
      <SlicedMap style={imagesStyle} width={width} />
      <SVGZones style={imagesStyle} />
    </div>
  );
};

export default MapImages;
