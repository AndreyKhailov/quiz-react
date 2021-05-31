import React, { useState } from 'react';
import s from './showScore.module.css'
import Details from '../details/details'


function ShowScore({ 
    score, setScore, questionsBase, 
    currentAnswer, setCurrentAnswer,
    setShowScore, setCurrentQuestion,
}) {
    const [isShowDetails, setShowDetails] = useState(false)

    function handleDetails() { // Выводится подробная таблица результата теста
        setShowDetails(true);
    }

    function handleRestart() { /* Прохождение теста с самого начала
                                  State переходит в состояние по умолчанию */
        setScore(0);
        setShowScore(false);
        setCurrentQuestion(0);
        setCurrentAnswer([]);
    }
    
    return (
        <div>
            {
                !isShowDetails
                ?
                    <section className={s.score}>
                        <h2 className={s.score__title}>Правильных ответов:
                            <span className={
                                (score === questionsBase.length && s.score__full) // Если все правильные ответы, число подсвечивается зеленым
                                || (score ? s.score__count : s.score__null)       // Если нет правильных ответов - красным
                            }
                            >{score}
                            </span>/ 
                            <span className={s.score__full}>{questionsBase.length}</span>
                        </h2>
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