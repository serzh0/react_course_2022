import React from 'react';
import Card from './Card';
import CardList from './CardList';
import CounterHW from './CounterHW';
import './HomeWork.css';

const HomeWork = () => (
  <div className="wrapper__homework">
    <h1>Homework</h1>
    <CardList>
      <Card title="Греча" imgSource="/images/grecha.jpg" price="180" weight="800">
        <CounterHW />
      </Card>
      <Card title="Рис" imgSource="/images/rise.jpeg" price="160" weight="1500">
        <CounterHW />
      </Card>
      <Card title="Сахар" imgSource="/images/sahar.jpg" price="90" weight="1000">
        <CounterHW />
      </Card>
      <Card title="Горох" imgSource="/images/goroh.jpg" price="150" weight="800">
        <CounterHW />
      </Card>
    </CardList>
  </div>
);

export default HomeWork;
