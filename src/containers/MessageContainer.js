import React from "react";
import connect from "react-redux/es/connect/connect";

class MessageContainer extends React.Component {

    render() {
        return (
            <div id="messages">{
            this.props.message_list.map(i =>
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
        chat_owner: state.current_page.chat_owner,
        user_id: state.user_id
    }
};

export default connect(mapStateToProps)(MessageContainer);