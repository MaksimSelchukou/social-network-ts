import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

type DialogItemType = {
    name: string
    id: number
}

const DialogItem = (props: DialogItemType) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}


type MessageType = { message: string }

export const Message = (props: MessageType) => {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    )
}

export const Dialogs = () => {

    let dialogs = [
        {id: 1, name: "Tatiana"},
        {id: 2, name: "Maksim"},
        {id: 3, name: "Kirill"},
        {id: 4, name: "Roma"},
        {id: 5, name: "Veronika"},
    ];

    const messages = [
        {id: 1, message: "Hello"},
        {id: 2, message: "Bye-bye"},
    ];

    let dialogsElements = dialogs.map(d => {
        return (<DialogItem name={d.name} id={d.id}/>)
    })
    let messagesElements = messages.map(m => {
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