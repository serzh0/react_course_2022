import React from 'react';
import style from './CardList.module.scss';

// type CardListPropsType = {
//   children: React.ReactNode;
// };

const CardList: React.FC = ({ children }) => <ul className={style.list}>{children}</ul>;

export default CardList;
