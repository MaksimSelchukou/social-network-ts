import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

import {RootStateType} from "../../../redux/state";

type myPostType = {
    state:RootStateType
}

const MyPosts = (props:myPostType) => {

    // const postData =[
    //     {id:1,message:"Hi, how are you?",likesCount:"0"},
    //     {id:2,message:'Its my first post',likesCount:"23"},
    // ]

    let postsElements = props.state.profilePage.post.map(m => {
        return (
            <Post message={m.message} likesCount={m.likesCount}/>
        )
    })

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div><textarea></textarea></div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>

                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;