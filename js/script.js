document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    //! Урок номер 16
    //! Rest, spred , Деструктуризация

    //! Rest параметр 

    //* Иногда функции приходилось принимать множество  неизвестных множество параметров
    //* Таким образом всё, что мы передали в как аргумент, назначается массивом
    //*Также мы можем вывести только те, которые нам нужны например a, b, с выведуту red, 5, 12 а всё остальное выведет массив arr

    function test(a, b, c, ...arr) {
        console.log(arr);
        console.log(a, b, c);
    }

    test('red', 5, 12, 'black', [], true, 9);



    //! spred оператор 

    const arr = ['red', 5, 12];

    function test2(a, b, c) {
        console.log(arr);
        console.log(a, b, c);
    }
    //** Как мы можем передать значения из нашего массива? */
    test2(...arr);

    //* все эллементы массива будут переданы по одному, ане целым массивом
    //* таким образом мы можем передать несколько массивов или комбинировать их с другими значениями

    const arr1 = ['red', 5, 12];
    const arr2 = ['black', true];

    function test3(a, b, c, d, e) {
        console.log(a, b, c);
        console.log(d, e);
    }
    test3(...arr1, ...arr2);

    //* также мы можем соединять из 2 массивов в 1

    const arr3 = ['red', 5, 12];
    const arr4 = ['black', true];
    const arr5 = [...arr3, ...arr4];
    console.log('arr5: ', arr5);

    //* также мы можем довлять любые значения, в начале, в конце, не имеет значения

    const arr6 = ['red', 5, 12];
    const arr7 = ['black', true];
    const arr8 = [1, ...arr6, 44, ...arr7, 'hi gidra'];
    console.log('arr8: ', arr8);

    const allimg = document.querySelectorAll('img');
    console.log(allimg);
    const newImg = [...allimg];
    console.log(newImg);


    //! Деструктуризация объектов

    //* как присвоить новым эллементам значения car? 

    const car = {
        brand: 'mazda',
        model: 3,
        color: 'red'
    };

    //* так было 
    // const brand = car.brand;
    // const model = car.model;
    // const color = car.color;
    // console.log(brand, model, color);
    //* Теперь мы делаем всё проще

    const {
        brand,
        model,
        color
    } = car;

    //*мы в фигурных скобках указываем свойства которые хотим вхять у этого обьекта и задать переменные с таким же именем
    console.log(brand, model, color);

    //* если в обьекте есть вложенность , то мы можем обратится к ней

    const car1 = {
        brand: 'mazda',
        model: 3,
        color: 'red',
        options: {
            door: 4,
            abs: true
        }
    };

    const {
        options: {
            door,
            abs
        }
    } = car1;
    console.log(door, abs);

    //* Также мы можем изменять имена переменных таким способом 
    const {
        options: {
            door: doorCar,
            abs: absCar
        }
    } = car1;
    console.log(doorCar, absCar);

    //* Также мы можем добавить свойство по умолчанию с помощью = , если свойства в объекте нету то оно его создат 
    const {
        options: {
            color = 'red'
        } = {}
    } = car1;
    console.log(color);

    //* где мы можем это приминить, например у нас есть функция которя может принимать объект

    const createCar = (car) => {
        console.log(`Запущенно производство автомобиля ${car.brand} ${car.model}
цвет кузова ${car.color}
цвет салона ${car.colorInt}`);
    };

    createCar({
        brand: 'mazda',
        model: 3,
        color: 'blue',
        colorInt: 'black'
    });

    //* Мы можем деструктеризовать это  и добавить на всякий случай если такого свойства не будет, свойство по умолчанию

    const createCar2 = ({
        brand = 'BMW',
        model = 6,
        color = 'black',
        colorInt = 'white'
    }) => {
        console.log(`Запущенно производство автомобиля ${brand} ${model}
    цвет кузова ${color}
    цвет салона ${colorInt}`);
    };

    createCar2({
        model: 3,
        color: 'blue',
    });

    //* мы можем деструктеризировать массивы

    const cars = ['mazda', 'bmw', 'audi', 'mercedes'];
    const [a, b, c] = cars;
    console.log(a);
    console.log(b);
    console.log(c);

    //* можно пропустить эллемент указав 2 запятые

    const [a, , b, c] = cars;
    console.log(a);
    console.log(b);
    console.log(c);

    //* с многомерными или вложеными массивами
    const cars1 = [
        ['mazda', 'bmw'],
        ['audi', 'mercedes'], 'zil'
    ];

    // const [a, b, c] = cars1;
    const [
        [a, b],
        [...c], e
    ] = cars1;

    console.log(a);
    console.log(b);
    console.log(c);
    // console.log(d);
    console.log(e);

    //* Ещё пример

    const carModel = {
        brand: 'volvo',
        models: {
            sedan: ['s60', 's90'],
            cross: ['v60', 'v90']
        }
    };


    const {
        models: {
            sedan: [s1, s2],
            cross: [c1, c2]
        }
    } = carModel;
    console.log(s1, s2, c1, c2);

    //* как получить значение переменных в массив

    const car = 'bmw';
    const cycle = 'bmx';
    const bike = 'honda';

    const transport = {
        car,
        cycle,
        bike
    }
    console.log(transport);

    //! метод ассайд нужен для того , что бы взять например 2 обьекта и с одного взять все данные и перезаписать второй, пример

    const transports = {
        car: 'mazda',
        cycle: 'bmx',
        bike: 'honda'
    };

    const newTransports = {
        bike: 'suzuki',
        quaBike: 'polaris'
    };

    Object.assign(transports, newTransports);
    console.log(transports);



    //! Map and Set

    const map = new Map();
    //* коллекция map хранит пары ключ значение, но отличия в том , что ключом может быть любое произвольное значение, а не только строка как в обьекте
    //* с помощью Set мы можем добавлять в коллекцию данные например
    map.set('car', {brend: 'mazda', model: 3});

    //* ключом будет число 777 а не строка 777
    map.set(777, 'три топора');

    //* ключом может быть даже null 
    map.set(null, 'даже так');

    //* Ключ как обьект
    const obj = {
        name: 'Юра',
        age: 28
    };
    map.set(obj, 123);


    console.log(map);
});