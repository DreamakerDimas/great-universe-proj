import React, {useState, useEffect, useCallback} from 'react';
import {MAP_MOUSE_MODES} from '../../constants';
import MapImages from './MapImages';
import MapInterface from './MapInterface';
import styles from './MapContainer.module.sass';
import {
  getWidth,
  getCheckedPosition,
  getBoundaries,
} from './functions/mapFunctions';
import {connect} from 'react-redux';
import MapData from '../GalaxyMapData/MapData';

const {SELECT, DRAG, DRAG_ACTIVE} = MAP_MOUSE_MODES;

const MapContainer: React.FC = (props) => {
  // --- Modes --- //
  const [mouseMode, setMouseMode] = useState(SELECT);
  const [mouseDown, setMouseDown] = useState(false);

  const [zoom, setZoom] = useState(1); // map zoom value
  const [width, setWidth] = useState(() => getWidth(zoom)); // map size

  const [currentZoomMultiplier, setCurrentZoomMultiplier] = useState(1); // For correct centering while zoom happens

  const [boundaryValues, setBoundaryValues] = useState(() =>
    getBoundaries(width),
  );

  // change width on resize
  useEffect(() => {
    const resizeHandler = () => {
      setWidth((prevWidth) => {
        const newWidth = getWidth(zoom);

        // set new multiplier for new position
        setCurrentZoomMultiplier(newWidth / prevWidth);
        return newWidth;
      });
    };
    resizeHandler();

    window.addEventListener('resize', resizeHandler);

    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, [zoom]);

  useEffect(() => {
    setBoundaryValues(getBoundaries(width));
  }, [width]);

  // styles setters
  const cursorHandler = useCallback(() => {
    if (mouseMode === DRAG && mouseDown) return DRAG_ACTIVE;
    if (mouseMode === DRAG) return DRAG;
    return SELECT;
  }, [mouseMode, mouseDown]);

  const imagesStyle = {
    width: `${width}px`,
  };
  const mouseStyle = {cursor: cursorHandler()};

  return (
    <div className={styles.mapContainer} style={mouseStyle}>
      <MapInterface setZoom={setZoom} setMouseMode={setMouseMode} />

      <MapImages
        mouseMode={mouseMode}
        setMouseDown={setMouseDown}
        // moveHandler={moveHandler}
        imagesStyle={imagesStyle}
        width={width}
        currentZoomMultiplier={currentZoomMultiplier}
        boundaryValues={boundaryValues}
        setWidth={setWidth}
        zoom={zoom}
      />

      {props.isShowed && <MapData />}
    </div>
  );
};

const mapStateToProps = (state) => {
  const {isShowed} = state.mapStore;
  return {isShowed};
};

export default connect(mapStateToProps, null)(MapContainer);
