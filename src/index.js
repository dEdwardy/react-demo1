import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Route } from "react-router-dom"; // Browser history 是由 React Router 创建浏览器应用推荐的 history
import routes from "./routes"; // 引入路由配置
import * as App from "./routes";
import Login from "./pages/Login";
import List from "./pages/List";
import TodoList from "./pages/TodoList";
import Home from "./pages/Layout";
import { Provider } from "react-redux";
ReactDOM.render(
  // <React.StrictMode>
  // <App />,
  <Router>
    <Route path="/" exact component={Login} />
    <Route path="/login" component={Login} />
    <Route path="/home" component={Home} />
    {/* <Route path="/todo" component={TodoList} /> */}
    <Route path="/list" component={List} />
  </Router>,
  /* </React.StrictMode> */
  document.getElementById("root")
);
