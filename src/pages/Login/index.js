import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import axios from '../../http'
import React,{ Component } from "react";
import "./index.scss";
class Login extends Component {
  constructor(props){
    super(props)
    this.onFinish = this.onFinish.bind(this)
  }
   onFinish (values) {
    console.log("Received values of form: ", values);
    let _this= this;
    axios.post('/api/login',values).then(res => {
        localStorage.setItem('user',JSON.stringify(values))
        console.log(res.data)
        this.props.history.push({pathname:'/home/todo'});
    })
  };

  render(){
    return (
      <div className="login-wrapper">
        <div className="login-form">
          <h2>React Demo1</h2>
          <Form
            name="normal_login"
            initialValues={{ remember: true }}
            onFinish={ this.onFinish}
          >
            <Form.Item
              name="username"
              rules={[{ required: true, message: "Please input your Username!" }]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: "Please input your Password!" }]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
              <a className="login-form-forgot" href="">
                Forgot password
              </a>
              &nbsp;
              Or <a href="">register now!</a>
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Log in
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
};
export default Login;
