function rightPlace (firstString, missingChar, secondString) {

    let res = "";

    for (let i = 0; i < firstString.length; i++) {
        let currentChar = firstString[i];
        if (currentChar === `_`) {
            res += missingChar;
        } else {
            res += currentChar;
        }
    }
    if (res === secondString) {
        console.log(`Matched`)
    } else {
        console.log(`Not Matched`)
    }
}

rightPlace('Str_ng', 'I','StrIng')