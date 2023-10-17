window.addEventListener("scroll", function() {
    // var header = document.getElementsByClassName("nav-content");
    var header = this.document.querySelector(".nav-content");
    header.classList.toggle("sticky", window.scrollY>10);
    
    if (this.window.innerWidth<=991) {
        header.classList.remove("sticky");
    }
})

var hamburger = document.getElementById("hamburger-icon");
var hamburgerIcon = document.getElementById("hamburger-icon-menu");
var navMenu = document.getElementById("navMenu1");
var closeButton = document.getElementById("close-button");
var closeWhiteButton = document.getElementById("close-button-white");

// function navShow() {
//     navMenu.classList.add("show");
//     hamburger.classList.remove("hide");
// }

// hamburger.addEventListener("onClick", function(){
//     navMenu.classList.add("show");
//     // hamburger.classList.remove("hide");
// })

// 

function navHide() {
     hamburgerIcon.checked = false;
     hamburger.style.display = "block";
     navMenu.style.display = "none";
     closeButton.style.display = "none";
     

    //  if(window.innerWidth > 991) {
    //     hamburger.style.display = "none";
    //     navMenu.style.display = "block";
    //  }
    
    // if (window.innerWidth<=991) {
    //     hamburger.style.display = "block";
    //     navMenu.style.display = "none";
    //     closeButton.style.display = "none";
    //     closeWhiteButton.style.display= "none";
    // }
    
}

function navHide2() {
    // hamburger.style.display = "block";
    // navMenu.style.display = "none";
    hamburgerIcon.checked = false;
    hamburger.style.display = "block";
    navMenu.style.display = "none";
    closeWhiteButton.style.display = "none";
}

 