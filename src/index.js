import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { Header } from './components/header/Header';
import { FrontPage } from './components/front-page/FrontPage';
import { TalentsAscend } from './components/talents-ascend/TalentsAscend';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <FrontPage />
    <TalentsAscend />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
