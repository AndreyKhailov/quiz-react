import React from 'react';

import s from './details.module.css';

import Button from '../../assets/button/button';

import { uniqueKey } from '../../uniqueKey';

import PropTypes from 'prop-types';


function Details({

  score, currentAnswer,
  questionsBase, setShowDetails,

}) {

  Details.propTypes = {
    score: PropTypes.number.isRequired,
    currentAnswer: PropTypes.arrayOf(PropTypes.shape(
      {
        answerText: PropTypes.string.isRequired,
        isCorrect: PropTypes.bool,
      }
    )),
    questionsBase: PropTypes.arrayOf(PropTypes.shape(
      {
        questionText: PropTypes.string.isRequired,
        answersOption: PropTypes.array.isRequired,
      }
    )),
    setShowDetails: PropTypes.func.isRequired,
  }

  let num = 1;
  function number() { return num++ }; // Вычисляется порядковый номер вопроса и затем выводится в таблицу

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
                questionsBase.map(() => (
                  <div key={ uniqueKey() }>{ number() }</div> )) // Порядковый номер вопроса
              }
            </td><td>
              {
                questionsBase.map((question) => (
                  <div key={ uniqueKey() }>{question.questionText}</div> )) // Текст вопроса
              }
            </td><td>
              {
                currentAnswer.map((answerUser) => ( // Выводится ответ пользователя 
                  <div key={ uniqueKey() }
                       className={answerUser.isCorrect
                                  ? s.answer__right
                                  : s.answer__noRight}
                  >
                    {answerUser.answerText}
                  </div> 
                )) 
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
        <tfoot className={s.table__footer}>
          <tr><td colSpan="4">
            Правильных ответов:
              <span className={
                  (score === questionsBase.length && s.score__full) // Если все правильные ответы, число подсвечивается зеленым
                || (score ? s.score__count : s.score__null)         // Если нет правильных ответов - красным
              }
              >{score}
              </span>/ 
              <span className={s.score__full}>{questionsBase.length}</span>
          </td></tr>
        </tfoot>
      </table>
      <Button 
        handleClick={handleToBack}
        style={s.btn}
      >
        Назад
      </Button>
    </section>
  );
}

export default Details;