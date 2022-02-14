import React, {RefObject, Component} from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


import {ActionsTypes, RootStateType} from "../../../redux/state";

type myPostType = {
    state: RootStateType
    dispatch: (action: ActionsTypes) => void
    addPost: (text:any) => void
}

const MyPosts = (props: myPostType) => {
    let postsElements
        = props.state.profilePage.post.map(m => {
        return (<Post message={m.message} likesCount={m.likesCount}/>)
    })


    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const onAddPost = () => {

        if (newPostElement.current) {
            let text = newPostElement.current.value;
            props.addPost(text)
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
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>

                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;