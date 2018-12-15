import React, { Component } from 'react';
import connect from "react-redux/es/connect/connect";
import { BrowserRouter as Router, Route, Link ,withRouter,match} from 'react-router-dom';
import * as actionTypes from './store/actionTypes';
import * as reducer from './store/reducer';

export class Auth extends Component {
    render() {
        return(
            <div>
                <input id="Login" placeholder="Логин"></input>
                <input id="Pass" placeholder="Пароль"></input>
                <button >Авторизироваться</button>
            </div>
        )
    }
}


const mapDispatchToProps = dispatch =>{
    return {
        onAuth: (login, pass) => dispatch({

        })
    }
};

export default connect(mapDispatchToProps)(Auth);