import React from 'react';
import s from './Post.module.css';

type propsPostType={
    message:string
    likesCount:string
}

const Post = (props:propsPostType) => {

    return (
        <div className={s.item}>
            <img src='http://archilab.online/images/1/123.jpg' />
            { props.message }
            <div>
                <span>like</span> { props.likesCount }
            </div>
        </div>
    )
}

export default Post;