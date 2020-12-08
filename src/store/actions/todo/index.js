import { SET_TODO } from '@actionTypes';

import { fetchTodo as  fetchTodoApi } from '@api/todo';

const setTodo = list => ({
  type: SET_TODO,
  payload: list
});

export const fetchTodo = () => async dispatch => {
  try {
    const {data} = await fetchTodoApi();
    dispatch(setTodo(data));
  } catch (error) {
    console.log(error);
  }
}
