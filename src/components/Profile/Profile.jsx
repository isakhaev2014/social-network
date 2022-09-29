import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return <content className={s.content}>
        <div>
            <img src="https://cs14.pikabu.ru/post_img/2022/09/22/9/16638603671357696.jpg"/>
        </div>
        <div className={s.item}>
            ava+descriptions
        </div>
        <MyPosts />
    </content>
}

export default Profile;