const say = function (some_text) {
    var new_block=document.createElement('div');
    new_block.style.position='absolute'
    new_block.style.textAlign='center';
    new_block.style.top='50%';
    new_block.style.left='50%';
    new_block.style.width='200px';
    new_block.style.height='100px';
    new_block.style.backgroundColor='#4283c4';
    new_block.innerHTML=some_text;
    document.body.appendChild(new_block);
} 

export default say;