import profileReducer from "./profile-reducer";
import messageReducer from "./message-reducer";
import sidebarReducer from "./sidebar-reducer";

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
            }, {id: 5, name: 'Nikis'}, {id: 6, name: 'Maga'}],
            messages: [{id: 1, message: 'My name is Van'}, {id: 2, message: 'Ouh shit, im sorry'}, {
                id: 3, message: 'Boy next door!'
            }, {id: 4, message: 'Ты конченый мудила, гори в аду'}, {id: 5, message: 'Ты не видел моего сынка?'}, {
                id: 6, message: 'Юля, ты лучшее что есть у меня, а реакт лучшее место для признаний в любви'
            }],
            newMessageBody: ""
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('State changed')
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagesPage = messageReducer(this._state.messagesPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state)
    }
}

window.store = store
export default store;