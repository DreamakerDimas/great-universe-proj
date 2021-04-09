import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createCountry, updateCountry, deleteCountry } from '../../../actions/map';
import CountryForm from '../CountryForm/CountryForm';
import styles from './CountryContent.module.sass';

const CountryContent = (props) => {
  const { country, createCountry, updateCountry, deleteCountry } = props;

  const createHandler = (values) => {
    createCountry(values);
  };
  
  const updateHandler = (values) => {
    const id = props.country.id;
    updateCountry({ id, updateData });
  }
  
  const deleteHandler = () => {
     const id = props.country.id;
     deletrCountry(id);
  }
  
  const [isEditMode, setEditMode] = useState(false);

  const switchMode = (mode) => {
    setEditMode(mode)
  } 

  const getInitValues = () => {
    const { id, ...restData } = country;
    return restData;
  } 

  return (
    <div>
    {isEditMode ? (<><CountryForm initValues={getInitValues()} actionFunc={updateHandler} /></>) : (<>
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
          {country.government_type && <div className="governmentType">
            Государственный строй: {country.government_type}
          </div>} 
          {country.description && <div className="zoneInfo">Описание: {country.description}</div>}
          {country.tags &&<div className="tags"></div>} 
          <div className="editBtn" onClick={() => setEditMode(true)} ></div>
          <div className="deleteBtn" onClick={deleteHandler}></div>
        </>
      )}
      </>)
    } 
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  createCountry: (values) => dispatch(createCountry(values)),
  updateCountry: (data) => dispatch(updateCountry(data)), 
  deleteCountry: (data) => dispatch(deleteCountry(data)),
});

export default connect(null, mapDispatchToProps)(CountryContent);
