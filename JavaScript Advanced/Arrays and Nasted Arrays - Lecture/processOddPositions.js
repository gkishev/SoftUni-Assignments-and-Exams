function process (arr) {

    let newArr = [];

    // for(let i = 0; i < arr.length; i++) {
    //     let currentEl = arr[i];
    //     if (i % 2 === 1) {
    //         newArr.push(currentEl);
    //     }
    // }

    let pickedArr = arr.filter((x, i ) => i % 2 === 1);
    // console.log(pickedArr);

    let result = pickedArr.map(el=> el * 2).reverse().join(" ");
    console.log(result);
}

//process([10,15,20,25]);
process([3, 0, 10, 4, 7, 3]);

