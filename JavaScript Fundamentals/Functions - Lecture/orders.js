function orders(product, quantity) {

    let totalPrice;
    

    if(product === "coffee") {
        totalPrice = quantity * 1.50;
    } else if (product === "coke") {
        totalPrice = quantity * 1.40;
    } else if (product === "water") {
        totalPrice = quantity * 1.00;
    } else if (product === "snacks") {
        totalPrice = quantity * 2.00;
    }
    console.log(totalPrice.toFixed(2))
}

orders("coffee", 2)