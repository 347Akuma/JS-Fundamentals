function gramophone(bandName, albumName, songName){

    let songDuration = (albumName.length * bandName.length) * songName.length / 2;

    let rotationsForTheSong = songDuration / 2.5;

    console.log(`The plate was rotated ${Math.ceil(rotationsForTheSong)} times.`);
}
gramophone('Rammstein', 'Sehnsucht', 'Engel');