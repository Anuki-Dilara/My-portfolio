function changeHeading1(heading){
    var heading = document.getElementById("heading1");
    let letter = getLetter(heading.textContent);
    heading.textContent = letter;
}

function changeHeading2(){
    var heading = document.getElementById("heading2");
    let letter = getLetter(heading.textContent);
    heading.textContent = letter;
}

function changeHeading3(){
    var heading = document.getElementById("heading3");
    let letter = getLetter(heading.textContent);
    heading.textContent = letter;
}

function changeHeading4(){
    var heading = document.getElementById("heading4");
    let letter = getLetter(heading.textContent);
    heading.textContent = letter;
}

function changeHeading5(){
    var heading = document.getElementById("heading5");
    let letter = getLetter(heading.textContent);
    heading.textContent = letter;
}

function changeHeading6(){
    var heading = document.getElementById("heading6");
    let letter = getLetter(heading.textContent);
    heading.textContent = letter;
}


// Call the changeHeading function every 3 seconds
setInterval(changeHeading1, 3000);
setInterval(changeHeading2, 3000);
setInterval(changeHeading3, 3000);
setInterval(changeHeading4, 3000);
setInterval(changeHeading5, 3000);
setInterval(changeHeading6, 3000);


function getLetter(letter){
    if(letter==='A'){
        return 'F';
    }if(letter==='B'){
        return 'A';
    }if(letter==='C'){
        return 'B';
    }
    if(letter==='D'){
        return 'C';
    }if(letter==='E'){
        return 'D';
    }
    if(letter==='F'){
        return 'E';
    }

}