import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { Input } from 'antd'

class Modal extends Component {
    constructor(props) {
        super(props)
        this.container = document.createElement('div');
        document.body.appendChild(this.container)
    }
    componentDidMount() {
        console.log(this.input)
        this.input.focus()
    }
    componentWillUnmount() {
        document.body.removeChild(this.container)
    }
    render() {
        return (
            <div>
                <Input ref={(input) => this.input = input}/>
            </div>
        )
        // return ReactDOM.createPortal(
        //     <div className="modal" style={{ backgroundColor:'#eee',position:'fixed',top:0,left:0,right:0,bottom:0 }} >
        //         <span className="close" onClick={this.props.onClose}>&times;</span>
        //         <div className="content">
        //             {this.props.children}
        //         </div>
        //     </div>,
        //     this.container
        // )
    }
}
export default Modal;