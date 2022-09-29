import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return <content className={s.content}>
        <div>
            <img src="https://c.tenor.com/sjvFUn5VE8UAAAAC/gachimuchi-gachi.gif"/>
        </div>
        <div className={s.item}>
            ava+descriptions
        </div>
        <MyPosts />
    </content>
}

export default Profile;