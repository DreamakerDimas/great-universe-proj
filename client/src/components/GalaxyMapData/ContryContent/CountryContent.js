import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  createCountry,
  updateCountry,
  deleteCountry,
} from '../../../actions/map';
import CountryForm from '../CountryForm/CountryForm';
import styles from './CountryContent.module.sass';

const CountryContent = (props) => {
  const { country, createCountry, updateCountry, deleteCountry } = props;

  const createHandler = (values) => {
    createCountry(values);
  };

  const updateHandler = (values) => {
    const id = props.country.id;
    updateCountry({ id, updateData: values });
  };

  const deleteHandler = () => {
    const { id, zone_name } = props.country;
    deleteCountry({ id, zone_name });
  };

  const [isEditMode, setEditMode] = useState(false);

  const getInitValues = () => {
    const { id, ...restData } = country;
    return restData;
  };

  const toEditMode = () => setEditMode(true);
  const toNormalMode = () => setEditMode(false);

  return (
    <div>
      {isEditMode ? (
        <>
          <CountryForm
            initValues={getInitValues()}
            actionFunc={updateHandler}
          />
        </>
      ) : (
        <>
          {country.isEmpty ? (
            <>
              <CountryForm
                initValues={{ zone_name: country.zone_name }}
                actionFunc={createHandler}
              />
            </>
          ) : (
            <div className={styles.dataContainer}>
              <div className={styles.countryHeader}>
                {country.emblem_img && (
                  <div className="zoneImage">
                    <img src={country.emblem_img} alt="emblem" />
                  </div>
                )}
                <div className="zoneName">{country.disp_name}</div>
              </div>
              {country.government_type && (
                <div className={styles.countryGovernment}>
                  <span className={styles.infoTitle}>
                    Государственный строй:
                  </span>
                  <span>{country.government_type}</span>
                </div>
              )}
              {country.description && (
                <div className={styles.countryDesc}>
                  <span className={styles.infoTitle}>Описание:</span>
                  <span>{country.description}</span>
                </div>
              )}
              {country.tags && <div className="tags"></div>}
              <div className={styles.buttonsContainer}>
                <button className={styles.editBtn} onClick={toEditMode}>
                  Редактировать
                </button>
                <button className={styles.deleteBtn} onClick={deleteHandler}>
                  Удалить
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  createCountry: (values) => dispatch(createCountry(values)),
  updateCountry: (data) => dispatch(updateCountry(data)),
  deleteCountry: (data) => dispatch(deleteCountry(data)),
});

export default connect(null, mapDispatchToProps)(CountryContent);
