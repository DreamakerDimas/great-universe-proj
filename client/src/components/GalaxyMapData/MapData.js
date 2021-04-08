import React from 'react';
import { connect } from 'react-redux';
import styles from './MapData.module.sass';

const MapData = (props) => {
  return (
    <div className={styles.dataContainer}>
      <div className="zoneName">{props.mapStore.zone_name}</div>
      <div className="zoneInfo">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis
        commodi enim porro laborum mollitia praesentium dolores quaerat, nihil,
        nam facere distinctio consequuntur nulla doloribus blanditiis unde,
        optio minima error veritatis aperiam sint soluta minus voluptatibus.
        Eaque corrupti at asperiores nisi, ipsam dolorum, eius modi laudantium,
        enim fugiat veniam veritatis unde natus ad sunt sapiente eum.
      </div>
      <div className="edit"></div>
      <div className="links"></div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { mapStore } = state;
  return { mapStore };
};

export default connect(mapStateToProps, null)(MapData);
