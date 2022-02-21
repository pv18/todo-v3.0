import React from 'react';
import {useAppDispatch, useAppSelector} from './hooks/redux';
import {counterSlice, decrement, increment} from './store/reducers/CounterSlice';

const App = () => {
    const {count} = useAppSelector(state => state.counter)
    const dispatch = useAppDispatch()
    return (
        <div style={{textAlign: 'center'}}>
            <h1>{count}</h1>
            <div>
                <button onClick={() => dispatch(increment())}>increment</button>
                <button onClick={() => dispatch(decrement())}>decrement</button>
            </div>
        </div>
    );
};

export default App;