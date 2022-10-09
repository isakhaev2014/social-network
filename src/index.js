import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
    {id: 1, message: 'Ouh, shit, i sorry', likesCount: 6},
    {id: 2, message: 'My name is Van', likesCount: 69}
]

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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App posts={posts} dialogs={dialogs} messages={messages}/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
