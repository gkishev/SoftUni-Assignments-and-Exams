function dictionary (dataFromJSON) {

    let myDictionary = {};

    for(let line of dataFromJSON) {
        let obj = JSON.parse(line);
        let keys = Object.keys(obj);
        let key = keys[0];
        myDictionary[key] = obj[key];
    }

    let sortedKey = Object.keys(myDictionary).sort((keyA, keyB) => keyA.localeCompare(keyB));

    

    for(let key of sortedKey) {
        console.log(`Term: ${key} => Definition: ${myDictionary[key]}`)
    }
}

dictionary([
    '{"Coffee":"A hot drink made from the roasted and groundseeds (coffee beans) of atropical shrub."}',
    '{"Bus":"A large motor vehiclecarrying passengers by road,typically one serving the publicon a fixed route and for afare."}',
    '{"Boiler":"A fuel-burningapparatus or container forheating water."}',
    '{"Tape":"A narrow strip ofmaterial, typically used to holdor fasten something."}',
    '{"Microphone":"An instrumentfor converting sound waves intoelectrical energy variationswhich may then be amplified,transmitted, or recorded."}'
    ])