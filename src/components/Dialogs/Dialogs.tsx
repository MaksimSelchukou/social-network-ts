import React from "react";
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogsItem/DialogsItem";
import {Message} from "./Message/Message";
import {RootStateType} from "../../redux/state";


type DialogsPropsType={
    state:RootStateType
}

export const Dialogs = (props:DialogsPropsType) => {


    let dialogsElements = props.state.dialogsPage.dialogs.map(d => {
        return (<DialogItem name={d.name} id={d.id}/>)
    })
    let messagesElements = props.state.dialogsPage.messages.map(m => {
        return (<Message message={m.message}/>)
    })

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}