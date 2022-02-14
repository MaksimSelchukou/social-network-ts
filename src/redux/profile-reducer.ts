import {PostType} from "./state"


let initialState = {
    post: [
        {id: 1, message: "Hi, how are you?", likesCount: 0},
        {id: 2, message: 'Its my first post', likesCount: 23},
        {id: 3, message: 'Its my first post', likesCount: 21},
    ]
}


export const profileReducer = (state:any = initialState, action: any): any => {
    switch (action.type) {
        case  "ADD-POST":
            let newPost: PostType = {id: 4, message: action.postMessage, likesCount: 0}
            state.post.push(newPost)
            return state
        default:
            return state
    }

}



export type AddPostActionType = {
    type: "ADD-POST"
    postMessage: string
}

// type UpdateNewMessageActionType = {
//     type: "UPDATE-NEW-MESSAGE-BODY"
//     body: string
//
// }
// type sendMessageBodyType = {
//     type: "SEND-MESSAGE"
//
// }

export const addPostAC = (text: string): AddPostActionType => ({type: "ADD-POST", postMessage: text});
