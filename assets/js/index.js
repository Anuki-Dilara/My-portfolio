

var typed = new Typed(".auto-typed",{
    strings: ["Front-End Developer","Graphic Designer"],
    typeSpeed: 150,
    backSped: 150,
    loop: true
})
var type = new Type(".auto-type",{
    strings: ["Anuki Dilara","Anuki Dilara"],
    typeSpeed: 150,
    backSped: 150,
    loop: true
})

/*let text = document.querySelector(".text p");

text.innerHTML = text.innerHTML.split("").map((char,i)=>
    '<b style="transform:rotate(${i * 6.3}deg")>${char}</b>'
).join("");*/

let text = document.querySelector(".text p");
text.innerHTML = text.innerHTML.split("").map((char, i) =>
    `<b style="transform:rotate(${i * 10}deg)">${char}</b>`
).join("");