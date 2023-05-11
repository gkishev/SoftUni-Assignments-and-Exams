function subsetOfArrays(arr) {

    let newArr = [];
    let newNum;

    for(let i = 0; i < arr.length; i++) {

        let currentNum = arr[i];
        
        if(newArr.length === 0) {
            newArr.push(currentNum);
            newNum = currentNum;
        } 
        if (currentNum > newNum) {
            newArr.push(currentNum);
            newNum = currentNum;
        }
        

    }
    return newArr;
}

console.log(subsetOfArrays([20, 3, 2, 15,6, 1]));
