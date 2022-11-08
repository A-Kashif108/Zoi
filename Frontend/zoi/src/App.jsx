import './App.css';
import Question from './pages/question/Question';
import React,{useState,useEffect} from 'react';
import MainPage from './pages/main_page/MainPage';
import LoginPage from './pages/login_page/Login_Page';
import RegisterPage from './pages/register_page/register_page';
import {AuthProvider} from './api services/context'
import {
  BrowserRouter as Router,
  Routes,
  Route,useNavigate
} from "react-router-dom";
import QuestionPage from './pages/questions_page/questionPage';
// import ProgressBar from './components/progress_bar';



function App(){
  const [index, setindex] = useState(0);
  const  Questions = [
    ["Gender",["Male","Female","other"]],
    ["Do you experienced any of the following ?",["Skin problems","Mental discomfort","Physical discomfort","Digestion issues","No issues"]],
    ["Around what time do you normally sleep ?",["9pm -11 pm","11 pm- 1am","1 am - 3 am","3 am -5 am","5am-12am"]],
    ["How are you feeling today ?",["Stressed","Anxious","Energetic","Angry"]],
    ["Are you on any kind medication ?",["Yes","No"]],
    ["What's your daily water intake on average ?",["1-3 litres","3-5 litres","5-7 litres"]],
    ["What's your average screen-time in a day ?",["0-4 hours","4-8 hours","8-12 hours"]],
    ["Describe your current Feeling",["Cheerful","Irritated","Stressed","Blunted"]],
    ["Do you smoke or drink ?",["Smoke","Drink","Both","None"]],
    ["How often are you engaged in any physical activity ?",["Quite Frequently","Sometimes","Never"]],
    ["How often do you eat junk food ?",["Quite Frequently","Sometimes","Never"]]
  ]
    const [progress, setProgress] = useState('30');

    const navigate = useNavigate();

    const [answers, setanswers] = useState([])

    useEffect(() => {
      const user = localStorage.getItem('access_token');
    if(user){
          // navigate('/mainPage');
    }
    }, [])
  return (
    <div className="App">
      <AuthProvider>
      <div>
        <Routes>
          <Route  path="/" element={<LoginPage />}/>
          <Route path="/register" element={<RegisterPage/>}  />
          <Route path="/mainPage" element={<MainPage answers={answers}/>} />
          <Route path="/questions" element={
          <QuestionPage question={Questions} answers={answers}
           setanswers={setanswers} 
          />
          } />
        </Routes>
      </div>
    </AuthProvider>
    </div>
  );
}

export default App;

