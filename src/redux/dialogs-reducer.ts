
let initialState = {
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
}

export const dialogsReducer = (state: any = initialState, action: any): any => {
    switch (action.type) {
        case  "SEND-MESSAGE":
            let body = state.newMessageBody
            state.newMessageBody = ""
            state.messages.push({id: 5, message: body})
            return state
        case "UPDATE-NEW-MESSAGE-BODY":
            state.newMessageBody = action.body
            return state
        default:
            return state
    }

}

export type UpdateNewMessageActionType = {
    type: "UPDATE-NEW-MESSAGE-BODY"
    body: string

}
export type sendMessageBodyType = {
    type: "SEND-MESSAGE"

}

export const sendMessageBodyAC = (): sendMessageBodyType => ({type: "SEND-MESSAGE"});
export const updateNewMessageBodyAC = (body: string): UpdateNewMessageActionType => ({
    type: "UPDATE-NEW-MESSAGE-BODY",
    body: body
});


// else if (action.type === "SEND-MESSAGE") {
//         let body = this._state.dialogsPage.newMessageBody
//         this._state.dialogsPage.newMessageBody = ""
//         this._state.dialogsPage.messages.push({id: 5, message: body})
//         this._callSubscriber(this._state)
//     } else if (action.type === "UPDATE-NEW-MESSAGE-BODY") {
//         this._state.dialogsPage.newMessageBody = action.body
//         this._callSubscriber(this._state)
//     }