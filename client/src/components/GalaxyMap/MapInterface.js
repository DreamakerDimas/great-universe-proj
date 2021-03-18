import React from 'react';
import { MOUSE_ICONS } from '../../constants';
import styles from './MapInterface.module.sass';

const { GRAB, DEFAULT } = MOUSE_ICONS;

const MapInterface = (props) => {
  const { zoomInHandler, zoomOutHandler, toDragMode, toSelectMode } = props;

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
