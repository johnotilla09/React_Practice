// import redux in react
import { legacy_createStore } from "redux";
import { createSlice } from "@reduxjs/toolkit";

// 014 Working with Multiple State Properties
const initialState = {
    counter: 0,
    showCounter: true
}

createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    increase(state, action) {
      state.counter + action.amount;
    },
    decrement(state) {
      state.counter--;
    },
    toggleCounter(state, action) {
      state.showCounter = !state.showCounter;
    }
  }
});

// reducer function
const counterReducer = (state = initialState, action) => {
    if (action.type === 'increment') {
      return {
        counter: state.counter + 1,
        showCounter: state.showCounter
      };
    }

    if (action.type === "increase") {
        return {
          counter: state.counter + action.amount,
          showCounter: state.showCounter
        };
      }
        
    if (action.type === "decrement") {
      return {
        counter: state.counter - 1,
        showCounter: state.showCounter
      };
    }

    if (action.type === 'toggle') {
        return {
            showCounter: !state.showCounter,
            counter: state.counter
        };
    }

    return state;
}

// creating a store
const store = legacy_createStore(counterReducer);

export default store;

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