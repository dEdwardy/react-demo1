
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
      };
    case actionTypes.SET_BANNER:

      return {
        ...state,
        banners: action.data
      };
    default:
      return state;
  }
}