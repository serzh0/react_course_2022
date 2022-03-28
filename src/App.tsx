import React from 'react';
import './App.css';
import Counter from './Counter';
// import Form from './Form';
// import Input from './Input';
import NameComponent from './NameComponent';

const App = () => (
  <div className="wrapper">
    <h1>My friends:</h1>
    <NameComponent firstName="Alex" lastName="Yugin" />
    <NameComponent firstName="Max" lastName="Yugin" />
    <NameComponent firstName="Evgeniy " lastName="Kos." />
    <h1>My cart</h1>
    <Counter title="Potato" />
    <Counter title="Orange" />
    {/* <Form title="Auth">
      <Input />
      <Input />
    </Form> */}
    {/* <Form title="Reg">
      <Input />
      <Input />
      <Input />
      <Input />
    </Form>  */}
  </div>
);

export default App;
