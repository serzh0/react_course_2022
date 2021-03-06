import React from 'react';

type CounterPropsType = {
  title: string;
};

const Counter = (props: CounterPropsType) => {
  const { title } = props;

  const [count, setCount] = React.useState(0);
  const [step, setStep] = React.useState(1);

  const addHandler = () => {
    if (count < 20) {
      setCount(count + step);
      // setCount((prev) => prev + 1);
      // setCount((prev) => prev + 1);
      // setCount((prev) => prev + 1);
      // setCount((prev) => prev + 1);
    }
  };

  const removeHandler = () => {
    if (count > 0) {
      setCount(count - step);
    }
  };
  return (
    <div className="card">
      <h5>{title}</h5>
      <p>{`${count} единиц`}</p>
      <div className="card__control">
        <button type="button" onClick={addHandler}>
          {`Добавить ${step} шт.`}
        </button>
        <button type="button" onClick={removeHandler}>
          {`Убрать ${step} шт.`}
        </button>
      </div>
      <div className="card__control">
        <button type="button" onClick={() => setStep(step + 1)}>
          Увеличить шаг
        </button>
        <button type="button" onClick={() => setStep(step - 1)}>
          Уменьшить шаг
        </button>
      </div>
    </div>
  );
};

export default Counter;
