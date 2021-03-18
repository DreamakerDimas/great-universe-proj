import React from 'react';
import { ReactSVG } from 'react-svg';

import styles from './SVGZones.module.sass';

const svgPath = process.env.PUBLIC_URL + '/map/svg/main.svg';

const SVGZones = ({ style }) => {
  // set class for inner SVG elements
  const setClassName = (node) => {
    const className = node.getAttribute('class');
    node.setAttribute('class', styles[className]);
  };

  // set id for inner SVG elements && set name
  const setIdAndName = (node) => {
    const idName = node.getAttribute('id');
    node.setAttribute('name', idName);
    if (styles[idName] === undefined) return;
    node.setAttribute('id', styles[idName]);
  };

  // SVG middleware
  const beforeInjectionHandler = (svg) => {
    svg.classList.add(styles.svg);
    svg.childNodes.forEach((node) => {
      if (node.nodeName !== '#text') {
        setClassName(node);
        setIdAndName(node);
      }
    });
  };

  return (
    <ReactSVG
      className={styles.container}
      src={svgPath}
      beforeInjection={beforeInjectionHandler}
      style={style}
    ></ReactSVG>
  );
};

export default SVGZones;
