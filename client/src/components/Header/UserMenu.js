import React, {useState} from 'react';
import CONSTANTS from '../../lib/constants';
import styles from './UserMenu.module.sass';

const UserMenu = ({userData, logout}) => {
  const [isShowMenu, setShowMenu] = useState(false);

  const showMenuHandler = () => {
    setShowMenu(!isShowMenu);
  };

  const logoutHandler = () => {
    logout();
    window.localStorage.removeItem(CONSTANTS.ACCESS_TOKEN);
  };

  const renderMenu = () => (
    <ul className={styles.userMenu}>
      <li>Profile</li>
      <li>Articles</li>
      <li onClick={logoutHandler}>Выйти</li>
    </ul>
  );

  return (
    <li className={styles.userMenuContainer}>
      <div onClick={showMenuHandler}>
        <div>A</div>
        <span className={styles.userName}>{userData.login}</span>
      </div>
      {isShowMenu && renderMenu()}
    </li>
  );
};

export default UserMenu;
