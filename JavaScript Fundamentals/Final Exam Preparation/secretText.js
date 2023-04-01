function secretText(data) {
  let concealedText = data.shift();

  for (let line of data) {
    if (line === 'Reveal') {
      break;
    }
    let lineSplitted = line.split(':|:');
    let action = lineSplitted[0];
    switch (action) {
      case 'InsertSpace':
        let index = Number(lineSplitted[1]);
        concealedText =
          concealedText.substring(0, index) +
          ' ' +
          concealedText.substring(index);
          console.log(concealedText);
        break;
      case 'Reverse':
        let message = lineSplitted[1];
        if (concealedText.includes(message)) {
          concealedText = concealedText.replace(message, '');
          let arrM = message.split('');
          let reverseArr = arrM.reverse();
          let newM = reverseArr.join('');
          concealedText = concealedText + newM;
          console.log(concealedText);
        } else {
          console.log("error");
        }
        break;
      case 'ChangeAll':
        let textToChange = lineSplitted[1];
        let newText = lineSplitted[2];
        let arr = concealedText.split(textToChange);
        let strOfArr = arr.join(newText);
        concealedText = strOfArr;
        console.log(concealedText);
        break;
    }
    
  }
  console.log(`You have a new text message: ${concealedText}`)
}
secretText([
    
        'Hiware?uiy',
        'ChangeAll:|:i:|:o',
        'Reverse:|:?uoy',
        'Reverse:|:jd',
        'InsertSpace:|:3',
        'InsertSpace:|:7',
        'Reveal'
      
]);
