import React from 'react';
import style from './Input.module.scss';
import cn from 'classnames';

const Input = ({ type = 'text', title, values, setValue, placeholder = 'Введите данные' }) => {
  return (
    <div>
      <span className={style.title}>{title}</span>
      <input
        className={style.input}
        placeholder={placeholder}
        type={type}
        value={values}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default Input;
