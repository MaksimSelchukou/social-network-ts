import {text} from "stream/consumers";
import {AddPostActionType, profileReducer} from "./profile-reducer";
import {dialogsReducer, sendMessageBodyType, UpdateNewMessageActionType} from "./dialogs-reducer";

type DialogType = {
    id: number
    name: string
}
type MessageType = {
    id: number
    message: string
}
export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type ProfilePageType = {
    posts: Array<PostType>
}
type dialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageBody: string
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: dialogsPageType
}

export type storeType = {
    _state: RootStateType
    getState: () => RootStateType
    _callSubscriber: (state: any) => void
    subscribe: (observer: any) => void
    dispatch: (action: ActionsTypes) => void

}
//
export type ActionsTypes = AddPostActionType | UpdateNewMessageActionType | sendMessageBodyType


const store: storeType = {
    _state: {  //    RootStateType
        profilePage: {
            posts: [
                {id: 1, message: "Hi, how are you?", likesCount: 0},
                {id: 2, message: 'Its my first post', likesCount: 23},
                {id: 3, message: 'Its my first post', likesCount: 21},
            ]
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: "Tatiana"},
                {id: 2, name: "Maksim"},
                {id: 3, name: "Kirill"},
                {id: 4, name: "Roma"},
                {id: 5, name: "Veronika"},
            ],
            messages: [
                {id: 1, message: "Hello"},
                {id: 2, message: "Bye-bye"},
            ],
            newMessageBody: ""
        },
    },
    getState() {
        return this._state;
    },
    _callSubscriber(state: any) {
        console.log('state changed')
    },
    subscribe(observer: any) {
        // subscribe(callback: () => void) {
        this._callSubscriber = observer;
    },
    // dispatch(action: any) {
    //     if (action.type === "ADD-POST") {
    //         let newPost: PostType = {id: 4, message: action.postMessage, likesCount: 0}
    //         this._state.profilePage.post.push(newPost)
    //         this._callSubscriber(this._state)
    //     } else if (action.type === "SEND-MESSAGE") {
    //         let body = this._state.dialogsPage.newMessageBody
    //         this._state.dialogsPage.newMessageBody = ""
    //         this._state.dialogsPage.messages.push({id: 5, message: body})
    //         this._callSubscriber(this._state)
    //     } else if (action.type === "UPDATE-NEW-MESSAGE-BODY") {
    //         this._state.dialogsPage.newMessageBody = action.body
    //         this._callSubscriber(this._state)
    //     }
    dispatch(action: any) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._callSubscriber(this._state)
    }
}


// @ts-ignore
window.store = store;

