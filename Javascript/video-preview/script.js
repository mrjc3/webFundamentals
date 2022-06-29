function start(element) {
    document.getElementById("vid").defaultMuted = true;
    element.play()
}

function stop(element) {
    element.pause()
}