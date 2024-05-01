import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../features/counter/counterSlice';

function Counter() {
    const count = useSelector((state) => state.counter.count);
    return (
        <div>
            {count.toString()}
        </div>
    );
}

export default Counter;