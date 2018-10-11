const say = function (some_text) {
    var new_block=document.createElement('div');
    new_block.className="text_div";
    new_block.innerHTML=some_text;
    document.body.appendChild(new_block);
} 

export default say;