import logo from './logo.svg';
import './App.css';
import Question from './pages/question/Question';
import React,{useState} from 'react';
// import ProgressBar from './components/progress_bar';



function App(){
  const [index, setindex] = useState(0);
  const questions =  ["Q1 : abc","Q2 : efg","Q3 : hij","Q4 : klm"];
  const options = 
    [
      ["option1","option2","option1","option1",],
       ["option1","option2","option1","option1",],
       ["option1","option2","option1","option1",],
       ["option1","option2","option1","option1",],
       
    ]
    const [progress, setProgress] = useState('30');

  return (
    <div className="App">
      <Question options={options[index]} question={questions[index]} setIndex={setindex} index={index}/>
      {/* <ProgressBar/> */}
    </div>
  );
}

export default App;

