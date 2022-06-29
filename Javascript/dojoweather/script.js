function accept() {
    var cookies = document.querySelector(".cookies");
    cookies.remove();
}

function newTemp(element) {
    let todayhi = document.querySelector(".today .hi");
    let todaylow = document.querySelector(".today .low");
    let tomorrowhi = document.querySelector(".tomorrow .hi");
    let tomorrowlow = document.querySelector(".tomorrow .low");
    let fridayhi = document.querySelector(".friday .hi");
    let fridaylow = document.querySelector(".friday .low");
    let saturdayhi = document.querySelector(".saturday .hi");
    let saturdaylow = document.querySelector(".saturday .low");
    if(element.value == "celcius") {
        todayhi.innerText = "24°";
        todaylow.innerText = "18°";
        tomorrowhi.innerText = "27°";
        tomorrowlow.innerText = "19°";
        fridayhi.innerText = "21°";
        fridaylow.innerText = "16°";
        saturdayhi.innerText = "26°";
        saturdaylow.innerText = "21°";
    } else {
            todayhi.innerText = "75°";
            todaylow.innerText = "65°";  
            tomorrowhi.innerText = "80°";
            tomorrowlow.innerText = "66°";  
            fridayhi.innerText = "69°";
            fridaylow.innerText = "61°";  
            saturdayhi.innerText = "78°";
            saturdaylow.innerText = "70°";  
    }
}