import React from "react";
import close from "../static/ic_close_white_12pt.png";
import search from "../static/ic_search_white_24dp.png";
import more from "../static/ic_more_vert_white_24dp.png";

import {connect} from 'react-redux';
import {Link} from "react-router-dom";
import * as actionTypes from "../store/actionTypes";

class ChatList extends React.Component {


    render() {

        return (
            <div id="container">
                <div id = "upperPanel">
                    <img src={close} id="close" alt = ""/>
                </div>
                <div id = "header">
                    <img src={search} id="search" alt = ""/>
                    <img src={more} id="more" alt = ""/>
                </div>
                <div id="chats">{
                    this.props.chats.map(i =>
                        <Link to={"/chat/"+i.chat_id}
                              style={{ textDecoration: 'none' }}
                              onClick={(e) => this.props.pageChanged({
                                  page:"chat",
                                  chat_id:i.chat_id,
                                  chat_owner:this.props.chats[i.chat_id].chat_owner
                              })}>
                        <div className="chat"
                             id={i.chat_id}
                        >
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
                        </Link>
                    )}
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
      })
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(ChatList);
