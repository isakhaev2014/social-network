import React from "react";
import s from './MyPosts.module.css'
import Post from "./Posts/Post";

const MyPosts = () => {
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
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