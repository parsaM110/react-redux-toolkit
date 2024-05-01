import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, logCount, reset, incrementByAmount } from '../features/counter/counterSlice';

function Counter() {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch(); // get the dispatch function

    return (
        <div>
            {count.toString()}
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(logCount())}>log</button>
            <button onClick={() => dispatch(reset())}>reset</button>
            <button onClick={() => dispatch(incrementByAmount(5))}>increment by 5</button>
        </div>
    );
}

export default Counter;