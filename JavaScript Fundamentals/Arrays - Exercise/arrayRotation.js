function arrayRotation (arr, rotations) {
    let newStructure = [];

    for (let i = 0; i < rotations; i++) {
        let currentEl = arr.shift([i]);
        newStructure = arr.push(currentEl)

    }
    console.log(arr.join(" "))

}

arrayRotation([51, 47, 32, 61, 21], 2)