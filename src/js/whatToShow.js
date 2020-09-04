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

let myArray = [];

//what categories should i show
if(artChecking == "false"){
    hideArt.style.display ="none";
}else{
    myArray.push(0)
}
if(homeChecking == "false"){
    hideHome.style.display ="none";
}else{
    myArray.push(1)
}
if(scienceChecking == "false"){
    hideScience.style.display ="none";
}else{
    myArray.push(2)
}
if(usChecking == "false"){
    hideUs.style.display ="none";
}else{
    myArray.push(3)
}
if(worldChecking === "false"){
    hideWorld.style.display ="none";
    border(myArray);
}else{
    myArray.push(4)
    border(myArray);
}

// sætter en border øverst og nederst
function border (myArray){
    let lastInArray = myArray.length - 1;
    let borderCategories = document.querySelectorAll(".category");
    borderCategories[myArray[0]].style.borderTop = "solid 2px var(--font-color)";
    borderCategories[lastInArray].style.borderBottom = "solid 2px var(--font-color)"
}