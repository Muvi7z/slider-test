import React, { useEffect, useRef } from 'react';
import style from './Slider.module.scss';
import cn from 'classnames';
import { ReactComponent as ArrowLeft } from '../../img/arrow-left.svg';
import { ReactComponent as ArrowRight } from '../../img/arrow-right.svg';
import { useDispatch, useSelector } from 'react-redux';
import { decPosition, incPosition } from '../../redux/slider/slice';

const Slider = () => {
  const slider = useRef();
  const { items, position } = useSelector((state) => state.slider);
  const dispatch = useDispatch();

  useEffect(() => {
    let slider = setInterval(() => nextHandler(), 5000);
    return () => {
      clearInterval(slider);
    };
  }, [position]);

  useEffect(() => {
    slider.current.style = `transform: translateX(-${position * 100}%)`;
  }, [position]);

  const nextHandler = () => {
    dispatch(incPosition());
  };
  const prevHandler = () => {
    dispatch(decPosition());
  };

  return (
    <div className={style.slider}>
      <div className={style.slider__track}>
        <div className={style.slider__win} ref={slider}>
          {items.map((elem) => {
            return (
              <div key={elem.name} className={style.slider__item}>
                <img alt="image1" src={elem.url}></img>
              </div>
            );
          })}
        </div>
      </div>
      <button className={cn(style.slider__button, style.slider__button_prev)} onClick={prevHandler}>
        <ArrowLeft />
      </button>
      <button className={cn(style.slider__button, style.slider__button_next)} onClick={nextHandler}>
        <ArrowRight />
      </button>
    </div>
  );
};

export default Slider;
