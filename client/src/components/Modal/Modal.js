import React from 'react';
import styles from './Modal.module.sass';

const Modal = ({InnerElement, hideModalHandler}) => {
  return <div className={styles.mainContainer}>
    <div className={styles.contentContainer}>
      <div className={styles.closeButt} onClick={hideModalHandler}>X</div>
      {InnerElement && InnerElement}
    </div>
  </div>;
};

export default Modal;
