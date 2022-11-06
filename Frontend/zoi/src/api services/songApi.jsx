import axios from 'axios'
import bodyparser from 'body-parser'

var Songs = [];

const options = {
  method: 'GET',
  url: 'https://spotify23.p.rapidapi.com/playlist_tracks/',
  params: {id: '37i9dQZF1DX0XUsuxWHRQd', offset: '0', limit: '100'},
  headers: {
    'X-RapidAPI-Key': '6256c0dd26msh79a991a8ed2bd6cp111c67jsne39508529361',
    'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
  }
};
const GetSongs = () =>{

    axios.request(options).then(function (response) {
        const Spotify = response.data;
        let size = Math.min(Spotify.limit,Spotify.total);
        for (let index = 0; index < size; index++) {
            let song = {
                "Song preview" : Spotify.items[index].track.preview_url,
                "Song Link" : Spotify.items[index].track.external_urls.spotify,
                "Song Name" : Spotify.items[index].track.name,
                "Artist Name":Spotify.items[index].track.artists[0].name,
                "Album Name":Spotify.items[index].track.album.name,
                "Duration" : Spotify.items[index].track.duration_ms,
                "Song Image" : Spotify.items[index].track.album.images[0].url
            };
            Songs.push(JSON.stringify(song));
        }
        console.log(Songs);
    }).catch(function (error) {
        console.error(error);
    });
}
export default GetSongs;

