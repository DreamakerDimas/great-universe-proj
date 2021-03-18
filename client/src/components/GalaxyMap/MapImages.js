import React from 'react';
import { MAP_PNG_PATH } from '../../constants';
import SVGZones from './SVGZones/SVGZones';
import styles from './MapImages.module.sass';

const MapImages = (props) => {
  const { mouseDownHandler, mouseUpHandler, moveHandler, imagesStyle } = props;

  return (
    <div
      className={styles.imagesContainer}
      onMouseDown={mouseDownHandler}
      onMouseMove={moveHandler}
      onMouseUp={mouseUpHandler}
    >
      <img src={MAP_PNG_PATH} style={imagesStyle} />
      <SVGZones style={imagesStyle} />
    </div>
  );
};

export default MapImages;
