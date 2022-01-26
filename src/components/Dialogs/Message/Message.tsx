import React from "react";
import s from '.././Dialogs.module.css';



type MessageType = { message: string }

export const Message = (props: MessageType) => {

   let newMessage:any = React.createRef()

    const addNewMessage = () =>{
        let message = newMessage.current.value;
        alert(message)
    }

    return (
        <div className={s.message}>
            {props.message}
            <input ref={newMessage}/>
            <button onClick={addNewMessage}>+</button>
        </div>
    )
}

