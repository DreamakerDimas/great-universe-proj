import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getCountryData } from '../../actions/map';
import CountryContent from './ContryContent/CountryContent';
import styles from './MapData.module.sass';

const MapData = (props) => {
  const { mapStore, getCountryData } = props;
  const { currentData } = mapStore;

  useEffect(() => {
    getCountryData(mapStore.zone_name);
  }, [mapStore.zone_name]);

  return (
    <div className={styles.topContainer}>
      <div className={styles.countryDataLine} />
      <div className={styles.dataContainer}>
        {mapStore.loading ? (
          <div></div>
        ) : (
          <>
            <CountryContent country={currentData} />
          </>
        )}
      </div>
      <div className={styles.countryDataLine} />
    </div>
  );
};

const mapStateToProps = (state) => {
  const { mapStore } = state;
  return { mapStore };
};

const mapDispatchToProps = (dispatch) => ({
  getCountryData: (zone_name) => dispatch(getCountryData(zone_name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MapData);
