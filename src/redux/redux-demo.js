// import redux from 'redux';
const redux = require('redux');

export const actions = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  ADD: 'ADD',
};

export const add = amount => ({
  type: actions.ADD,
  payload: amount,
});

export const reducer = (state = 0, action) => {
  switch (action.type) {
    case actions.INCREMENT:
      return state + 1;
    case actions.DECREMENT:
      return state - 1;
    case actions.ADD:
      return state + action.payload;
    default:
      return state;
  }
};

export const getValue = state => state;

const store = redux.createStore(reducer, 0);

store.subscribe(() => {
  console.log('Dispatch! ', store.getState());
});

store.dispatch(add(5));
store.dispatch(add(-5));
store.dispatch(add(5));
