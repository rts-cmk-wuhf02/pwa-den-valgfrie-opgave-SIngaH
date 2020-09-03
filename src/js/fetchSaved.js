//check what to hide and what to show
let haveSaved = document.querySelector("#saved-text");

let aCheck = localStorage.getItem("artSaved");
let hCheck = localStorage.getItem("homeSaved");
let sCheck = localStorage.getItem("scienceSaved");
let uCheck = localStorage.getItem("usSaved");
let wCheck = localStorage.getItem("worldSaved"); 

let artHide = document.querySelector(".arts");
let homeHide = document.querySelector(".home");
let scienceHide = document.querySelector(".science");
let usHide = document.querySelector(".us");
let worldHide = document.querySelector(".world");

if(aCheck === "" || aCheck == null || aCheck == "false"){
    artHide.classList.add("hide")
}else{
    artHide.classList.remove("hide");
    haveSaved.classList.add("hide");
}

if(hCheck === "" || hCheck == null || hCheck == "false"){
    homeHide.classList.add("hide")
}else{
    homeHide.classList.remove("hide");
    haveSaved.classList.add("hide");
}

if(sCheck === "" || sCheck == null || sCheck == "false"){
    scienceHide.classList.add("hide")
}else{
    scienceHide.classList.remove("hide");
    haveSaved.classList.add("hide");
}

if(uCheck === "" || uCheck == null || uCheck == "false"){
    usHide.classList.add("hide")
}else{
    usHide.classList.remove("hide");
    haveSaved.classList.add("hide");
}

if(wCheck === "" || wCheck == null || wCheck == "false"){
    worldHide.classList.add("hide")
}else{
    worldHide.classList.remove("hide");
    haveSaved.classList.add("hide");
}

//arrows
let arrows = document.querySelectorAll(".fa-arrow-circle-down");
for (let i = 0; i < arrows.length; i++) {
    arrows[i].addEventListener("click", ()=>{
        arrows[i].classList.toggle("arrow-down");        
        let fetchDiv = arrows[i].parentElement.parentElement.children[1];
        console.log(fetchDiv)
        fetchDiv.classList.toggle("hide");
        whichFetch(i);
    })
}

//what am i fetching?
function whichFetch(i){
    if(i == 0){
        fetcher("https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=qjwHcoRE4GmDuNEDXOXdX0s2ie1TDjAN", artInsert, "art", aCheck);
    }else if(i == 1){
        fetcher("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=qjwHcoRE4GmDuNEDXOXdX0s2ie1TDjAN", homeInsert, "home", hCheck);
    }else if(i == 2){
        fetcher("https://api.nytimes.com/svc/topstories/v2/science.json?api-key=qjwHcoRE4GmDuNEDXOXdX0s2ie1TDjAN", scienceInsert, "science", sCheck);
    }else if(i == 3){
        fetcher("https://api.nytimes.com/svc/topstories/v2/us.json?api-key=qjwHcoRE4GmDuNEDXOXdX0s2ie1TDjAN", usInsert, "us", uCheck);
    }else if(i == 4){
        fetcher("https://api.nytimes.com/svc/topstories/v2/world.json?api-key=qjwHcoRE4GmDuNEDXOXdX0s2ie1TDjAN", worldInsert, "world", wCheck);
    }
}

let artInsert = document.querySelector(".insert-saved-arts");
let homeInsert = document.querySelector(".insert-saved-home");
let scienceInsert = document.querySelector(".insert-saved-science");
let usInsert = document.querySelector(".insert-saved-us");
let worldInsert = document.querySelector(".insert-saved-world");

function fetcher(url, fetchIt, name, ls){
    fetch(url)
    .then(response => response.json())
    .then(result => {
        console.log(ls + " hihi")
        result.results.forEach((article, index) => {
            let array = ls.split(",");
            let indexQuote = `${index}`;
            if(array.includes(indexQuote)){
                fetchIt.innerHTML+=`
                <div class="inserted">
                    <div class="img-save">
                        <img src="` + article.multimedia[0].url + `" alt="` + article.title + `">
                        <i id="` + index + " " + name + `" class="fas fa-trash"></i>
                        <a href="` + article.short_url + `" target="_blank"><i class="fas fa-link"></i></a>
                    </div>
                    <h3>` + article.title +`</h3>
                    <div class="description-byline">
                        <p>` + article.abstract + `</p>
                        <p class="byline">` + article.byline + `</p>
                    </div>
                </div>
                `
                //remove from saved
                let trashArray = document.querySelectorAll(".fa-trash");
                for(i = 0; i < trashArray.length; i++){
                    // console.log(trashArray[i]).parentElement
                    trashArray[i].addEventListener("click", (e) => {
                        deleteNews(e)
                        e.path[2].style.display="none"
                    });
                }
                
                function deleteNews(e){
                    let id = e.srcElement.id;
                    let matches = id.match(/(\d+)/); 
                    let index = matches[0];
                    if(id.includes("art")){
                        let array = aCheck.split(",")
                        const theIndex = array.indexOf(index)
                        if(theIndex > -1){
                            array.splice(theIndex, 1)
                        }
                        let aString = array.join(",")
                        localStorage.setItem("artSaved", aString)
                    }else if(id.includes("home")){
                        let array = hCheck.split(",")
                        const theIndex = array.indexOf(index)
                        if(theIndex > -1){
                            array.splice(theIndex, 1)
                        }
                        let aString = array.join(",")
                        localStorage.setItem("homeSaved", aString)                 
                    }else if(id.includes("science")){
                        let array = sCheck.split(",")
                        const theIndex = array.indexOf(index)
                        if(theIndex > -1){
                            array.splice(theIndex, 1)
                        }
                        let aString = array.join(",")
                        localStorage.setItem("scienceSaved", aString)
                    }else if(id.includes("us")){
                        let array = uCheck.split(",")
                        const theIndex = array.indexOf(index)
                        if(theIndex > -1){
                            array.splice(theIndex, 1)
                        }
                        let aString = array.join(",")
                        localStorage.setItem("usSaved", aString)
                    }else if(id.includes("world")){
                        let array = wCheck.split(",")
                        const theIndex = array.indexOf(index)
                        if(theIndex > -1){
                            array.splice(theIndex, 1)
                        }
                        let aString = array.join(",")
                        localStorage.setItem("worldSaved", aString)
                    }
                }
            }
        });
    });
}