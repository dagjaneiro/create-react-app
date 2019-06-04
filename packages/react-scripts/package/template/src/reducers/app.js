import { UPDATE_NUMBER } from '../actions';

const defaultState = {
  number: 0,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case UPDATE_NUMBER:
      return { ...state, number: action.payload.number };
    default:
      return state;
  }
};

export const getNumber = state => state.number;
