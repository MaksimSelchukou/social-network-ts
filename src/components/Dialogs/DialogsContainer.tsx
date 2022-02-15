import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogsItem/DialogsItem";
import {Message} from "./Message/Message";
import {ActionsTypes, RootStateType,} from "../../redux/state";
import {sendMessageBodyAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import StoreContext from "../../StoreContext";
import {addPostAC} from "../../redux/profile-reducer";
import MyPosts from "../Profile/MyPosts/MyPosts";


type DialogsPropsType = {
    // state: RootStateType
    // dispatch:(action:ActionsTypes)=>void
    // store:any
}

export const DialogsContainer = (props: DialogsPropsType) => {


    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState()


                    const onSendMessageClick = () => {
                        store.dispatch(sendMessageBodyAC())
                    }

                    const onNewMessageChange = (body: string) => {
                        store.dispatch(updateNewMessageBodyAC(body))

                    }

                    return (
                        <Dialogs state={state}
                                 dispatch={store.dispatch}
                                 sendMessage={onSendMessageClick}
                                 updateNewMessageBody={onNewMessageChange}/>
                    )
                }


            }
        </StoreContext.Consumer>
    )
}


