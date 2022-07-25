import {createStore} from 'redux';
import {createSlice, configureStore } from '@reduxjs/toolkit'

const initialState = {counter:0, showCounter:true}

const counterSlice = createSlice({   // creating a slice of the global space
    name: 'counter',    //identifier for this slice
    initialState,   
    reducers: { //object of all reducers that this slice needs
        increment(state){   // here we're allowed to mutate objects
            state.counter++;
        },
        decrement(state){
            state.counter--;
        },
        increase(state, action){    // here we require action so we can check the val property of if
            state.counter += action.payload;
        },
        toggle(state){
            state.counter= !state.counter;
        },
    }
})

// This is commented because now we'll use redux 
/* const counterReducer = (state = initialState, action) =>{
    if(action.type === 'increment'){    // if increment is required it'll be executed
        // in redux existing state must NEVER be muted, always return a new copy
        return {    // states in redux will overwrite the current state
            counter: state.counter + 1,
            showCounter: state.showCounter
        }
    }
    if(action.type === 'increase'){    // if increment is required it'll be executed
        console.log(action.val)
        return {
            counter: state.counter + action.val,
            showCounter: state.showCounter
        }
    }
    if(action.type === 'decrement'){    // if decrement is required it'll be executed
        return {
            counter: state.counter - 1,
            showCounter: state.showCounter
        }
    }
    if(action.type === 'toggle'){
        return {
            showCounter: !state.showCounter,
            counter: state.counter
        }
    }
    return state
} 
export const store = createStore(counterReducer);
*/

// actions is an object full of keys that correspond to the actions or functions declared in createSlice
export const counterActions = counterSlice.actions;

// configureStore creates a store but it makes easier to merge multiple reducers into one reducer
export const store = configureStore({
    // it can be only one reducer and it'll be used as a global reducer, if more are needed they must be declared inside an object
    reducer: counterSlice.reducer,
    
});