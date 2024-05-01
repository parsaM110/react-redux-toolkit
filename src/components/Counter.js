import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, logCount } from '../features/counter/counterSlice';

function Counter() {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch(); // get the dispatch function

    return (
        <div>
            {count.toString()}
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(logCount())}>log</button>
        </div>
    );
}

export default Counter;