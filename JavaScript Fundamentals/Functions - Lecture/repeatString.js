function repeatString(str, times) {

    let buff = "";

    for(let i = 0; i < times;i++) {
        buff += str;
    }
    return buff
}

console.log(repeatString("abc", 3))