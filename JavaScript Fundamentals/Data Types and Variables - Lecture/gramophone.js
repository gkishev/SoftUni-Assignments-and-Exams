function gramophone (band, album, song) {

    let time = (album.length * band.length) * song.length / 2

    let timeRotated = time / 2.5;



    console.log(`The plate was rotated ${Math.ceil(timeRotated)} times.`)
}

gramophone('Black Sabbath', 'Paranoid',

'War Pigs')