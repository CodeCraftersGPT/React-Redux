// define counter reducer for useReducer whihc has increment,decrament and reset action on default throw error

function counterReducer(state, action) {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return 0;
    default:
      throw new Error();
  }
}

export default counterReducer;
