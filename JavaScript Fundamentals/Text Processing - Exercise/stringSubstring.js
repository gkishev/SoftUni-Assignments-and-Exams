function stringSubstring (word, text) {

    let arrOfText = text.split(" ");
    let wordToLower  = word.toLowerCase();
    isPresent = false;

    
    for(let words of arrOfText) {

        let wordsToLower = words.toLowerCase();
       
        if(wordToLower === wordsToLower) {
            console.log(word);
            isPresent = true;
            break;
        } 
    }
    if(isPresent === false) {
        console.log(`${word} not found!`)
    }
}

stringSubstring('python',
'JavaScript is the best programming language')