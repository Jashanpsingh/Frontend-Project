// for resposive it collapse at top right
let menuIcon = document.querySelector(".menu-icon");
menuIcon.addEventListener("click", (e)=>{
    let mobileMenu = document.querySelector(".navbar-collapse");
    mobileMenu.classList.toggle("d-block");
})

//pre-loader
let preloader = document.querySelector(".loader");
function preloaderfunc(){
    preloader.style.display = "none";
}