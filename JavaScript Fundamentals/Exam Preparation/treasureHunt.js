function computerStore(input) {
  let index = 0;
  let state = input.shift().split('|');
  let command = input.shift();
  let sum = 0;
  let count = 0;

  while (command !== 'Yohoho!') {
    let tokens = command.split(' ');
    let action = tokens.shift();
    switch (action) {
      case 'Loot':
        for (let el of tokens) {
          if (state.includes(el)) {
            continue;
          }
          state.unshift(el);
        }
        break;
      case 'Drop':
        let i = Number(tokens[0]);
        if (i < 0 && i > tokens.length - 1) {
          command = input.shift();
          continue;
        }

        let dropedItem = state.splice(i, 1);
        state.push(String(dropedItem));
        break;
      case 'Steal':
        let stolen = [];
        let s = Number(tokens[0]);
        if (stolen > state.length) {
          state.slice();
        }
        stolen = state.splice(-s);
        console.log(stolen.join(', '));

        break;
    }
    command = input.shift();
  }
  if (state == 0) {
    console.log('Failed treasure hunt.');
  } else {
    for (let words of state) {
      sum += Number(words.length);
      count++;
    }
    console.log(
      `Average treasure gain: ${(sum / count).toFixed(2)} pirate credits.`
    );
  }
}

computerStore([
  'Gold|Silver|Bronze|Medallion|Cup',

  'Loot Wood Gold Coins',

  'Loot Silver Pistol',

  'Drop 3',

  'Steal 3',

  'Yohoho!',
]);
