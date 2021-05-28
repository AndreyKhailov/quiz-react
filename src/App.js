import React, { useState } from 'react';
import './App.css';
import { questionsBase } from './questionsBase';
import ShowScore from './component/showScore/showScore';
import Main from './component/main/main';


function App() {  

  const [score, setScore] = useState(0); // Колличество правильных ответов
  const [isShowScore, setShowScore] = useState(false); // Показывается результат в конце теста
  const [currentAnswer, setCurrentAnswer] = useState([]); // Храняться ответы пользователя
  const [currentQuestion, setCurrentQuestion] = useState(0); // Номер вопроса
  
  return (
    <div className="App">
      <div className="wrapper">
      { 
        !isShowScore
        ? <Main score={score}
                  setScore={setScore} 
                  setShowScore={setShowScore}
                  questionsBase={questionsBase}
                  currentAnswer={currentAnswer}
                  setCurrentAnswer={setCurrentAnswer}
                  currentQuestion={currentQuestion}
                  setCurrentQuestion={setCurrentQuestion}
          />
        : 
          <ShowScore  score={score}
                      setScore={setScore}
                      currentAnswer={currentAnswer}
                      questionsBase={questionsBase}
                      setShowScore={setShowScore}
                      setCurrentQuestion={setCurrentQuestion}
          />
      }
      </div>
    </div>
  );
}

export default App;
