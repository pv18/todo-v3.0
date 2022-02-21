import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export type CounterSlice = {
    count: number
}

const initialState: CounterSlice = {
    count: 0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            console.log(state.count)
            state.count += 1
        },
        decrement: (state) => {
            console.log(state.count)
            state.count -= 1
        },
    }
})

export const {increment, decrement} = counterSlice.actions;


export default counterSlice.reducer;