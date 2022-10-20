let renderEntireTree = () => {

}

let state = {



    profilePage: {
        posts: [
            {id: 1, message: 'Ouh, shit, i sorry', likesCount: 6},
            {id: 2, message: 'My name is Van', likesCount: 69}
        ],
        newPostText: 'Добавь пост, Leatherman'
    },

    messagesPage: {
        dialogs: [
            {id: 1, name: 'Van Darkholme'},
            {id: 2, name: 'Billy'},
            {id: 3, name: 'Boss of Gym'},
            {id: 4, name: 'Yuliya'},
            {id: 5, name: 'Nikis'},
            {id: 6, name: 'Andrey'}
        ],
        messages: [
            {id: 1, message: 'My name is Van'},
            {id: 2, message: 'Ouh shit, im sorry'},
            {id: 3, message: 'Boy next door!'},
            {id: 4, message: 'Где коммиты псина?'},
            {id: 5, message: 'Ты не видел моего сынка?'},
            {id: 6, message: 'Привет'}
        ]
    }
}

export const addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likeCount: 0
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    renderEntireTree(state)
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText
    renderEntireTree(state)
}

export const subscribe = (observer) => {
    renderEntireTree = observer
}

export default state;