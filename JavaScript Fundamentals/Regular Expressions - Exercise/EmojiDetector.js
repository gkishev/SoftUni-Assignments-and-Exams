function emojiDetector(input) {
  let emojiPattern = /(?<front>\*\*|::)(?<emoji>[A-Z][a-z]{2,})\1/g;
  let trashholdPatter = /\d+/g;
  let totalPoints = 0;
  let counter = 0;
  let poolOfEmojis = [];
  for (let line of input) {
    if (trashholdPatter.test(line)) {
      let treshold = line.match(trashholdPatter);
      let multiOfDigits = 0;
      for (let digit of treshold) {
        let currentDigit = digit.split('');

        for (let i = 0; i < currentDigit.length; i++) {
          if (multiOfDigits === 0) {
            let currentNumber = Number(currentDigit[i]);
            multiOfDigits += currentNumber;
          } else {
            let currentNumber = Number(currentDigit[i]);
            multiOfDigits *= currentNumber;
          }
        }
      }
      totalPoints += multiOfDigits;
    }
  }
  console.log(`Cool threshold: ${totalPoints}`);
  for (let line of input) {
    if (emojiPattern.test(line)) {
      let matchedEmojis = line.match(emojiPattern);

      for (let emoji of matchedEmojis) {
        counter++;
        let sumOfChar = 0;
        for (let i = 0; i < emoji.length; i++) {
          let currentChar = emoji[i];
          if (
            (currentChar.charCodeAt(0) >= 65 &&
              currentChar.charCodeAt(0) <= 90) ||
            (currentChar.charCodeAt(0) >= 97 &&
              currentChar.charCodeAt(0) <= 122)
          ) {
            sumOfChar += currentChar.charCodeAt(0);
          }
        }

        if (sumOfChar >= totalPoints) {
          poolOfEmojis.push(emoji);
        }
      }
    }
  }
  console.log(`${counter} emojis found in the text. The cool ones are: `)
  for(let nickName of poolOfEmojis) {

    console.log(nickName + " ")
  }
}

emojiDetector([
  'In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**',
]);
