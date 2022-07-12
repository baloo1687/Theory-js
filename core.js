//ВОПРОС? Function declaration
console.log(test());

function test() {
 return 1;
}

//ВОПРОС? Function expresion
const func = function() {
 return 2;
}

console.log(func());

//________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
// Способы создания обьекта?
//с помощью функции:
function Func() {
    this.name = 'Artem';
    this.secondName = 'Pylypchuk';
}
;
const ObjFunc = new Func();
console.log(ObjFunc) // {name: 'Artem', secondName: 'Pylypchuk'};

//с помозью литеральной нотации
const obj = {
    'name': 'Artem',
    'secondName': 'Pylypchuk'
}
console.log(obj) // {name: 'Artem', secondName: 'Pylypchuk'};

//с помощью класса
class User {
    constructor() {
        this.name = 'Artem',
        this.secondName = 'Pylypchuk'
    }
}
const classObj = new User();
console.log(classObj) // {name: 'Artem', secondName: 'Pylypchuk'};
//________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
// Fetch, PROMISE
// PROMISE - специальный обьек для работы с асинхронным кодом и который содержит свое состояние. Вначале PENDING (ожидание), а затем одно из двух - FULFILLED (выполнено успешно) или REJECTED (выполнено с ошибкой)
new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Done');
    }, 1500);
})
.then(data => console.log(data)) //log 'Done'
.catch(error => console.log(error)); // error

// Пример когда мы используем промисы для запросов к АПИ
const API_PROMISE = fetch('URL_TO_API'); // в API_LIST будет хранится объект PROMISE
API_PROMISE.then((response) => {
    console.log(response) // Тут будет хранится обьект с ответом (Response), что бы получить массив обьектов с нашими данными, нужно указать тип данных которые мы ожидаем и использовать повторно then()
    response.json();
}).then(apiData => {
    console.log(apiData) // вот тут уже будут наши данные
}).catch(error => {
    console.log(error); // catch используется, что бы понимать есть ли какая-то ошибка в запросе и если есть - какая
})
//________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
// Async/await для асинхроных запросо:
// Async/await - способ для работы с PROMISE, функция помечена как async всегда вернет PROMISE
async function fetchFromApi() {
    const response = await fetch(api); // код  
    const json = await response.json(); // выполняется
    json.forEach(i => console.log(i)); // последовательно
}
// помечаем функцию async и перед каждой асинхронной операцией ставим await и функция будет выполнятся в последовательном режиме (синхронно)
//________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
//Для чего нужен оператор spread (...)?
//Что бы разворачивать массивы и обьекты
const obj = {name: 'Artem', surname: 'Pylypchuk'};
const bigObj = {...obj, years: '25', who: 'developer'}; //{name: 'Artem', surname: 'Pylypchuk', years: '25', who: 'developer'}
const arr = [3, 4];
const bigArr = [1, 2, ...arr, 5, 6]; // [1, 2, 3, 4, 5, 6]
//________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
//Как избежать ссылочной зависимости при копировании обьекта?
//Есть несколько вариантов, использовать метод .assign, он копирует сущестующий обьект(или несколько) и создает новый обьект или использовать старый способ JSON.parse
//МОМЕНТ: .assign не копирует вложенные обьект, а сохраняет ссылку на них!
let obj1 = { a: 1 } // ссылка на конкретный обьект
let obj2 = { a: 1 } // ссылка на конкретный обьект
let obj3 = obj1;

console.log(obj1 === obj2); // false, потому, что в переменных хранятся разные ссылки на разные обьекты (хоть визуально они и одинаковые);
console.log(obj1 === obj3); // true, потому, что в переменных хранится ссылка на один и тот же обьект;

// #1
const obj = {
    a: {
        b: 'c'
    }
}

const copyObj = Object.assign({}, obj); // {a: {b: 'c'}};
console.log(obj.a === copyObj.a); //true

