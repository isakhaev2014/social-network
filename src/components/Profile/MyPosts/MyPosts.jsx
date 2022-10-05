import React from "react";
import s from './MyPosts.module.css'
import Post from "./Posts/Post";

const MyPosts = (props) => {

    let postsData = [
        {id:1, message: 'Ouh, shit, i sorry', likesCount: 6},
        {id:2, message: 'My name is Van', likesCount: 69}
    ]
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
            <Post message={postsData[0].message} likesCount={postsData[0].likesCount}/>
            <Post message={postsData[1].message} likesCount={postsData[1].likesCount}/>
        </div>
    )
}

export default MyPosts