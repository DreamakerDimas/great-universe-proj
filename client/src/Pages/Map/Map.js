import React, { useState } from 'react';
import SVGZones from './SVGZones/SVGZones';
import styles from './Map.module.sass';

const pngPath = process.env.PUBLIC_URL + '/map/png/Milky_Way_Longitude.png';

const Map = () => {
  const [zoom, setZoom] = useState(1.0);

  const zoomInHandler = () => {
    setZoom(zoom + 0.1);
  };

  const zoomOutHandler = () => {
    setZoom(zoom - 0.1);
  };

  const imagesStyle = { width: `${Math.trunc(zoom * 100)}%` };
  console.log('render', imagesStyle);
  return (
    <>
      <div className={styles.mapContainer}>
        <button onClick={zoomInHandler}>+</button>
        <button onClick={zoomOutHandler}>-</button>
        <div className={styles.imagesContainer}>
          <img src={pngPath} style={imagesStyle} />
          <SVGZones style={imagesStyle} />
        </div>
      </div>
    </>
  );
};

export default Map;
