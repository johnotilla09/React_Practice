// import component to use class based component
import { Component } from 'react';

// import a hook
// useSelector hook - automatically select a part state manage by the store
// connect function a wrapper around class compoenent to connect the class component to the stoore
// dispatch hook
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/counter-slice';

import classes from './Counter.module.css';

// This is a functional component
const Counter = () => {
  const dispatch = useDispatch();

  // getting the state counter from store
  // This function setup a subscriber in redux automatically
  const counter = useSelector(state => state.counter);
  // getting the state showCounter from store
  // This function setups a subscriber in the redux automatically
  const showCounter = useSelector(state => state.showCounter);

  // increment handler to dispatch an action
  // counter increases by 1
  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  // increment handler to dispatch an action
  // counter increase by 5 Handler
  const increaseHandler = () => {
    dispatch(counterActions.increase(5)); // Create { type: SOME UNIQUE IDENTIFIER, payload: }
  };

  // decrement handler to dispatch an action
  // counter decreases by 1
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      { showCounter &&  <div className={classes.value}>{ counter }</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

//  This is for classed based components
// class Counter extends Component {
//   incrementHandler() {
//     this.props.increment();
//   }

//   decrementHandler () {
//     this.props.decrement();
//   }

//   toggleCounterHandler () {

//   }

//   render () {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler.bind(this)}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// // This supply the state in the class
// const mapsStateToProps = (state) => {
//   return {
//     counter: state.counter
//   };
// };

// // This responsible to dispatch action from the class
// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({ type: 'increment' }),
//     decrement: () => dispatch({ type: 'decrement' }),
//   };
// };

// connect also called a higher order component
// export default connect(mapsStateToProps, mapDispatchToProps)(Counter);
// export default Counter;
