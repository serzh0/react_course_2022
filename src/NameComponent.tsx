import React, { SyntheticEvent } from 'react';

type NameComponentPropsType = {
  firstName: string;
  lastName: string;
};

const NameComponent = (props: NameComponentPropsType) => {
  // const firstName = props.firstName;
  // const lastName = props.lastName;
  const { firstName, lastName } = props;
  const handler = (event: SyntheticEvent) => {
    console.log(event.currentTarget, 'currentTarget');
    console.log(event.target, 'target');
  };

  const mainHandler = (event: SyntheticEvent) => {
    console.log(event.currentTarget, 'currentTarget');
    console.log(event.target, 'target');
  };
  return (
    <div role="presentation" onClick={mainHandler} className="wrapper__name">
      <p>{firstName}</p>
      <p>{lastName}</p>
      <div>
        <button type="button" onClick={handler}>
          {' '}
          Info
        </button>
      </div>
    </div>
  );
};

export default NameComponent;
