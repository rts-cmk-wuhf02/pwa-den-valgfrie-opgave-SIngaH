let artChecking = localStorage.getItem("category-arts");
let homeChecking = localStorage.getItem("category-home");
let scienceChecking = localStorage.getItem("category-science");
let usChecking = localStorage.getItem("category-us");
let worldChecking = localStorage.getItem("category-world");

let artChange = document.querySelector("#category-arts .fas");
let homeChange = document.querySelector("#category-home .fas");
let scienceChange = document.querySelector("#category-science .fas");
let usChange = document.querySelector("#category-us .fas");
let worldChange = document.querySelector("#category-world .fas");

if(artChecking == "true" || artChecking == null || artChecking == ""){
    artChange.classList.add("fa-check");
    artChange.classList.remove("fa-times");
}else{
    artChange.classList.add("fa-times");
    artChange.classList.remove("fa-check");
}
if(homeChecking == "true" || homeChecking == null || artChecking == ""){
    homeChange.classList.add("fa-check");
    homeChange.classList.remove("fa-times");
}else{
    homeChange.classList.add("fa-times");
    homeChange.classList.remove("fa-check")
}
if(scienceChecking == "true" || scienceChecking == null || scienceChecking == ""){
    scienceChange.classList.add("fa-check");
    scienceChange.classList.remove("fa-times");
}else{
    scienceChange.classList.add("fa-times");
    scienceChange.classList.remove("fa-check")
}
if(usChecking == "true" || usChecking == null || usChecking == ""){
    usChange.classList.add("fa-check");
    usChange.classList.remove("fa-times");
}else{
    usChange.classList.add("fa-times");
    usChange.classList.remove("fa-check");
}
if(worldChecking === "true" || worldChecking == null || worldChecking == ""){
    worldChange.classList.add("fa-check");
    worldChange.classList.remove("fa-times");
}else{
    worldChange.classList.add("fa-times");
    worldChange.classList.remove("fa-check");
}

let aChosen = document.querySelector("#category-arts");
let hChosen = document.querySelector("#category-home");
let sChosen = document.querySelector("#category-science");
let uChosen = document.querySelector("#category-us");
let wChosen = document.querySelector("#category-world");

let allChecks = document.querySelectorAll(".category-check .fas");
for (let c = 0; c < allChecks.length; c++) {
    allChecks[c].addEventListener("click", (e)=>{
        checkOrEx(e)
    })
}
function checkOrEx(e){
    let currentVorX = e.path[0];
    let TheCategory = e.path[1].id;
    if(currentVorX.classList.contains("fa-check")){
        currentVorX.classList.add("fa-times")
        currentVorX.classList.remove("fa-check")
        localStorage.setItem(TheCategory, false)
    }else{
        currentVorX.classList.remove("fa-times")
        currentVorX.classList.add("fa-check")
        localStorage.setItem(TheCategory, true)
    }
}