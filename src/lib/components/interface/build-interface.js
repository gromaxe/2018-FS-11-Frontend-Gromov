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
};

const add_minor_elements = function(){
    const arrow_back = document.createElement('img');
    arrow_back.src = 'static/ic_arrow_back_white_24dp.png';
    arrow_back.style.position = 'relative';
    arrow_back.style.left = '20px';
    arrow_back.style.top = '20px';
    arrow_back.style.height = '16px';
    arrow_back.style.width = '16px';
    document.getElementById('header').appendChild(arrow_back);

    const search = document.createElement('img');
    search.src = 'static/ic_search_white_24dp.png';
    search.style.position = 'relative';
    search.style.left = 'calc(100% - 80px)';
    search.style.top = '20px';
    search.style.height = '16px';
    search.style.width = '16px';
    document.getElementById('header').appendChild(search);

    const more_vert = document.createElement('img');
    more_vert.src = 'static/ic_more_vert_white_24dp.png';
    more_vert.style.position = 'relative';
    more_vert.style.left = 'calc(100% - 60px)';
    more_vert.style.top = '20px';
    more_vert.style.height = '16px';
    more_vert.style.width = '16px';
    document.getElementById('header').appendChild(more_vert);

    const attachment = document.createElement('img');
    attachment.src = 'static/ic_attachment_black_24dp.png';
    attachment.style.position = 'relative';
    attachment.style.left = 'calc(100% - 32px)';
    attachment.style.top = '20px';
    attachment.style.height = '16px';
    attachment.style.width = '16px';
    document.getElementById('footer').appendChild(attachment);

    const send = document.createElement('img');
    send.src = 'static/ic_send_black_24dp.png';
    send.style.position = 'relative';
    send.style.left = 'calc(100% - 80px)';
    send.style.top = '20px';
    send.style.height = '16px';
    send.style.width = '16px';
    document.getElementById('footer').appendChild(send);
}


buildInterface();
add_minor_elements();
