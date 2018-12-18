import React, { Component } from 'react';
import Chat from './components/Chat.js';
import connect from "react-redux/es/connect/connect";
import './App.css';
import * as actionTypes from "./store/actionTypes";

import { withRouter } from 'react-router-dom'
import ChatList from "./containers/ChatList";
// import {Auth} from './Auth';

    class App extends Component {
        render() {
            console.log(this.props);

            switch (this.props.page) {
                case "chat":
                    if(this.props.current_page!=="chat"){
                        this.props.pageChanged({
                            page:"chat",
                            chat_id:this.props.match.params.chat_id,
                            chat_owner:this.props.chats[this.props.match.params.chat_id].chat_owner
                        });
                    }
                    return (
                        <Chat chat_id={this.props.match.params.chat_id}/>
                    );
                case "chatList":
                    if(this.props.current_page!=="chatList"){
                        this.props.pageChanged({
                            page:"chatList"
                        });
                    }
                    return (
                        <ChatList chat_id={this.props.match.params.chat_id}/>
                    );
                default:
                    console.log(this.props);
                    return <div>Что-то пошло не так</div>
            }
        };
        }



const mapDispatchToProps = dispatch =>{
    return {
        pageChanged: (page) => dispatch({
            type: actionTypes.CHANGE_PAGE,
            payload:{
                page:page
            }
        })
    }
};

const mapStateToProps = (state)=>{

    return {
        chats: state.chats,
        current_page: state.current_page.page
    }
};

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App));
