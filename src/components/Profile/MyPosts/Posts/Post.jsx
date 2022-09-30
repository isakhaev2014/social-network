import React from "react";
import s from './Post.module.css'
const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://lh3.googleusercontent.com/TMrev6WWnXwyrJKUiHnzH1lUn-PIAyeazq5QQ5bIMJrqumqH2owjx9I9rghvV6SkPcA'/>
            {props.message}
            <div>
                <span>Like</span>
            </div>
        </div>
)
}

export default Post