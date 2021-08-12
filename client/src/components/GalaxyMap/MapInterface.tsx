import React from 'react';
import {connect} from 'react-redux';
import {hideZoneData} from '../../actions/map';
import {MOUSE_ICONS} from '../../constants';
import {MAP_MOUSE_MODES} from '../../constants';
import styles from './MapInterface.module.sass';

const {DRAG, SELECT} = MAP_MOUSE_MODES;
const {GRAB_ICON, ZOOM_IN_ICON, ZOOM_OUT_ICON, DEFAULT_ICON} = MOUSE_ICONS;

const MapInterface: React.FC = (props) => {
  const {setMouseMode, setZoom, hideZoneData} = props;

  const toDragMode = () => {
    setMouseMode(DRAG);
    hideZoneData();
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
      <button onClick={zoomInHandler}>
        <img src={ZOOM_IN_ICON} />
      </button>
      <button onClick={zoomOutHandler}>
        <img src={ZOOM_OUT_ICON} />
      </button>
      <button onClick={toDragMode}>
        <img src={GRAB_ICON} />
      </button>
      <button onClick={toSelectMode}>
        <img src={DEFAULT_ICON} />
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  hideZoneData: () => dispatch(hideZoneData()),
});

export default connect(null, mapDispatchToProps)(MapInterface);
