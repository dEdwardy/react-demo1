import { ADD_ITEM, TOGGLE_ITEM, DEL_ITEM, CHANGE_INPUT,GET_LIST,GET_MY_LIST,SET_LIST } from './actionTypes'
import store from '../store'
import axios from '../http';

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
export const getListAction = (data) =>({
  type:GET_LIST,
  data
})
export const setListAction = data = ({
  type:SET_LIST,
  data
})
//redux-thunk 中间件返回function action 一般不能返回funciton 只能返回obj
export const getTodoList = () => {
  return (dispatch) => {
     axios.get('/api/list').then(res => {
       const data = res.data.data;
       const action = getListAction(data)
       dispatch(action)
     })
  }
}

export const getMyListAction = () => ({
  type:GET_MY_LIST
})