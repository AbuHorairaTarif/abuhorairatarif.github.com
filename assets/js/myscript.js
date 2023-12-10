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
    navMenuMb.style.opacity = "1";
    closeIcon.style.display = "block";

})

closeIcon.addEventListener("click", function(){
    navMenuMb.style.display = "flex";
    closeIcon.style.display = "none";
    navMenuMb.style.transition = "0.7s all";
    navMenuMb.style.right = "-100%";
    navMenuMb.style.opacity = "0";
})

window.addEventListener('scroll',reveal);

function reveal(){
    var reveals = document.querySelectorAll('.reveal');
    for(var i=0;i<reveals.length;i++) {
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('activate');
        }
        else{
            reveals[i].classList.remove('activate');
        }
    }
}