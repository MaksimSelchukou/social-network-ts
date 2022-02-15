import React from 'react';
import {addPostAC} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from '../../../StoreContext';

type myPostType = {
    // state: RootStateType
    // dispatch: (action: ActionsTypes) => void
    // store:any
}

export const MyPostsContainer = (props: myPostType) => {
    // let state = props.store.getState()
    //
    //
    // const addPost = (text: any) => {
    //     props.store.dispatch(addPostAC(text))
    // }

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState()


                    const addPost = (text: any) => {
                        store.dispatch(addPostAC(text))
                    }
                    return (
                        <MyPosts state={state} dispatch={store.dispatch} addPost={addPost}/>
                    )
                }


            }
        </StoreContext.Consumer>
    )
}
