import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Question.css'



const Question = ({ options, question, setIndex, index,setAnswers ,answers,size }) => {

    const [final, setfinal] = useState("")
    const postQuestions = async ()=> {
        const Q1 = answers[0]
        const Q2 = answers[1]
        const Q3 = answers[2]
        const Q4 = answers[3]
        const Q5 = answers[4]
        const Q6 = answers[5]
        const Q7 = answers[6]
        const Q8 = answers[7]
        const Q9 = answers[8]
        const Q10 = answers[9]
        const Q11 = final
        const response = await fetch("http://127.0.0.1:8000/api/question/post/", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
                Q1,
                Q2,
                Q3,
                Q4,
                Q5,
                Q6,
                Q7,
                Q8,
                Q9,
                Q10,
                Q11
            }),
        
          });
          console.log("Question posted", response.status)
    }

    const navigate = useNavigate()

    return (
        <div className='background'>
            <div className='row_ques'>

                { }
                <img className='test_image1' src="https://tinyurl.com/24c9a8k7" alt="" />
                <div className='column_ques'>
                    <div className='Ques'>
                        {question}
                    </div>
                    <p className='ques'>
                        <div className="options">
                            {options
                                .map((x) => (<div className="option" onClick={async () => {
                                    setAnswers([...answers,x]);
                                    setfinal(x)
                                    if(index ===10){
                                        setIndex(0)
                                        await postQuestions();
                                        navigate("/mainPage")
                                    }else{
                                        setIndex(index + 1);
                                    }
                                    
                                    }}>
                                    <div className="txt">
                                        {x}
                                    </div>
                                </div>)
                                )}
                        </div>
                    </p>
                </div>
                {/* <Progressbar bgcolor="orange" progress='30'  height={'100'} /> */}
                {/* <Progress_bar bgcolor="orange" progress='30'  height={30} /> */}
            </div>
        </div>
    )
}

export default Question
/*<img className='testimage' src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="" />*/