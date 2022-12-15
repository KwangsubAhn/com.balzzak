import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.less';
import reportWebVitals from './reportWebVitals';
import MyRouter from './router';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <MyRouter />
    // <React.StrictMode>       comment out StrictMode because ReactPlayer can't load file 
    //     <MyRouter />
    // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
