function cardGame(data) {
  let players = new Map();
  let cardPowerNum = {
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9,
    "10": 10,
    "J": 11,
    "Q": 12,
    "K": 13,
    "A": 14
  }
  let cardTypeNum = {
    
    "S": 4,
    "H": 3,
    "D": 2,
    "C": 1
  }

  for (let line of data) {
    let [playersName, cards] = line.split(': ');
    if (!players.has(playersName)) {
      players.set(playersName, new Set());
    }
    let cardsArray = cards.split(', ');
    for (let card of cardsArray) {
      players.get(playersName).add(card);
    }
  }
  for (let playerInfo of Array.from(players)) {
    let sum = 0;
    for (let card of Array.from(playerInfo[1])) {
        let cardInfo = card.split("");
        let cardPower = cardInfo.splice(0, cardInfo.length - 1).join("");
        let cardType = cardInfo.slice(-1).join();
        let power = cardPowerNum[cardPower];
        let type = cardTypeNum[cardType];
        sum += power * type;
    }
    console.log(`${playerInfo[0]}: ${sum}`)
  }
  
}

cardGame([
  'Peter: 2C, 4H, 9H, AS, QS',
  'Tomas: 3H, 10S, JC, KD, 5S, 10S',
  'Andrea: QH, QC, QS, QD',
  'Tomas: 6H, 7S, KC, KD, 5S, 10C',
  'Andrea: QH, QC, JS, JD, JC',
  'Peter: JD, JD, JD, JD, JD, JD',
]);
