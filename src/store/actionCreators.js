import { ADD_ITEM, TOGGLE_ITEM, DEL_ITEM, CHANGE_INPUT } from './actionTypes'
import store from '../store'

export const addItem = (payload) => {
  return {
    type: ADD_ITEM,
    payload
  }
}
export const toggleItem = (payload) => {
  return {
    type: TOGGLE_ITEM,
    payload
  }
}

export const delItem = (payload) => {
  return {
    type: DEL_ITEM,
    payload
  }
}
export const inputChange = (payload) => {
  return {
    type: CHANGE_INPUT,
    payload
  }
}