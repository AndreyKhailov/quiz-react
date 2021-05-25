import React, { useState } from 'react';
import './App.css';
import { questionsBase } from './questionsBase';
import ShowScore from './component/showScore/showScore';
import Header from './component/header/header';


function App() {  

  const [score, setScore] = useState(0); // Колличество правильных ответов
  const [isShowScore, setShowScore] = useState(false); // Показывается результат в конце теста
  const [currentAnswer, setCurrentAnswer] = useState([]); // Храняться ответы пользователя
  const [currentQuestion, setCurrentQuestion] = useState(0); // Номер вопроса
  
  return (
    <div className="App">
      { 
        !isShowScore
        ? <Header score={score}
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
  );
}

export default App;
