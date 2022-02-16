import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogsItem/DialogsItem";
import {Message} from "./Message/Message";
import {RootStateType,} from "../../redux/state";


type DialogsPropsType = {
    dialogsPage: RootStateType
    sendMessage:()=>void
    updateNewMessageBody:(body:string)=>void
}

export const Dialogs = (props: DialogsPropsType) => {


    let dialogsElements = props.dialogsPage.dialogsPage.dialogs.map(d => {
        return (<DialogItem name={d.name} id={d.id}/>)
    })
    let messagesElements = props.dialogsPage.dialogsPage.messages.map(m => {
        return (<Message message={m.message}/>)
    })

    let newMessageBody = props.dialogsPage.dialogsPage.newMessageBody


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
                    <div><textarea onChange={onNewMessageChange}  placeholder="message"></textarea></div>
                    <div>
                        <button onClick={addNewMessage}>+</button>
                    </div>
                </div>
            </div>

        </div>
    )
}
