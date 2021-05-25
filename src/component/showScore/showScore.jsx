import React, { useState } from 'react';
import './showScore.module.css'
import Details from '../details/details'


function ShowScore({ 
    score, setScore, questionsBase, 
    setShowScore, currentAnswer,
    setCurrentQuestion, 
}) {
    const [isShowDetails, setShowDetails] = useState(false)

    function handleDetails() {
        setShowDetails(true);
    }

    function handleRestart() {
        setScore(0);
        setShowScore(false);
        setCurrentQuestion(0);
    }
    return (
        <div>
            {
                !isShowDetails
                ?
                    <section className="score">
                        <span>Правильных ответов {score} / {questionsBase.length}</span>
                        <button className="score__details-btn"
                                onClick={() => handleDetails()}
                        >
                            Подробнее
                        </button>
                        <button className="score__restart-btn"
                                onClick={() => handleRestart()}
                        >
                            Начать заново
                        </button>
                    </section>
                : 
                    <Details score={score}
                            currentAnswer={currentAnswer}
                            questionsBase={questionsBase}
                    />
            }
        </div>
        
    );
}

export default ShowScore;