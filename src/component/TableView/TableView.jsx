import React, { useState } from 'react';
import style from './TableView.module.scss';
import cn from 'classnames';
import Button from '../UI/Button/Button';
import Modal from '../Modal/Modal';
import TableModal from '../TableModal/TableModal';
import Table from '../Table/Table';
import { useSelector } from 'react-redux';

const TableView = () => {
  const [modalActive, setModalActive] = useState(false);
  const { rows } = useSelector((state) => state.table);

  return (
    <div className={cn(style.table_view)}>
      <div className={cn(style.table_view__container)}>
        <div className={cn(style.table_view__controll)}>
          <Button text="Добавить строку" onClickHandler={() => setModalActive(true)} />
        </div>
        <div className={cn(style.table_view__content)}>
          <div className={style.table_view__scroll}>
            <Table />
          </div>
        </div>
        <Modal active={modalActive} setActive={setModalActive}>
          <TableModal modalActive={modalActive} setModalActive={setModalActive} />
        </Modal>
        <div className={style.table_view__info}>Итого: {rows.length}</div>
      </div>
    </div>
  );
};

export default TableView;
