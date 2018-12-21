import React, { Component } from 'react';
import Chat from './components/Chat.js';
import connect from "react-redux/es/connect/connect";
import './App.css';
import * as actionTypes from "./store_front/actionTypes";

import { withRouter } from 'react-router-dom'
import ChatList from "./containers/ChatList";
// import {Auth} from './Auth';

    class App extends Component {

        componentDidMount() {
            fetch('http://127.0.0.1:8081/getStateFromServer', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
                .then(response=>response.json())
                .then(state=>{
                    this.props.LOAD_STATE(state)
                });

        };
        render() {

            switch (this.props.page) {
                case "chat":
                    console.log("we are at chat",this.props.match.params.chat_id);
                    if(typeof (this.props.chats)!=='undefined') {
                        // if (this.props.current_page !== "chat") {
                        //     console.log(this.props.current_page);
                        //     this.props.pageChanged({
                        //         page: "chat",
                        //         chat_id: this.props.match.params.chat_id,
                        //         chat_owner: this.props.chats[this.props.match.params.chat_id].chat_owner
                        //     });
                        // }
                        return (
                            <Chat chat_id={this.props.match.params.chat_id}/>
                        );
                    }
                    else{
                    return (<div>No messages here</div>)}
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
        }),
        LOAD_STATE: (state) => dispatch({
            type: actionTypes.LOAD_STATE,
            payload:{
                state:state
            }
        })
    }
};

const mapStateToProps = (state)=>{

    return {
        state:state,
        chats: state.chats,
        current_page: state.current_page.page
    }
};

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App));
