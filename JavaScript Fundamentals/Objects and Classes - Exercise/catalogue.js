function catalogue(data) {

    let myCatalogue = {};

    for (let line of data) {
        let [name, price] = line.split(" : ");
        myCatalogue[name] = Number(price);
    }

    let sortedKey = Object.keys(myCatalogue).sort((a, b) => a.localeCompare(b));

    let groupChar = "";
    for(let key of sortedKey) {
        let name = key;
        if(groupChar !== name[0]) {
            groupChar = name[0];
            console.log(groupChar)
        } 
        let price = myCatalogue[key];
        console.log(`  ${name}: ${price}`)

    }
}

catalogue(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']);