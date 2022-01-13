import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {RootStateType} from "../../redux/state";

type profileType={
state:RootStateType
}

export const Profile = (props:profileType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts state={props.state}/>
        </div>
    )
}
