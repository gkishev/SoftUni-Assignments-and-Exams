function imitationGame(data) {
  let text = data.shift();

  for (let line of data) {
    if (line === 'Decode') {
      break;
    }
    let tokens = line.split('|');
    let action = tokens[0];

    switch (action) {
      case 'Move':
        let n = Number(tokens[1]);
        for (let i = 0; i < n; i++) {
          let currentLetter = text.substring(0, 1);
          let restOfLetters = text.substring(1);
          text = restOfLetters + currentLetter;
        }
        break;
      case 'Insert':
        let index = Number(tokens[1]);
        let value = tokens[2];
        text = text.slice(0, index) + value + text.slice(index);
        break;
      case 'ChangeAll':
        let letterTobeChanged = tokens[1];
        let changingLetter = tokens[2];
        for (let ch of text) {
          if (ch === letterTobeChanged) {
            text = text.replace(letterTobeChanged, changingLetter);
          }
        }
        break;
    }
  }

  console.log(`The decrypted message is: ${text}`);
}

imitationGame(['zzHe', 'ChangeAll|z|l', 'Insert|2|o', 'Move|3', 'Decode']);
