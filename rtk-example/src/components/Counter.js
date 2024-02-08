import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { increment,decrement,reset,incrementByValue } from '../redux/CounterSlice';
import {Button} from 'antd'

const Counter = () => {
    const count=useSelector(state=>state.counter.count)
    const dispatch=useDispatch();
  return (
    <div>
        <h3>Count:{count}</h3>
        <Button type='primary' onClick={()=>dispatch(increment())}>Increment</Button>
        <Button onClick={()=>dispatch(reset())}>Reset</Button>
        <Button onClick={()=>dispatch(decrement())}>Decrement</Button>
        <Button onClick={()=>dispatch(incrementByValue(50))}>IncrementBy50</Button>
    </div>
  )
}

export default Counter