//#2
const fullCopyObj = JSON.parse(JSON.stringify(obj));
console.log(obj.a === copyObj.a); //false
//________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
// Как поменять контекст функции?
// .bind, .call, .apply
function defaultFn() {
    return this
}
const obj = {name: 'Artem'};
const newFnBind = defaultFn.bind(obj); //принимает в параметр контектс
const newFnCall = defaultFn.call(obj, 'arg1', 'arg2'); //принимает в параметр в виде перечисления через запятую
const newFnApply = defaultFn.apply(obj, ['arg1', 'arg2']); //принимает в параметр в виде масива
console.log(newFnBind()); // {name: 'Artem'};
console.log(newFnCall()); // {name: 'Artem'};
console.log(newFnApply()); // {name: 'Artem'};
//________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
//Что такое тернарный оператор?
//аналогичный оператор if{}else{}.
true === true ? true : false;
//________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
//Что такое деструктуризация?
// Позволяет разобрать обьект/массив в кучу переменных
const obj = {name: 'Artem', surname: 'Pylypchuk'};
const arr = ['Artem', Pylypchuk];
let {name, surname} = obj; //name = Artem, surname = Pylypchuk
let [name, surname] = arr; //name = Artem, surname = Pylypchuk
//________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
// Какие есть сопосбы работы с асинхронным кодом?
//#1 и самый старый, callback-функция
async function pageLoader(callback) {
  const data = await fetch(api);
  callback(data)
}
function onPageLoadingFinished(pageData) {
  console.log('Page was sucessfully loaded!')
  console.log('Response:')
  console.log(pageData)
}
pageLoader(onPageLoadingFinished);
//#2 Promise
new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Done');
        reject('Error');
    }, 1500);
})
.then(data => console.log(data)) // выполниться в случае выполнения resolve
.catch(error => console.log(error)); // выполниться в случае выполнения reject
//#3 Async/await
async function fetchFromApi() {
    const response = await fetch(api); // код  
    const json = await response.json(); // выполняется
    json.forEach(i => console.log(i)); // последовательно
}
//________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
//ВОПРОС? Обьект событие (Event). Всплытие событий (Bubbling) и погружение событий (перехват)
/*
Погружение событий (перехват (Capture)) Phase 1
Window -> document -> <html> -> <body> -> <button>

Target Phase 2
<button> - click

Всплытие событий (Bubbling) Phase 3
<button> -> <body> -> <html> -> document -> Window
*/
button.addEventListener(click, (event) => { // button = <button>Button <strong>1</strong> </button>
    event.stopPropagation() // останавливает всплытие вверх, сработает только тот клик на который произвели непосредственное нажатие
    event.target // целевой элемент, элемент на который мы кликнули событие (клик) = <button>Button <strong>1</strong> </button> ИЛИ <strong>1</strong>
    event.currentTarget // элемент на который непосредственно повесили обработчик = <button>Button <strong>1</strong>
    console.log('clickOnButton');
})

//Погружение событий (перехват (Capture))
window.addEventListener(click, (event) => {
    console.log('clickOnWindow');
    event.stopPropagation()
}, {capture: true})
//В логе выдасться только "clickOnWindow", так как мы отлавливаем погружение событий а event.stopPropagation() отменяет все последующие event

//Всплытие событий (Bubbling)
window.addEventListener(click, (event) => {
    console.log('clickOnWindow');
})
// Сначала в логе покажет "clickOnButton", затем "clickOnWindow" (если нету event.stopPropagation())!
// всплытие передается по цепочке родительских элементов от ребенка до родителя (от внутреннего и в верх)
//________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
//Как остлеживать и обрабатывать ошибки в JS?
try {
    //код 
} catch (err) {
    // код тут выполнится если try выдаст ошибку
} finally {
    // код тут выполнится в любом случае
}
//________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
//Что такое DOM дерево?
// Каждый html тег/текст является обьектом (document.documentElement, document.body). Все эти обьекты доступны в JS и мы можем использовать их для работы со страницей.
// DOM - обьектная модель представления html документа в JS которое представлена в виде структуры данных "дерево"
//________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
// Как получить свойство обьекта
const obj = {name: 'Artem', surname: 'Pylypchuk'};
obj.name; //#1
obj['name']; //#2
//________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
//Что такое http и из чего состоит?
// http - протокол предназначен для передачи данных по сети
// http состоит из 3 основных частей:
// строка запроса, заголовки, тело сообщения
// строка запроса - указывает метод передачи, урл адрес, версию протокола http
// заголовки - описывают тело сообщений, передают различные параметры
// тело сообщения (необязательный параметр) - данные которые передаются в запросе
//________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
// методы http запросов?
// get, post, put, delete
// get - для получения данных
// post - для создания/редактирования данных
// put - для обновления данных
// delete - для удаления данных
// можно удалять, обновлять и т.д. в не соответствующих методах, но для лучшей семантики рекомендуется их разделять
//________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
// что такое WebSocket?
// WebSocket - протокол который предзназначен для взаимодействия в реальном времени. Участники устанавливают соединение и получают сообщения до тех пор, пока соединение не будет закрыто
//________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
// Что такое RESTAPI
// REST самый популярный архитектурный подход к построение API. Подразумевает взаимодействие client -> server. Основная идея заключается в разделении разных операций при обращении к одному и тому же url через http методы
//________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________

