function revealWords (words, text) {

    let arrOfWords = words.split(", ");
    let arrOfText = text.split(" ");

    for(let word of arrOfWords) {
        for(let i = 0; i < arrOfText.length; i++) {
             
            if(arrOfText[i].includes("*") && arrOfText[i].length === word.length) {
                arrOfText[i] = word;
            }
        }
        
    }
    console.log(arrOfText.join(" "));
}

revealWords ('great',
'softuni is ***** place for learning new programming languages'
);