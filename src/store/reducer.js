import { ADD_ITEM, DEL_ITEM, CHANGE_INPUT, TOGGLE_ITEM, GET_LIST, SET_LIST } from './actionTypes'

const defaultState = {
  banners: [],
  inputValue: '',
  todoList: [
    {
      content: 'react', complete: false
    }
  ]
}

export default (state = defaultState, action) => {
  let newState;
  switch (action.type) {
    case CHANGE_INPUT:
      newState = JSON.parse(JSON.stringify(state))
      newState.inputValue = action.payload;
      return newState;
    case ADD_ITEM:
      newState = JSON.parse(JSON.stringify(state))
      newState.todoList.push({ content: newState.inputValue, complete: false })
      newState.inputValue = ''
      console.log(newState)
      return newState
    case TOGGLE_ITEM:
      newState = JSON.parse(JSON.stringify(state))
      newState.todoList[action.payload].complete = !newState.todoList[action.payload].complete
      newState.todoList.sort((a, b) => a.complete - b.complete)
      return newState;
    case DEL_ITEM:
      newState = JSON.parse(JSON.stringify(state))
      let idx = newState.todoList.findIndex(item => item.content = action.payload.content)
      newState.todoList.splice(idx, 1)
      return newState
    case GET_LIST:
      return {
        ...state,
        todoList: action.data
      }
    case SET_LIST:
      console.log('set-list')
      console.log(action.data)
      return {
        ...state,
        banner: action.data
      }
    default:
      return state
  }
}