import React from 'react';
import SVGZones from './SVGZones/SVGZones';
import styles from './Map.module.sass';

const pngPath = process.env.PUBLIC_URL + '/map/png/Milky_Way_Longitude.png';

const Map = () => {
  return (
    <>
      <div className={styles.mapContainer}>
        <img src={pngPath} />
        <SVGZones />
      </div>
    </>
  );
};

export default Map;
