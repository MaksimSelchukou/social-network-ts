import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, RootStateType} from "../../redux/state";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";


type profileType = {
    // state: RootStateType
    // dispatch:(action:ActionsTypes)=>void
    // store:any

}

export const Profile = (props: profileType) => {
    return (
        <div>
            <ProfileInfo/>
            {/*<MyPostsContainer state={props.state} dispatch={props.dispatch}/>*/}
            {/*<MyPostsContainer store={props.store}/>*/}
            <MyPostsContainer/>
        </div>
    )
}
