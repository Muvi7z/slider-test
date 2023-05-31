import React from 'react';
import style from './Table.module.scss';
import cn from 'classnames';
import { useSelector } from 'react-redux';

const Table = () => {
  const { rows } = useSelector((state) => state.table);
  return (
    rows.length !== 0 && (
      <table className={style.table}>
        <thead>
          <tr className={style.table__row}>
            <th className={style.table__header}>ID</th>
            <th className={style.table__header}>ФИО</th>
            <th className={style.table__header}>Дата рождения</th>
            <th className={style.table__header}>Телефон</th>
            <th className={style.table__header}>Почта</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr className={style.table__row}>
              <td className={style.table__cell}>{i}</td>
              <td className={style.table__cell}>{row.name}</td>
              <td className={style.table__cell}>{row.birthDate}</td>
              <td className={style.table__cell}>{row.phone}</td>
              <td className={style.table__cell}>{row.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  );
};

export default Table;
