import { createAction } from 'redux-actions';

export const UPDATE_NUMBER = 'UPDATE_NUMBER';

export const updateNumber = createAction(UPDATE_NUMBER, number => ({
  number,
}));
