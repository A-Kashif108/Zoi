import React,{useState,useEffect,useMemo} from 'react'
import axios from 'axios'
import './MusicPage.css'
import play from "../../assets/icons/playbutton.png";
import pause from "../../assets/icons/pauseButton.png";
import next from "../../assets/icons/nextButton.png";
import prev from "../../assets/icons/prevButton.png";

const MusicPage = ({id}) => {
  const [index, setindex] = useState(0)
    const [progress, setProgress] = useState(0);
    const [isPlaying, setisPlaying] = useState(false)
    const [songs, setsongs] = useState([
      {
        Song_preview: "hello",
        Song_Name: "Loading...",
        Album_Name: "Loading...",
        Song_Image: "Loading..."
       }]
      );
    var song;
      var url = songs!==[]?songs[index].Song_preview:"random";
      song = useMemo(() => new Audio(url), [url])
  
    const options = {
      method: 'GET',
      url: 'https://spotify23.p.rapidapi.com/playlist_tracks/',
      params: {id: id, offset: '0', limit: '100'},
      headers: {
        'X-RapidAPI-Key': 'a33b73432fmsh15e97524c8ca14dp1514ebjsn99c768fa0451',
        'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
      }
    }; 
  const GetSongs = async () =>{
    var Songs = [];
    await axios.request(options).then(function (response) {
        const Spotify = response.data;
        let size = Math.min(Spotify.limit,Spotify.total);
        for (let index = 0; index < size; index++) {
            let song = {
                Song_preview : Spotify.items[index].track.preview_url,
                Song_Link : Spotify.items[index].track.external_urls.spotify,
                Song_Name : Spotify.items[index].track.name,
                Artist_Name:Spotify.items[index].track.artists[0].name,
                Album_Name:Spotify.items[index].track.album.name,
                Duration : Spotify.items[index].track.duration_ms,
                Song_Image : Spotify.items[index].track.album.images[0].url
            };
            Songs.push(song);
          }
    }).catch(function (error) {
        console.error(error);
    });
    // console.log(Songs)
          return Songs;
}
useEffect( () => {
  async function FetchData(){
      const songslist = await GetSongs();
      setsongs(songslist)
  }
  FetchData();
  },[index]);

  // useEffect(() => {
  //   let x =  new Audio(songs[0].Song_preview)
  //   setsong(x)
  // }, [index])
  


    
    useEffect(() => {
      if(song!=null){

        const interval = setInterval(() => {
          setProgress((song.currentTime/song.duration)*100)
          console.log(id)
        }, 10);
        return () => clearInterval(interval);
      }
    }, [progress, song?song:null]);
    

    const playPause =() => {
        if(isPlaying){
            console.log('pause playing')
            song.pause();
          }else{
              console.log('start playing') 
          song.play();
        }
        setisPlaying(!isPlaying);
    }

  return (
    <div className='mainMusic'>
        <img alt='' src={songs[index].Song_Image} className="songImage"/>
        <div className="songName">{songs[index].Song_Name}</div>
        <div className="albumName">{songs[index].Album_Name}</div>
        <div className="progressBar">
            <div className="progressLine" style={{
                width: `${progress}%`
            }}>
                <div className="progressCircle" style={{
                }}>
                </div>
            </div>
        </div>
        <div className="musicControls">
                <button className="prevButton" onClick={() => {
                  setindex(index-1)
                  if(index<0){
                    setindex(0);
                  }
                    }}>
                        <img src={prev} alt="" />
                    </button>
                <button className="playButton" onClick={playPause}><img src={isPlaying?pause:play} alt="" /></button>
                <button className="nextButton" onClick={()=>{
                  setindex(index+1)
                  if(index>=songs.length){
                    setindex(0);
                  }
                }}>
                <img src={next} alt="" />
                </button>
            
        </div>
    </div>
  )
}

export default MusicPage