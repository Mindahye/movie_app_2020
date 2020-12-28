import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App /> 
    {/* 
    App / <이거를 컴포넌트라고 부름 컴포넌트는 HTML을 반환하는 함수 (App.js의 App 함수!) 
    JSX  리액트에 특화된 개념. 자바스크립트에서 리액트 쓸때 사용하는..
    */}
  </React.StrictMode>,
  document.getElementById('potato')
);

