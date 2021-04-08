import React, { useCallback } from 'react';
import { MAP_MOUSE_MODES, MAP_PNG_PATH } from '../../constants';
import SlicedMap from './SlicedMap/SlicedMap';
import SVGZones from './SVGZones/SVGZones';
import styles from './MapImages.module.sass';
import { hideZoneData, showZoneData } from '../../actions/map';
import { connect } from 'react-redux';

const { DRAG, SELECT } = MAP_MOUSE_MODES;

const MapImages = (props) => {
  const { mouseMode, setMouseDown, moveHandler, imagesStyle, width } = props;
  const { showZoneData, hideZoneData } = props;

  const mouseDownHandler = useCallback(
    (e) => {
      console.log('mouseDown');
      if (mouseMode !== DRAG) return;
      setMouseDown(true);
    },
    [mouseMode]
  );

  const mouseUpHandler = useCallback((e) => {
    console.log('mouseUp');
    setMouseDown(false);
  }, []);

  const mouseLeaveHandler = useCallback((e) => {
    console.log('mouseLeave');
    setMouseDown(false);
  }, []);

  const zoneClickHandler = (e) => {
    if (mouseMode !== SELECT) return;
    const zoneName = e.target.parentNode.getAttribute('name');
    showZoneData(zoneName);
  };

  return (
    <div
      className={styles.imagesContainer}
      onMouseDown={mouseDownHandler}
      onMouseMove={moveHandler}
      onMouseUp={mouseUpHandler}
      onMouseLeave={mouseLeaveHandler}
      onClick={zoneClickHandler}
    >
      <SlicedMap style={imagesStyle} width={width} />
      <SVGZones style={imagesStyle} />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  showZoneData: (zone_name) => dispatch(showZoneData(zone_name)),
});

export default connect(null, mapDispatchToProps)(MapImages);
