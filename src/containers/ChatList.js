import React from "react";
import close from "../static/ic_close_white_12pt.png";
import search from "../static/ic_search_white_24dp.png";
import more from "../static/ic_more_vert_white_24dp.png";

import {connect} from 'react-redux';
import {Link} from "react-router-dom";
import * as actionTypes from "../store_front/actionTypes";

class ChatList extends React.Component {

    componentDidMount() {
        const chat_id = this.props.chat_id;
        fetch('http://127.0.0.1:8081/chats', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id:chat_id
            })
        })
            .then(response=>response.json())
            .then(data=>{
                 this.props.loadMessages(chat_id,data);
                this.renderChats();
            });
    };
    renderChats(){
        if(this.props.chats)
            return(
                <div id="chats">
                    {this.props.chats.map(i =>
            <Link to={"/chat/"+i.chat_id}
                  style={{ textDecoration: 'none' }}
                  onClick={(e) => this.props.pageChanged({
                      page:"chat",
                      chat_id:i.chat_id,
                      chat_owner:this.props.chats[i.chat_id].chat_owner
                  })}>
                <div className="chat"
                     id={i.chat_id}>
                    <img className="chatIcon"
                         alt=""
                         src={i.chatIcon}
                    />
                    <div className="not_icon">
                        <div className="contain_txt">
                            <div className="chatTitle">
                                {i.chatTitle}
                            </div>
                            <div className="lastMsgText">
                                {i.last_msg}
                            </div>
                        </div>
                        <div className="contain_num">
                            <div className="lastMsgTime">
                                {i.last_msg_time}
                            </div>
                            <div className={i.unread_msg === 0 ? "no_msg" : i.is_notifications ? "msg_notification": "msg_no_notif" }>
                                {i.is_notifications?"@ "+i.unread_msg:i.unread_msg}
                            </div>
                        </div>
                    </div>
                </div>
            </Link>)}
                </div>);
        else{
            return(
                <div id="chats">"No chats available. Maybe, loading."
                </div>);
        }
        };

    render(){
        return (
            <div id="container">
                <div id = "upperPanel">
                    <img src={close} id="close" alt = ""/>
                </div>
                <div id = "header">
                    <img src={search} id="search" alt = ""/>
                    <img src={more} id="more" alt = ""/>
                    {this.renderChats()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state)=>{
  return {
      chats: state.chats
  }
};

const mapDispatchToProps = (dispatch) => {
  return{
      pageChanged: (page) => dispatch({
        type: actionTypes.CHANGE_PAGE,
        payload:{
            page:page
        }
    }),
      loadMessages: (chat_id) => dispatch({
        type: "LOAD_MESSAGES",
        payload:{
            chat_id:chat_id
        }
    })
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(ChatList);
