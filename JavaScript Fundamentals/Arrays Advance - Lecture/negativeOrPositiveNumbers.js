function negativeOrPositiveNumbers(input) {

    let result = [];
    

    for (let el of input) {
        el = Number(el);
        if (el < 0) {
            result.unshift(el)
        } else if (el >= 0) {
            result.push(el)
        }
    }
    console.log(result.join("\n"));

}

negativeOrPositiveNumbers(['7', '-2', '8', '9']);