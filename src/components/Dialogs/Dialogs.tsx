import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogsItem/DialogsItem";
import {Message} from "./Message/Message";
import {ActionsTypes, RootStateType,} from "../../redux/state";


type DialogsPropsType = {
    state: RootStateType
    dispatch:(action:ActionsTypes)=>void
    sendMessage:()=>void
    updateNewMessageBody:(body:string)=>void
}

export const Dialogs = (props: DialogsPropsType) => {


    let dialogsElements = props.state.dialogsPage.dialogs.map(d => {
        return (<DialogItem name={d.name} id={d.id}/>)
    })
    let messagesElements = props.state.dialogsPage.messages.map(m => {
        return (<Message message={m.message}/>)
    })

    let newMessageBody = props.state.dialogsPage.newMessageBody


    const addNewMessage = () => {
        // props.dispatch(sendMessageBodyAC())
        props.sendMessage()
    }

    const onNewMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
       let body = event.currentTarget.value
        props.updateNewMessageBody(body)
        // props.dispatch(updateNewMessageBodyAC(body))

    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea value={newMessageBody} onChange={onNewMessageChange}  placeholder="message"></textarea></div>
                    <div>
                        <button onClick={addNewMessage}>+</button>
                    </div>
                </div>
            </div>

        </div>
    )
}
