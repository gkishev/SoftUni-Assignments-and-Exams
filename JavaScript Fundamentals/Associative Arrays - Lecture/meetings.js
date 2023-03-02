function meetings (data) {

    let obj = {};

    for (let line of data) {
        let [day, person] = line.split(" ");
        if(!obj.hasOwnProperty(day)) {
            obj[day] = person;
            console.log(`Scheduled for ${day}`)
        } else {
            console.log(`Conflict on ${day}!`)
        }
    }

    for(let key in obj) {
        console.log(`${key} -> ${obj[key]}`)
    }
}

meetings(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']
)