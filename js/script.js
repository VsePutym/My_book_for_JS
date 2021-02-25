document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    //! Урок номер 19
    //! Параметры  документа, окна и работы с ним


    //* чтобы получить ширину и высоту открытого окна в браузере, мы должны вывести их значения, например
    // const hign = document.documentElement.clientHeight;
    // console.log(hign);
    // const width = document.documentElement.clientWidth;
    // console.log(width);

    //* чтобы узнать на сколько пиксилей мы ушли от верхней точки

    const scroll = document.documentElement.scrollTop;
    console.log(scroll);

    //* если нам нужны размеры с полосой прокрутки и бордорами , то нам нужно использовать offsetHeight и offsetWidth
    const hign = document.documentElement.offsetHeight;
    console.log(hign);
    const width = document.documentElement.offsetWidth;
    console.log(width);

    //* если нам нужно получить ширену и высоту обьекта с учётом скроллов , то нам нужно свойство scrollHeight and  scrollWidth

    const hign = document.documentElement.scrollHeight;
    console.log(hign);
    const width = document.documentElement.scrollWidth;
    console.log(width);

    //* пример того , что прсле нажатия кнопки скрол сдвигается на какое-то колличество пиксилей, с помощью метода scrollBy(0, 10);
    document.querySelector('.buttun').addEventListener('click', () => {
        block.scrollBy(0, 10);

        //? для перемещения по скролу единежды
        block.scrollTo(10, 50);
    })

    //* чтобы узнать на сколько блок находится по координатам отокна браузера т.к в js все координаты вычесляются от верхнего левого угла
    document.querySelector('.buttun').addEventListener('click', () => {
        const domRect = block.getBoundingClientRect();
        console.log(domRect.top);
        console.log(domRect.left);
    })
});