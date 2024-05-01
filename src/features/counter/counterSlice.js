import { createSlice } from "@reduxjs/toolkit";

const initialState = {  
    count : 0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment : (state) => {
            state.count += 1
        },
        logCount : (state) => {
            console.log(state.count)
        },
        decrement : (state) => {
            state.count -= 1
        },

    }
});

export const { increment, logCount, decrement } = counterSlice.actions;

export default counterSlice.reducer;