import {MyMessage} from "../message";

const buildInterface = function () {
    const container = document.createElement('div');
    container.id = 'container';
    document.body.appendChild(container);
    const upperPanel = document.createElement('div');
    upperPanel.id = 'upperPanel';
    document.getElementById('container').appendChild(upperPanel);
    const header = document.createElement('div');
    header.id = 'header';
    document.getElementById('container').appendChild(header);
    const main = document.createElement('div');
    main.id = 'main';
    document.getElementById('container').appendChild(main);
    const footer = document.createElement('div');
    footer.id = 'footer';
    document.getElementById('container').appendChild(footer);

    const messageField = document.createElement('input');
    messageField.id = 'messageField';
    document.getElementById('footer').appendChild(messageField);

    const messageActions = document.createElement('div');
    messageActions.id = 'messageActions';
    document.getElementById('footer').appendChild(messageActions);
};

const add_minor_elements = function(){
    const arrow_back = document.createElement('img');
    arrow_back.id = 'arrow_back';
    arrow_back.src = '../../static/ic_arrow_back_white_24dp.png';
    arrow_back.style.position = 'relative';
    arrow_back.style.left = '20px';
    arrow_back.style.top = '20px';
    arrow_back.style.height = '16px';
    arrow_back.style.width = '16px';
    document.getElementById('header').appendChild(arrow_back);

    const search = document.createElement('img');
    search.id = 'search';
    search.src = '../../static/ic_search_white_24dp.png';
    search.style.position = 'relative';
    search.style.left = 'calc(100% - 80px)';
    search.style.top = '20px';
    search.style.height = '16px';
    search.style.width = '16px';
    document.getElementById('header').appendChild(search);

    const more_vert = document.createElement('img');
    more_vert.id = 'more_vert';
    more_vert.src = '../../static/ic_more_vert_white_24dp.png';
    more_vert.style.position = 'relative';
    more_vert.style.left = 'calc(100% - 60px)';
    more_vert.style.top = '20px';
    more_vert.style.height = '16px';
    more_vert.style.width = '16px';
    document.getElementById('header').appendChild(more_vert);

    const attachment = document.createElement('img');
    attachment.id = 'attachment';
    attachment.src = '../../static/ic_attachment_black_24dp.png';
    attachment.style.position = 'relative';
    attachment.style.left = '5px';
    attachment.style.top = '20px';
    attachment.style.height = '16px';
    attachment.style.width = '16px';
    document.getElementById('messageActions').appendChild(attachment);

    const send = document.createElement('img');
    send.id = 'send';
    send.src = '../../static/ic_send_black_24dp.png';
    send.style.position = 'relative';
    send.style.left = '20px';
    send.style.top = '20px';
    send.style.height = '16px';
    send.style.width = '16px';
    send.onclick = function(){
        var sendMsg = new CustomEvent("sendMsg", {bubbles: true});
        this.dispatchEvent(sendMsg);
    };
    document.getElementById('messageActions').appendChild(send);


    const SmbMsg = new MyMessage();
    SmbMsg.className = 'messageSmb';
    SmbMsg.innerHTML = 'Hello there!';
    document.getElementById('main').appendChild(SmbMsg);

    document.getElementById("messageField").addEventListener("keypress", function(){
        if (event.keyCode === 13) {
            var sendMsg = new CustomEvent("sendMsg", {bubbles: true});
            this.dispatchEvent(sendMsg);
        }
    });

    document.addEventListener("sendMsg", function(){
        const NewMsg = new MyMessage();
        NewMsg.className = 'messageMy';
        NewMsg.innerHTML = document.getElementById("messageField").value;
        document.getElementById("messageField").value = '';
        document.getElementById('main').appendChild(NewMsg);
    });
};
export {buildInterface};
export {add_minor_elements};