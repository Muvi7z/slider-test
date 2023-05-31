import React, { useState } from 'react';
import style from './TableModal.module.scss';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import { useDispatch } from 'react-redux';
import { addRows } from '../../redux/table/slice';

const TableModal = ({ modalActive, setModalActive, ...props }) => {
  const [name, setName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const columnHandler = (val) => {
    setName(val);
  };
  const addRowHandle = () => {
    dispatch(
      addRows({
        name: name,
        birthDate: birthDate,
        phone: phone,
        email: email,
      }),
    );
    cancelHandler();
  };

  const cancelHandler = () => {
    setModalActive(false);
    setName('');
  };

  return (
    <div className={style.table_modal}>
      <div className={style.table_modal__form}>
        <Input title="ФИО" values={name} setValue={columnHandler} />
        <Input
          type="date"
          title="Дата рождения"
          values={birthDate}
          setValue={(val) => setBirthDate(val)}
        />
        <Input title="Телефон" values={phone} setValue={(val) => setPhone(val)} />
        <Input title="Почта" values={email} setValue={(val) => setEmail(val)} />
      </div>
      <div className={style.table_modal__controll}>
        <Button text="Добавить" onClickHandler={() => addRowHandle()} />
        <Button text="Отмена" onClickHandler={() => cancelHandler()} />
      </div>
    </div>
  );
};

export default TableModal;
