import React, { useState } from 'react';
import s from './showScore.module.css'
import Details from '../details/details'


function ShowScore({ 
    score, setScore, questionsBase, 
    setShowScore, currentAnswer,
    setCurrentQuestion,
}) {
    const [isShowDetails, setShowDetails] = useState(false)

    function handleDetails() { // Выводится подробная таблица результата теста
        setShowDetails(true);
    }

    function handleRestart() { // Прохождение теста с самого начала
        setScore(0);
        setShowScore(false);
        setCurrentQuestion(0);
    }
    return (
        <div>
            {
                !isShowDetails
                ?
                    <section className={s.score}>
                        <span>Правильных ответов {score} / {questionsBase.length}</span>
                        <button className={s.details__btn}
                                onClick={() => handleDetails()}
                        >
                            Подробнее
                        </button>
                        <button className={s.restart__btn}
                                onClick={() => handleRestart()}
                        >
                            Начать заново
                        </button>
                    </section>
                : 
                    <Details score={score}
                            currentAnswer={currentAnswer}
                            questionsBase={questionsBase}
                            setShowDetails={setShowDetails}
                    />
            }
        </div>
        
    );
}

export default ShowScore;