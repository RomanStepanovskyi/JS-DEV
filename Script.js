/* let number = 5;
const LeftBorderWidht = 1;


number = 20;

console.log(number);

const obj = {
    a: 50
};

console.log(
    obj.a

);
 */


/* 
const arr = ['a', 'b', 'c'];
const arrObj = {
    0:'a',
    1: 'b',
    2: 'c'
}


arrObj.b = '12345';

console.log(arrObj['b']);
 */
/* console.log(arr[1]);
console.log(arrObj[1]);
 */


//alert ('Hello');

//const result = confirm ('are you here?');

//console.log(result);

/* const answer = +prompt ("Are you 18?", "1");
console.log(answer + 5 );
 */
 

/* const answers = [];

/* answers [0] = prompt ('What is your name?', '');
answers [1] = prompt ('how long do you live in Charlotte?', '');
answers [2] = prompt ('Do you liked your job?', ''); */

/* console.log(typeof(answers));
 */
/*  */ 


/* 
const myName = 'Roman';

alert(`Hi ,${myName}`);
 */

/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

'use strict';




const NumberOfFilms = +prompt ('How many movies have you watched already?', '');

const objPersonalMovieDB = {
    count: NumberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

    
};


const a = prompt('one of the last movies you watched?', ''),
      b = prompt('how much would you rate it?',''),
      c = prompt('one of the last movies you watched?', ''),
      d = prompt('how much would you rate it?','');


      objPersonalMovieDB.movies [a] = b;
      objPersonalMovieDB.movies [c] = d;


      console.log(objPersonalMovieDB);
      




