import React from 'react';
import style from './CardList.module.scss';

const CardList: React.FC = ({ children }) => <ul className={style.list}>{children}</ul>;

export default CardList;
