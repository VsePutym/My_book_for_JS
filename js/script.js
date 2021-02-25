document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    //! Урок номер 20
    //! Делегирование

    //* Идеия состоит в том, что повесит обработчик событий на родителя и фильтровать на кокой эллемент было нажатие , таким обрахом
    //* мы избавляемся от большого количества слушателей 

    //* чтобы исключить попадание на другие эллементы нужно пользоваться event.target, а вот несколько примеров 

    wrapperButton.addEventListener('click', () => { //? wrapperButton это родитель
        if (event.target.tagName !== 'BUTTON'){ //? исключаем кнопку button 
            return;
        }else{
            changeText(event);
        }
    })

    wrapperButton.addEventListener('click', () => { //? wrapperButton это родитель
        if (!event.target.classList.contains('button')){ //? исключаем кнопку button 
            return;
        }else{
            changeText(event);
        }
    })

    //* С МЕТОДОМ matches
    wrapperButton.addEventListener('click', () => { //? wrapperButton это родитель
        if (!event.target.matches('button')){ //? исключаем кнопку button 
            return;
        }else{
            changeText(event);
        }
    })
});