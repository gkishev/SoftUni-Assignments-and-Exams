function storage (input) {

    let myMap = new Map();

    for(let line of input) {
       let [product, quantity] = line.split(" ");
       if(myMap.has(product)) {
        let oldQuantity = myMap.get(product);
        myMap.set(product, Number(oldQuantity) + Number(quantity));
       } else { myMap.set(product, quantity);}
      
    }

    let itterable = myMap.keys();

    for (let key of itterable) {
        console.log(`${key} -> ${myMap.get(key)}`)
    }

    
}

storage(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40']
);