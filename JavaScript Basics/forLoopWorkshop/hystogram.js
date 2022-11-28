function hystogram (input) {

    let num = Number(input[0]);

    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;

    for (i = 1; i <= num; i++) {

        let currentNumber = Number(input[i]);

        if (currentNumber < 200) {
            p1++;
        } else if (currentNumber <= 399) {
            p2++;
        } else if (currentNumber <= 599) {
            p3++;
        } else if (currentNumber <= 799) {
            p4++;
        } else if (currentNumber >= 800) {
            p5++;
        } 

    }
    console.log(`${(p1 / num * 100).toFixed(2)}%`);
    console.log(`${(p2 / num * 100).toFixed(2)}%`);
    console.log(`${(p3 / num * 100).toFixed(2)}%`);
    console.log(`${(p4 / num * 100).toFixed(2)}%`);
    console.log(`${(p5 / num * 100).toFixed(2)}%`);


}

hystogram(["3","1","2","999"])