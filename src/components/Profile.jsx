import React from "react";
import s from './Profile.module.css';

const Profile = () => {
    return <content className={s.content}>
        <div>
            <img src="https://c.tenor.com/sjvFUn5VE8UAAAAC/gachimuchi-gachi.gif"/>
        </div>
        <div className={s.item}>
            ava+descriptions
        </div>
        <div className={s.item}>
            My posts
            <div className={s.item}>
                New posts
            </div>
        </div>
        <div className={s.posts}>
            <div className={s.item}>
                Post1
            </div>
            <div className={s.item}>
                Post2
            </div>
        </div>
    </content>
}

export default Profile;