import React from 'react';
import { ReactSVG } from 'react-svg';
import styles from './Map.module.sass';

const svgPath = process.env.PUBLIC_URL + '/map/svg/main.svg';

const Map = () => {
  // set class for inner SVG elements
  const setClassName = (node) => {
    const className = node.getAttribute('class');
    node.setAttribute('class', styles[className]);
  };

  const setIdName = (node) => {
    const idName = node.getAttribute('id');
    node.setAttribute('id', styles[idName]);
  };

  // SVG middleware
  const beforeInjectionHandler = (svg) => {
    svg.classList.add(styles.svg);
    svg.childNodes.forEach((node) => {
      if (node.nodeName !== '#text') {
        setClassName(node);
        setIdName(node);
      }
    });
  };

  return (
    <>
      <div>Map</div>
      <div className={styles.mapContainer}>
        <ReactSVG
          src={svgPath}
          beforeInjection={beforeInjectionHandler}
        ></ReactSVG>
      </div>
    </>
  );
};

export default Map;
