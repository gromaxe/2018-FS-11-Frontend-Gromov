import * as actionTypes from './actionTypes';
import * as pages from './pages';
import { initialStore } from './store';

export const reducer = (state = initialStore, action)=> {
    switch (action.type){
        case actionTypes.AUTHORIZE:{
          return  {
              ...state,
              is_authorized:(action.payload.login==="admin" && action.payload.pass==="admin")
          }
        }
        case actionTypes.ADD_NEW_MESSAGE:
            const chat_id = state.current_page.chat_id;
            return {
                ...state,
                chats:[...state.chats,
                    [state.chats[chat_id]].last_msg=action.payload.content,
                    [state.chats[chat_id]].last_msg_time=action.payload.content
                ],
                messages:{...state.messages,
                    [chat_id]:[...state.messages[chat_id],
                        {user_id: action.payload.user_id,
                            content: action.payload.content,
                            added_at: action.payload.added_at,
                            time: action.payload.time,
                            file: action.payload.file}
                    ]}};
        case actionTypes.CHANGE_PAGE:
            switch (action.payload.page.page) {
                case pages.CHAT:
                    return {
                        ...state,
                        current_page: {
                            page:       action.payload.page.page,
                            chat_id:    action.payload.page.chat_id,
                            chat_owner: action.payload.page.chat_owner
                        }
                    }
                case pages.CHAT_LIST:
                    return{
                        ...state,
                        current_page: {
                            page: action.payload.page.page
                        }
                    }
                default:
                    alert(action.payload.page.page);
                    return state;
            }
        default:
            return state;
    }
}