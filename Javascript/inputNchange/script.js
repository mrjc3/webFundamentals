var foodToOrder = "Pizza";

function setName(element) {
    var namespan = document.querySelector('#name');
    console.log(element.value);
    namespan.innerText = element.value;
}

function pickFood(element) {
    console.log("the food is " + element.value);
    foodToOrder = element.value;
}

function order() {
    alert("Ordering a " + foodToOrder)

}