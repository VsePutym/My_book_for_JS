// const phone = document.getElementById('phone');
// const showLog = function(){
//     this.value = this.value.replace(/\D/g, '')
// }

// phone.addEventListener('keydown', showLog);
// phone.addEventListener('keyup', showLog);
// phone.addEventListener('keypress', showLog);//? срабатывает только если была попытка ввести символ, тоесть на стрелочки, шифт , контрл т.д не работает

// maskPhone('#phone');

//!Валидация у формы

const myForm = document.getElementById('myform');

myForm.addEventListener('submit', valid)

//? у каждой форма есть свойство элементс, это псевдомассив, который содержит все поля ввода и кнопки формы , инпуты баттоны
console.log(myForm.elements);


const elementsForm = [];
console.log(elementsForm);

//* так валидировать кнопки я не хочу давайте их отфильтруем с помощью for of 

for(const elem of myForm.elements){
    if(elem.tagName.toLowerCase() !== 'button' && elem.type !== 'button'){
        elementsForm.push(elem); //? Чтобы сохранить все эллементы мы создаём массив и пушем их в него 
    }
}

function valid(event){
    const patternPhone = /^\d+$/;
    elementsForm.forEach(elem => {
        if(!elem.value){
            elem.style.border = 'solid red';
            event.preventDefault();
        }else{
            elem.style.border = '';
        }
        if(elem.id === 'phone' && !patternPhone.test(elem.value)){
            elem.style.border = 'solid red';
            event.preventDefault();
        }
    })
}