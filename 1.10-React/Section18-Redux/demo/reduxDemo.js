const redux = require('redux');

const counterReducer = (state = { counter : 0}, action) => {   // reducer Function (should be a pure function)
    if(action.type === 'increment'){    // if increment is required it'll be executed
        return {
            counter: state.counter + 1,
        }
    }
    if(action.type === 'decrement'){    // if decrement is required it'll be executed
        return {
            counter: state.counter - 1,
        }
    }
    return state
}

const store = redux.createStore(counterReducer);  // store

const counterSubscriber = () =>{
    const latestState = store.getState(); //allways available on strore functions because of redux
    console.log(latestState);
}

store.subscribe(counterSubscriber); // only points to function because redux is in charge of its execution

store.dispatch({ type: 'increment'}); // an action is dispatched (actions should always be objects)
store.dispatch({ type: 'decrement'});