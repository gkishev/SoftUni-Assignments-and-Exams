function addresBook (data) {
 let obj = {};

    for(let line of data) {
        let [name, addres] = line.split(":");
        obj[name] = addres;
    }

    let entries = Object.entries(obj);

    entries.sort(([keyA, valueA], [keyB, valueB]) => keyA.localeCompare(keyB));

    for (let arr of entries) {
        console.log(arr.join(" -> "))
    }
}

addresBook(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']
);