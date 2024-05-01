import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, logCount, reset, incrementByAmount } from '../features/counter/counterSlice';

function Counter() {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch(); // get the dispatch function
    const [incrementAmount, setIncrementAmount] = useState(1);

    return (
        <div>
            {count.toString()}
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(logCount())}>log</button>
            <button onClick={() => dispatch(reset())}>reset</button>
            <button onClick={() => dispatch(incrementByAmount(5))}>increment by 5</button>
            <div style={{backgroundColor: "red"}}>
                <input value={incrementAmount} onChange={(e) => setIncrementAmount(e.target.value)} />
                <button onClick={() => dispatch(incrementByAmount(Number(incrementAmount)))}>increment by amount {incrementAmount}</button>
            </div>
        </div>
    );
}

export default Counter;