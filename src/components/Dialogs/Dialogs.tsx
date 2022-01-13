import React from "react";
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogsItem/DialogsItem";
import {Message} from "./Message/Message";
import {dialogsType, messagesType} from "../../index";

type DialogsPropsType={
    dialogs:Array<dialogsType>,
    messages:Array<messagesType>
}

export const Dialogs = (props:DialogsPropsType) => {

    // let dialogs = [
    //     {id: 1, name: "Tatiana"},
    //     {id: 2, name: "Maksim"},
    //     {id: 3, name: "Kirill"},
    //     {id: 4, name: "Roma"},
    //     {id: 5, name: "Veronika"},
    // ];
    //
    // const messages = [
    //     {id: 1, message: "Hello"},
    //     {id: 2, message: "Bye-bye"},
    // ];

    let dialogsElements = props.dialogs.map(d => {
        return (<DialogItem name={d.name} id={d.id}/>)
    })
    let messagesElements = props.messages.map(m => {
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