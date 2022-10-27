const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
    dialogs: [{id: 1, name: 'Van Darkholme'}, {id: 2, name: 'Billy'}, {id: 3, name: 'Boss of Gym'}, {
        id: 4, name: 'Yuliya'
    }, {id: 5, name: 'Nikis'}, {id: 6, name: 'Andrey'}],
    messages: [{id: 1, message: 'My name is Van'}, {id: 2, message: 'Ouh shit, im sorry'}, {
        id: 3, message: 'Boy next door!'
    }, {id: 4, message: 'Где коммиты псина?'}, {id: 5, message: 'Ты не видел моего сынка?'}, {
        id: 6, message: 'Привет'
    }],
    newMessageBody: ""
}

const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body
            return state
        case SEND_MESSAGE:
            let body = state.newMessageBody
            state.newMessageBody = ''
            state.messages.push({id: 7, message: body})
            return state
        default:
            return state
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default messageReducer