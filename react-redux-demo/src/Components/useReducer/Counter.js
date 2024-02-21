// defint counter component which uses useReducer hook

import React, { useReducer } from "react";
import counterReducer from "./CounterReducer";

function Counter() {
    const [count, dispatch] = useReducer(counterReducer, 0);
    
    return (
        <div>
        <h1>Count: {count}</h1>
        <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
        <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
        </div>
    );
    }

export default Counter;

