import { combineReducers } from 'redux';
import test from '@reducers/test';
import todo from '@reducers/todo';

export default combineReducers({
  test,
  todo
});