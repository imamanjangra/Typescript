import { createSlice, type PayloadAction } from '@reduxjs/toolkit';


interface CounterState {
    value : number;
}

const initialState : CounterState = {
    value : 0,
}

const CounterSlice =  createSlice({
    name : "counter",
    initialState,
    reducers : {
        increment(state) {
            state.value++;
        },

        decrement(state){
            state.value--
        },
        
        incrementByAmount(state , action : PayloadAction<number>){
            state.value += action.payload;
        },

        reset(state){
            state.value = 0;
        }
    }
})

export const {
    increment , 
    decrement, 
    incrementByAmount,
    reset
} = CounterSlice.actions;

export default CounterSlice.reducer;


/*
Interface 
    -> Defines the shape (type) of the slice 
    -> TypeScript uses it for type checking

InitialState 
    -> Defines the initial state of this slice
    -> Redux uses it when the store is created
    -> Without it, Redux not know the initial value of this slice 

CreateSlice 
    -> it come with redux toolkit to create a slice 
    -> it need a three (3) items 
        1) name 
        2) initialvalue 
        3) reducers

Reducers 
    -> Contains functions that describe how the state should change
    -> it give two option 
        1)state
            -> Redux automatically passes the current slice state
            -> We use it to read or update the state

        2)action
            -> Redux automatically creates this object.
            -> It contains:
                type ->  counter/incrementByAmount somthing like this
               payload
                     -> Additional data sent with an action.
                     -> Example:
                                 dispatch(incrementByAmount(10))
                                 payload = 10


   
*/