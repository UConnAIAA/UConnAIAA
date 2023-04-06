let btn = document.getElementById('menu-btn');
let overlays=document.getElementById('overlay');
let mobile=document.getElementById('menu2');
let counters=document.querySelectorAll(".value");
let scrollStart=false;
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
     
 document.addEventListener("scroll",scrollPos);
 function scrollPos(){
      let scroll=window.scrollY;
    //   console.log(scroll);
    if(scroll>80 && !scrollStart){
        countUp();
        scrollStart=true;
    }
    else(scroll<80 && scrollStart)
        { 
            reset();
            scrollStart=false;
        }
    
 }
    
function countUp(){
    counters.forEach((counter)=>{
        // console.log(counter);
        counter.innerText="0";
        function update(){
            const target= Number(counter.getAttribute('data-target'));
     const c =  Number(counter.innerText);

    //  create increment /
    const increment=target/100;
    if(c<target){
        // round up value by increment 
        counter.innerText=`${Math.ceil(c+increment)}`;
        setTimeout(update,85);
    }
    else{
        counter.innerText=target;
    }
        }
        update();
    })
};


function reset(){
     counters.forEach( function(counter){
   counter.innerText="0";
     })
}
// countUp();