import React from 'react';
import {addPostAC} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {storeType} from "../../../redux/redux-store";



let mapStateToProps = (state:storeType) => {
    return {
        state:state
    }
}
let mapDispatchToProps = (dispatch:any) => {
    return {
        addPost:(text:any)=>{
            dispatch(addPostAC(text))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)