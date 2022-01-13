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
    likesCount: string
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

export let state:RootStateType = {
    profilePage: {
        post: [
            {id: 1, message: "Hi, how are you?", likesCount: "0"},
            {id: 2, message: 'Its my first post', likesCount: "23"},
            {id: 3, message: 'Its my first post', likesCount: "21"},
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
}
