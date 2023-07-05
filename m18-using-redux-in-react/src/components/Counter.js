// import a hook
// useSelector hook - automatically select a part state manage by the store
// connect function a wrapper around class compoenent to connect the class component to the stoore
import { useSelector } from 'react-redux';

import classes from './Counter.module.css';

const Counter = () => {

  const counter = useSelector(state => state.counter);

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{ counter }</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
