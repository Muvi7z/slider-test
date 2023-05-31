import React from 'react';
import style from './Button.module.scss';
import cn from 'classnames';

const Button = ({ className, onClickHandler, appearance, text, ...props }) => {
  return (
    <button
      className={cn(className, style.button, {
        [style.button_primary]: appearance === 'primary',
        [style.button_outline]: appearance === 'outline',
      })}
      onClick={onClickHandler}
      {...props}
      >
      {text}
    </button>
  );
};

export default Button;
