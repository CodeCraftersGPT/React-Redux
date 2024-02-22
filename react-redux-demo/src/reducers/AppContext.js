// define app context
// import the reducer and initial state defined in the reducer.js file
// define App Provider and supply state and dispatch to the children

import React, { createContext, useReducer } from 'react';
import reducer, { initialState } from './reducer';

const AppContext = createContext();

function AppProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <AppContext.Provider value={{ state, dispatch }}>
        {children}
        </AppContext.Provider>
    );
    }

export { AppContext, AppProvider };

