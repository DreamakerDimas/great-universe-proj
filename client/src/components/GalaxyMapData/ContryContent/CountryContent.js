import React from 'react';
import { connect } from 'react-redux';
import { createCountry } from '../../../actions/map';
import CountryForm from '../CountryForm/CountryForm';
import styles from './CountryContent.module.sass';

const CountryContent = (props) => {
  const { country, createCountry } = props;

  const createHandler = (values) => {
    createCountry(values);
  };

  return (
    <div>
      {country.isEmpty ? (
        <>
          <CountryForm
            initValues={{ zone_name: country.zone_name }}
            actionFunc={createHandler}
          />
        </>
      ) : (
        <>
          <div className="contryHeader">
            {country.emblem_img && (
              <div className="zoneImage">
                <img src={country.emblem_img} alt="emblem" />
              </div>
            )}
            <div className="zoneName">Наименование: {country.disp_name}</div>
          </div>
          <div className="governmentType">
            Государственный строй: {country.government_type}
          </div>
          <div className="zoneInfo">Описание: {country.description}</div>
          <div className="edit"></div>
          <div className="links"></div>
        </>
      )}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  createCountry: (values) => dispatch(createCountry(values)),
});

export default connect(null, mapDispatchToProps)(CountryContent);
