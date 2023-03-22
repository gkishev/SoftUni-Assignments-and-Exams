input = [3,
'favourite_DownTown_3:14',
'favourite_Kiss_4:16',
'favourite_Smooth Criminal_4:01',
'favourite']

class Song {
    constructor (type, name, time) {
        this.type = type;
        this.name = name;
        this.time = time;
    }
}

let songs = [];
let numberOfSongs = input.shift()
let typeList = input.pop()


for (let i = 0; i < numberOfSongs; i++) {
 
 let (type, sName, time) = input[i].split("_");
 let song = new Song(type, sName, time);
 songs.push(song);
}

if(typeList === "all") {
    songs.forEach((i) => console.log(i.sName));
} else {
    let filtered = songs.filter((i) => i.type === typeList);
    filtered.forEach((i) => console.log(i.sName))
}

console.log(songs.split());


