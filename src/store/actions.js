
import * as actionTypes from './actionTypes';

export const authSuccess = () => {
    return {
        type: actionTypes.AUTHORIZE
    }
};


export const auth = (login, pass) => {

    if( login==="admin" && pass==="admin")
        return dispatch(authSuccess());

};

export const send = (user_id, content,added_at,time) => {
    return {
        type: actionTypes.ADD_NEW_MESSAGE,
        payload:{
            user_id : user_id,
            content : content,
            added_at : added_at,
            time : time
        }
    }

};


export const changePage = (page, id,chat_owner) => {
    return {
        type: actionTypes.CHANGE_PAGE,
        payload:{
            page:page,
            id:id,
            chat_owner:chat_owner
        }
    }

};
