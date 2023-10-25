/*preloader*/
var loader = document.getElementById("preloader");
window.addEventListener("load",function (){
    loader.style.display = "none";
})

/*scroll section*/
let sections = document.querySelectorAll('section');
let section = document.querySelectorAll('header nav a');

window.onscroll = () =>{
    /*sticky header*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY>100);

    /*remove icon and navbar when click navbar*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}


/*menu icon*/
let menuIcon = document.querySelector('#menu-icon');
let navbar =document.querySelector('.nav_bar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

/*home section multi typing*/
const text = document.querySelector(".sec-text");
const textLoad = () => {
    setTimeout(() =>{
        text.textContent = "Front-End Developer";
    },0);
    setTimeout(() =>{
        text.textContent = "Graphic Designer";
    },4000);
}
textLoad();
setInterval(textLoad,8000);

/*portfolio filter*/
const filterButtons = document.querySelector("#filter-btns").children;
const items = document.querySelector(".portfolio-gallery").children;

for (let  i =0; i< filterButtons.length; i++){
    filterButtons[i].addEventListener("click", function (){
        for (let  j=0; j<filterButtons.length;j++){
            filterButtons[j].classList.remove("active")
        }
        this.classList.add("active");
        const target = this.getAttribute("data-target")

        for (let k=0; k<items.length;k++){
            items[k].style.display = "none";
            if (target == items[k].getAttribute("data-id")){
                items[k].style.display = "block";
            }
            if (target == "all"){
                items[k].style.display = "block";
            }
        }
    })

}

