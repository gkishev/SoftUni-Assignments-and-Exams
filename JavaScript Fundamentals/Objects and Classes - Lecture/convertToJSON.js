function converstToJSON (fName, lName, hColour) {

    let myObject = {
        firstName: fName,
        lastName: lName,
        hair: hColour,

    }

    let converted = JSON.stringify(myObject);

    console.log(converted)
}

converstToJSON('George', 'Jones',

'Brown');