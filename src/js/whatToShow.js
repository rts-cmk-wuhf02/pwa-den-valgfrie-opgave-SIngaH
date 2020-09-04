let artChecking = localStorage.getItem("category-arts");
let homeChecking = localStorage.getItem("category-home");
let scienceChecking = localStorage.getItem("category-science");
let usChecking = localStorage.getItem("category-us");
let worldChecking = localStorage.getItem("category-world");

let hideArt = document.querySelector(".arts");
let hideHome = document.querySelector(".home");
let hideScience = document.querySelector(".science");
let hideUs = document.querySelector(".us");
let hideWorld = document.querySelector(".world");

console.log(artChecking + " art")
console.log(homeChecking + " home")
console.log(scienceChecking + " s")
console.log(usChecking + " us")
console.log(worldChecking + " world")


//what categories should i show
if(artChecking == "false"){
    hideArt.style.display ="none";
    console.log("1")
}
if(homeChecking == "false"){
    hideHome.style.display ="none";
    console.log("2")
}
if(scienceChecking == "false"){
    hideScience.style.display ="none";
}
if(usChecking == "false"){
    hideUs.style.display ="none";
}
if(worldChecking === "false"){
    hideWorld.style.display ="none";
}