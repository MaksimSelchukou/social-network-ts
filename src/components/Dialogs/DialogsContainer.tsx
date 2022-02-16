import React from "react";
import {sendMessageBodyAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";




// let state = store.getState()
let mapStateToProps = (state:any) =>{
    return {
        dialogsPage:state
    }
}

let mapDispatchToProps = (dispatch:any) =>{
    return {
        updateNewMessageBody:(body:string)=>{
            dispatch(updateNewMessageBodyAC(body))
        },
        sendMessage:()=>{
            dispatch(sendMessageBodyAC())
        }
        }
    }


export const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)
