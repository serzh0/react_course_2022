import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import Lesson4 from './Lesson4';
import App from './App';
import HomeWork from './components/pages/HWLesson3Page';
// const element = <p className="title">Hello React</p>;
// const textElement = React.createElement('p', { className: 'title-element' }, 'Hi all!');
// const wrapper = React.createElement(
//   'div',
//   { style: { backgroundColor: 'bisque', padding: '50px' } },
//   textElement
// );
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <App />
      <HomeWork /> */}
      <Lesson4 />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
