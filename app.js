const sideBar =document.getElementById("navbarDrop")
const contactDrop = document.getElementById("dropContact")


function show (element ){
    if(element === "navbar"){
        sideBar.classList.remove("hide")
    }

    if(element=== "dropContact"){
        contactDrop.classList.remove("hide")
    }
}



function hide (obj){
    if(obj === "nav" ){
        sideBar.classList.add("hide")
    } 
    else{
        contactDrop.classList.add("hide")
    }
      
}


const burguer = document.getElementById("burguer").addEventListener("click", ()=>{ show ("navbar")})
const contactBtn= document.getElementById("contactBtn").addEventListener("click", ()=>{ show ("dropContact")})
const closeNav= document.getElementById("closeNavBar").addEventListener("click", ()=> {hide("nav")} )
const closeContact =document.getElementById("closeContact").addEventListener("click", ()=> {hide ("contact")})