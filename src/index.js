import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import '../node_modules/normalize.css/normalize.css';
import './styles/styles.scss';

const appRoot = document.getElementById('root');
ReactDOM.render(<IndecisionApp />, appRoot);