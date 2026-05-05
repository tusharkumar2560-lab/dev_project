const themeBtn = document.getElementById("themeBtn");
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

themeBtn.onclick = () => {
    document.body.classList.toggle("dark");
};

menuBtn.onclick = () => {
    navMenu.classList.toggle("show");
};

/* animation */
const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll(".fade-up").forEach(el=>{
    observer.observe(el);
});



const modal = document.getElementById("bookingModal");
const open1 = document.getElementById("openModal");
const open2 = document.getElementById("openModal2");
const close = document.getElementById("closeModal");

open1.onclick = ()=> modal.classList.add("active");
open2.onclick = ()=> modal.classList.add("active");
close.onclick = ()=> modal.classList.remove("active");

window.onclick = (e)=>{
    if(e.target==modal){
        modal.classList.remove("active");
    }
};