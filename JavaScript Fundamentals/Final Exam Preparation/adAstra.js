function adAstra(data) {
  let pattern =
    /([#]|[|])(?<item>[A-za-z0-9-]+)\1(?<date>[0-9]{2}\/[0-9]{2}\/[0-9]{2})\1(?<calories>[0-9]{1,5})\1/;

  let totalCalories = 0;
  let match = pattern.exec(data);
  let buff = '';

  while (match) {
    let item = match.groups['item'];
    let date = match.groups['date'];
    let calories = Number(match.groups['calories']);

    totalCalories += calories;
    buff += `Item: ${item}, Best before: ${date}, Nutrition: ${calories}\n`;
    match = pattern.exec(data);
  }
  let food = Math.floor(totalCalories / 2000);
  console.log(`You have food to last you for: ${food} days!`);
  console.log(buff);
}

adAstra([
  '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|',
]);
