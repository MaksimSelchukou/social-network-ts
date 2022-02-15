import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogsItem/DialogsItem";
import {Message} from "./Message/Message";
import {ActionsTypes, RootStateType,} from "../../redux/state";
import {sendMessageBodyAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";


type DialogsPropsType = {
    // state: RootStateType
    // dispatch:(action:ActionsTypes)=>void
    store:any
}

export const DialogsContainer = (props: DialogsPropsType) => {
    let state = props.store.getState()



    const onSendMessageClick = () => {
      props.store.dispatch(sendMessageBodyAC())
    }

    const onNewMessageChange = (body:string) => {
        props.store.dispatch(updateNewMessageBodyAC(body))

    }

    return (
      <Dialogs state={state} dispatch={props.store.dispatch}
               sendMessage={onSendMessageClick} updateNewMessageBody={onNewMessageChange}/>
    )
}
