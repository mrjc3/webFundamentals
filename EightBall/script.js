var lifesAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];

function getAnswer() {
    var i = Math.floor(Math.random() * lifesAnswers.length);
    document.getElementById("answer").innerHTML = lifesAnswers[i];
}


function replace() {
    document.getElementById("question").value = "";
}


function pictureChange() {
    document.getElementById('ball').src="ball.gif";
    setTimeout(function(){
        document.getElementById('ball').src="ballStill.jpg"
    }, 2000);
}