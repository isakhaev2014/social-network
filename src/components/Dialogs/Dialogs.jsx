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

const Dialogs = (props) => {

    let dialogsData = [
        {id:1, name: 'Van Darkholme'},
        {id:2, name: 'Billy'},
        {id:3, name: 'Boss of Gym'},
        {id:4, name: 'Yuliya'},
        {id:5, name: 'Nikis'},
        {id:6, name: 'Andrey'}
    ]

    let messagesData = [
        {id:1, message: 'My name is Van'},
        {id:2, message: 'Ouh shit, im sorry'},
        {id:3, message: 'Boy next door!'},
        {id:4, message: 'Где коммиты псина?'},
        {id:5, message: 'Ты не видел моего сынка?'},
        {id:6, message: 'Привет'}
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />
                <DialogItem name={dialogsData[5].name} id={dialogsData[5].id} />
            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message} />
                <Message message={messagesData[1].message} />
                <Message message={messagesData[2].message} />
                <Message message={messagesData[3].message} />
                <Message message={messagesData[4].message} />
                <Message message={messagesData[5].message} />
            </div>
    </div>
    )
}

export default Dialogs;