import React, { Component } from 'react';
import MessageContainer from '../containers/MessageContainer'
import back from '../static/ic_arrow_back_white_24dp.png';
import search from '../static/ic_search_white_24dp.png';
import more from '../static/ic_more_vert_white_24dp.png';
import attach from '../static/ic_attachment_black_24dp.png';
import close from '../static/ic_close_white_12pt.png';
import send from '../static/ic_send_black_24dp.png';
import connect from "react-redux/es/connect/connect";
import { Link} from 'react-router-dom';
import * as actionTypes from '../store/actionTypes';

class Chat extends Component {
    constructor(props) {
        super(props);
        this.preview = React.createRef();
        this.attachFile = React.createRef();
        this.messageField = React.createRef();
        this.messages = React.createRef();
        this.file=null;
    };
    submitMessage = () => {
        if(this.messageField.current.value!=="" || this.file ) {
            const file = (this.file === null ? null : this.preview.current.src)
            this.props.sendMessage(
                this.props.user_id,
                this.messageField.current.value,
                (new Date().getTime()),
                (new Date().toLocaleTimeString('en-GB')),
                file
            );
            this.file = null;
            this.preview.current.style.display = 'none';
            this.preview.current.src = "";
            this.messageField.current.value = "";
            this.attachFile.current.value="";
        }
    };
    handleKeyPress = (event) => {
        if(event.key === 'Enter'){
            this.submitMessage(event);
        }
    };

    previewFile(e) {
        const reader  = new FileReader();
        this.file=e.target.files[0];
        reader.onload = (event) => {
            this.preview.current.src = event.target.result;
        };
        reader.readAsDataURL(e.target.files[0]);
        //this.preview.current.src=reader.result;
        this.preview.current.style={ display: (this.file===null?'none':'inline-block')};
    }



    render() {
        const chat_id = this.props.chat_id;
        console.log(this.props.messages[chat_id]);
        console.log(this.props.chat_id);
        const messages=this.props.messages[chat_id];
        return (
            <div id="container">
                <div id = "upperPanel">
                    <img src={close} id="close" alt = ""/>
                </div>
                <div id = "header">
                    <Link to="/chatList">

                        <img src={back} id="arrowBack" alt = "To list of chats"/>
                    </Link>
                    <img src={search} id="search" alt = ""/>
                    <img src={more} id="more" alt = ""/>
                </div>
                <MessageContainer ref={this.messages}
                                  chat_owner={this.props.chats[chat_id].chat_owner}
                                  message_list ={ messages }
                />
                <img src ={this.file} height="200" width="200" alt=""
                     ref={this.preview}
                     style={{ display: (this.file===null?'none':'inline-block')}}/>

                <div id = "footer">
                    <input ref={this.messageField} id = "messageField"
                           placeholder="Введите текст сообщения..."
                           onKeyPress={(e) => this.handleKeyPress(e)}
                    >
                    </input>
                    <div id = "messageActions">
                        <input type="file" onChange={(e)=>this.previewFile(e)}
                                ref={this.attachFile}
                               style={{ display: 'none'}}>
                        </input>
                        <img src={attach} id="attach" alt = "" onClick={() => this.attachFile.current.click()}/>
                        <img src={send} id="send"  alt = "" onClick={this.submitMessage} />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state)=>{
    return {
        page:state.page,
        chats: state.chats,
        user_id: state.user_id,
        messages: state.messages
    }
};

const mapDispatchToProps = dispatch =>{
    return {
        sendMessage: (user_id, content,added_at,time,file) => dispatch({
            type: actionTypes.ADD_NEW_MESSAGE,
            payload:{
                user_id : user_id,
                content : content,
                added_at : added_at,
                time : time,
                file : file
            }
        }),
        pageChanged: (page) => dispatch({
            type: actionTypes.CHANGE_PAGE,
            payload:{
                page:page
            }
        })
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Chat);