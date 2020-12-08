
import { SET_TODO } from '@actionTypes';

const initialState = {
  todo: []
};

export default (state=initialState, {type, payload}) => {
  switch (type) {
    case SET_TODO:

      return {
        ...state,
        todo: payload
      }

    default:
      return state
  }
}