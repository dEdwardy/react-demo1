import React, { Component } from 'react';
import { Input, Button } from 'antd'

class TodoListUI extends Component {
  render() {
    return (
      <div className="todo-list-wrapper">
        <Input placeholder="Please Input" onChange={this.handleInputChange} value={this.props.inputValue} style={{ margin: '10px', width: '400px' }} />
        <Button onClick={this.handleClickAdd} type="primary">add</Button>
        <div className="list" style={{ position: 'relative' }}>
          <ol>
            {
              this.props.todoList.map((item, index) => {
                return (
                  <li style={{ margin: '12px 0' }} key={index}><span>{item.content} </span>
                    <span style={{ position: 'absolute', left: '400px' }}>
                      <Button size="small" style={{ display: item.complete ? 'none' : '' }} onClick={() => this.props.handleToggle(index)} >完成</Button>
                      <Button size="small" style={{ display: item.complete ? '' : 'none' }} onClick={() => this.props.handleToggle(index)} >未完成</Button>
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
}

export default TodoListUI;