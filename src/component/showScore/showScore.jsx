import { useState } from 'react';

import s from './showScore.module.css';

import Details from '../details/details';
import Button from '../../assets/button/button';

import PropTypes from 'prop-types';


function ShowScore({ 
    score, setScore, questionsBase, 
    currentAnswer, setCurrentAnswer,
    setShowScore, setCurrentQuestion,
}) {
    const [isShowDetails, setShowDetails] = useState(false);

    ShowScore.propTypes = {
        score: PropTypes.number.isRequired,
        questionsBase: PropTypes.array,
    }


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
        <>
            {!isShowDetails ?
                <section className={s.score}>
                    <h2 className={s.score__title}>Правильных ответов:
                        <span className={
                            (score === questionsBase.length && s.score__full) // Если все правильные ответы, число подсвечивается зеленым
                            || (score ? s.score__count : s.score__null) }     // Если нет правильных ответов - красным
                        >{score}
                        </span>/ 
                        <span className={s.score__full}>
                            {questionsBase.length}
                        </span>
                    </h2>
                    <Button handleClick={handleDetails}>
                        Подробнее
                    </Button>
                    <Button handleClick={handleRestart}>
                        Начать заново
                    </Button>
                </section>
                : 
                <Details score={score}
                        currentAnswer={currentAnswer}
                        questionsBase={questionsBase}
                        setShowDetails={setShowDetails}
                />
            }
        </>
    );
}

export default ShowScore;