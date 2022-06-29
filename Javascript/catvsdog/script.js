// Queries the css selector
var animalImg = document.querySelector("#vinyl")
console.log(animalImg)

// function pickvinyl() {
//     // changing the image
//     animalImg.src = "vinyltocat.png"
// }

// function pickyogi() {
//     // changing the image
//     animalImg.src = "yogitocat.png"
// }

function pickvinyl(element) {
    // element.style.backgroundColor = "blue";
    element.remove();
    animalImg.src = "vinyltocat.png";
}

function pickyogi(element) {
    element.classList.add("btn")
    animalImg.src = "yogitocat.png";
}
