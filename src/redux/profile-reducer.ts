import {PostType, ProfilePageType} from "./state"


let initialState:ProfilePageType = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 0},
        {id: 2, message: 'Its my first post', likesCount: 23},
        {id: 3, message: 'Its my first post', likesCount: 21},
    ]
}


export const profileReducer = (state:ProfilePageType = initialState, action: any): any => {
    switch (action.type) {
        case  "ADD-POST":
            let newPost: PostType = {id: 4, message: action.postMessage, likesCount: 0}
            return {...state,posts:[...state.posts,newPost]}
        default:
            return state
    }

}

export type AddPostActionType = {
    type: "ADD-POST"
    postMessage: string
}

export const addPostAC = (text: string): AddPostActionType => ({type: "ADD-POST", postMessage: text});
