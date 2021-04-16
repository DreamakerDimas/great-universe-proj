import React, { useCallback, useEffect } from 'react';
import { MAP_MOUSE_MODES, MAP_PNG_PATH } from '../../constants';
import SlicedMap from './SlicedMap/SlicedMap';
import SVGZones from './SVGZones/SVGZones';
import styles from './MapImages.module.sass';
import { getCountryData, hideZoneData, showZoneData } from '../../actions/map';
import { connect } from 'react-redux';
import { useDrag, usePinch } from 'react-use-gesture';
import { Globals, useSpring, animated } from 'react-spring';
import { getCheckedPosition } from './functions/mapFunctions';

const { DRAG, SELECT } = MAP_MOUSE_MODES;

const MapImages = (props) => {
  const {
    mouseMode,
    setMouseDown,
    imagesStyle,
    width,
    currentZoomMultiplier,
    boundaryValues,
    zoom,
  } = props;
  const { showZoneData } = props;

  Globals.assign({
    skipAnimation: true,
  });
  const [{ x, y }, api] = useSpring(() => ({
    x: 0,
    y: 0,
  }));

  const bindDrag = useDrag(
    ({ down, offset }) => {
      if (down) {
        let [left, top] = offset;

        api.start({ x: left, y: top });
      }
    },
    {
      bounds: {
        left: boundaryValues.left,
        top: boundaryValues.top,
        right: boundaryValues.zero,
        bottom: boundaryValues.zero,
      },
      initial: [x, y],
    }
  );

  const recalcPosition = useCallback(
    ({ x, y }) => {
      const top =
        y.get() * currentZoomMultiplier -
        (window.innerHeight * currentZoomMultiplier - window.innerHeight) / 2;

      const left =
        x.get() * currentZoomMultiplier -
        (window.innerWidth * currentZoomMultiplier - window.innerWidth) / 2;

      return getCheckedPosition(
        Math.trunc(top),
        Math.trunc(left),
        boundaryValues
      );
    },
    [currentZoomMultiplier, boundaryValues]
  );

  const zoneClickHandler = (e) => {
    if (mouseMode !== SELECT) return;
    const zoneName = e.target.parentNode.getAttribute('name');
    showZoneData(zoneName);
  };

  useEffect(() => {
    const { top, left } = recalcPosition({ x, y });

    api.start({ x: left, y: top });
  }, [currentZoomMultiplier]);

  return (
    <animated.div
      className={styles.imagesContainer}
      // onMouseDown={mouseDownHandler}
      // onMouseMove={moveHandler}
      // onMouseUp={mouseUpHandler}
      // onMouseLeave={mouseLeaveHandler}
      onClick={zoneClickHandler}
      {...bindDrag()}
      style={{ x, y, touchAction: 'none' }}
    >
      <SlicedMap width={width} style={imagesStyle} />
      <SVGZones width={width} style={imagesStyle} />
    </animated.div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  showZoneData: (zone_name) => dispatch(showZoneData(zone_name)),
  getCountryData: (zone_name) => dispatch(getCountryData(zone_name)),
});

export default connect(null, mapDispatchToProps)(MapImages);
