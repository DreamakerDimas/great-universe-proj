import React from 'react';
import { LOW_SIZE_MAP_PNG, MAP_PNG_ARR } from '../../../constants';
import styles from './SlicedMap.module.sass';

const SlicedMap = (props) => {
  const oneImageSize = Math.floor(props.width / MAP_PNG_ARR.length);

  const imageStyle = {
    width: oneImageSize + 'px',
    height: oneImageSize + 'px',
  };

  return (
    <div className={styles.imagesContainer} style={props.style}>
      <img
        src={LOW_SIZE_MAP_PNG}
        alt=""
        className={styles.lowMap}
        style={props.style}
      />
      {MAP_PNG_ARR.map((row, i) => (
        <div key={i} className={styles.rowContainer}>
          {row.map((col, j) => (
            <img key={j} src={col} alt="map_polygon" style={imageStyle} />
          ))}
        </div>
      ))}
      ;
    </div>
  );
};

export default SlicedMap;
