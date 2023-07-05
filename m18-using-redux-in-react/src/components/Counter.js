// import a hook
// useSelector hook - automatically select a part state manage by the store
// connect function a wrapper around class compoenent to connect the class component to the stoore
// dispatch hook
import { useSelector, useDispatch } from 'react-redux';

import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();

  // getting the state from store
  // This function setup a subscriber in redux automatically
  const counter = useSelector(state => state.counter);

  // increment handler to dispatch an action
  // counter increases by 1
  const incrementHandler = () => {
    dispatch({ type: 'increment' });
  };

  // decrement handler to dispatch an action
  // counter decreases by 1
  const decrementHandler = () => {
    dispatch({ type: 'decrement' });
  };

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{ counter }</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
