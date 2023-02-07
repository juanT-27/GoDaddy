const sideBar =document.getElementById("navbarDrop");
const contactDrop = document.getElementById("dropContact");


function show (element ){
        element.classList.remove("hide")};

function hide (obj){
   obj.classList.add("hide")};


const burguer = document.getElementById("burguer").addEventListener("click", ()=>{ show (sideBar)})
const contactBtn= document.getElementById("contactBtn").addEventListener("click", ()=>{ show (contactDrop)})
const closeNav= document.getElementById("closeNavBar").addEventListener("click", ()=> {hide(sideBar)} )
const closeContact=document.getElementById("closeContact").addEventListener("click", ()=> {hide (contactDrop)})