//Какие есть способы конвертировать строку в число?
// 1. Using parseInt()
// parseInt() parses a string and returns a whole number. Spaces are allowed. Only the first number is returned.
myString = '129'; 
console.log(parseInt(myString)); // expected result: 129
a = 12.22;
console.log(parseInt(a)); // expected result: 12

// 2. Using Number()
// Number() can be used to convert JavaScript variables to numbers. We can use it to convert the string too number.
// If the value cannot be converted to a number, NaN is returned.
Number("10");          // returns 10
Number(" 10  ");       // returns 10
Number("10.33");       // returns 10.33

// 3. Using Unary Operator (+)
// The unary plus operator (+) precedes its operand and evaluates to its operand but attempts to convert it into a number, if it isn't already.
const x = 25;
const y = -25;
console.log(+x); // expected output: 25
console.log(+y); // expected output: -25
console.log(+''); // expected output: 0

// 4. Using parseFloat()
// parseFloat() parses a string and returns a number. Spaces are allowed. Only the first number is returned.
parseFloat("10");        // returns 10
parseFloat("10.33");     // returns 10.33
parseFloat("10 20 30");  // returns 10
parseFloat("10 years");  // returns 10
parseFloat("years 10");  // returns NaN


// 5. Using Math.floor()
// The Math.floor() function returns the largest integer less than or equal to a given number. This can be little tricky with decimal numbers since it will return the value of the nearest integer as Number.
str = '1222'
console.log(Math.floor(str)) // returns 1222

a = 12.22
Math.floor(a) // expected result: 12

// 6. Multiply with number
// Multiplying the string value with the 1 which won’t change the value and also it will be converted to number by default.
str = '2344'
console.log(str * 1) // expected result: 2344

//________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________

//Способ перебора масивов
let arr = [1,2,3,4]

// #1 ES5 FOR
for (let i = 0; i++; i<= arr.length) {
    console.log(arr[i]); // 1, 2, 3, 4
}

// #2 ES6 FOR OF
for (let item of arr) {
    console.log(item); // 1, 2, 3, 4
}

// #3 FOREACH
arr.forEach((element, index, ourArr) => {
    console.log(element); // 1, 2, 3, 4 элементы масива
    console.log(index); // 0, 1, 2, 3 индекс элемента масива
    console.log(ourArr) // [1,2,3,4] (6) сам масив
});

// #4 MAP
let newArr = arr.map(element => element += 1);
console.log(newArr); // [2, 3, 4, 5]

// #5 FILTER функция каллбэк возвращает true или false, если true тогда элемент добавляется в новый массив
let lowArr = arr.filter(element => {
    return element <= 3 ? true : false;
});
console.log(lowArr); // [1, 2, 3]

// #6 REDUCE Возвращаем сумму элементов масива. Принимает 2 параметра (callback и начальное значение параметра total);
let sum = arr.reduce((total, element) => {
    return total + element;
}, 0);

console.log(sum); // 10

// #7 FIND возвращает элемент масива который соответствует условию
let number = arr.find((element) => {
    return element == 2;
})
console.log(number); // 2

// #8 FINDINDEX возвращает индекс элемента масива который соответствует условию
let numberIndex = arr.findIndex((element) => {
    return element == 2;
})
console.log(number); // 1

