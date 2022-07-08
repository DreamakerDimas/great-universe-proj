import React from 'react';
import classNames from 'classnames';

import styles from './ArrowIcon.module.sass';

interface ArrowIconProps {
  isActive: boolean;
}

/**
 * Arrow Icon Component
 * @param {boolean} isActive - Is active prop.
 * @return {JSX.Element}
 */
const ArrowIcon: React.FC<ArrowIconProps> = ({isActive}) => {
  const arrowClass = classNames({
    [styles.default]: true,
    [styles.active]: isActive,
  });

  return <img className={arrowClass} src={'https://image.flaticon.com/icons/png/512/758/758645.png'} />;
};

export default ArrowIcon;
