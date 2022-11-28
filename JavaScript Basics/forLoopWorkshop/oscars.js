function oscars(input) {
    let nameActor = input[0]
    let academyPoints = Number(input[1])
    let juri = Number(input[2])
 
    
    let totalPoint = academyPoints
    for (index = 3; index < input.length; index += 2) {
        let curentJuriName = input[index]
       
        let pointsGiven = Number(input[index + 1])
 
        let totalJuriPoints = (curentJuriName.length * pointsGiven) / 2;
        totalPoint += totalJuriPoints;
        if(totalPoint >= 1250.5){
            break;
        }
        
    } if (totalPoint >= 1250.5){
        console.log(`Congratulations, ${nameActor} got a nominee for leading role with ${totalPoint.toFixed(1)}!`)
        
    } else {
        let neededPoint = 1250.5
        console.log(`Sorry, ${nameActor} you need ${(neededPoint - totalPoint).toFixed(1)} more!`)
}
}
    
     



oscars(["Zahari Baharov","205","4","Johnny Depp","45","Will Smith","29","Jet Lee","10","Matthew Mcconaughey","39"]);