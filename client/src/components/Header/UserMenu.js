import React from 'react';
import CONSTANTS from '../../lib/constants';

const UserMenu = ({ userData, logout }) => {
  const logoutHandler = () => {
    logout();
    window.localStorage.removeItem(CONSTANTS.ACCESS_TOKEN);
  };

  return (
    <>
      <div>{userData.name}</div>
      <button onClick={logoutHandler}>Выйти</button>
    </>
  );
};

export default UserMenu;
