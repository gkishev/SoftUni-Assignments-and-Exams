function barcode(data) {
  let pattern = /(@#{1,})([A-z][a-zA-Z0-9]{4,}[A-Z])(@#{1,})/g
  let n = data.shift();
  for (let i = 0; i < n; i++) {
    let currentBarcode = data[i];
    let match = pattern.exec(currentBarcode);
    let productGroup = '';
    let isValid = false;
    while (match !== null) {
      isValid = true;
      let barcodeText = match[2];
      for (let ch of barcodeText) {
        if (!isNaN(Number(ch))) {
          productGroup += ch;
        }
      }
      match = pattern.exec(currentBarcode);
    }
    if(isValid) {
        productGroup = productGroup !=="" ? productGroup : "00"
        console.log(`Product group: ${productGroup}`)
    } else {
        console.log("Invalid barcode")
    }
  }
}

barcode(["6",
"@###Val1d1teM@###",
"@#ValidIteM@#",
"##InvaliDiteM##",
"@InvalidIteM@",
"@#Invalid_IteM@#",
"@#ValiditeM@#"]);
