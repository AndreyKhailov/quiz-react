import React from 'react';
import './header.module.css';


function Header({
    score, setScore, setShowScore,
    questionsBase, currentAnswer, 
    setCurrentAnswer, currentQuestion,
    setCurrentQuestion,

}) {
    
    function handleAnswer(e, answerUser) {
      e.preventDefault();

      setCurrentAnswer([ ...currentAnswer, answerUser]); // Записывается ответ пользователя в локальный state
      answerUser.isCorrect && setScore(score+1); // Делается подсчет правильных ответов
      
      const nextQuestion = currentQuestion + 1; // Переход к следующему вопросу
      if (nextQuestion < questionsBase.length) {
        setCurrentQuestion(nextQuestion); 
      } else {
        setShowScore(true);  /* Переход к isShowScore котпоненту. 
                                  (выводится последняя страница) */
      }
    }

    return (   
        <header className="header">
          <h1>Тест на знание React JS</h1>
          <section className="question">
            <p className="question__num">Вопрос {currentQuestion + 1} / {questionsBase.length}</p>
            <p className="question__text">{ questionsBase[currentQuestion].questionText }</p>
          </section>
          <section className="answer__options">
            {
              questionsBase[currentQuestion].answersOption.map((item, index) => (
                <button 
                  key={index}
                  className="answer__options-btn"
                  onClick={ (e) => handleAnswer(e, item) }
                >
                  {item.answerText}
                </button>
              ))
            }            
          </section> 
        </header>
    )      
}

export default Header;