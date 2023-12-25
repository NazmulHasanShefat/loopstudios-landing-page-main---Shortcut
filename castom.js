var navbarI = document.querySelector("#nav-bar-btn");
var navbar = document.querySelector(".nav-items");
var navI2 = document.querySelector("#nav-bar-btn2");

navbarI.onclick = function(){
    navbar.classList.toggle("nav-active");
    navbarI.style.display = "none";
    navI2.style.display = "block";

}
navI2.onclick = function(){
    navbar.classList.toggle("nav-active");
    navbarI.style.display = "block";
    navI2.style.display = "none";
}




document.onclick = function(a){
    if(!navbarI.contains(a.target)&& !navbar.contains(a.target)){
        navbar.classList.remove("nav-active");
        navbarI.style.display = "block";
        navI2.style.display = "none";
    }
}