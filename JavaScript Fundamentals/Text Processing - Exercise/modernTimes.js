function modernTimes(data) {
  let arrOfWords = data.split(' ');

  for (let word of arrOfWords) {
    if (word.includes('#') && word.length > 1) {
      let words = '';
      for (let i = 1; i < word.length; i++) {
        let currentChar = word[i];
        if (isNaN(currentChar)) {
          words += currentChar;
        } else {
          break;
        }
      }
      if (words.length > 0) {
        console.log(words);
      }
    }
  }
}

modernTimes('Nowadays everyone uses # to tag a #5special word in #socialMedia');
