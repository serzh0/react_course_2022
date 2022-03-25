import React from 'react';

const CounterHW = () => {
  const [count, setCount] = React.useState(0);

  const addHandler = () => {
    if (count < 20) {
      setCount(count + 1);
    }
  };

  const removeHandler = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <div className="card">
      <p>{`${count} единиц`}</p>
      <div className="card__control">
        <button type="button" onClick={addHandler}>
          Добавить шт.
        </button>
        <button type="button" onClick={removeHandler}>
          Убрать шт.
        </button>
      </div>
      <div>
        <button className="add-cart" type="button">
          Добавить в корзину
        </button>
      </div>
    </div>
  );
};

export default CounterHW;
