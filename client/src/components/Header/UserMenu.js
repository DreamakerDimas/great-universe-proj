import React from 'react';

const UserMenu = ({ userData, logout }) => {
  return (
    <>
      <div>{userData.name}</div>
      <button onClick={logout}>Выйти</button>
    </>
  );
};

export default UserMenu;
