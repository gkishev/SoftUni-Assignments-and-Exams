function rotation(arr, count) {

    

    for(let i = 0; i < count; i++) {
        let value = arr.pop();
        arr.unshift(value);
        

    }
    let finalArray = arr.join(" ");
    console.log(finalArray)
}

rotation(['Banana', 'Orange', 'Coconut', 'Apple'], 15);