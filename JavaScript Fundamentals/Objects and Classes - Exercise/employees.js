function employees(data) {
  let arr = [];

  for (let name of data) {
    let myInfo = {
      name: name,
      personalInfo: name.length,
    };
    arr.push(myInfo);
  }
  for (let obj of arr) {
    console.log(`Name: ${obj.name} -- Personal Number: ${obj.personalInfo}`);
  }
}

employees([
  'Silas Butler',

  'Adnaan Buckley',

  'Juan Peterson',

  'Brendan Villarreal',
]);
