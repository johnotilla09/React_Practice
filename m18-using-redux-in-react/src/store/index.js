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

const initialAuthState = {
  isAuthenticated: false
};

// This slice is for authentication
const authSlice = createSlice({
  name: 'authhentication',
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = !state.isAuthenticated;
    }
  }
});

// create a store
// This is for one store to handle reducer
const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer }, // this is for many reducer in a big project
  //reducer: counterSlice.reducer // This for just single reducer that can be used in simple project
});

// Export our counter action
export const counterActions = counterSlice.actions;
// export authSlice actions
export const authActions = authSlice.actions;

// export store to use in components
export default store;

// reducer function
// const counterReducer = (state = initialState, action) => {
//     if (action.type === 'increment') {
//       return {
//         counter: state.counter + 1,
//         showCounter: state.showCounter
//       };
//     }

//     if (action.type === "increase") {
//         return {
//           counter: state.counter + action.amount,
//           showCounter: state.showCounter
//         };
//       }
        
//     if (action.type === "decrement") {
//       return {
//         counter: state.counter - 1,
//         showCounter: state.showCounter
//       };
//     }

//     if (action.type === 'toggle') {
//         return {
//             showCounter: !state.showCounter,
//             counter: state.counter
//         };
//     }

//     return state;
// }

// // creating a store
// const store = legacy_createStore(counterReducer);

// export default store;

// // import redux in react
// import { legacy_createStore } from "redux";

// // 014 Working with Multiple State Properties
// const initialState = {
//     counter: 0,
//     showCounter: true
// }

// // reducer function
// const counterReducer = (state = initialState, action) => {
//     if (action.type === 'increment') {
//       return {
//         counter: state.counter + 1,
//         showCounter: state.showCounter
//       };
//     }

//     if (action.type === "increase") {
//         return {
//           counter: state.counter + action.amount,
//           showCounter: state.showCounter
//         };
//       }
        
//     if (action.type === "decrement") {
//       return {
//         counter: state.counter - 1,
//         showCounter: state.showCounter
//       };
//     }

//     if (action.type === 'toggle') {
//         return {
//             showCounter: !state.showCounter,
//             counter: state.counter
//         };
//     }

//     return state;
// }

// // creating a store
// const store = legacy_createStore(counterReducer);

// export default store;

// This work in javascript
// // import redux
// const redux = require('redux');

// // reducer function
// const counterReducer = (state = { counter: 0 }, action) => {
//     if (action.type === 'increment') {
//         return {
//             counter: state.counter + 1
//         };
//     }

//     if (action.type === 'decrement') {
//         return {
//             counter: state.counter - 1
//         };
//     }

//     return state;
// };

// // creating a store
// const store = redux.legacy_createStore(counterReducer);

// //  the subscriber
// const subscriber = () => {
//     const latestState = store.getState();
//     console.log(latestState);
// };

// // calling the subcriber
// store.subscribe(subscriber);

// // dispatch
// store.dispatch({ type: 'increment' });
// store.dispatch({ type: 'decrement' });