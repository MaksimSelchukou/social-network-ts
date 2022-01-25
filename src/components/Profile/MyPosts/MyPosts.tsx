import React, {RefObject,Component} from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


import {RootStateType} from "../../../redux/state";
import {text} from "stream/consumers";

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


    let newPostElement:any = React.createRef()

    const addPost = () =>{
        let text = newPostElement.current.value;
        alert(text)

    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>

                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;