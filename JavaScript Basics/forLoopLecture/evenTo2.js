function evenTo2 (input) {

    let n = Number(input[0]);
    

    for (let i = 0; i <= n; i += 2) {
    
        if(i % 2 == 0) {
            console.log(Math.pow(2, i));
        }
    }
}

evenTo2(["7"]);