import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {postType} from "../../index";

type profileType={
    post:Array<postType>
}

export const Profile = ({post,...props}:profileType) => {
    return (
        <div>
            {/*<div>*/}
            {/*    <img*/}
            {/*        src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350'/>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    ava + description*/}
            {/*</div>*/}
            <ProfileInfo/>
            <MyPosts post={post}/>
        </div>
    )
}
