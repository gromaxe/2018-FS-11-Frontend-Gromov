const express = require('express');
const bodyParser = require("body-parser");
const fileUpload = require('express-fileupload');
const redux = require('redux');
const reducer = require('./store_back/reducer');
const init_store= require('./store_back/store');
const app = express();
const actionTypes = require('./store_back/actionTypes');


const store = redux.createStore(
    reducer, init_store
);

app.use(fileUpload());
app.use(bodyParser.json());


app.use(function(req, res, next) {
    res.status(200);
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.post('/getStateFromServer', function(req, res) {
    res.send(store.getState());
});


app.post('/chats', function(req, res) {
    res.send(store.getState().chats);
});

app.post('/messages', function(req, res) {
    page = store.getState().current_page;
    messages = store.getState().messages
    res.send(messages[req.body.chat_id]);
    });


app.put('/new_message', function(req, res) {
    console.log(req);
    // if (typeof req.body.chat_id !== 'undefined') {
        store.dispatch({
            type:actionTypes.ADD_NEW_MESSAGE,
            payload:{
                chat_id : req.body.chat_id,
                user_id : req.body.user_id,
                content : req.body.content,
                added_at : req.body.added_at,
                time : req.body.time,
                file : req.body.file
            }
        });
        res.send(store.getState().messages[req.body.chat_id]);
    //     if(!(req.body.chat_id in messages)) {
    //         return res.status(400).send('No chat id');
    //     }
    //     res.send("ok");
    // }
    // return res.status(400).send('No chat id');
});

app.listen('8081');

