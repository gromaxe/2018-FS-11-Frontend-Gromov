import React from "react";
import connect from "react-redux/es/connect/connect";

class MessageContainer extends React.Component {
    constructor(props) {
        super(props);
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
                     <img src ={i.file}  alt={i.file}
                          className="attachment"
                          style={{ display: (i.file===null?'none':'inline-block')}}/>

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