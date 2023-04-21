function hogwards(data) {
  let spellName = data.shift();

  for (let line of data) {
    if (line === 'Abracadabra') {
      break;
    }

    let tokens = line.split(' ');
    let command = tokens[0];
    switch (command) {
      case 'Abjuration':
        spellName = spellName.toUpperCase();
        console.log(spellName);
        break;
      case 'Necromancy':
        spellName = spellName.toLowerCase();
        console.log(spellName);
        break;
      case 'Illusion':
        let index = Number(tokens[1]);
        let replaceLetter = tokens[2];
        if (!spellName.charAt(index)) {
          console.log('The spell was too weak.');
        } else {
          spellName = spellName.replace(spellName.charAt(index), replaceLetter);
          console.log('Done!');
        }
        break;
      case 'Divination':
        let firstSubstring = tokens[1];
        let secondsubstring = tokens[2];
        if (!spellName.includes(firstSubstring)) {
        } else {
          while (spellName.includes(firstSubstring)) {
            spellName = spellName.replace(firstSubstring, secondsubstring);
          }

          console.log(spellName);
        }
        break;
      case 'Alteration':
        let substringToRemove = tokens[1];
        if(!spellName.includes(substringToRemove)) {

        } else {
            spellName = spellName.replace(substringToRemove, "");
            console.log(spellName);
        }
        break;
        default:
            console.log("The spell did not work!");
    }
  }
}

hogwards([
  'A7ci0',
  'Illusion 1 c',
  'Illusion 4 o',
  'Abjuration',
  'Abracadabra',
]);
