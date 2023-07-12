// import redux in react
// import { legacy_createStore } from "redux";
// This is a function in redux
import { createSlice,configureStore } from "@reduxjs/toolkit";

// 014 Working with Multiple State Properties
const initialCounterState = {
    counter: 0,
    showCounter: true,
}

// This created Slice is for counter
const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    decrement(state) {
      state.counter--;
    },
    toggleCounter(state, action) {
      state.showCounter = !state.showCounter;
    }
  }
});

// create a store
// This is for one store to handle reducer
// const store = configureStore({
//   //reducer: { counter: counterSlice.reducer, auth: authSlice.reducer }, // this is for many reducer in a big project
//   reducer: counterSlice.reducer // This for just single reducer that can be used in simple project
// });

// Export our counter action
export const counterActions = counterSlice.actions;
// export authSlice actions
// export const authActions = authSlice.actions;

// export store to use in components
export default counterSlice.reducer;