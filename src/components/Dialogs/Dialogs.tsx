import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

type DialogItemType = {
    name: string
    id: string
}

const DialogItem = (props: DialogItemType) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export const Dialogs = () => {

    const dialogsData =[
        {id:1,name:"Tatiana"},
        {id:2,name:"Maksim"},
        {id:3,name:"Kirill"},
        {id:4,name:"Roma"},
        {id:5,name:"Veronika"},
    ];

    const messagesData =[
        {id:1,message:"Hello"},
        {id:2,message:"Bye-bye"},
    ]


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Tatiana" id="1"/>
                <DialogItem name="Maksim" id="2"/>
                <DialogItem name="Kirill" id="3"/>
                <DialogItem name="Roma" id="4"/>
                <DialogItem name="Veronika" id="5"/>

            </div>

            <div className={s.messages}>
                <div className={s.message}>
                    Hello
                </div>
                <div className={s.message}>
                    Bye-bye
                </div>
            </div>
        </div>
    )
}