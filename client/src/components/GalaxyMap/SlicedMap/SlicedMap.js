import React from 'react';
import { MAP_PNG_ARR } from '../../../constants';

const SlicedMap = () => {
  return (
    <div className="map_images_container">
      {MAP_PNG_ARR.map((row, i) => (
        <div key={i} className="map_row">
          {row.map((col, j) => (
            <img key={j} src={col} alt="map_polygon" />
          ))}
        </div>
      ))}
      ;
    </div>
  );
};

export default SlicedMap;
