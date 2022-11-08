import React,{useState,useEffect} from 'react'
import './MainPage.css'
import exercise from '../../assets/exercise.jpg';
import light from '../../assets/light.png';
import moderate from '../../assets/moderate.png';
import hard from '../../assets/hard.png';
import breakfast from '../../assets/breakfast.png';
import lunch from '../../assets/lunch.png';
import dinner from '../../assets/dinner.png';
import MusicPage from '../music_page/MusicPage';
import GamePage from '../game_page/Game_Page';


const MainPage = () => { 

    const playlist ={
        Anger:"4gD0rwuNDQtEZK3dBUPmMy",
        Depression:"11MG08u4Z6JMyzsmvsTo6q",
        Fear:"7EtgRYXTby2fUS3TQqnUIf",
        Blissful:"25BWXzahempQIiqUvgD3uk",
        Anxiety:"5lit6K51sNzxwulmu6XUVD"
    }
    const [exercises, setExercises] = useState({})

    const [playlistId, setplaylistId] = useState("")
    const [Diet, setDiet] = useState({})
    
    const diet ={
        Angry:{
          Breakfast:[["Fruit Sald"],["Chamomile tea"]],
          Lunch:[["Baked Potatos"],["celery"]],
          Dinner:[["Walnuts"],["Darkchoclate"],["celery"]]
        },
        Anxiety:{
            Breakfast:[["yogurt"],["Green tea"]],
            Lunch:[["Salmon"],["Boiled Eggs"],["turmeric"]],
            Dinner:[["Almonds"],["BlueBerrise"],["Drak Choclate"]]
        },
        Depression:{
          Breakfast:[["Whole Grains"],["Avocado"]],
          Lunch:[["Fish"],["Chick Peas"]],
          Dinner:[["Greek Yogurt"],["Eggs"]]
        },
        Blissful:{
         Breakfast:[["Kiwi"],["Strawberries"]],
         Lunch:[["Bean and Rice"],["Spinach"]],
         Dinner:[["Corn Soup"],["Dark Choclate"]]
        },
        Fear:{
          Breakfast:[["Bannana"],["Dragon Fruit"]],
          Lunch:[["Eggs"],["Fish"]],
          Dinner:[["Drak choclate"],["Blue Berries"]]
        }
    }

      const Exercise ={
        fear:{
          Beginner:[["Cobra Pose","https://i.pinimg.com/originals/a0/09/9f/a0099f066c08f70c04ae9aa578740a69.gif"],
                    ["Plow Pose","https://i.pinimg.com/originals/c3/21/1e/c3211e65898d6065665cd580add587d1.gif"],
                    ["Bow Pose","https://i.pinimg.com/originals/2f/af/99/2faf99a638d8ce19008035aa1a75cfcb.gif"],
                    ["Shoulder Stand Pose","https://i.pinimg.com/originals/f8/42/36/f84236b487fcc47507a2b2a705754018.gif"],
                    ["Wheel Pose","https://i.pinimg.com/originals/f6/cd/15/f6cd1583aff8a9cf22825c86109a007b.gif"]],
         Intermediate:[["Incline Pushup","https://musclewiki.com/media/uploads/male-bodyweight-incline-pushup-front.gif"],
                       ["Squat","https://musclewiki.com/media/uploads/male-bodyweight-squat-front.gif"],
                       ["Dips Front","https://musclewiki.com/media/uploads/male-bodyweight-dips-front.gif"],
                       ["Pike Pushup","https://musclewiki.com/media/uploads/male-bodyweight-pike-pushup-front.gif"],
                       ["Pike Shrug","https://musclewiki.com/media/uploads/male-bodyweight-elavated-pike-shrug-side.gif"]],
            Advance:[["Bench Press","https://musclewiki.com/media/uploads/male-barbell-bench-press-side_giVNk12.gif"],
                     ["Inclie Chest Fly","https://musclewiki.com/media/uploads/male-dumbbell-incline-chest-flys-front.gif"],
                     ["Barbell Curl","https://musclewiki.com/media/uploads/male-barbell-curl-front_uKPCb8P.gif"],
                     ["Dumbell Curl","https://musclewiki.com/media/uploads/male-dumbbell-curl-front.gif"],
                    ["OverHead Press","https://musclewiki.com/media/uploads/male-dumbbell-seated-overhead-press-front.gif"]]
                    
        },
        blissful:{
          Beginner:[["Twisted childs Pose","https://177d01fbswx3jjl1t20gdr8j-wpengine.netdna-ssl.com/wp-content/uploads/2018/12/Twisted-Childs-Pose.gif"],
                    ["Bicep Stretch","https://musclewiki.com/media/uploads/male-biceps-stretch-variation-1-front.gif"],
                    ["chest stretch","https://musclewiki.com/media/uploads/male-chest-stretch-variation-1-front.gif"],
                    ["Skipping","https://cdn.shopify.com/s/files/1/0075/4673/2662/files/home-cardio-workouts-to-improve-cardiovascular-fitness-jumping-ropes.gif"],
                    ["body stretch","https://cdn.shopify.com/s/files/1/0075/4673/2662/files/home-cardio-workouts-to-improve-cardiovascular-fitness-jumping-jacks.gif"]],
          Intermediate:[["Chinup","https://musclewiki.com/media/uploads/male-bodyweight-chinup-front.gif"],
                        ["Forarm Plank","https://musclewiki.com/media/uploads/male-bodyweight-forarm-plank-side.gif"],
                        ["Hanging Knee Raises","https://musclewiki.com/media/uploads/male-bodyweight-hanging-knee-raises-front.gif"],
                        ["Forwars Lunge","https://musclewiki.com/media/uploads/male-bodyweight-forward-lunge-front.gif"],
                        ["Glute Kickback","https://musclewiki.com/media/uploads/male-bodyweight-glute-kickback-front.gif"]],
          Advance:[["Barbell Overhead press","https://musclewiki.com/media/uploads/male-barbell-overhead-press-front_OJMNLxU.gif"],
                   ["Wrist Curl","https://musclewiki.com/media/uploads/male-dumbbell-wrist-curl-front.gif"],
                   ["Back Wrist Curl","https://musclewiki.com/media/uploads/male-barbell-behind-the-back-wrist-curl-front.gif"],
                   ["Overhead Tricep Extension","https://musclewiki.com/media/uploads/male-dumbbell-overhead-tricep-extension-front.gif"],
                   ["Close grip Bench Press","https://musclewiki.com/media/uploads/male-barbell-close-grip-bench-press-side.gif"]]
                                 
        },
        Anxiety:{
          Beginner:[["Twisted childs Pose","https://177d01fbswx3jjl1t20gdr8j-wpengine.netdna-ssl.com/wp-content/uploads/2018/12/Twisted-Childs-Pose.gif"],
                    ["Skipping","https://cdn.shopify.com/s/files/1/0075/4673/2662/files/home-cardio-workouts-to-improve-cardiovascular-fitness-jumping-ropes.gif"],
                    ["Wheel Pose","https://i.pinimg.com/originals/f6/cd/15/f6cd1583aff8a9cf22825c86109a007b.gif"],
                    ["Bow Pose","https://i.pinimg.com/originals/2f/af/99/2faf99a638d8ce19008035aa1a75cfcb.gif"],
                    ["Cobra Pose","https://i.pinimg.com/originals/a0/09/9f/a0099f066c08f70c04ae9aa578740a69.gif"]],
          Intermediate:[["Single Leg Romanian Dead lift","https://musclewiki.com/media/uploads/male-bodyweight-single-leg-romanian-deadlift-front.gif"],
                        ["Calve Raise Walk","https://musclewiki.com/media/uploads/male-bodyweight-calve-raise-walk-front.gif"],
                        ["Leg raises","https://musclewiki.com/media/uploads/male-bodyweight-leg-raises-front.gif"],
                        ["Single leg calf Raises","https://musclewiki.com/media/uploads/male-kettlebell-single-leg-calf-raises-front.gif"],
                        ["Pike Shrug","https://musclewiki.com/media/uploads/male-bodyweight-elavated-pike-shrug-side.gif"]],
          Advance:[["Row bilateral","https://musclewiki.com/media/uploads/male-dumbbell-row-bilateral-front.gif"],
                   ["Bent Over Row","https://musclewiki.com/media/uploads/male-barbell-bent-over-row-front.gif"],
                   ["Highbar Squat","https://musclewiki.com/media/uploads/male-barbell-highbar-squat-front.gif"],
                   ["Goblet Squat","https://musclewiki.com/media/uploads/male-dumbbell-goblet-squat-front.gif"],
                   ["Calve Raises","https://musclewiki.com/media/uploads/male-barbell-calve-raise-front.gif"]]
        },
        Angry:{
          Beginner:[["body stretch","https://cdn.shopify.com/s/files/1/0075/4673/2662/files/home-cardio-workouts-to-improve-cardiovascular-fitness-jumping-jacks.gif"],
                    ["chest stretch","https://musclewiki.com/media/uploads/male-chest-stretch-variation-1-front.gif"],
                    ["Bicep Stretch","https://musclewiki.com/media/uploads/male-biceps-stretch-variation-1-front.gif"],
                    ["Shoulder Stand Pose","https://i.pinimg.com/originals/f8/42/36/f84236b487fcc47507a2b2a705754018.gif"],
                    ["Plow Pose","https://i.pinimg.com/originals/c3/21/1e/c3211e65898d6065665cd580add587d1.gif"]],
        Intermediate:[["Squat","https://musclewiki.com/media/uploads/male-bodyweight-squat-front.gif"],
                      ["Forarm Plank","https://musclewiki.com/media/uploads/male-bodyweight-forarm-plank-side.gif"],
                      ["Pike Pushup","https://musclewiki.com/media/uploads/male-bodyweight-pike-pushup-front.gif"],
                      ["Hanging Knee Raises","https://musclewiki.com/media/uploads/male-bodyweight-hanging-knee-raises-front.gif"],
                      ["Glute Kickback","https://musclewiki.com/media/uploads/male-bodyweight-glute-kickback-front.gif"]],
        Advance:[["Standing Calf Raises","https://musclewiki.com/media/uploads/male-machine-standing-calf-raises-front.gif"],
               ["Romanian Deadlift","https://musclewiki.com/media/uploads/male-barbell-romanian-deadlift-front_fbeReMD.gif"],
               ["Side Bend","https://musclewiki.com/media/uploads/male-barbell-landmine-side-bend-front.gif"],
               ["Russian Twist","https://musclewiki.com/media/uploads/male-dumbbell-russian-twist-front.gif"],
               ["Dumbell Situp","https://musclewiki.com/media/uploads/male-dumbbell-situp-front.gif"]]
        },
        Depression:{
          Beginner:[["Tree Pose","https://media0.giphy.com/media/3ov9k97jYdt3orlRwA/giphy.gif"],
                    ["Sit-ups","https://c.tenor.com/al5TfkZTwjIAAAAC/tenor.gif"],
                    ["Butterfly Pose","https://177d01fbswx3jjl1t20gdr8j-wpengine.netdna-ssl.com/wp-content/uploads/2019/06/Adductor-Stretch.gif"],
                    ["Skipping","https://cdn.shopify.com/s/files/1/0075/4673/2662/files/home-cardio-workouts-to-improve-cardiovascular-fitness-jumping-ropes.gif"],
                    ["Bow Pose","https://i.pinimg.com/originals/2f/af/99/2faf99a638d8ce19008035aa1a75cfcb.gif"]],
         Intermediate:[["Single leg calf Raises","https://musclewiki.com/media/uploads/male-kettlebell-single-leg-calf-raises-front.gif"],
                       ["Dips Front","https://musclewiki.com/media/uploads/male-bodyweight-dips-front.gif"],
                       ["Incline Pushup","https://musclewiki.com/media/uploads/male-bodyweight-incline-pushup-front.gif"],
                       ["Chinup","https://musclewiki.com/media/uploads/male-bodyweight-chinup-front.gif"],
                       ["Forwars Lunge","https://musclewiki.com/media/uploads/male-bodyweight-forward-lunge-front.gif"]],
        Advance:[["Inclie Chest Fly","https://musclewiki.com/media/uploads/male-dumbbell-incline-chest-flys-front.gif"],
                 ["Dumbell Curl","https://musclewiki.com/media/uploads/male-dumbbell-curl-front.gif"],
                 ["Bench Press","https://musclewiki.com/media/uploads/male-barbell-bench-press-side_giVNk12.gif"],
                 ["Overhead Tricep Extension","https://musclewiki.com/media/uploads/male-dumbbell-overhead-tricep-extension-front.gif"],
                 ["Russian Twist","https://musclewiki.com/media/uploads/male-dumbbell-russian-twist-front.gif"]]
      
                  }
      
      }

    const [loading, setloading] = useState(true);

    const getState = async ()=>{
        const response = await fetch("http://127.0.0.1:8000/api/ml/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    });
    const data = await response.json();
    console.log(data[23]);
    return data[23];
    }

    useEffect(() => {

        async function FetchData(){
            const state = await getState();
            console.log(state)
            if(state ==="0"){
                setplaylistId(playlist.Blissful)
                setExercises(Exercise.blissful)
                setDiet(diet.Blissful)
            }
            else if(state === "1"){
                setplaylistId(playlist.Fear)
                setExercises(Exercise.fear)
                setDiet(diet.Fear)
            }
            else if(state === "2"){
                setplaylistId(playlist.Depression)
                setExercises(Exercise.Depression)
                setDiet(diet.Depression)
            }
            else if(state === "3"){
                setplaylistId(playlist.Anger)
                setExercises(Exercise.Anger)
                setDiet(diet.Angry)
            }
            else if(state === "4"){
                setplaylistId(playlist.Anxiety)
                setExercises(Exercise.Anxiety)
                setDiet(diet.Anxiety)
            }
            setloading(false)
        }
        FetchData()
    }, [])
    

    

    const [tab, setTab] = useState(0);
  return (
    <div className='bg-image'>
        {loading ? <div className="loading">Loading...</div>:
        <div className="column">
            <div className="quotes-topBar" onClick={getState}>
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
                         {exercises.Beginner.map((e)=> (<div className="dietBox">{e[0]}</div>)) }             
                    </div>
                    <div className="lightEx">
                         <img className='lightImg' src={moderate} alt="" />
                         {exercises.Intermediate.map((e)=> (<div className="dietBox">{e[0]}</div>)) }               
                    </div>
                    <div className="lightEx">
                         <img className='lightImg' src={hard} alt="" />
                         {exercises.Advance.map((e)=> (<div className="dietBox">{e[0]}</div>)) }               
                    </div>
                </div>}
                {tab===1&& <div id="diet">
                    <div className="lightEx">
                         <img className='lightImg' src={breakfast} alt="" />
                         {Diet.Breakfast.map((e)=>( <div className="dietBox">{e[0]}</div> ))}               
                        </div>
                    <div className="lightEx">
                         <img className='lightImg' src={lunch} alt="" />
                         {Diet.Lunch.map((e)=>( <div className="dietBox">{e[0]}</div> ))}               
                        </div>
                    <div className="lightEx">
                         <img className='lightImg' src={dinner} alt="" />
                         {Diet.Dinner.map((e)=>( <div className="dietBox">{e[0]}</div> ))}              
                        </div>
                </div>}
                {tab===2&& <MusicPage id={playlistId}/>}
                {tab===3&& <GamePage/>}
                </div>
            </div>
        </div>}
    </div>
  )
}

export default MainPage