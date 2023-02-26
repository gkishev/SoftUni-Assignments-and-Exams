function convertToObject(json) {
   
   
   
   let myObject = JSON.parse(json)

   
   let entries = Object.entries(myObject);

   for (let [key, value] of entries) {

    console.log(`${key}: ${value}`);
   }
}

convertToObject(`{"name": "George", "age": 40, "town": "Sofia"}`)
