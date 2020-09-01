let colorCheck = localStorage.getItem("bgColor");

//checks if color has been chosen before
if(colorCheck !== null || colorCheck === ""){
    changeBg(colorCheck);
}

function changeBg(i){
        localStorage.setItem("bgColor", i);
        if(i == 0){
            document.documentElement.style.setProperty('--bg-color', '#1ecbe1');
        }else if(i == 1){
            document.documentElement.style.setProperty('--bg-color', '#abb0b2');
        }else if(i == 2){
            document.documentElement.style.setProperty('--bg-color', '#00ff27');
        }else if(i == 3){
            document.documentElement.style.setProperty('--bg-color', '#f10ed0');
        }
}

// for the settings site
if ( document.URL.includes("settings") ) {
    let colorCheck = localStorage.getItem("bgColor");
    let colors = document.querySelectorAll(".color-check");

    //checks if color has been chosen before
    if(colorCheck !== null || colorCheck === ""){
        colorChoose(colorCheck);
    }
    
    for (let i = 0; i < colors.length; i++) {
        colors[i].addEventListener("click", ()=>{
            colorChoose(i)
        })
    }
    
    function colorChoose(i){
        let currentColor = colors[i].children[0];
        localStorage.setItem("bgColor", i);
        if(i == 0){
            document.documentElement.style.setProperty('--bg-color', '#1ecbe1');
            currentColor.classList.add("fa-check");
            currentColor.classList.remove("fa-times");
            
            colors[1].children[0].classList.add("fa-times");
            colors[1].children[0].classList.remove("fa-check");
            
            colors[2].children[0].classList.add("fa-times");
            colors[2].children[0].classList.remove("fa-check");
            
            colors[3].children[0].classList.add("fa-times");
            colors[3].children[0].classList.remove("fa-check");
        }else if(i == 1){
            document.documentElement.style.setProperty('--bg-color', '#abb0b2');
            currentColor.classList.add("fa-check");
            currentColor.classList.remove("fa-times");
            
            colors[0].children[0].classList.add("fa-times");
            colors[0].children[0].classList.remove("fa-check");
            
            colors[2].children[0].classList.add("fa-times");
            colors[2].children[0].classList.remove("fa-check");
            
            colors[3].children[0].classList.add("fa-times");
            colors[3].children[0].classList.remove("fa-check");
        }else if(i == 2){
            document.documentElement.style.setProperty('--bg-color', '#00ff27');
            currentColor.classList.add("fa-check");
            currentColor.classList.remove("fa-times");
            
            colors[1].children[0].classList.add("fa-times");
            colors[1].children[0].classList.remove("fa-check");
            
            colors[0].children[0].classList.add("fa-times");
            colors[0].children[0].classList.remove("fa-check");
            
            colors[3].children[0].classList.add("fa-times");
            colors[3].children[0].classList.remove("fa-check");
        }else if(i == 3){
            document.documentElement.style.setProperty('--bg-color', '#f10ed0');
            currentColor.classList.add("fa-check");
            currentColor.classList.remove("fa-times");
            
            colors[1].children[0].classList.add("fa-times");
            colors[1].children[0].classList.remove("fa-check");

            colors[2].children[0].classList.add("fa-times");
            colors[2].children[0].classList.remove("fa-check");
        
            colors[0].children[0].classList.add("fa-times");
            colors[0].children[0].classList.remove("fa-check");
        }
    }
}