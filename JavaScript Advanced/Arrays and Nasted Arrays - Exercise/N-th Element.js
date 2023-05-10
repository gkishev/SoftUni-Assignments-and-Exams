function nThElement(arr, step) {

    // let newArr = [];

    // for(let i = 0; i < arr.length; i+=step) {

    //     let currentEl = arr[i];
    //     newArr.push(currentEl);
    // }

    return arr.filter((_, index) => index % step ===0);

}

console.log(nThElement(['5','20','31','4','20'],2));