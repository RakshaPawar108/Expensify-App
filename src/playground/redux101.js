import { createStore } from "redux";

// Action generators are functions that return action objects

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: "INCREMENT",
  incrementBy,
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: "DECREMENT",
  decrementBy,
});

const setCount = ({ setTo = 101 } = {}) => ({
  type: "SET",
  setTo,
});

const resetCount = ({ resetTo = 0 } = {}) => ({
  type: "RESET",
  resetTo,
});

// Reducers
// 1. Reducers are pure functions
// 2. Never change state or action

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + action.incrementBy,
      };

    case "DECREMENT":
      return {
        count: state.count - action.decrementBy,
      };

    case "RESET":
      return { count: action.resetTo };

    case "SET":
      return { count: action.setTo };

    default:
      return state;
  }
};

// REDUX store

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

// Actions - are an object that gets sent to the store
// I'd like to increment the count
// store.dispatch({
//   type: "INCREMENT",
//   incrementBy: 5,
// });

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());
// unsubscribe();

// I'd like to reset the count to 0

store.dispatch(resetCount());

// store.dispatch({
//   type: "RESET",
// });

// I'd like to decrement the count

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(decrementCount());

// store.dispatch({
//   type: "DECREMENT",
//   decrementBy: 10,
// });

// store.dispatch({
//   type: "DECREMENT",
// });

store.dispatch(setCount({ setTo: 1000 }));
store.dispatch(setCount());

// store.dispatch({
//   type: "SET",
//   count: 101,
// });
