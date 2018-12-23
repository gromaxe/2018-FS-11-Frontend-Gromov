const actionTypes = require('./actionTypes');
const  initialStore = require('./store');

const reducer = (state = initialStore, action)=> {
    switch (action.type){
        case actionTypes.ADD_NEW_MESSAGE:
            const chat_id = action.payload.chat_id;
            console.log("ADD_NEW_MSG",action);
            console.log(state.messages[chat_id]);
            return {
                ...state,
                messages:{...state.messages,
                    [chat_id]:[...state.messages[chat_id],
                        {user_id: action.payload.user_id,
                            content: action.payload.content,
                            added_at: action.payload.added_at,
                            time: action.payload.time,
                            file: action.payload.file}
                    ]}};
        default:
            return state;
    }
};
module.exports = reducer;