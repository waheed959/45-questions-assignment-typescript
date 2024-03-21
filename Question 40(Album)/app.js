function make_album(artist_name, album_title, no_of_tracks) {
    var music_album = { artist_name: artist_name, album_title: album_title, tracks: tracks,
    };
    if (no_of_tracks) {
        music_album['tracks'] = no_of_tracks;
    }
    return music_album;
}
console.log(make_album("singer1", "Album1", 10));
console.log(make_album("singer2", "album2"));
console.log(make_album("singer3", "album3"));
