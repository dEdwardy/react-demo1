import React from 'react';
import { Button } from 'antd'

function PostItem(props) {
    const handleClick = () => {
        props.onVote(props.post.id)
    }
    const { post } = props;
    return (
        <li>
            <div>
                {post.title}
            </div>
            <div>
                创建人:<span>{post.author}</span>
            </div>
            <div>
                创建时间:<span>{post.date}</span>
            </div>
            <div>
                <Button onClick={handleClick}>点赞</Button>
                    &nbsp;
                    <span>
                    {post.vote}
                </span>
            </div>
        </li>
    )

}
export default PostItem;