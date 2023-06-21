import React from 'react';
import './App.css';
import ClassComponent from './components/class-component/class-component';
import FunctionComponent from './components/function-component/function-component';

function App() {
  return (
    <div className="App">
      <p>Maintaining the state of a component in React differs depending on  whether or not you're using a class commponent or a function component.
        In this lab, let's explore how to handle states in both types of components. Take a look at the TSX file for each component.
      </p>

      <div className="section-container">
        <h2>Using state with CLASS components.</h2>

        <ClassComponent myStringProp={"Irrelevant prop data to demonstrate you can have props AND state"}></ClassComponent>
      </div>

      <div className="section-container bottom-gap">
        <h2>Using state with FUNCTION components.</h2>

        <FunctionComponent myStringProp={"Irrelevant prop data to demonstrate you can have props AND state"}></FunctionComponent>
      </div>

      <div>
        <a href="https://react.dev/learn/managing-state">https://react.dev/learn/managing-state</a>
      </div>
    </div>
  );
}

export default App;
