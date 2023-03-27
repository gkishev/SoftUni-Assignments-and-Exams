function softUniBar (data) {

    let pattern = /%(?<name>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<quantity>\d+)\|[^|$%.0-9]*(?<price>[0-9].*)\$/
    let totalMoney = 0;
    

    for(let line of data) {
        if(line === "end of shift") {
            break;
        }

        if(pattern.test(line)) {

            let order = pattern.exec(line);
            let name = order.groups.name;
            let product = order.groups.product;
            let bill = Number(order.groups.quantity) * Number(order.groups.price);
            console.log(`${name}: ${product} - ${bill.toFixed(2)}`);
            totalMoney += bill;
        }

    }
    console.log(`Total income: ${totalMoney.toFixed(2)}`);

}

softUniBar(['%George%<Croissant>|2|10.3$',
'%Peter%<Gum>|1|1.3$',
'%Maria%<Cola>|1|2.4$',
'end of shift']
)