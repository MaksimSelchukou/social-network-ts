
type DialogType = {
    id: number
    name: string
}
type MessageType = {
    id: number
    message: string
}
type PostType = {
    id: number
    message: string
    likesCount: number
}
type ProfilePageType = {
    post: Array<PostType>
}
type dialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: dialogsPageType
}



export const store = {
    _state:{  //    RootStateType
        profilePage: {
            post: [
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
        },
    },
    getState (){
        debugger
        return this._state;
},
    _callSubscriber (state:any) {
        console.log('state changed')
    },
    subscribe (observer:any) {

       this._callSubscriber = observer;
    },
    dispatch(action:any){
        if(action.type === "ADD-POST"){
            let newPost: PostType = {id: 4, message: action.postMessage, likesCount: 0}
            this._state.profilePage.post.push(newPost)
            this._callSubscriber(this._state)
        }

    },
    // addPost (postMessage: string) {
    //     debugger
    //     let newPost: PostType = {id: 4, message: postMessage, likesCount: 0}
    //     this._state.profilePage.post.push(newPost)
    //     this._callSubscriber(this._state)
    //     // rerenderEntireTree()
    // }

}


// export let state: RootStateType = {  //    RootStateType
//     profilePage: {
//         post: [
//             {id: 1, message: "Hi, how are you?", likesCount: 0},
//             {id: 2, message: 'Its my first post', likesCount: 23},
//             {id: 3, message: 'Its my first post', likesCount: 21},
//         ]
//     },
//     dialogsPage: {
//         dialogs: [
//             {id: 1, name: "Tatiana"},
//             {id: 2, name: "Maksim"},
//             {id: 3, name: "Kirill"},
//             {id: 4, name: "Roma"},
//             {id: 5, name: "Veronika"},
//         ],
//         messages: [
//             {id: 1, message: "Hello"},
//             {id: 2, message: "Bye-bye"},
//         ],
//     },
// }

// @ts-ignore
window.store = store;

// export let addPost = (postMessage: string) => {
//     let newPost: PostType = {id: 4, message: postMessage, likesCount: 0}
//     state.profilePage.post.push(newPost)
//     rerenderEntireTree(state)
//     // rerenderEntireTree()
// }

// export const subscribe = (observer:any) => {
//     rerenderEntireTree = observer;
// }

