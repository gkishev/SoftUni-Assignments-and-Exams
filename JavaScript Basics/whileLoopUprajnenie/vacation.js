function vacation(input) {

    let vacationPrice = Number(input[0]);
    let currentSavedMoney = Number(input[1]);
    let index = 2;
    let action = input[index];
    let days = 0;
    let spendDays = 0;
    

    while(currentSavedMoney < vacationPrice) {
        days++;
        if (action === "spend") {
            spendDays++;
    
             if (spendDays === 5) {
                console.log(`You can't save the money.`);
                console.log(days);
                break; 
             }
             index++;
             let moneySpended = Number(input[index]);
             currentSavedMoney -= moneySpended;
             

             if (currentSavedMoney < 0) {
                currentSavedMoney = 0;
             }

        } else if (action === "save") {
            spendDays = 0;
            index++;
            let moneySaved = Number(input[index]);
            currentSavedMoney += moneySaved;
            
             
        }
        index++;
        action = input[index];
    }
    if (currentSavedMoney >= vacationPrice) {
        console.log(`You saved the money for ${days} days.`);
        
     }


}

vacation(["110",

"60",

"spend",

"10",

"spend",

"10",

"spend",

"10",

"spend",

"10",]);