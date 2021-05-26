import React from 'react';
import './details.module.css'

function Details({

  score, currentAnswer,
  questionsBase, setShowDetails,

}) {  

  let num = 1;
  function number() { return num++ }; // Вычисляется порядковый номер вопроса и выводится в таблицу

  function handleToBack() { 
    setShowDetails(false) // Переход на предыдущую страницу
  };  

  return (
    <section className="details">
      <table className="details__table">
        <caption className="details__table-title">Результат теста</caption>
        <thead className="details__table-head">
          <tr>
            <th>№</th>
            <th>Вопрос</th>
            <th>Ваш ответ</th>
            <th>Правильный ответ</th>
          </tr>
        </thead>
        <tbody className="details__table-body">
          <td>
            {
              questionsBase.map((index) => (
                <tr key={index}>{ (number()) }</tr> )) // Порядковый номер вопроса
            }
          </td><td>
            {
              questionsBase.map((question, index) => (
                <tr key={index}>{question.questionText}</tr> )) // Текст вопроса
            }
          </td><td>
            {
              currentAnswer.map((answerUser, index) => (
                <tr key={index}>{answerUser.answerText}</tr> )) // Выводится ответ пользователя 
            }            
          </td><td>
            {
              questionsBase.map((answerTrue, index) =>        // В базе данных перебирается каждый элемент массива
                answerTrue.answersOption.map((item) =>        // В каждом элементе перебирается массив ответов(answersOption)
                  item.isCorrect && (                         // Делается проверка: какой из ответов правильный
                    <tr key={index}>{item.answerText}</tr>    // В таблицу выводится правильный ответ
                )))
            }      
          </td>
        </tbody>
        <tfoot className="details__table-footer">
          <p>Правильных ответов: {score} / {questionsBase.length}</p>
          <button className="details__back-btn"
                  onClick={() => handleToBack()}
          >
            Назад
          </button>
        </tfoot>
      </table>
    </section>
  );
}

export default Details;