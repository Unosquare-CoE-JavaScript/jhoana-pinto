import classes from './Counter.module.css';
import { useDispatch, useSelector }from 'react-redux'//allows to select a part from the state managed by the store
import { counterActions } from '../store';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector( state => state.counter); // this function will be executed by redux
  const show = useSelector(state => state.showCounter);

  const incrementHandler = ()=>{
    //dispatch({type: 'increment'});  // an increment will be executed pure-react
    dispatch(counterActions.increment())  // with redux
  };

  const increaseHandler = ()=>{
    //dispatch({type: 'increase', val:5});  // an increase of n units will be executed pure-react
    dispatch(counterActions.increase(5))  // with redux - will be received as { type: UNIQUE_IDENTIFIER, payload:5}
  };


  const decrementHandler = () => {
    //dispatch({type: 'decrement'});  // a decrement will be executed pure-react
    dispatch(counterActions.decrement())  // with redux
  }
  
  const toggleCounterHandler = () => {
    //dispatch({type: 'toggle'}); //pure-react
    dispatch(counterActions.toggle())  // with redux
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
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
