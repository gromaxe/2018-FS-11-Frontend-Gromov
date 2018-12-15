import React from "react";
import ReactDOM from "react-dom";
import connect from "react-redux/es/connect/connect";
// import Chat from "./Chat";

class MessageContainer extends React.Component {
    constructor(props) {
        super(props);
        // this.submitMessage = this.submitMessage.bind(this);
    }

    componentDidMount() {
        this.scrollToBot();
    }

    componentDidUpdate() {
        this.scrollToBot();
    }

    scrollToBot() {
        //ReactDOM.findDOMNode(this.refs.chats).scrollTop = ReactDOM.findDOMNode(this.refs.chats).scrollHeight;
    }
    render() {
        return (
            <div id="messages">{
            this.props.messages.map(i =>
                 <div className={"message"+
                            (this.props.chat_owner === i.user_id ? "My" : "Smb")}
                      id={i.added_at}
                 >
                     <div className="msgText">
                         {i.content}
                     </div>

                     <div className="msgTime">
                         {i.time}
                     </div>
                 </div>
            )}
            </div>

        );
    }
}

const mapStateToProps = (state)=>{
    return {
        messages: state.messages[state.current_page.chat_id],
        chat_owner: state.current_page.page.chat_owner
    }
};

export default connect(mapStateToProps)(MessageContainer);