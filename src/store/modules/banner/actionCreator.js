import * as actionTypes from './actionTypes';

export function getBanners() {
  return {
    type: actionTypes.GET_BANNER
  }
}
export const setListAction = data => ({
  type: actionTypes.SET_BANNER,
  data
})