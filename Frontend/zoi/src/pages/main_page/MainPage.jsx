import React,{useState} from 'react'
import './MainPage.scss'
import exercise from '../../assets/exercise.jpg';
import light from '../../assets/light.png';
import moderate from '../../assets/moderate.png';
import hard from '../../assets/hard.png';
import breakfast from '../../assets/breakfast.png';
import lunch from '../../assets/lunch.png';
import dinner from '../../assets/dinner.png';
import MusicPage from '../music_page/MusicPage';


const MainPage = () => {
    const [tab, setTab] = useState(2);
  return (
    <div className='bg-image'>
        <div className="column">
            <div className="quotes-topBar">
                <div className="fluid">

                <div className="title">ZOI</div>
                <div className="contact">Contact Us</div>
                <div className="about">About Us</div>
                
                </div>
            </div>
            <div className="row">
                <div className="controlBar">
                    <div className="controlTab">
                        <div className="tab" onClick={()=>{setTab(0)}}>
                            <img className='tabImg' src={exercise} alt="" />
                            <div className="details">
                                <div className="label">
                                    Exercise
                                </div>
                                <div className="catchy">
                                    Your Power Schedule
                                </div>
                            </div>
                        </div>
                        <div className="tab" onClick={()=>{setTab(1)}}>
                        <img className='tabImg' src='https://image.shutterstock.com/image-photo/balanced-diet-healthy-food-on-260nw-590825882.jpg' alt="" />
                            <div className="details">
                                <div className="label">
                                    Diet
                                </div>
                                <div className="catchy">
                                    You are what you eat
                                </div>
                            </div>
                        </div>
                        <div className="tab" onClick={()=>{setTab(2)}}>
                        <img className='tabImg' src='https://i.pinimg.com/550x/d1/79/c5/d179c5c424ed339058effcb85c3f0f49.jpg'alt="" />
                            <div className="details">
                                <div className="label">
                                    Music
                                </div>
                                <div className="catchy">
                                    listen the calmness
                                </div>
                            </div>
                        </div>
                        <div className="tab" onClick={()=>{setTab(3)}}>
                        <img className='tabImg' src='https://img.freepik.com/free-vector/joystick-game-sport-technology_138676-2045.jpg?w=2000'alt="" />
                            <div className="details">
                                <div className="label">
                                    Game
                                </div>
                                <div className="catchy">
                                    A game to win
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mainView">
                {tab===0&& <div id="exercise">
                    <div className="lightEx">
                         <img className='lightImg' src={light} alt="" />               
                    </div>
                    <div className="lightEx">
                         <img className='lightImg' src={moderate} alt="" />               
                    </div>
                    <div className="lightEx">
                         <img className='lightImg' src={hard} alt="" />               
                    </div>
                </div>}
                {tab===1&& <div id="diet">
                    <div className="lightEx">
                         <img className='lightImg' src={breakfast} alt="" />               
                        </div>
                    <div className="lightEx">
                         <img className='lightImg' src={lunch} alt="" />               
                        </div>
                    <div className="lightEx">
                         <img className='lightImg' src={dinner} alt="" />               
                        </div>
                </div>}
                {tab===2&& <MusicPage/>}
                {tab===3&& <div id="game">
                    Game
                </div>}
                </div>
            </div>
        </div>
    </div>
  )
}

export default MainPage