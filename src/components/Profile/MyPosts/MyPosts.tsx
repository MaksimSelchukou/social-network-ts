import React, {RefObject, Component} from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


import {RootStateType} from "../../../redux/state";
import {text} from "stream/consumers";

type myPostType = {
    state: RootStateType
    // addPost: (postMessage: string) => void
    dispatch: any
}

const MyPosts = (props: myPostType) => {

    // const postData =[
    //     {id:1,message:"Hi, how are you?",likesCount:"0"},
    //     {id:2,message:'Its my first post',likesCount:"23"},
    // ]

    let postsElements = props.state.profilePage.post.map(m => {
        return (
            <Post message={m.message} likesCount={m.likesCount}/>
        )
    })


    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        // debugger
        if (newPostElement.current) {
            let text = newPostElement.current.value;
            props.dispatch({type: "ADD-POST", postMessage:text})
            newPostElement.current.value = ""
        }


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