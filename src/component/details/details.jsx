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
          <td>
            {
              questionsBase.map(() => (
                <tr key={ uniqueKey() }>{ (number()) }</tr> )) // Порядковый номер вопроса
            }
          </td><td>
            {
              questionsBase.map((question) => (
                <tr key={ uniqueKey() }>{question.questionText}</tr> )) // Текст вопроса
            }
          </td><td>
            {
              currentAnswer.map((answerUser) => (
                <tr key={ uniqueKey() }>{answerUser.answerText}</tr> )) // Выводится ответ пользователя 
            }            
          </td><td>
            {
              questionsBase.map((answerTrue) =>        // В базе данных перебирается каждый элемент массива
                answerTrue.answersOption.map((item) =>        // В каждом элементе перебирается массив ответов(answersOption)
                  item.isCorrect && (                         // Делается проверка: какой из ответов правильный
                    <tr key={ uniqueKey() }>{item.answerText}</tr>    // В таблицу выводится правильный ответ
                )))
            }      
          </td>
        </tbody>
        <tfoot className={s.table__footer}>
          <p>Правильных ответов: {score} / {questionsBase.length}</p>
          <button className={s.btn__back}
                  onClick={ () => handleToBack() }
          >
            Назад
          </button>
        </tfoot>
      </table>
    </section>
  );
}

export default Details;