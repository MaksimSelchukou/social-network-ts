import {PostType} from "./state"


export const profileReducer = (state: any, action: any): any => {
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
