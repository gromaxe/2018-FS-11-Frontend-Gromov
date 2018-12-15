const setFileSelector = function () {


    const file_container = document.createElement("INPUT");
    file_container.id = "input";
    file_container.setAttribute("type", "file");
    file_container.setAttribute("multiple", "true");
    file_container.style.display = 'none';
    document.appendChild(file_container);

    // document.getElementById('attachment').onclick = function(){
    //     var myFile = document.querySelector('input[type=file]').files[0];
    //     var image = new Image;
    //     var url = URL.createObjectURL(myFile);
    //     image.onload = () => URL.revokeObjectURL();
    //     image.src = url;
    // }



};

export {setFileSelector};