import React, {useMemo} from 'react';
import styles from './ArrowIcon.module.sass';
import classNames from 'classnames';

/**
 * Arrow Icon Component
 * @param {boolean} isActive - Is active prop.
 * @return {JSX.Element}
 */
const ArrowIcon = ({isActive}) => {
  const arrowClass = classNames({
    [styles.default]: true,
    [styles.active]: isActive,
  });

  return <img className={arrowClass} src={'https://image.flaticon.com/icons/png/512/758/758645.png'} />;
};

export default ArrowIcon;
