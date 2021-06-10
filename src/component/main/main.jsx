import s from './main.module.css';
import Button from '../../assets/button/button';
import { uniqueKey } from '../../uniqueKey';


function Main({
    score, setScore, setShowScore,
    questionsBase, currentAnswer, 
    setCurrentAnswer, currentQuestion,
    setCurrentQuestion,

}) {
    
    function handleAnswer(answerUser) {
      setCurrentAnswer([ ...currentAnswer, answerUser]); // Записывается ответ пользователя в локальный state
      answerUser.isCorrect && setScore(score+1); // Делается подсчет правильных ответов
      
      const nextQuestion = currentQuestion + 1; // Переход к следующему вопросу
      if (nextQuestion < questionsBase.length) {
        setCurrentQuestion(nextQuestion); 
      } else {
        setShowScore(true);  /* Переход к isShowScore котпоненту. 
                            (выводится страница правильных ответов) */
      }
    }

    return (   
        <main className={s.main}>
          <h1 className={s.main__title}>Тест на знание React JS</h1>   
          <section className={s.question}>
            <p className={s.question__text}>{ questionsBase[currentQuestion].questionText }</p>
            <span className={s.question__num}>Вопрос {currentQuestion + 1} / {questionsBase.length}</span>
          </section>
          <section className={s.answer__options}>
            {
              questionsBase[currentQuestion].answersOption.map((item) => (
                <Button 
                  key={uniqueKey()}
                  handleClick={handleAnswer}
                  param={item}
                >
                  {item.answerText}
                </Button>
              ))
            }            
          </section> 
        </main>
    )      
}

export default Main;