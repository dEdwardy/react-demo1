// 必要的redux方法
import { createStore, applyMiddleware, compose } from 'redux';
// 我的一个reducer
import reducer from './reducer'
// redux-thunk是请求的中间件，当我们在讲action部分会提到它
// import thunk from 'redux-thunk'

//增强函数 一步方法，执行两个函数
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
//   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

//中间件 
// const enhancer = composeEnhancers(applyMiddleware(thunk));

// 整合store
const store = createStore(
  reducer, /* preloadedState, */
  // enhancer
);

// 导出
export default store;
