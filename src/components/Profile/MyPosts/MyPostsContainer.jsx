import React from "react";
import {updateNewPostTextActionCreator, addPostActionCreator} from "../../../redux/profile-reducer"
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = () => {
    return <StoreContext.Consumer>
            {
            (store) => {
                const state = store.getState()
                const addPost = () => {
                    store.dispatch(addPostActionCreator())
                }
                const onPostChange = (text) => {
                    const action = updateNewPostTextActionCreator(text)
                    store.dispatch(action)
                }
                return <MyPosts updateNewPostText={onPostChange}
                                addPost={addPost}
                                posts={store.getState().profilePage.posts}
                                newPostText={store.getState().profilePage.newPostText}/>
            }
        }
        </StoreContext.Consumer>
}

export default MyPostsContainer