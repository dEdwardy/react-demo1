import React, { Component } from 'react';
import store from '../../store'
import { ADD_ITEM, DEL_ITEM, CHANGE_INPUT, TOGGLE_ITEM } from '../../store/actionTypes'
import { getTodoList,addItem, delItem, toggleItem, inputChange,getMyListAction } from '../../store/actionCreators'
import TodoListUI from './TodoListUI'
class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState()
        this.handleClickAdd = this.handleClickAdd.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleToggle = this.handleToggle.bind(this)
        this.storeChange = this.storeChange.bind(this)
        store.subscribe(this.storeChange)
    }
    componentDidMount() {
        //redux-thunk
        // const action = getTodoList();
        // store.dispatch(action);

        //redux-saga
        const action = getMyListAction()
        store.dispatch(action)
    }
    storeChange() {
        this.setState(store.getState())
    }
    handleToggle(index) {
        const action = toggleItem(index)
        store.dispatch(action)
    }
    handleClickAdd() {
        if (!this.state.inputValue) return
        const action = addItem(this.state.inputValue)
        store.dispatch(action)
    }
    handleInputChange(e) {
        console.log(e)
        const action = inputChange(e.target.value)
        store.dispatch(action)
    }
    render() {
        return <TodoListUI
            inputValue={this.state.inputValue}
            todoList={this.state.todoList}
            handleClickAdd= {this.handleClickAdd}
            handleInputChange={this.handleInputChange}
            handleToggle={this.handleToggle}
        />
        // return (
        //     <div className="todo-list-wrapper">
        //         <Input placeholder="Please Input" onChange={this.handleInputChange} value={this.state.inputValue} style={{ margin: '10px', width: '400px' }} />
        //         <Button onClick={this.handleClickAdd} type="primary">add</Button>
        //         <div className="list" style={{ position: 'relative' }}>
        //             <ol>
        //                 {
        //                     this.state.todoList.map((item, index) => {
        //                         return (
        //                             <li style={{ margin: '12px 0' }} key={index}><span>{item.content} </span>
        //                                 <span style={{ position: 'absolute', left: '400px' }}>
        //                                     <Button size="small" style={{ display: item.complete ? 'none' : '' }} onClick={this.handleToggle.bind(this, index)} >完成</Button>
        //                                     <Button size="small" style={{ display: item.complete ? '' : 'none' }} onClick={this.handleToggle.bind(this, index)} >未完成</Button>
        //                                 </span>
        //                             </li>
        //                         )
        //                     })
        //                 }
        //             </ol>
        //         </div>
        //     </div >
        // )
    }
}
export default TodoList;