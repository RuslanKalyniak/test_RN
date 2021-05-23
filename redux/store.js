import {createStore} from 'redux';

const ADD = 'ADD';

export const actions = {
  addGood: good => ({type: ADD, good}),
};

const initiaValue = {
  items: false,
};

const reducer = (state = initiaValue, action) => {
  switch (action.type) {
    case ADD:
      return {
        items: action.good,
      };

    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
