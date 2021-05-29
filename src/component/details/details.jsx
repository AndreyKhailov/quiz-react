import React from 'react';
import s from './details.module.css'
import { uniqueKey } from '../../uniqueKey';

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
    <section className={s.details}>
      <table className={s.table}>
        <caption className={s.table__title}>Результат теста</caption>
        <thead className={s.table__head}>
          <tr>
            <th>№</th>
            <th>Вопрос</th>
            <th>Ваш ответ</th>
            <th>Правильный ответ</th>
          </tr>
        </thead>
        <tbody className={s.table__body}>
          <tr>
            <td>
              {
                questionsBase.map( () => (
                  <div key={ uniqueKey() }>{ number() }</div> )) // Порядковый номер вопроса
              }
            </td><td>
              {
                questionsBase.map((question) => (
                  <div key={ uniqueKey() }>{question.questionText}</div> )) // Текст вопроса
              }
            </td><td>
              {
                currentAnswer.map((answerUser) => (
                  <div key={ uniqueKey() }>{answerUser.answerText}</div> )) // Выводится ответ пользователя 
              }            
            </td><td>
              {
                questionsBase.map((answerTrue) =>        // В базе данных перебирается каждый элемент массива
                  answerTrue.answersOption.map((item) =>        // В каждом элементе перебирается массив ответов(answersOption)
                    item.isCorrect && (                         // Делается проверка: какой из ответов правильный
                      <div key={ uniqueKey() }>{item.answerText}</div>    // В таблицу выводится правильный ответ
                  )))
              }      
            </td>
          </tr>
        </tbody>
        <tfoot className={s.table__footer} >
          <tr><td colSpan={4}>
            Правильных ответов: {score} / {questionsBase.length}
          </td></tr>
        </tfoot>
      </table>
      <button className={s.btn__back}
              onClick={ () => handleToBack() }>
        Назад
      </button>
    </section>
  );
}

export default Details;