import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/counter';
const Counter = () => {
  const counter = useSelector(state => state.counter.counter);
  const show = useSelector(state => state.counter.showCounter);
  const dispatch = useDispatch();
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };
  
  const incrementCounterHandler = () => {
    dispatch(counterActions.increment());
  }
  const increaseCounterHandler = () => {
    dispatch(counterActions.increase(5));
  }
  const decrementCounterHandler = () => {
    dispatch(counterActions.decrement());
  }

  console.log(counter)
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div> }
      <div>
        <button onClick={incrementCounterHandler}>Increment</button>
        <button onClick={increaseCounterHandler}>Increment by 10</button>
        <button onClick={decrementCounterHandler}>Decrement</button>
        </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
