import React from "react";
import s from './MyPosts.module.css'
import Post from "./Posts/Post";
const MyPosts = () => {
    return (
        <div className={s.item}>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                New posts
            </div>
            <Post message='Ouh, shit, i sorry'/>
            <Post message='My name is Van'/>
        </div>
)
}

export default MyPosts