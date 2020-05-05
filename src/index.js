import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Route } from "react-router-dom"; // Browser history 是由 React Router 创建浏览器应用推荐的 history
import routes from "./routes"; // 引入路由配置
import * as App from "./routes";
import * as serviceWorker from "./serviceWorker";
import Login from "./pages/Login";
import List from "./pages/List";
import Home from "./pages/Layout";
ReactDOM.render(
  // <React.StrictMode>
  // <App />,
  <Router>
    <Route path="/" exact component={Login} />
    <Route path="/login" component={Login} />
    <Route path="/home" component={Home} />
    <Route path="/list" component={List} />
  </Router>,
  /* </React.StrictMode> */
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
