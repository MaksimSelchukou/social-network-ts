import React from "react";
import s from './Dialogs.module.css';

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    Tatiana
                </div>
                <div className={s.dialog}>
                    Maksim
                </div>
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