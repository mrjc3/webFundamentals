function custom() {
    console.log("This message is coming from script.js")
}

function turtles() {
    console.log("I love TURTLES!!!!")
}

var num = 0
function counter() {
    num += 1
    console.log(num)
}

// element gives us access to "this" 
function example(element) {
    console.log("This is just a string", element)
}

function turnOff(element) {
    element.innerText = "Off";
}

function hide() {
    element.remove()
}