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