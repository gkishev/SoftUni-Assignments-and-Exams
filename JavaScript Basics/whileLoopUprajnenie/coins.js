function coins (input) {

    let money = Number(input[0]);
    let moneyInCoins = Math.floor(money * 100);
    let coinsCounter  = 0;

    while(moneyInCoins !== 0) {
        if(moneyInCoins >= 200) {
            moneyInCoins -= 200;
            coinsCounter++;
        } else if(moneyInCoins >= 100)  {
            moneyInCoins -= 100;
            coinsCounter++;
        } else if(moneyInCoins >= 50) {
            moneyInCoins -= 50;
            coinsCounter++;
        } else if(moneyInCoins >= 20) {
            moneyInCoins -= 20;
            coinsCounter++;
        } else if(moneyInCoins >= 10) {
            moneyInCoins -= 10;
            coinsCounter++;
        } else if(moneyInCoins >= 5) {
            moneyInCoins -= 5;
            coinsCounter++;
        } else if(moneyInCoins >= 2) {
            moneyInCoins -= 2;
            coinsCounter++;
        } else if(moneyInCoins >= 1) {
            moneyInCoins -= 1;
            coinsCounter++;
            break;
        }
        
    }
    console.log(coinsCounter);

}

coins(["1.23"]);