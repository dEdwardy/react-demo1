import React from 'react' // 引入react
import { Route } from 'react-router-dom' // 引入react路由
import Login from '../pages/Login' 
import List from '../pages/List' 
import Item from '../pages/Item' 

export default (
    <Route exact path="/" component={Login}>
        <Route path="login" component={Login}/>
        <Route path="posts" component={List}>
            <Route path=":id" component={Item}/>
        </Route>
    </Route>
)