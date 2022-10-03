import React from "react";
import  s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs" + props.id;
    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

const Message = (props) => {
    return <div className={s.message}>{props.message}</div>
}

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Van Darkholme" id="1" />
                <DialogItem name="Billy" id="2" />
                <DialogItem name="Boss of Gym" id="3" />
                <DialogItem name="Yuliya" id="4" />
                <DialogItem name="Nikis" id="5" />
                <DialogItem name="Andrey" id="6" />
            </div>
            <div className={s.messages}>
                <Message message="My name is Van" />
                <Message message="Ouh shit, i'm sorry" />
                <Message message="Boy next door!" />
                <Message message="Где коммиты псина?" />
                <Message message="Ты не видел моего сынка?" />
                <Message message="Привет" />
        </div>
    </div>
    )
}

export default Dialogs;