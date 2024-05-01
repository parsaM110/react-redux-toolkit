//mutlitpe store is not recoomended in redux

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";  // for each slice you need to import reducer

const store = configureStore({
reducer : {
    counter : counterReducer //using the slice in store
}
})

export default store;