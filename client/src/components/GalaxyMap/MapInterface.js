import React from 'react';
import { MOUSE_ICONS } from '../../constants';
import { MAP_MOUSE_MODES } from '../../constants';
import styles from './MapInterface.module.sass';

const { DRAG, SELECT } = MAP_MOUSE_MODES;
const { GRAB, DEFAULT } = MOUSE_ICONS;

const MapInterface = (props) => {
  const { setMouseMode, setZoom } = props;

  const toDragMode = () => {
    setMouseMode(DRAG);
  };
  const toSelectMode = () => {
    setMouseMode(SELECT);
  };

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

  return (
    <div className={styles.buttonsContainer}>
      <button onClick={zoomInHandler}>+</button>
      <button onClick={zoomOutHandler}>-</button>
      <button onClick={toDragMode}>
        <img src={GRAB} />
      </button>
      <button onClick={toSelectMode}>
        <img src={DEFAULT} />
      </button>
    </div>
  );
};

export default MapInterface;
