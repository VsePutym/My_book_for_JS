document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    //! Урок номер 18
    //! Скрипты и время выполнения setTimeout, setInterval и requestAnimationFrame Объект Date


    //* setTimeout принимает 2 аргумета, первый функция колбек и второй это время, через какой промежуток времени запустить эту функцию, пример:

    // setTimeout(function(){
    //     console.log('сообщение в консоль');
    // }, 3000);

    //* setInterval различия будут в том, что через какой интервал будет запускаться колбек функция, теперь каждые 2 сек будет запускаться

    // setInterval(function(){
    //     console.log('привет я set interval');
    // }, 2000);

    // let count = 0;
    // setInterval(function () {
    //     count++;
    //     console.log('привет я set interval ' + count);
    // }, 2000);

    //* есть функции которые останавливают их обеих к примеру clearInterval(); и clearTimout();
    //* она принимает индитификатор setInterval, как его определить ?
    //* нужно создать переменную let idInterval и вывести её в clearInterval
    //* чтобы была в этом логика , мы setInterval поместим в setTimeout и поставим время

    // let count = 0;

    // let idInterval = setInterval(function () {
    //     count++;
    //     console.log('привет я set interval ' + count);
    // }, 2000);

    // setTimeout(function () {
    //     clearInterval(idInterval);
    // }, 7000);


    // let getMassage = function (name) {
    //     console.log('привет ' + name + '!');
    // };

    // let count = 0;

    // let idInterval = setInterval(getMassage, 2000, 'сука, я твоя смерть');

    // setTimeout(getMassage, 5000, 'мудак');

    //* ну ксажилению у этих способов есть минусы страница может быть не в активной вкладке, и анимация может продолжаться, также
    //* анимация работает не ссинхронно с обоновлением экрана , что ведёт к торможению компа, для того чтобы это всё избежать
    //* была создана фунция реквестАнимейшен фрейм,  которая помогая оптимизировать анимации, помогая делать их более плавными, также
    //* использовать меньше ресурсво и связывать анимации в одно целое. 
    //* для этого создаём за пределами функции переменную flyInterval, название производное
    //* а в нутри функции пишем эту переменную flyInterval = requestAnimationFrame(сюда передадим имя функции), для её завершения
    //* мы прописываем cancelAnimationFrame(flyInterval);

    // count = 0;
    // let flyInterval;
    // let flyAnimate = function () {
    //     flyInterval = requestAnimationFrame(flyAnimate);
    //     count++;
    //     if (count < 350) {
    //         worm.style.top = count + 'px';
    //         airplane.style.left = сount * 2 + 'px';
    //     } else if (count < 500) {
    //         airplane.style.left = сount * 2 + 'px';
    //     } else {
    //         cancelAnimationFrame(flyInterval);
    //     }
    //     console.log(count);
    // };

    // flyInterval = requestAnimationFrame(flyAnimate);

    //* чтоыбы правильно работать с requestAnimationFrame нужно уметь работать с Date , знать текущее время, окончание работы анимации и т.д

    //! Date 

    //* используем get для получения какой - то даты часов, минут и т.д
    //* и наоборт для того, чтобы установить используем setData, пример

    let data = new Date();
    data.setDate(data.getDate() + 100);
    console.log('день недели ' + data.getDay());
    //* мы также можем высчитать какое число будет через 100 дней
    //* отчёт времени в js начался хранится в милисекундах , прошедших  с полуночи 1970 года 1 января это называется timeStend
    //* чтобы его получить нужно воспользоваться методом getTime();
    console.log(data.getTime());
    //* также мы можем вписать в скобочки Data() числа наугад, и мы получим результат с 1970 года 1 января + это количество милисекунд, пример

    let data2 = new Date(-615214413123);
    console.log(data2);




});