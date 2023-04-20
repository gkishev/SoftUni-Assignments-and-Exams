function wildZoo(data) {
    let store = {};
    let areas = [];
  
    let line = data.shift();
    while (line !== 'EndDay') {
      let lineSplitted = line.split(': ');
  
      let action = lineSplitted[0];
      let tokens = lineSplitted[1].split('-');
      switch (action) {
        case 'Add':
          let name = tokens[0];
          let quantity = tokens[1];
          let area = tokens[2];
          if (!store.hasOwnProperty(name)) {
            store[name] = {};
            store[name][area] = quantity;
          } else {
            let newValue = Number(quantity);
            for (let [area, oldValue] of Object.entries(store[name])) {
              store[name][area] = Number(oldValue) + newValue;
            }
          }
  
          break;
        case 'Feed':
          let animalName = tokens[0];
          let food = Number(tokens[1]);
          if (!store.hasOwnProperty(animalName)) {
          } else {
            for (let [area, oldValue] of Object.entries(store[animalName])) {
              store[animalName][area] = Number(oldValue) - food;
  
              if (store[animalName][area] <= 0) {
                delete store[animalName];
                console.log(`${animalName} was seccessfully fed`);
              } else {
              }
            }
  
            break;
          }
      }
      line = data.shift();
    }
    console.log('Animals:');
    for (let [name, area] of Object.entries(store)) {
      for (let areaValue of Object.values(store[name])) {
        console.log(` ${name} -> ${areaValue}g`);
      }
    }
    console.log('Areas with hungry animals:');
    let objToArr = Object.values(store);
  
    for (let line of objToArr) {
      for (let [key, value] of Object.entries(line)) {
        
        areas.push[key];
      }
    }
  }
 


wildZoo([
  'Add: Adam-4500-ByTheCreek',
  'Add: Maya-7600-WaterfallArea',
  'Add: Maya-1230-WaterfallArea',
  'Feed: Jamie-2000',
  'EndDay',
]);
