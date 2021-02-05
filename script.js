'use strict';
/**
 * Lesson06 General
 * Gaming Bot on a function closures
 */


const isNumber = function name(number) {
    return !isNaN(parseInt(number)) && isFinite(number);
};



//функция генерирует случайное целое число от MIN до MAX
const randomInteger = (MIN, MAX) => {
    // const MIN = 1;
    // const MAX = 100;
    let result = Math.floor((MAX * Math.random()) + MIN);
    return result;
};


//Используйте функции alert, confirm, prompt для общения с пользователем

const main = function() {

    const seed = randomInteger(1, 100); //генерим загаданое число - это сохранится в замыкании функции

    const next = function() {
        let ans = prompt('Угадай число от 1 до 100');

        //Escape
        if (ans === null) {
            alert('Вы нажали отмена\nКонец игры');
            return; //выход из функции по Escape на prompt
        }
        ans = parseInt(ans);

        if (isNaN(ans)) {
            //проверка на корректость ввода данных
            alert('Ошибка! Вы ввели строку!!! введите целое число');
            next(); //следующий запуск итеррации рекурсии

        } else if (seed < ans) {
            alert('Загаданное число меньше << ' + ans);
            next(); //следующий запуск итеррации рекурсии

        } else if (seed > ans) {
            alert('Загаданное число БОЛЬШЕ >> ' + ans);
            next(); //следующий запуск итеррации рекурсии
            
        } else if (seed === ans ) {
            alert('Поздравляю, Вы угадали УРААААА!!!!\nЗагаданное число ' + ans);
            return;//выход из функции конец игры когда угадал
        }
        //next(); убрали от сюда
    };

    return next; //возвращаем ссылку на функцию в замыкании
};


const play = main(); //генерация замыкания в функции
play(); //по сути наша функция next()