//Все эти методы (начиная с MAP) можно выводить в цепочке
let arrChain = arr
    .filter(element => element <= 2)
    .map(element => element += 2)
    .reduce((total, element) => total + element, 0);
console.log(arrChain); // 7

//________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________

// Все методы работы с масивом
const people = [
    {
        name: 'Artem',
        age: '25',
        birthDay: '05',
        birthMonth: '09',
        birthyear: '1996',
        sallary: '2000'
    },
    {
        name: 'Darina',
        age: '26',
        birthDay: '25',
        birthMonth: '12',
        birthyear: '1995',
        sallary: '1500'
    }
]

// #1 .push(...items) -> добавляет элементы в конец
people.push({
    name: 'Slavik',
    age: '26',
    birthDay: '06',
    birthMonth: '06',
    birthyear: '1995',
    sallary: '2500'
})
console.log(people); //[{name: 'Artem'...}{name: 'Darina'...}{name: 'Slavik'...}]

// #2 .pop() -> достает элемент с конца и удаляет его из масива
let lastElement = people.pop();
console.log(lastElement); // {name: 'Darina'...}]
console.log(people) //[{name: 'Artem'...}

// #3 .shift() -> достает элемент с начала и удаляет его из масива
let firstElement = people.shift();
console.log(firstElement); // {name: 'Artem'...}
console.log(people) //[{name: 'Darina'...}]

// #4 .splice(str) -> Умеет всё: добавлять, удалять и заменять элементы. Возвращает массив из удалённых элементов.
// .splice(index[, deleteCount, elem1, ..., elemN]) -> index - с какого элемента начать, deleteCount - какое к-во элементов удалить, elem1, ..., elemN - добавляет элементы на место удаленных
people.splice(0, 1); // начиная с позиции 0, удалить 1 элемент
console.log(people) //[{name: 'Darina'...}]

// #5 .slice([start], [end]) -> Он возвращает новый массив, в который копирует элементы, начиная с индекса start и до end (не включая end).
let newPeople = people.slice(1, 2);
console.log(newPeople); // [{name: 'Darina'...}]

// #6 .concat() -> создаёт новый массив, в который копирует данные из других массивов и дополнительные значения.
// .concat(arg1, arg2...)
const concatArr = [1, 2];
const newConcatArr = people.concat(concatArr);
console.log(newConcatArr); //[{…}, {…}, 1, 2]

// #7 .split() и .join() -> .split() превращает строку в массив, .join() -> превращаем массив в строку
const string = 'artem, darina, slavik';
const stringToArray = string.split(',');
const arrayToString = stringToArray.join(';');

console.log(stringToArray); // ['artem', ' darina', ' slavik']
console.log(arrayToString); 'artem; darina; slavik'

//________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________

//JS - однопоточный язык
for (var i = 0; i < 10; i++) {
    setTimeout(() => console.log(i), 1); //10(10)
}
//console.log = 10(10) потому, что var функциональная область видимости, и сначала происходит итерация до 10 а потом 10 раз сет таймаут выдает значение переменной

for (let i = 0; i < 10; i++) {    
    setTimeout(() => console.log(i), 1); 
}
//console.log = 1,2,3...10 потому, что let блочная область видимости, и все 10 раз переменная будет увеличиваться на 1

//________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________

//ВОПРОС? Что такое Замыкание?
//ОТВЕТ! Замыкание - это способ получения доступа и управления внешними переменными из функции, даже после того как родительская функция прекратило свое выполнение
//МОМЕНТ! Замыкание - это когда внутреняя функция вызывается вне внешней функции, а не когда она вызывается внутри внешней функции!

//Пример№1
function external() {
    const externalVar = 'Im external function!';

    return function internal() {
        const internalVar = 'Im internal function!';
        console.log(internalVar);
        console.log(externalVar);
    }
}

const internalFunc = external();
internalFunc(); 

//Работа функции выдаст - Im internal function!, Im external function!, потому, что замыкание дает доступ внутренней функции к переменным даже когда внешняя функция закончила свое выполнение!

