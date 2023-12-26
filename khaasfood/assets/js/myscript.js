let categoryBtn = document.getElementById("category-btn");
let menuBtn = document.getElementById("menu-btn");
let categoryList = document.getElementById("category-list");
let menuList = document.getElementById("menu-list");
let categoryMenuContainer = document.getElementById("category-menu-container");
let hamburger = document.getElementById("hamburger");
let closeMenu = document.getElementById("close-menu");
let mbSearch = document.getElementById("mb-search");
let cartMb = document.getElementById("cart-mb");

// mobile version
closeMenu.addEventListener("click", ()=> {
    hamburger.style.display = "block";
    categoryMenuContainer.classList.toggle("hidden");
    mbSearch.classList.remove("hidden");
    cartMb.classList.remove("hidden");

})

hamburger.addEventListener("click", function(){
    hamburger.style.display="none";
    categoryMenuContainer.classList.toggle("hidden");
    mbSearch.classList.add("hidden");
    cartMb.classList.add("hidden");
})

menuBtn.addEventListener("click", ()=> {
    categoryList.classList.add("hidden");
    menuBtn.classList.add("category-menu-style");
    menuList.classList.remove("hidden");
    categoryBtn.classList.remove("category-menu-style");
})

categoryBtn.addEventListener("click", ()=> {
    menuList.classList.add("hidden");
    categoryBtn.classList.add("category-menu-style");
    categoryList.classList.remove("hidden");
    menuBtn.classList.remove("category-menu-style");
})