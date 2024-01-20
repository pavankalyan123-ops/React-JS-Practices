import React from 'react';
import Hoc from './Hoc';

const Counter = (props) => {
  return (
    <div>
        <h3>Counter Example</h3>
        <button onClick={props.increment}>Counter {props.count}</button>
    </div>
  )
}

export default Hoc(Counter)