//Пример№2
function getCounter() {
    let counter = 0;
    return function() {
        return counter++;
    }
}
let count = getCounter();
console.log(count());  // 0
console.log(count());  // 1
console.log(count());  // 2

//Обратите внимание, что значение counter не сбрасывается до 0 при каждом вызове count, как вроде бы она должна делать.
//Так происходит, потому что при каждом вызове count(), создаётся новая область видимости, но есть только одна область видимости, созданная для getCounter, так как переменная counter объявлена в области видимости getCounter(), 
//она увеличится при каждом вызове функции count, вместо того, чтобы сброситься до 0.

//________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________

// Какие есть протоколы?
/*
IP
TCP/IP
UDP
FTP
DNS
DNS
HTTP/S
NTP
SSH
*/

//________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________

// Как JS с DOM работает
/* 
Что можно делать:
Слушать события (клик, овер и т.д.)
Создавать, удалять и добавлять, обновлять элементы
Добавлять медиа
Добавлять стили, классы
*/

//Как скопировать элемент:
//https://developer.mozilla.org/ru/docs/Web/API/Node/cloneNode

let elementNode = document.querySelector('div');
let copyElemenetNode = elementNode.cloneNode(true);
console.log(copyElemenetNode) // <div></div> с дочерними элементами если они будут (благодаря параметру true в clone Node)

//________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________

// ООП
class Rectangle {
    // класс
    // свойства класса

    constructor(w, h) {
        //блок инструкций которые вызываются при создании обьекта (экземляра)
        this.#width = w; // приватное свойство
        this.height = h; // публичное свойство
    }

    get width() {
        //геттер, в данном случае мы возвращаем ширину прямоугольника
        return this.#width;
    }

    set width(value) {
        //сеттер, мы можем либо изменить значение либо сделать какие-то дополнительные действие с ним
        if (value <= 0) {
            this.#width = 1;
        } else {
            this.#width = value;
        }
    }


    calcArea() {
        return this.#width * this.height;
        //метод класса
        //this - обьект у которого будет вызван этот метод
    }
}

const Rect = new Rectangle(110, 25); //экземпляр класса, обьект
const Rect2 = new Rectangle(12, 42); //экземпляр класса, обьект 2
const Rect3 = new Rectangle(42, 61); //экземпляр класса, обьект 3
//с одного класса можно сделать столько обьектов сколько потребуется!
Rect.calcArea(); //вернет выполнение метода у обьекта (экземпляра) у которого мы вызвали этот метод, в данном случае у обьекта (экземпляра) Rect

Rect.#width // доступа не будет, потому, что свойство приватное
Rect.width // 110 - потому, что есть геттер
Rect.width = 25 // задаем значение через сеттер


// основные концепции ООП!!
/* 
1 Инкапсуляция
Сам класс является капсулой который содержит свои свойства и методы для работы с этими свойствами. 
У класса есть открытые (PUBLIC) свойства и методы к которым есть доступ вне класса и есть закрытые (PRIVATE/#) которые можно использовать только внутри класса.
PRIVATE/# (закрытые) свойства и методы мы единожды задаем при создании класа и потом о них забываем
PUBLIC (открытые) свойства и методы с которыми мы работаем постоянно и можем их менять
В TypeScript приватные свойства и методы задаются через модификатор PRIVATE, в JavaScript - через #

GET/SET методы - нужны что бы получать доступ к приватным свойствам и изменять их ВНЕ класса, если геттер или сеттер не задан, то менять приватные свойства можем только ВНУТРИ класса
Там где не нужно менять значение (например id пользователя, которое задается внутри класса) для таких свойств мы не используем геттер и сеттер.

Так же можно использовать let что бы обьявлять приватные свойства, так как у него блочная область видимости.
*/

/* 
2 Наследование
Если у нас есть класс (Person) в котором есть данные которые нам нужно использовать в другом классе (Employee), то мы используем наследование, или по другому, можно сказать, что Person расширяет Employee.
class Employee extends Person - пример как создать класс который будет наследовать свойтва и методы с другого класса (наследовать можно только от одного класса!!!)
класс Employee может работать и без своего конструктора, так как он наследует конструктор родителя!
класс Employee так же может использовать геттеры и сеттеры из родительского класса.
*/

