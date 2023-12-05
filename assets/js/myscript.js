const navbar = document.getElementById("navbar");
const hamburgerIcon = document.getElementById("hamburger-icon");
const navMenuMb = document.getElementById("navbar-mb-ul");
const closeIcon = document.getElementById("close-icon");

window.addEventListener("scroll", function(){
    navbar.classList.toggle("sticky", window.scrollY>10);

    
})

hamburgerIcon.addEventListener("click", function(){
    navMenuMb.style.display = "flex";
    navMenuMb.style.right = "0";
    closeIcon.style.display = "block";

})

closeIcon.addEventListener("click", function(){
    navMenuMb.style.display = "none";
    closeIcon.style.display = "none";

})