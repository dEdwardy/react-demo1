
import * as actionTypes from './actionTypes';

const initialState = {
  banners: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_BANNER:
      console.log(action)
      return {
        ...state,
        ...action
      };
    default:
      return state;
  }
}