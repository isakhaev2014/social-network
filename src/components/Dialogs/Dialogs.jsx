import React from "react";
import  s from './Dialogs.module.css';

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    Van Darkholme
                </div>
                <div className={s.dialog}>
                    Billy
                </div>
                <div className={s.dialog}>
                    Boss of Gym
                </div>
                <div className={s.dialog}>
                    Yuliya
                </div>
                <div className={s.dialog}>
                    Nikis
                </div>
                <div className={s.dialog}>
                    Andrey
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>My name is Van</div>
                <div className={s.message}>Ouh shit, i'm sorry</div>
                <div className={s.message}>Boy next door!</div>
        </div>
    </div>
    )
}

export default Dialogs;