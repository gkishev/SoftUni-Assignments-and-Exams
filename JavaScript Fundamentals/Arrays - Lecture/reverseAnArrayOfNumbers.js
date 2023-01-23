function reverseArray (n, arr) {

    let reversed = [];

    for (let i = n - 1; i >= 0; i--) {
        
        reversed.push(arr[i])
    }

    console.log(reversed.join(" "));

}

reverseArray(3, [10, 20, 30, 40, 50])