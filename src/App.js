import React, { Component } from 'react';
import Chat from './components/Chat.js';
import ChatList from './containers/ChatList.js';
import connect from "react-redux/es/connect/connect";
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
// import {Auth} from './Auth';

    class App extends Component {

        render() {
            if(true){
            return(
                <Router>
                <div>
                    {/*<Route exact path="/login" component={Auth} />*/}
                    <Route exact path="/" component={ChatList} />
                    <Route path='/chat/:chat_id' component={Chat}/>
                </div>
            </Router>
            )}
            // else{
            //     return(
            //         <Router>
            //             <div>
            //                 <Route exact path="/login" component={Auth} />
            //                 <Route exact path="/" component={Auth} />
            //                 <Route path='/chat/:chat_id' component={Auth}/>
            //             </div>
            //         </Router>
            //     )}
        }
    }




export default connect()(App);