class Person {
    constructor(name, age) {
        this.#name = name;
        this.#age = age;
    }

    get name() {
        return this.#name;
    }

    get age() {
        return this.#age;
    }

    set age(value) {
        if (value <=0) {
            this.#age = 1;
        } else {
            this.#age = value;
        }
    }
}

class Employee extends Person { //указали, что класс Employee будет наследовать свойства и методы класса Person
    constructor(name, age, inn, passport) {
        super(name, age); // указываем, что сначала выполнится все, что есть в конструкторе наследуемого класса (Person) а потом уже все, что есть в конструкторе текущего класса (Employee)
        this.#inn = inn;
        this.#passport = passport;
    }
}

const emplyeeArtem = new Employee('Artem Pylypchuk', 25); // если в классе Employee нету конструктора, мы всеравно передаем свойства так как этот класс наследует и конструктор класса Person

const emplyeeDarina = new Employee('Darina Pylypchuk', 26, 1234521, 'TT231321');

emplyeeArtem.name // Artem Pylypchuk - так как класс Employee наследует геттер класса Person

/* 
3 Полиморфизм
Полиморфизм позволяет одному и тому же фрагменту кода работать с разными типами данных.
Полиморфизм помогает проектировать объекты таким образом, чтобы они могли совместно использовать или переопределять любое поведение с конкретными предоставленными объектами.
Есть 2 типа полиморфизма - Параметрический(истинный) и ad-hoc (мнимый) (не факт что нужно о нем говорить если не спросят).
Параметрический(истинный) - тот, что используется чаще всего. Нужно создать в каждом классе копию метода и указать в нем разные значение, таким образом, при вызове одного и того же метода для разных экземпляров 
будет выдаваться разные значения в зависимости от то
(не факт что нужно о нем говорить если не спросят) ad-hoc (мнимый) - это полиморфизм, основанный на различении типов. Для различных типов аргументов используется разный код функции. То-есть мы в одном классе пишем 2 одинаковых метода, принимают одинаковые параметры но с разными типами и содержанием
*/

//Параметрический(истинный)
class Human {
    constructor(name) {
        this.name = name;
    }

    say() {
        return `Hello, my name is ${this.name}, I like travelling`;
    }
}
  
class Men extends Human {
    constructor(name) {
        super(name)
    }
    // Берем метод say у родителя.
}

class Coder extends Human {
    constructor(name) {
        super(name)
    }

    say() {
        // Переопределяем метод родителя say для отображения нового значения.
        return `Hello, my name is ${this.name}, I like coding`;
    }
}
  
const alex = new Men('Alex'); // "Hello, my name is Alex, I like travelling"
const leo = new Coder('Leo');// "Hello, my name is Leo, I like coding"

// Агрегация и композиция
/*
Агрегация и композиция - когда мы используем разные классы в одном для создания единого приложения
Композиция - классы инициализируются внутри родительского класса и не могут существовать без родительского класса
Агрегация - отдельный независимый класс, который передается как параметры класса и инициализируется вне родительского класса
*/
class Engine {
    drive() {
        console.log('Engine is working');
    }
}

class Wheel {
    drive() {
        console.log('Wheel is spining')
    }
}

class Freshener {
    smells() {
        console.log('Freshener is smelling')
    }
}

class Car {
    constructor(freshener) {
        this.engine = new Engine(); //если удалить класс Car - Engine и Wheel удалятся вместе с ним
        this.freshener = freshener; //если удалить класс Car - Freshener останется и будет жить сам по себе
        this.wheels = [];
        this.wheels.push(new Wheel());
        this.wheels.push(new Wheel());
        this.wheels.push(new Wheel());
        this.wheels.push(new Wheel());
    }

    // делегирование
    drive() {
        this.engine.drive();
        this.wheels.forEach(wheel => {
            wheel.drive();
        })
        this.freshener ? this.freshener.smells() : console.log('Freshener is lost');
    }
}

const KIA = new Car();
KIA.drive(); //Engine is working (4)Wheels are spining

const freshener = new Freshener()
const BMW = new Car(freshener);
BMW.drive();

//Имплементация??? (Интерфейсы и абстрактные классы)