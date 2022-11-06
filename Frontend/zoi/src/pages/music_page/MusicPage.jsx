import React,{useState,useEffect,useMemo} from 'react'
import './MusicPage.css'
import play from "../../assets/icons/playbutton.png";
import pause from "../../assets/icons/pauseButton.png";
import next from "../../assets/icons/nextButton.png";
import prev from "../../assets/icons/prevButton.png";

const MusicPage = () => {
    const [progress, setProgress] = useState(0);
    const [isPlaying, setisPlaying] = useState(false)
    let song = useMemo(() => new Audio('https://tinyurl.com/2cmxe74b'), ['https://tinyurl.com/2cmxe74b']);

    useEffect(() => {
        const interval = setInterval(() => {
          setProgress((song.currentTime/song.duration)*100)
          console.log(progress)
        }, 10);
        return () => clearInterval(interval);
      }, [progress, song.currentTime, song.duration]);
    

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
        <img alt='' src='https://tinyurl.com/27hejgja' className="songImage"/>
        <div className="songName">SONG NAME</div>
        <div className="albumName">ALBUM NAME</div>
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
                    }}>
                        <img src={prev} alt="" />
                    </button>
                <button className="playButton" onClick={playPause}><img src={isPlaying?pause:play} alt="" /></button>
                <button className="nextButton" onClick={()=>{}}>
                <img src={next} alt="" />
                </button>
            
        </div>
    </div>
  )
}

export default MusicPage