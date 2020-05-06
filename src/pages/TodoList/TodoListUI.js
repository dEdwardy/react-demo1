import React from 'react';
import { Input, Button } from 'antd'

const TodoListUI = (props) => {
  return (
    <div className="todo-list-wrapper">
      <Input placeholder="Please Input" onChange={props.handleInputChange} value={props.inputValue} style={{ margin: '10px', width: '400px' }} />
      <Button onClick={props.handleClickAdd} type="primary">add</Button>
      <div className="list" style={{ position: 'relative' }}>
        <ol>
          {
            props.todoList.map((item, index) => {
              return (
                <li style={{ margin: '12px 0' }} key={index}><span>{item.content} </span>
                  <span style={{ position: 'absolute', left: '400px' }}>
                    <Button size="small" style={{ display: item.complete ? 'none' : '' }} onClick={() => props.handleToggle(index)} >完成</Button>
                    <Button size="small" style={{ display: item.complete ? '' : 'none' }} onClick={() => props.handleToggle(index)} >未完成</Button>
                  </span>
                </li>
              )
            })
          }
        </ol>
      </div>
    </div >
  )
}

export default TodoListUI;