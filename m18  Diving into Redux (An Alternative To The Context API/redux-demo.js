// import redux in javascript
const redux = require('redux');

// creating a reducer function
const counterReducer = (state = { counter: 0 }, action) => {

    // if this true, counter object in the state will be activated
    if (action.type === 'increment') {
        return {
            counter: state.counter + 1
        };
    }

    if (action.type === 'decrement') {
        return {
            counter: state.counter - 1
        };
    }

    // return the old state of that condition is not true.
    return state
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
store.dispatch({ type: 'increment' }); // this will incremenent the state.counter
store.dispatch({ type: 'decrement' }); // this will incremenent the state.counter