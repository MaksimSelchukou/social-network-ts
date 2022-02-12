import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, RootStateType} from "../../redux/state";

type profileType = {
    state: RootStateType
    // addPost: (postMessage: string) => void
    dispatch:(action:ActionsTypes)=>void

}

export const Profile = (props: profileType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts state={props.state} dispatch={props.dispatch}/>
        </div>
    )
}
