import React, {useCallback, useEffect} from 'react';
import {MAP_MOUSE_MODES} from '../../constants';
import SlicedMap from './SlicedMap/SlicedMap';
import SVGZones from './SVGZones/SVGZones';
import styles from './MapImages.module.sass';
import {getCountryData, showZoneData} from '../../actions/map';
import {connect} from 'react-redux';
import {useDrag} from 'react-use-gesture';
import {Globals, useSpring, animated} from 'react-spring';
import {BoundariesValues, getCheckedPosition} from './functions/mapFunctions';

const {DRAG, SELECT} = MAP_MOUSE_MODES;

interface MapImagesProps {
  mouseMode: MAP_MOUSE_MODES,
  setMouseDown: React.Dispatch<React.SetStateAction<boolean>>
  imagesStyle: object;
  width: number;
  currentZoomMultiplier: number;
  boundaryValues: BoundariesValues;
  zoom: number;
  setWidth: React.Dispatch<React.SetStateAction<number>>;
  showZoneData(zone: string): void;
  getCountryData(zone: string): void;
}

const MapImages: React.FC<MapImagesProps> = (props) => {
  const {
    mouseMode,
    setMouseDown,
    imagesStyle,
    width,
    currentZoomMultiplier,
    boundaryValues,
    zoom,
  } = props;
  const {showZoneData} = props;

  Globals.assign({
    skipAnimation: true,
  });
  const [{x, y}, api] = useSpring(() => ({
    x: 0,
    y: 0,
  }));

  const bindDrag = useDrag(
      ({down, offset}) => {
        if (down) {
          const [left, top] = offset;

          api.start({x: left, y: top});
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
      },
  );

  const recalcPosition = useCallback(
      ({x, y}) => {
        const top =
        y.get() * currentZoomMultiplier -
        (window.innerHeight * currentZoomMultiplier - window.innerHeight) / 2;

        const left =
        x.get() * currentZoomMultiplier -
        (window.innerWidth * currentZoomMultiplier - window.innerWidth) / 2;

        return getCheckedPosition(
            Math.trunc(top),
            Math.trunc(left),
            boundaryValues,
        );
      },
      [currentZoomMultiplier, boundaryValues],
  );

  const zoneClickHandler = (e) => {
    if (mouseMode !== SELECT) return;
    const zoneName = e.target.parentNode.getAttribute('name');
    if (zoneName === null) return;
    showZoneData(zoneName);
  };

  useEffect(() => {
    const {top, left} = recalcPosition({x, y});

    api.start({x: left, y: top});
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
      style={{x, y, touchAction: 'none'}}
    >
      <SlicedMap width={width} style={imagesStyle} />
      <SVGZones width={width} style={imagesStyle} />
    </animated.div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  showZoneData: (zone_name: string) => dispatch(showZoneData(zone_name)),
  getCountryData: (zone_name: string) => dispatch(getCountryData(zone_name)),
});

export default connect(null, mapDispatchToProps)(MapImages);
