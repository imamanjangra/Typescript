import { configureStore } from '@reduxjs/toolkit';
import CounterReducer from '../Features/Counter/CounterSlice.ts';
import ThemeReducer from "../Features/Theme/ThemeSlice.ts";
import TodoReducer from "../Features/Todo/TodoSlice.ts"
export const store = configureStore({
    reducer : {
        counter : CounterReducer,
        mode : ThemeReducer,
        todo : TodoReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


/* 
configureStore 
    -> it create the store for the application 

import counterReducer 
    -> it import the logial part of the store

export store 
    -> we export this to import in main.tsx file beacuse it is the main file 
    -> we import it into main and wrap like a provider to whole application 


Store

    -> The Store is the single source of truth.

    -> It contains all global application state.

    Example

    {
        counter:{
            value:0
        },

        auth:{
            user:null
        },

        theme:{
            theme:"light"
        }
    }

  reducer
        -> Combines all reducers (slices) into one Redux Store.
        -> Every key becomes a property inside the Redux state.
        -> Left side  = State key
        -> Right side = Reducer function

        Example

        reducer:{
            counter: counterReducer
        }
*/
