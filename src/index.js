import React from 'react';
import ReactDOM from 'react-dom';
import ProgressBar from './ProgressBar';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import './Styles/main.scss';

ReactDOM.render(
        <>
        <h1 className="header">Progress Bar Demo</h1>
        <ProgressBar />
        </>
        , document.getElementById('root'));

