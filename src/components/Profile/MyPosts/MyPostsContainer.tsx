import React, {RefObject, Component} from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


import {ActionsTypes, RootStateType} from "../../../redux/state";
import {addPostAC} from "../../../redux/profile-reducer";
import {text} from "stream/consumers";
import MyPosts from "./MyPosts";

type myPostType = {
    // state: RootStateType
    // dispatch: (action: ActionsTypes) => void
    store:any
}

export const MyPostsContainer = (props: myPostType) => {
     let state = props.store.getState()


    const addPost = (text: any) => {
        props.store.dispatch(addPostAC(text))
    }

    return (
        <MyPosts state={state} dispatch={props.store.dispatch} addPost={addPost}/>
    )
}
