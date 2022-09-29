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
            <div className={s.item}>
                New posts
            </div>
            <Post />
        </div>
)
}

export default MyPosts