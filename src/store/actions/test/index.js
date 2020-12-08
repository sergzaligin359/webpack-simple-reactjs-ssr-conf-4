import { SET_TEST } from '@actionTypes';

export const setTest = text => ({
  type: SET_TEST,
  payload: text
});