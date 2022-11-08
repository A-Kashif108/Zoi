import React,{useState} from 'react'
import Question from '../question/Question'


const QuestionPage = ({question,answers,setanswers}) => {
    const [index, setindex] = useState(0)
  return (
    <div>
        <Question index={index} setIndex={setindex}
         options={question[index][1]} question={question[index][0]}
         setAnswers={setanswers} answers={answers}
         size={question.length}
          />
        
    </div>
  )
}

export default QuestionPage