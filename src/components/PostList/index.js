import React, { Component } from 'react';
import PostItem from '../Post'

const data = [{
    title: '123',
    author: '321',
    date: '2018-2-14'
}, {
    title: '123',
    author: '321',
    date: '2018-2-14'
}]
class PostList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: []
        }
        this.timer = null;
        this.handleClick = this.handleClick.bind(this)
    }
    componentDidMount() {
        //模拟异步从服务端获取数据
        this.timer = setTimeout(() => {
            this.setState({
                posts: [
                    {
                        id: 0, title: '123', author: 'sss', date: '2018-9-15',vote:0
                    },
                    {
                        id: 1, title: '123', author: 'sss', date: '2018-9-15',vote:8
                    }
                ]
            })
        }, 1000);
    }
    componentWillUnmount() {
        if (this.timer) clearTimeout(this.timer)
    }
    handleClick(id) {
        const posts = this.state.posts.map(item => {
            const newItem = item.id === id ? { ...item, vote: ++item.vote } : item
            return newItem
        })
        this.setState({
            posts
        })
    }
    render() {
        return (
            <div>
                帖子列表:
                <ul>
                    {
                        this.state.posts.map(item => <PostItem
                            post={item}
                            key={item.id}
                            onVote={this.handleClick}/>)
                    }
                </ul>
            </div>
        )
    }
}
export default PostList;