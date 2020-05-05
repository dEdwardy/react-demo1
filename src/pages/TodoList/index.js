import React, { Component } from 'react';
import { Input, Button } from 'antd'
class TodoList extends Component{
    constructor(props){
        super(props)
        this.state = { 
            input:'',
            list : [
                {
                    id:0,content:'react'
                },
                {
                    id:1,content:'react-router'
                },
                {
                    id:2,content:'redux'
                },
                {
                    id:3,content:'react-redux'
                },
            ] 
        }
        this.handleClickAdd = this.handleClickAdd.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
    }
    handleClickAdd(){
        console.log(this.state.input)
        console.log([
            ...this.state.list,
            {
                id:this.state.list.length,
                content:this.state.input
            }

        ])
        const state = {
            ...this.state
        }
        state.list.push({
            id:state.list.length,
            content:state.input
        })
        this.setState({
            state
        })
    }
    handleInputChange(e){
        const target = e.target
        console.log(e.target.value)
        this.setState({
            [target.name]:target.value
        })
    }
    render(){
        return (
            <div className="todo-list-wrapper">
            <Input placeholder="Please Input" name="input" onChange={this.handleInputChange} value={this.state.input}  style={{ margin:'10px',width:'400px'}}/>
            <Button onClick={this.handleClickAdd} type="primary">add</Button>
            <div className="list" style={{position:'relative'}}>
                <ol>
            {
                this.state.list.map(item => {
                    return (
                        <li style={{ margin:'12px 0'}} key={item.id}><span>{item.content} </span> <Button size="small" style={{position:'absolute',left:'400px'}}>Finish</Button></li>
                    )
                })
            }
            </ol>
            </div>
            </div>
        )
    }
}
export default TodoList;