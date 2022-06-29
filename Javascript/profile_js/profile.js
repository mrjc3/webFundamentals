var numrequest = 2


function removeUser1() {
    var userpic = document.querySelector('.requestcontent .todd ');
    var username = document.querySelector('.requestcontent h2');
    var accept = document.querySelector('.requestcontent .acc ');
    var decline = document.querySelector('.requestcontent .dec');
    var button = document.querySelector(".requestbanner button");
    numrequest --;
    button.innerText = numrequest;
    userpic.remove();
    username.remove();
    accept.remove();
    decline.remove();
}


function removeUser2() {
    var userpic = document.querySelector('.requestcontent .phil ');
    var username = document.querySelector('.requestcontent #pname');
    var accept = document.querySelector('.requestcontent #pacc ');
    var decline = document.querySelector('.requestcontent #pdec');
    var button = document.querySelector(".requestbanner button");
    numrequest --;
    button.innerText = numrequest;
    userpic.remove();
    username.remove();
    accept.remove();
    decline.remove();
}

function changeName() {
    var username = document.getElementById('username');
    username.innerText = "John Cartwight";
}