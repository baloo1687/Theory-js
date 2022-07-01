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

//ВОПРОС? Отличие строго равенства от не строгого равенства

2 == '2'
2 === 2;

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

//Погружение событий (перехват (Capture))
button.addEventListener(click, (event) => { // button = <button>Button <strong>1</strong> </button>
    event.stopPropagation() // останавливает всплытие вверх, сработает только тот клик на который произвели непосредственное нажатие

    event.target // целевой элемент, элемент на который мы кликнули событие (клик) = <button>Button <strong>1</strong> </button> ИЛИ <strong>1</strong>
    event.currentTarget // элемент на который непосредственно повесили обработчик = <button>Button <strong>1</strong>

    console.log('clickOnButton');
})

window.addEventListener(click, (event) => {
    console.log('clickOnWindow');
    event.stopPropagation()
}, {capture: true})

//В логе выдасться только "clickOnWindow", так как мы отлавливаем погружение событий а event.stopPropagation() отменяет все последующие event

//Всплытие событий (Bubbling)
button.addEventListener(click, (event) => { // button = <button>Button <strong>1</strong> </button>
    event.stopPropagation() // останавливает всплытие вверх, сработает только тот клик на который произвели непосредственное нажатие

    event.target // целевой элемент, элемент на который мы кликнули событие (клик) = <button>Button <strong>1</strong> </button> ИЛИ <strong>1</strong>
    event.currentTarget // элемент на который непосредственно повесили обработчик = <button>Button <strong>1</strong>

    console.log('clickOnButton');
})

window.addEventListener(click, (event) => {
    console.log('clickOnWindow');
})

// Сначала в логе покажет "clickOnButton", затем "clickOnWindow" (если нету event.stopPropagation())!
// всплытие передается по цепочке родительских элементов от ребенка до родителя (от внутреннего и в верх)

//________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________

let a = { a: 1 } // ссылка на конкретный обьект
let b = { a: 1 } // ссылка на конкретный обьект
let c = a;

console.log(a === b); // false, потому, что в переменных хранятся разные ссылки на разные обьекты (хоть визуально они и одинаковые);
console.log(a === c); // true, потому, что в переменных хранится ссылка на один и тот же обьект;

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

//ВОПРОС?В каком случае ссылочный тип данных обьекта может подосрать нам жизнь?
/*
Когда мы хотим сделать независимую копию какого-то массива данных, 
ведь если просто присвоить новой переменной старый массив данных, то все что будет менятся в новом масиве - будет менятся в старом (так как ссылочный тип)
*/

let arr1 = [
    {
        'a': 2
    }
]

//Неправильно
let arr2 = arr1;

//Правильно
let arr3 = [...arr1];

//Правильно
let arr4 = arr1.map(item => item);

//Правильно
let arr5 = JSON.parse(JSON.stringify(arr2));

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

// Реализовать методы, которые в процессе выполнения строки (2).plus(3).minus(1) дали бы на выходе 4.
function plus(v) {
    console.log(this);
    return this + v;
}

function minus(v) {
    console.log(this);
    return this - v;
}

Number.prototype.plus = plus;
Number.prototype.minus = minus;

console.log((2).plus(3).minus(1));

//________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________

// Fetch + промисы
// PROMISE - специальный обьек для работы с асинхронным кодом и который содержит свое состояние. Вначале PENDING (ожидание), а затем одно из двух - FULFILLED (выполнено успешно) или REJECTED (выполнено с ошибкой)

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

//Пример работы с асинхронным кодом
const coffee = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Your coffee!');
        reject(Error('Your coffee is lost!'))
    }, 1500);
})

coffee.then(data => {
    console.log(data);
}).catch(err => console.log(err));

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

//Как работает протокол HTTP и рендер страницы
//После того, как клиент (браузер) отправляет запрос на сервер, сервер обрабатывает этот запрос и отдает данные в следующем виде:

/*
Заголовок:
HTTP/1.1 302 Moved Temporarily
Server: nginx
Date: Sat, 08 Mar 2014 22:29:53 GMT
Что именно приходит:
Content-Type: text/html
Content-Length: 154
Connection: keep-alive
Keep-Alive: timeout=25
Location: http://habrahabr.ru/users/alizar/

HTML:
<html>
<head><title>302 Found</title></head>
<body bgcolor="white">
<center><h1>302 Found</h1></center>
<hr><center>nginx</center>
</body>
</html>

Как только браузер получает первый кусочек данных, он сразу начинает обрабатывать получаемую информацию. Эта обработка называется "Парсинг" (Parsing). Во время парсинга получаемые данные преобразуются в DOM и CSSOM (en-US), которые напрямую участвуют в отрисовке.
DOM (Объектная модель документа) - это внутреннее представление разметки HTML. 

Первый шаг - это обработка разметки HTML и построение дерева DOM.
Когда парсер находит неблокирующие ресурсы (например, изображения), браузер отправляет запрос на загрузку ресурсов, но сам продолжает обработку. Обработка может продолжаться когда обнаружена ссылка на CSS файл, но если обнаружен <script>, 
особенно если он без параметров async или defer - такой скрипт считается блокирующим и приостанавливает обработку HTML до завершения загрузки скрипта.
Ожидание получения CSS не блокирует парсинг HTML, но он блокирует JavaScript, потому что JavaScript часто используется для выборки узлов документа по CSS-селекторам.

Второй шаг - это обработка CSS и построение CSSOM дерева. CSSOM (объектная модель CSS) похожа на DOM.

Третий шаг - JavaScript по окончании загрузки должен быть интерпретирован, скомпилирован, обработан и исполнен. Скрипты преобразовываются в абстрактное синтаксическое дерево (AST). 

Четвертый шаг - это комбинирование DOM и CSSOM в дерево рендеринга.
Элементы, которые не должны быть показаны, например, <head>, а так же их дети или любые элементы с display:none, такие как script { display: none; }, не будут включены в дерево рендера, так как они не должны быть отрисованы. 
Узлы с правилом visibility: hidden включены в дерево рендера, так как они всё равно занимают своё место.

Пятый шаг - это запуск компоновки (layout) элементов дерева рендера. На этом шаге вычисляется геометрия каждого узла, то есть ширина, высота, положение элементов. Reflow (перекомпоновка) - это любой последующий процесс определения размеров и 
позиции для любой из частей целого документа.

Последний шаг - это отрисовка каждого отдельного узла на экране. Во время фазы отрисовки или растеризации, браузер конвертирует каждый контейнер box в настоящие пиксели на экране. 
Отрисовка подразумевает рисование каждой визуальной частицы элемента на экране (текст, цвета, границы, тени) и рисование заменяемых элементов (картинки, кнопки). Браузер должен выполнять это быстро.
*/

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

