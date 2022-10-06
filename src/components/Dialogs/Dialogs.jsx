import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: 'Van Darkholme'},
        {id: 2, name: 'Billy'},
        {id: 3, name: 'Boss of Gym'},
        {id: 4, name: 'Yuliya'},
        {id: 5, name: 'Nikis'},
        {id: 6, name: 'Andrey'}
    ]

    let messages = [
        {id: 1, message: 'My name is Van'},
        {id: 2, message: 'Ouh shit, im sorry'},
        {id: 3, message: 'Boy next door!'},
        {id: 4, message: 'Где коммиты псина?'},
        {id: 5, message: 'Ты не видел моего сынка?'},
        {id: 6, message: 'Привет'}
    ]
    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = messages.map(m => <Message message={m.message}/>)

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

export default Dialogs;