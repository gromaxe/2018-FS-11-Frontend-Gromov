export const initialStore = {
    current_page:{
        page:"chatList"
    },
    user_id:1,
    is_authorized:false,
    chats: [{
        chat_owner : 1,
        chat_id: 0,
        chatIcon: "/chatIcon1.png",
        chatTitle: "Chat_1",
        last_msg: "Hello there!",
        last_msg_time: (new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', hour12: false})),
        unread_msg: 4,
        notifications:false
    }, {
        chat_owner : 0,
        chat_id: 1,
        chatIcon: "/chatIcon2.png",
        chatTitle: "Chat_2",
        last_msg: "General Kenobi!",
        last_msg_time: (new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', hour12: false})),
        unread_msg: 5,
        is_notifications:true
    }, {
        chat_owner : 2,
        chat_id: 2,
        chatIcon: "/chatIcon3.png",
        chatTitle: "Chat_3",
        last_msg: "Tired of dead memes",
        last_msg_time: (new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', hour12: false})),
        unread_msg: 0,
        is_notifications:true
    }],
    messages:{
        0:[{
            user_id : 2,
            content : "Some text here",
            added_at : (new Date().getTime()),
            time : (new Date().toLocaleTimeString('en-GB')),
            file:null
        },{
            user_id : 1,
            content : "Well then",
            added_at : (new Date().getTime()),
            time : (new Date().toLocaleTimeString('en-GB')),
            file:null
        }],
        1:[{
            user_id : 2,
            content : "Well, you know!",
            added_at : (new Date().getTime()),
            time : (new Date().toLocaleTimeString('en-GB')),
            file:null
        },{
            user_id : 1,
            content : "I am something of a programmer myself!",
            added_at : (new Date().getTime()),
            time : (new Date().toLocaleTimeString('en-GB')),
            file:null
        }],
        2:[{
            user_id : 2,
            content : "Hello there!",
            added_at : (new Date().getTime()),
            time : (new Date().toLocaleTimeString('en-GB')),
            file:null
        },{
            user_id : 1,
            content : "General Kenobi!",
            added_at : (new Date().getTime()),
            time : (new Date().toLocaleTimeString('en-GB')),
            file:null
        }]
    }
};

