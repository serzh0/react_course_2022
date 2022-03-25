import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import HomeWork from './HomeWork';

// const element = <p className="title">Hello React</p>;
// const textElement = React.createElement('p', { className: 'title-element' }, 'Hi all!');
// const wrapper = React.createElement(
//   'div',
//   { style: { backgroundColor: 'bisque', padding: '50px' } },
//   textElement
// );
ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <HomeWork /> */}
  </React.StrictMode>,
  document.getElementById('root')
);
