import React from 'react'
import './Question.css'



const Question = ({ options, question, setIndex, index }) => {

    return (
        <div className='background'>
            <div className='row'>

                { }
                <img className='test_image1' src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="" />
                <div className='column'>
                    <div className='Ques'>
                        {question}
                    </div>
                    <p className='ques'>
                        <div className="options">
                            {options
                                .map((x) => (<div className="option" onClick={() => { setIndex(index + 1) }}>
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