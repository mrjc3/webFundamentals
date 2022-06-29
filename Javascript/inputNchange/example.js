
function codeToRunLater() {
    for(var i = 0; i < 11; i++) {
        console.log("running: " + i);
    }
}

// Dont have to call the function with () while using setTimeout
// look up event loop
setTimeout(codeToRunLater, 5000);
console.log("END!");


