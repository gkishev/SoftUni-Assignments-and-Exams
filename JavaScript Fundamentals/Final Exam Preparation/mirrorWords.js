function mirrorWords(data) {
  let patternForPairs =
    /([#@])(?<wordOne>[a-zA-Z]{3,})\1\1(?<wordTwo>[a-zA-Z]{3,})\1/g;

  let arrOfPairs = [];
  let arrOfMirrorWords = [];
 

  for (let text of data) {
    let matches = text.matchAll(patternForPairs);
    for (let match of matches) {
      arrOfPairs.push(match);
      let firstWord = match.groups['wordOne'];
      let secondWord = match.groups['wordTwo'];
      let reversedWord = reverse(secondWord);
      if (firstWord === reversedWord.join('')) {
        arrOfMirrorWords.push(`${firstWord} <=> ${secondWord}`);
      }
    }
    if (arrOfPairs.length === 0) {
      console.log('No word pairs found!');
    } else {
      console.log(`${arrOfPairs.length} word pairs found!`);
    }
  }
  if (arrOfMirrorWords.length !== 0) {
    console.log(`The mirror words are:`);
    console.log(arrOfMirrorWords.join(", "))
    // for (let line of arrOfMirrorWords) {
    //   console.log(`${line}`);
    // }
  } else {
    console.log('No mirror words!');
  }

  function reverse(text) {
    let arrOfText = [];
    for (let i = text.length - 1; i >= 0; i--) {
      arrOfText.push(text[i]);
    }
    return arrOfText;
  }
}

mirrorWords([
  `@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##c
    ar#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r
    `,
]);
