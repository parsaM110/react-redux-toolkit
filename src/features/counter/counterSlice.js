import { createSlice } from "@reduxjs/toolkit";

const initialState = {  
    count : 40
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment : (state) => { 
            // so icrement is a action 
            // and the state.count +=1  is the reducer
            state.count += 1
        },
        logCount : (state) => {
            console.log(state.count)
        },
        decrement : (state) => {
            state.count -= 1
        },
        reset: (state) => {
            state.count = 0
        },
        incrementByAmount: (state, action) => {
            state.count += action.payload;
        }
    }
});

export const { increment, logCount, decrement, reset, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;