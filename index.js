
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

/*
let text = document.querySelector(".text p");
text.innerHTML = text.innerHTML.split("").map((char, i) =>
    `<b style="transform:rotate(${i * 10}deg)">${char}</b>`
).join("");*/