//ad-hoc (мнимый) - запись для TypeScript но логика понятна
class Calculator {
    add(a: number, b: number): number {
        return a + b;
    }

    add(a: string, b: string): string {
        return a + b;
    }
}

add(5,5) //10
add('5', '5') //55

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

//________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________

// Прототипы?????????
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

//REACT: Hook, state, MOBX/REDUX, VIRTUAL DOM
//Что такое setState()?
/*
у каждого компанента в react js есть состояние которое хранит в себе какие-то данные и что бы их сохранить необходимо вызвать функцию setState()
Метод setState() следит за изменением состояния элемента, а состояние является обьектом и когда состояние меняется (когда вызвали функцию setState()) 
компонент рендерится повторно и мы видим в браузере обновленные данные, что позволяет нам не работать с DOM напрямую
*/

//Что такое Virtual DOM?
/*
Virtual DOM это копия оригинального DOM дерева и предназначено для того, что бы работать с данными напрямую, а не работать с DOM деревом.
При добавлении/изменении каких-то компонентов DOM и Virtual DOM сравниваются и выделяется разница и запускается ререндер только тех элементов которые были изменены. Такой подход - быстрее пеотому, что не включает в себя тяжелый операции работы над DOM
*/

//Как отрисовать массив элементов в React JS?
/*
Для этого мы пользуемся функцией .map внутри которой пишем jsx разметку
*/
const numbers = [1,2,3,4,5,6]

number.map((number) => 
    <li>{number}</li>
);

//Разница между контрилуремыми и не контролируемыми компонентами
/*
Контролируемый компонент - процесс изменения значения полностью под контролем разработчика, мы вручную перезаписываем значение!
*/
//Контролируемый компонент - внутри мы отслеживаем функцию onChange и вручную перезаписываем значение. 
function App() {
    const [value, setState] = setState('');
    const changeHandler = (e) => {
        setValue(e.target.value);
    }

    return (
        <div>
            <input type="text" value="{value}" onChange={() => changeHandler(e)}/>
        </div>
    )
}

//НЕ контролируемый компонент
function App() {
    const inputRef = useRef();
    
    const getInputRef = () => {
        return inputRef.current.value;
    }

    return (
        <div>
            <input type="text" ref={inputRef}/>
        </div>
    )
}

//Цикл жизни компонента и его методы
/*
1. Инициализация - компонент готови установку начального состояния и параметров по умолчанию
2. Монтирование - компонент реакт готов для монтирования в DOM
3. Обновление - компонент обновляется двумя способами - отправляя новые свойства и обновляя состояни.
4. Размонтирование - компонент не нужен и удаляется
*/

//Какие основные REACT HOOK вы знаете и какие используете
//Основные
useState();
/*
Подробнее про useState() и особенности использования
const [state, setState] = useState(initialState)
Функция возвращает 2 значения: state элемент - само состояние, setState - функция которая обновляет state. 
Во время первого рендера, значение состояния state ровняется значению которое передается в качестве первого аргумента (initialState).
setState обновляет значение состояния state, принимает новое значение и ставит в очередь повторный рендер компонента
*/
useEffect()

//Дополнительные
useContext();
useReducer();
useMemo();
useCallback();
useRef();
//etc.

//Что такое JSX?
// расширение языка которая упрощает восприятие кода и разработку

//Изначально использовался синтаксис React.createelement()
const element = React.createelement(
    'h1',
    {className: 'greeting'},
    'Привет мир'
)

//Сейчас используется
const newElement = (
    <div className="greeting">Привет мир</div>
)

//Что такое REDUX?
/*
Библиотека Redux — это способ управления состоянием приложения, менеджер состояний. Хотя в React есть собственный метод управления состояниями (почитать о нём можно в руководстве по React), он плохо масштабируется.
Redux идеально использовать в средних и крупных приложениях. Им стоит пользоваться только в случаях, когда невозможно управлять состоянием приложения с помощью стандартного менеджера состояний в React или любой другой библиотеке.
*/

//________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
