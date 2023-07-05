// import redux in react
import { legacy_createStore } from "redux";

// reducer function
const counterReducer = (state = { counter: 0 }, action) => {
    if (action.type === 'increment') {
      return {
        counter: state.counter + 1,
      };
    }
        
    if (action.type === "decrement") {
      return {
        counter: state.counter - 1,
      };
    }

    return state;
}

// creating a store
const store = legacy_createStore(counterReducer);

export default store;

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