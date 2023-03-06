function wordTracker(data) {
  let wordsTofind = data.shift().split(' ');
  let myMap = new Map();

  for (let i = 0; i < wordsTofind.length; i++) {
    let currentWord = wordsTofind[i];
    let counter = 0;
    for (let j = 0; j < data.length; j++) {
      let sentanceWord = data[j];
      if (currentWord === sentanceWord) {
        counter++;
      }
    }
    myMap.set(currentWord, counter);
  }

  let sorted = Array.from(myMap.entries()).sort((a, b) => b[1] - a[1]);

  for (let [name, count] of sorted) {
    console.log(`${name} - ${count}`);
  }
}

wordTracker([
    'is the',
    'first', 'sentence', 'Here', 'is',
    'another', 'the', 'And', 'finally', 'the',
    'the', 'sentence']
    );
