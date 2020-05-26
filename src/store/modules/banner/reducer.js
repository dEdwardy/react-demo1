
import * as actionTypes from './actionTypes';

const initialState = {
  banners: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_BANNER:
      return {
        ...state,
        banners: action.banner
      };
    default:
      return state;
  }
}