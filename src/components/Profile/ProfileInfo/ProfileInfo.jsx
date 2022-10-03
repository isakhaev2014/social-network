import React from "react";
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://cs14.pikabu.ru/post_img/2022/09/22/9/16638603671357696.jpg"/>
            </div>
            <div className={s.descriptionBlock}>
                ava+descriptions
            </div>
        </div>
    )
}

export default ProfileInfo;