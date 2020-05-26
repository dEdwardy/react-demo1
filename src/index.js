import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom"; // Browser history 是由 React Router 创建浏览器应用推荐的 history
import Login from "./pages/Login";
import List from "./pages/List";
import TodoList from "./pages/TodoList";
import Home from "./pages/Layout";
import App from './App'
import { Provider } from "react-redux";
import store from './store'
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  // <Router>
  //   <Route path="/" exact component={Login} />
  //   <Route path="/login" component={Login} />
  //   <Route path="/home" component={Home} />
  //   {/* <Route path="/todo" component={TodoList} /> */}
  //   <Route path="/list" component={List} />
  // </Router>,
  document.getElementById("root")
);
