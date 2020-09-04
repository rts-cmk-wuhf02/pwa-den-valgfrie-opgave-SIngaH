//after a direct fetch the pc said too many fetches so fetch here is triggered by click
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

//then i call the fetcher function with all the info i will need later
function whichFetch(i){
    if(i == 0){
        fetcher("https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=qjwHcoRE4GmDuNEDXOXdX0s2ie1TDjAN", artInsert, "art");
    }else if(i == 1){
        fetcher("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=qjwHcoRE4GmDuNEDXOXdX0s2ie1TDjAN", homeInsert, "home");
    }else if(i == 2){
        fetcher("https://api.nytimes.com/svc/topstories/v2/science.json?api-key=qjwHcoRE4GmDuNEDXOXdX0s2ie1TDjAN", scienceInsert, "science");
    }else if(i == 3){
        fetcher("https://api.nytimes.com/svc/topstories/v2/us.json?api-key=qjwHcoRE4GmDuNEDXOXdX0s2ie1TDjAN", usInsert, "us");
    }else if(i == 4){
        fetcher("https://api.nytimes.com/svc/topstories/v2/world.json?api-key=qjwHcoRE4GmDuNEDXOXdX0s2ie1TDjAN", worldInsert, "world");
    }
}
let artInsert = document.querySelector(".insert-arts");
let homeInsert = document.querySelector(".insert-home");
let scienceInsert = document.querySelector(".insert-science");
let usInsert = document.querySelector(".insert-us");
let worldInsert = document.querySelector(".insert-world");

//normal fetch function
function fetcher(url, fetchIt, name){
    fetch(url)
    .then(response => response.json())
    .then(result => {
        console.log(result)
        result.results.forEach((article, index) => {
            let description;
            if(article.abstract.length > 100){
                description = article.abstract.slice(0, 50) + "...";
            }else{
                description = article.abstract;
            }
            fetchIt.innerHTML+=`
                <div class="inserted">
                    <div class="img-save">
                        <img src="` + article.multimedia[0].url + `" alt="` + article.title + `">
                        <i id="` + index + " " + name + `" class="far fa-save category-save"></i>
                        <a href="` + article.short_url + `" target="_blank"><i class="fas fa-link"></i></a>
                    </div>
                    <h3>` + article.title +`</h3>
                    <div class="description-byline">
                        <p>` + description + `</p>
                        <p class="byline">` + article.byline + `</p>
                    </div>
                </div>
            `
            //save a news story
            let categorySave = document.querySelectorAll(".category-save");
            for (i = 0; i < categorySave.length; i++) {
                categorySave[i].addEventListener("click", (e, prevString, prevArray)=>{
                    saveNews(e, prevString, prevArray);
                });   
              }
            });
            
            function saveNews(e, prevString, prevArray){
                let id = e.srcElement.id;
                let matches = id.match(/(\d+)/); 
                let index = matches[0];
                if(id.includes("art")){
                    prevString = localStorage.getItem("artSaved");
                    prevArray = prevString ? prevString.split(",") : []; 
                    if(index != ""){
                        if (!localStorage.getItem("artSaved") || !prevArray.includes(index)) {
                        prevArray.push(index);
                        }
                        prevString = prevArray.join(",");
                        localStorage.setItem("artSaved", prevString);
                    }
                }else if(id.includes("home")){
                    prevString = localStorage.getItem("homeSaved");
                    prevArray = prevString ? prevString.split(",") : []; 
                    if(index != ""){
                        if (!localStorage.getItem("homeSaved") || !prevArray.includes(index)) {
                        prevArray.push(index);
                        }
                        prevString = prevArray.join(",");
                        localStorage.setItem("homeSaved", prevString);
                    }
                }else if(id.includes("science")){
                    prevString = localStorage.getItem("scienceSaved");
                    prevArray = prevString ? prevString.split(",") : []; 
                    if(index != ""){
                        if (!localStorage.getItem("scienceSaved") || !prevArray.includes(index)) {
                        prevArray.push(index);
                        }
                        prevString = prevArray.join(",");
                        localStorage.setItem("scienceSaved", prevString);
                    }
                }else if(id.includes("us")){
                    prevString = localStorage.getItem("usSaved");
                    prevArray = prevString ? prevString.split(",") : []; 
                    if(index != ""){
                        if (!localStorage.getItem("usSaved") || !prevArray.includes(index)) {
                        prevArray.push(index);
                        }
                        prevString = prevArray.join(",");
                        localStorage.setItem("usSaved", prevString);
                    }
                }else if(id.includes("world")){
                    prevString = localStorage.getItem("worldSaved");
                    prevArray = prevString ? prevString.split(",") : []; 
                    if(index != ""){
                        if (!localStorage.getItem("worldSaved") || !prevArray.includes(index)) {
                        prevArray.push(index);
                        }
                        prevString = prevArray.join(",");
                        localStorage.setItem("worldSaved", prevString);
                    }
                }

                
            }

    });
}