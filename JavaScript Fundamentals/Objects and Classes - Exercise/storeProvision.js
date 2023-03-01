function store(stock, order) {

    let storeInventory = {};
    let stockLength = stock.length;
    let orderLength = order.length;

    for (let i = 0; i < stockLength; i+=2) {
        let product = stock[i];
        
       storeInventory[product] = Number(stock[i + 1]);
       
    }
    for (let i = 0; i < orderLength; i+=2) {
        let product = order[i];
        if(!storeInventory.hasOwnProperty(product)) {

            storeInventory[product] = 0;
        }
        storeInventory[product] += Number(order[i + 1])
    }
    for(let product in storeInventory) {
        console.log(`${product} -> ${storeInventory[product]}`)
    }
    
    
}

store(
  ['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],

  ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']
);
