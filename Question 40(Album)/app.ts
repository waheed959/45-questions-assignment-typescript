    function make_album(artist_name:string, album_title: string, no_of_tracks?:number){
        const music_album :{
            artist_name : string,
            album_title : string,
            no_of_tracks?: number
        }= {artist_name,
             album_title,
            no_of_tracks}
        if(no_of_tracks ){
            music_album['no_of_tracks'] = no_of_tracks;
          }
        return music_album
    }
    console.log(make_album("singer1","Album1",10))
    console.log(make_album("singer2","album2"))
    console.log(make_album("singer3","album3"))
