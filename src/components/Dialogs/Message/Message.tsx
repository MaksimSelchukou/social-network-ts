import React from "react";
import s from '.././Dialogs.module.css';



type MessageType = { message: string }

export const Message = (props: MessageType) => {

   let newMessage:any = React.createRef()



    return (
        <div className={s.message}>
            {props.message}

        </div>
    )
}

