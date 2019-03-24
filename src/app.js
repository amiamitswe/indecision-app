import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import '../node_modules/normalize.css/normalize.css';
import './styles/styles.scss';

const appRoot = document.getElementById('app');
ReactDOM.render(<IndecisionApp />, appRoot);


// // exemple for transform-class-properties
// class OldSyntax {
//     constructor(){
//         this.name = 'Amit';
//         this.printMyName = this.printMyName.bind(this);
//     }
//     printMyName() {
//         return `Hello I am ${this.name}`;
//     }
// }

// const oldSyntax = new OldSyntax();
// const myName = oldSyntax.printMyName;
// console.log(myName());

// // exemple for transform-class-properties
// class NewSyntax {
//     name = 'Abir';
//     printMyName2 = () => `Hello I am ${this.name}`;
// }

// const newSyntax = new NewSyntax();
// const myName2 = newSyntax.printMyName2;
// console.log(myName2());