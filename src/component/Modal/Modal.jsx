import React from 'react';
import style from './Modal.module.scss';
import cn from 'classnames';

const Modal = ({ active, setActive, children }) => {
  return (
    <div
      className={cn(style.modal, {
        [style.active]: active,
      })}
      onClick={() => setActive(false)}>
      <div className={style.modal__content} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
