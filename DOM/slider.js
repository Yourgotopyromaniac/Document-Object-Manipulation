const navbar = document.querySelector(".slider");
const butt = document.querySelector(".buttEx");

butt.innerHTML = "expand" ;

function buttExpand()
{
    butt.innerHTML = "collapse";
    navbar.style.transition = "0.5s" ;
    navbar.classList.toggle("expanded");
    
}

butt.addEventListener("click", buttExpand)