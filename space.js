let btn = document.getElementById('menu-btn');
let overlays=document.getElementById('overlay');
let mobile=document.getElementById('menu2');
// let counter=document.querySelector(".value");
btn.addEventListener('click',fun);
function fun(){
    btn.classList.toggle('open');
    overlays.classList.toggle('show');
    document.body.classList.toggle('scrolling');
    mobile.classList.toggle('quick');
}

let loader = document.querySelector(".preloader");
window.addEventListener("load", () => {
    loader.classList.add("preloader--hidden");
})
let load2 = document.querySelector(".logo")
load2.addEventListener("click", () => {
    window.addEventListener("load", () => {
        loader.classList.add("preloader--hidden");
    })
    window.location.reload(true);
})
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
