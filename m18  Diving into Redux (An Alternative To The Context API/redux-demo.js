// import redux in javascript
const redux = require('redux');

// creating a reducer function
const counterReducer = (state = { counter: 0 }, action) => {
    return {
        counter: state.counter + 1
    };
};

// creating a store
 const store = redux.legacy_createStore(counterReducer);

//  subscriber
const counterSubscriber = () => {
    const latestState = store.getState(); // getting the latest state after the action
    console.log(latestState);
};

// Tell redux the existense the of the subscriber
store.subscribe(counterSubscriber);

// dispatch an action
store.dispatch({ type: 'increment' });