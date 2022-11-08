import React from 'react'
import './Game_Page.css'
import smashKarts from '../../assets/games/smashKarts.png';
import { useNavigate } from "react-router-dom";

const GamePage = () => {
  const navigate = useNavigate();
    const games = [
      ["Smash Karts","https://smashkarts.io/","https://wallpapercave.com/wp/wp9106810.png"],
      ["Bloon Tower Defense","https://www.crazygames.com/game/bloons-tower-defense","https://wallpapercave.com/dwp1x/wp10167416.jpg"],
      ["Learn to fly","https://www.crazygames.com/game/learn-to-fly","https://play-lh.googleusercontent.com/WYyWLDBs2bj-KtDBhg7jSqW34nYzyoFTvtKaYBTt2J6SAA05dqEZGI8s1h2LQQV3BHc"],
      ["Hobo Prison Brawl","https://www.crazygames.com/game/hobo-prison-brawl","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCEvSpfJSK7CK-VBwCVtPVVHCRS_H5Bb9xgA&usqp=CAU"],
      ["Motherload","https://www.crazygames.com/game/motherload","https://jayisgames.com/images/motherload.jpg"],
      ["Defend your castle","https://www.crazygames.com/game/defend-your-castle","https://images.crazygames.com/games/defend-your-castle/cover-1609176555263.png?auto=format,compress&q=45&cs=strip&ch=DPR&w=1200&h=630&fit=crop"],
    ];
  return (
    <div className='grid_view'>
        {games.map(
            (e)=> (
            <div className="gameTab" onClick={()=>{window.location.assign(e[1]);}}>
              <img src={e[2]} alt="" />
              {e[0]}
              </div>)
        )}
    </div>
  )
}

export default GamePage