const menu=document.querySelector(".menu");
const line1=document.querySelector(".line-1");
const line2=document.querySelector(".line-2");
const line3=document.querySelector(".line-3");
const nav=document.querySelector(".navbar");
menu.addEventListener("click",function(){
    line1.classList.toggle("clicked-1");
    line2.classList.toggle("clicked-2");
    line3.classList.toggle("clicked-3");
    nav.classList.toggle("clicked-nav");
})