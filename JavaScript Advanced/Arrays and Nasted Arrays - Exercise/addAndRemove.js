function addAndRemove(commands) {
  let initialNumber = 1;

  let arr = [];

  for (let i = 0; i < commands.length; i++) {
    let currentLine = commands[i];

    if (currentLine === 'add') {
      
        arr.push(initialNumber++);
      } else {
        arr.pop(initialNumber++);
      }
    }
  

  if (arr.length === 0) {
    console.log('Empty');
  } else {
    arr.forEach((el) => console.log(el));
  }
}

addAndRemove(['add', 'add', 'remove', 'add', 'add']);
