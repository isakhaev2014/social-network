const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
let store = {
    _state: {


        profilePage: {
            posts: [{id: 1, message: 'Ouh, shit, i sorry', likesCount: 6}, {
                id: 2, message: 'My name is Van', likesCount: 69
            }], newPostText: 'Добавь пост, Leatherman'
        },

        messagesPage: {
            dialogs: [{id: 1, name: 'Van Darkholme'}, {id: 2, name: 'Billy'}, {id: 3, name: 'Boss of Gym'}, {
                id: 4, name: 'Yuliya'
            }, {id: 5, name: 'Nikis'}, {id: 6, name: 'Andrey'}],
            messages: [{id: 1, message: 'My name is Van'}, {id: 2, message: 'Ouh shit, im sorry'}, {
                id: 3, message: 'Boy next door!'
            }, {id: 4, message: 'Где коммиты псина?'}, {id: 5, message: 'Ты не видел моего сынка?'}, {
                id: 6, message: 'Привет'
            }]
        }
    }, _callSubscriber() {
        console.log('State changed')
    },

    getState() {
        return this._state
    }, subscribe(observer) {
        this._callSubscriber = observer
    },

    _addPost() {
        let newPost = {
            id: 5, message: this._state.profilePage.newPostText, likeCount: 0
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber(this._state)
    }, _updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber(this._state)
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            this._addPost()
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._updateNewPostText(action.newText)
        }
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})

window.store = store
export default store;