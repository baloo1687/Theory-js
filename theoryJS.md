## Типы данных в JS
В JavaScript есть 8 основных типов данных.

Семь из них называют «примитивными» типами данных:
* number для любых чисел: целочисленных или чисел с плавающей точкой; целочисленные значения ограничены диапазоном ±(253-1).
* bigint для целых чисел произвольной длины.
* string для строк. Строка может содержать ноль или больше символов, нет отдельного символьного типа.
* boolean для true/false.
* null для неизвестных значений – отдельный тип, имеющий одно значение null.
* undefined для неприсвоенных значений – отдельный тип, имеющий одно значение undefined.
* symbol для уникальных идентификаторов.

И один не является «примитивным» и стоит особняком:
* object для более сложных структур данных.

## Что такое hoisting (поднятие)?
Объявления переменных и функций попадают в память в процессе фазы компиляции, но остаются в коде на том месте, где вы их объявили (работает ТОЛЬКО для `var` и `function declaration`).

```
num = 6;
num + 7;
var num;
/* не генерирует ошибку, так как num объявлен */
```

JavaScript "поднимает" только объявление, но не инициализацию. Если вы используете переменную, объявленную и проинициализированную после её использования, то значение будет undefined. Два примера ниже демонстрируют это поведение.
```
var x = 1; // Инициализируем x
console.log(x + " " + y);  // '1 undefined'
var y = 2;
//код выше и код ниже одинаковые

var x = 1; // Инициализируем x
var y; // Объявляем y
console.log(x + " " + y);  // '1 undefined'
y = 2; // Инициализируем y
```
## Что такое Event Loop и как он устроен?

[Кратко про Event Loop](https://www.youtube.com/watch?v=377qAu37OTE&t=69s)

Event loop - это цикл задач в js.
Интерпретатор выполняет код JS следующим образом:
1. Все задачи попадают в Call Stack и находятся там до тех пор пока пока задача не выполниться.
2. Задачи отложенного действия (такие как setTimeout, addEventListener etc) регистрируются в WEB API и ждут выполнения.
3. С WEB API задачи попадают в Callback Queue после чего выполняется.

## Что такое IIFE?
IIFE (Immediately Invoked Function Expression) это JavaScript функция, которая выполняется сразу же после того, как она была определена.
```
(function () {
    statements
})();
```
Функция становится мгновенно выполняющимся функциональным выражением. Переменные внутри функции не могут быть использованы за пределами её области видимости.
```
(function () {
    var aName = "Barry";
})();
// Variable name is not accessible from the outside scope
aName // throws "Uncaught ReferenceError: aName is not defined"
```
Переменная, которой присвоено IIFE, хранит в себе результат выполнения функции, но не саму функцию.
```
var result = (function () {
    var name = "Barry";
    return name;
})();
// Immediately creates the output:
result; // "Barry"
```
## Function declaration and Function expresion
1. Function declaration
```
test();

function test() {
 return 1;
}
```
2. Function expresion
```
const func = function() {
 return 2;
}

test();
```
## Что такое функциональное программирование?
Функциональное программирование - это подход к программированию, при использовании которого функции можно передавать другим функциям в качестве параметров и использовать функции в качестве значений, возвращаемых другими функциями. Занимаясь функциональным программированием, мы проектируем архитектуру приложения и пишем код с использованием функций.

## Функции высшего порядка
Функции высшего порядка — это функции, которые работают с другими функциями, либо принимая их в виде параметров, либо возвращая их. Проще говоря, функцией высшего порядка называется такая функция, которая принимает функцию как аргумент или возвращает функцию в виде выходного значения.

Решение задачи без использования функций высшего порядка:
```
const arr1 = [1, 2, 3];
const arr2 = [];
for(let i = 0; i < arr1.length; i++) {
  arr2.push(arr1[i] * 2);
}
// выводит [ 2, 4, 6 ]
console.log(arr2);
```

Решение задачи с помощью функции высшего порядка map:
```
const arr1 = [1, 2, 3];
const arr2 = arr1.map(item => item * 2);
console.log(arr2);
```
## Способы создания обьекта?
1. С помощью функции:
```
function Func() {
    this.name = 'Artem';
    this.secondName = 'Pylypchuk';
};
const ObjFunc = new Func();
console.log(ObjFunc) // {name: 'Artem', secondName: 'Pylypchuk'};
```
2. С помощью литеральной нотации:
```
const obj = {
    'name': 'Artem',
    'secondName': 'Pylypchuk'
}
console.log(obj) // {name: 'Artem', secondName: 'Pylypchuk'};
```
3. С помощью класса:
```
class User {
    constructor() {
        this.name = 'Artem',
        this.secondName = 'Pylypchuk'
    }
}
const classObj = new User();
console.log(classObj) // {name: 'Artem', secondName: 'Pylypchuk'};
```
## Fetch, PROMISE
PROMISE - специальный обьек для работы с асинхронным кодом и который содержит свое состояние. Вначале PENDING (ожидание), а затем одно из двух - FULFILLED (выполнено успешно) или REJECTED (выполнено с ошибкой)
```
new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Done');
    }, 1500);
})
.then(data => console.log(data)) // 'Done'
.catch(error => console.log(error)); // error
```
Пример когда мы используем промисы для запросов к АПИ
```
const API_PROMISE = fetch('URL_TO_API'); // в API_LIST будет хранится объект PROMISE
API_PROMISE.then((response) => {
    console.log(response) // Тут будет хранится обьект с ответом (Response), что бы получить массив обьектов с нашими данными, нужно указать тип данных которые мы ожидаем и использовать повторно then()
    response.json();
}).then(apiData => {
    console.log(apiData) // вот тут уже будут наши данные
}).catch(error => {
    console.log(error); // catch используется, что бы понимать есть ли какая-то ошибка в запросе и если есть - какая
})
```
## Async/await для асинхроных запросо:
Async/await - способ для работы с PROMISE, функция помечена как async всегда вернет PROMISE
```
async function fetchFromApi() {
    const response = await fetch(api); // код  
    const json = await response.json(); // выполняется
    json.forEach(i => console.log(i)); // последовательно
}
```
Помечаем функцию async и перед каждой асинхронной операцией ставим await и функция будет выполнятся в последовательном режиме (синхронно)
## Для чего нужен оператор spread (...)?
Что бы разворачивать массивы и обьекты
```
const obj = {name: 'Artem', surname: 'Pylypchuk'};
const bigObj = {...obj, years: '25', who: 'developer'}; //{name: 'Artem', surname: 'Pylypchuk', years: '25', who: 'developer'}
const arr = [3, 4];
const bigArr = [1, 2, ...arr, 5, 6]; // [1, 2, 3, 4, 5, 6]
```
## Как избежать ссылочной зависимости при копировании обьекта?
Есть несколько вариантов, использовать метод .assign, он копирует сущестующий обьект(или несколько) и создает новый обьект или использовать старый способ JSON.parse

**_.assign не копирует вложенные обьект, а сохраняет ссылку на них!_**
```
let obj1 = { a: 1 } // ссылка на конкретный обьект
let obj2 = { a: 1 } // ссылка на конкретный обьект
let obj3 = obj1;

console.log(obj1 === obj2); // false, потому, что в переменных хранятся разные ссылки на разные обьекты (хоть визуально они и одинаковые);
console.log(obj1 === obj3); // true, потому, что в переменных хранится ссылка на один и тот же обьект;
```
1. Использовать метод .assign:
```
const obj = {
    a: {
        b: 'c'
    }
}

const copyObj = Object.assign({}, obj); // {a: {b: 'c'}};
console.log(obj.a === copyObj.a); //true
```
2. Старый "дедовский" способ, первратить обьект в строку и обратно.
```
const fullCopyObj = JSON.parse(JSON.stringify(obj));
console.log(obj.a === copyObj.a); //false
```
## Как поменять контекст функции?
Можем использовать 3 метода: .bind, .call, .apply
```
function defaultFn() {
    return this
}
const obj = {name: 'Artem'};
const newFnBind = defaultFn.bind(obj); //принимает в параметр контекст
const newFnCall = defaultFn.call(obj, 'arg1', 'arg2'); //принимает в параметр в виде перечисления через запятую + вызывает функцию
const newFnApply = defaultFn.apply(obj, ['arg1', 'arg2']); //принимает в параметр в виде масива
console.log(newFnBind()); // {name: 'Artem'};
console.log(newFnCall()); // {name: 'Artem'};
console.log(newFnApply()); // {name: 'Artem'};
```
## Что такое тернарный оператор?
Аналогичный оператор if {} else {}.
```
true === true ? true : false;
```
## Что такое деструктуризация?
Позволяет разобрать обьект/массив в кучу переменных:
```
const obj = {name: 'Artem', surname: 'Pylypchuk'};
const arr = ['Artem', Pylypchuk];
let {name, surname} = obj; //name = Artem, surname = Pylypchuk
let [name, surname] = arr; //name = Artem, surname = Pylypchuk
```
## Какие есть сопосбы работы с асинхронным кодом?
1. Самый старый, callback-функция
```
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
```
2. Использование обьекта Promise
```
new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Done');
        reject('Error');
    }, 1500);
})
.then(data => console.log(data)) // выполниться в случае выполнения resolve
.catch(error => console.log(error)); // выполниться в случае выполнения reject
```
3. Использование аsync/await
```
async function fetchFromApi() {
    const response = await fetch(api); // код  
    const json = await response.json(); // выполняется
    json.forEach(i => console.log(i)); // последовательно
}
```
## Обьект событие (Event). Всплытие событий (Bubbling) и погружение событий (перехват)

Погружение событий (перехват (Capture)) Phase 1

```
Window -> document -> <html> -> <body> -> <button>
```

Target Phase 2

```
<button> - click
```

Всплытие событий (Bubbling) Phase 3

```
<button> -> <body> -> <html> -> document -> Window
```

```
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
```
Сначала в логе покажет "clickOnButton", затем "clickOnWindow" (если нету event.stopPropagation()).

всплытие передается по цепочке родительских элементов от ребенка до родителя (от внутреннего и в верх).

## Как остлеживать и обрабатывать ошибки в JS?
```
try {
    //код 
} catch (err) {
    // код тут выполнится если try выдаст ошибку
} finally {
    // код тут выполнится в любом случае
}
```
## Что такое DOM дерево?
Каждый html тег/текст является обьектом (document.documentElement, document.body). Все эти обьекты доступны в JS и мы можем использовать их для работы со страницей.

DOM - обьектная модель представления html документа в JS которое представлена в виде структуры данных "дерево"

## Как получить свойство обьекта
```
const obj = {name: 'Artem', surname: 'Pylypchuk'};
obj.name; //#1
obj['name']; //#2
```
## Object.keys, values, entries
* Object.keys(obj) – возвращает массив ключей.
* Object.values(obj) – возвращает массив значений.
* Object.entries(obj) – возвращает массив пар [ключ, значение].
```
let user = {
  name: "John",
  age: 30
};

// перебор значений
for (let value of Object.values(user)) {
  alert(value); // John, затем 30
}
```
```
let user = {
  name: "John",
  age: 30
};

// перебор значений
for (let [key, value] of Object.entries(user)) {
  alert(key); // name, затем age
  alert(value); // John, затем 30
}
```
## Остаточные параметры (rest parameters)
Синтаксис остаточных параметров функции позволяет представлять неограниченное множество аргументов в виде массива.
```
function myFun(a, b, ...manyMoreArgs) {
  console.log("a", a);
  console.log("b", b);
  console.log("manyMoreArgs", manyMoreArgs);
}

myFun("один", "два", "три", "четыре", "пять", "шесть");

// Console Output:
// a, один
// b, два
// manyMoreArgs, [три, четыре, пять, шесть]
```
## Отличия остаточных параметров от объекта arguments
Существует три основных отличия остаточных параметров от объекта arguments:

1. Остаточные параметры включают только те, которым не задано отдельное имя, в то время как объект arguments содержит все аргументы, передаваемые в функцию;
2. Объект arguments не является массивом, в то время как остаточные параметры являются экземпляром Array и методы sort, map, forEach или pop могут непосредственно у них использоваться;
3. Объект arguments имеет дополнительную функциональность, специфичную только для него (например, свойство callee).

## Деструктуризация остаточных параметров
Остаточные параметры могут быть деструктурированы (только массивы). Это означает, что их данные могут быть заданы как отдельные значения.
```
function f(...[a, b, c]) {
  return a + b + c;
}

f(1)          // NaN (b и c равны undefined)
f(1, 2, 3)    // 6
f(1, 2, 3, 4) // 6 (четвёртый параметр не деструктурирован)
```
## Каррирование
Каррирование – это трансформация функций таким образом, чтобы они принимали аргументы не как `f(a, b, c)`, а как `f(a)(b)(c)`.

```
function curry(f) { // curry(f) выполняет каррирование
  return function(a) {
    return function(b) {
      return f(a, b);
    };
  };
}

// использование
function sum(a, b) {
  return a + b;
}

let curriedSum = curry(sum);

alert( curriedSum(1)(2) ); // 3
```
* Результат curry(func) – обёртка function(a).
* Когда она вызывается как sum(1), аргумент сохраняется в лексическом окружении и возвращается новая обёртка function(b).
* Далее уже эта обёртка вызывается с аргументом 2 и передаёт вызов к оригинальной функции sum.

Более продвинутые реализации каррирования, как например `_.curry` из библиотеки lodash, возвращают обёртку, которая позволяет запустить функцию как обычным образом, так и частично.

```
function sum(a, b) {
  return a + b;
}

let curriedSum = _.curry(sum); // используем _.curry из lodash

alert( curriedSum(1, 2) ); // 3, можно вызывать как обычно
alert( curriedSum(1)(2) ); // 3, а можно частично
```
## Что такое http и из чего состоит?
http - протокол предназначен для передачи данных по сети (протокол передачи гипертекста). Каждое взаимодействие через HTTP включает в себя запрос и ответ. По своей природе HTTP не имеет состояния (Без состояния означает, что все запросы отделены друг от друга, а значит —каждый запрос должен содержать достаточно информации, чтобы полностью выполниться).

[Все про HTTP](https://medium.com/@twanttobealighi/%D0%B2%D1%81%D1%91-%D1%87%D1%82%D0%BE-%D0%BD%D1%83%D0%B6%D0%BD%D0%BE-%D0%B7%D0%BD%D0%B0%D1%82%D1%8C-%D0%BF%D1%80%D0%BE-http-75567dad34c)

http состоит из 3 основных частей: строка запроса, заголовки, тело сообщения.
1. строка запроса - указывает метод передачи, урл адрес, версию протокола http
2. заголовки - описывают тело сообщений, передают различные параметры
3. тело сообщения (необязательный параметр) - данные которые передаются в запросе

## HTTP-коды ответов
Каждый HTTP-ответ должен содержать код состояния HTTP, сообщающий результат запроса.

Существует пять групп кодов состояния. Их группируют по первой цифре:

1. 1xx — Информационные.
2. 2xx — Запрос прошел успешно.
3. 3xx — Клиент был перенаправлен на другой ресурс.
4. 4xx — Запрос содержит ошибку.
5. 5xx — Сервер совершил ошибку при выполнении запроса.

## Разница между HTTP и HTTPS?
HTTPS - защищен, потому, что данные передаются в зашифрованном формате. Используется для этого SSL и TLS.

SSL - при запросе на сайте с https, запрашиваем сначала копию SSL сертификата который доказывает, что с ним общаться безопасно. Сертификаты выдаются в центре сертфикации, где проверяются все данные владельца и браузер, когда проверяет SSL сертификат, так же обращаеться к центру сертификации после чего браузер подтверждает, что присланный сертификат настоящий.

TLS - прокачанная версия SSL, по сути это одно и тоже просто называется по разному, так как когда то, компания выкупившая права на SSL переименовала его в TSL, поэтому актуальные обновления SSL это и есть TSL. 
## Методы http запросов?
get, post, put, delete

1. get - используется для запросы данных с определенного ресурса, на котором данные не изменяются, поскольку GET-запросы не изменяют состояние ресурса.
2. post - для создания/редактирования данных, используется для отправки данных на сервер для создания ресурса.
3. put - для обновления данных, для обновления существующего на сервере ресурса, используя содержимое тела запроса.
4. delete - для удаления данных

Можно удалять, обновлять и т.д. в не соответствующих методах, но для лучшей семантики рекомендуется их разделять
## Что такое WebSocket?
WebSocket - протокол который предзназначен для взаимодействия в реальном времени. Участники устанавливают соединение и получают сообщения до тех пор, пока соединение не будет закрыто
## Что такое RESTAPI
REST самый популярный архитектурный подход к построение API. Подразумевает взаимодействие client -> server. Основная идея заключается в разделении разных операций при обращении к одному и тому же url через http методы
## Какие есть способы хранить данные?
1. LocalStorage - НЕ удаляется после перезагрузки страницы или закрытия вкладки, предназначен для хранения локальных данных, умеет работать только со строками и у него нет срока годности.
2. SessionStorage - удаляется после перезагрузки страницы или закрытия вкладки, предназначен для хранения локальных данных, умеет работать только со строками и у него нет срока годности.

И LocalStorage и SessionStorage хранятся в браузере и могут быть считаны только клиентом.

3. Cookies - специальный файл для каждого сайта отдельный который храниться на стороне клиента (браузера, не сервера), используется для общение клиента с сервером и обратно. При ЛЮБОМ запросе на сервер, браузер вместе с запросом отправляет файл Cookie. Данные внутри Cookie может изменять как сервер так и клиент (браузер). Время жизни куки можно выставлять самостоятельно!

## Какие есть способы конвертировать строку в число?
1. Использовать parseInt()
```
myString = '129'; 
console.log(parseInt(myString)); // expected result: 129
a = 12.22;
console.log(parseInt(a)); // expected result: 12
```
2. Использовать Number()
```
Number("10");          // returns 10
Number(" 10  ");       // returns 10
Number("10.33");       // returns 10.33
```
3. Использовать унарный оператор (+)
```
const x = 25;
const y = -25;
console.log(+x); // expected output: 25
console.log(+y); // expected output: -25
console.log(+''); // expected output: 0
```
4. Использовать parseFloat()
```
parseFloat("10");        // returns 10
parseFloat("10.33");     // returns 10.33
parseFloat("10 20 30");  // returns 10
parseFloat("10 years");  // returns 10
parseFloat("years 10");  // returns NaN
```
5. Использовать Math.floor()
```
str = '1222'
console.log(Math.floor(str)) // returns 1222

a = 12.22
Math.floor(a) // expected result: 12
```
6. Использовать умножение на число
```
str = '2344'
console.log(str * 1) // expected result: 2344
```
## Способы перебора масивов
```
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
```
## Все методы работы с масивом
```
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
```
## Задача с setTimeout и отличие обьявление переменных через var и let/const
JS - однопоточный язык
```
for (var i = 0; i < 10; i++) {
    setTimeout(() => console.log(i), 1); //10(10)
}
//console.log = 10(10) потому, что var функциональная область видимости, и сначала происходит итерация до 10 а потом 10 раз сет таймаут выдает значение переменной

for (let i = 0; i < 10; i++) {    
    setTimeout(() => console.log(i), 1); 
}
//console.log = 1,2,3...10 потому, что let блочная область видимости, и все 10 раз переменная будет увеличиваться на 1
```
## Что такое Замыкание?
Замыкание - это способ получения доступа и управления внешними переменными из функции, даже после того как родительская функция прекратило свое выполнение.

Пример 1
```
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
```
Пример 2
```
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
```
## Какие есть протоколы?
1. IP
2. TCP/IP
3. UDP
4. FTP
5. DNS
6. DNS
7. HTTP/S
8. NTP
9. SSH

## Как JS с DOM работает
Что можно делать:
1. Слушать события (клик, овер и т.д.)
2. Создавать, удалять и добавлять, обновлять элементы
3. Добавлять медиа
4. Добавлять стили, классы

[Как скопировать элемент:](https://developer.mozilla.org/ru/docs/Web/API/Node/cloneNode)
```
let elementNode = document.querySelector('div');
let copyElemenetNode = elementNode.cloneNode(true);
console.log(copyElemenetNode) // <div></div> с дочерними элементами если они будут (благодаря параметру true в clone Node)
```
## ООП
```
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
```
## Основные концепции ООП
1. **_Инкапсуляция_**

Сам класс является капсулой который содержит свои свойства и методы для работы с этими свойствами. 

У класса есть открытые (PUBLIC) свойства и методы к которым есть доступ вне класса и есть закрытые (PRIVATE/#) которые можно использовать только внутри класса.

PRIVATE/# (закрытые) свойства и методы мы единожды задаем при создании класа и потом о них забываем.

PUBLIC (открытые) свойства и методы с которыми мы работаем постоянно и можем их менять.

В TypeScript приватные свойства и методы задаются через модификатор PRIVATE, в JavaScript - через **_#_**.

GET/SET методы - нужны что бы получать доступ к приватным свойствам и изменять их ВНЕ класса, если геттер или сеттер не задан, то менять приватные свойства можем только ВНУТРИ класса.

Там где не нужно менять значение (например id пользователя, которое задается внутри класса) для таких свойств мы не используем геттер и сеттер.

Так же можно использовать let что бы обьявлять приватные свойства, так как у него блочная область видимости.
 
2. **_Наследование_**

Если у нас есть класс (Person) в котором есть данные которые нам нужно использовать в другом классе (Employee), то мы используем наследование, или по другому, можно сказать, что Person расширяет Employee.

class Employee extends Person - пример как создать класс который будет наследовать свойтва и методы с другого класса (наследовать можно только от одного класса!!!)

класс Employee может работать и без своего конструктора, так как он наследует конструктор родителя!

класс Employee так же может использовать геттеры и сеттеры из родительского класса.
```
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
```
3. **_Полиморфизм_**

Полиморфизм позволяет одному и тому же фрагменту кода работать с разными типами данных.

Полиморфизм помогает проектировать объекты таким образом, чтобы они могли совместно использовать или переопределять любое поведение с конкретными предоставленными объектами.

Есть 2 типа полиморфизма - Параметрический(истинный) и ad-hoc (мнимый).

1. Параметрический(истинный) - тот, что используется чаще всего. Нужно создать в каждом классе копию метода и указать в нем разные значение, таким образом, при вызове одного и того же метода для разных экземпляров будет выдаваться разные значения.

2. ad-hoc (мнимый) - это полиморфизм, основанный на различении типов. Для различных типов аргументов используется разный код функции. То-есть мы в одном классе пишем 2 одинаковых метода, принимают одинаковые параметры но с разными типами и содержанием.

Параметрический(истинный):
```
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
```
4. **_Агрегация и композиция_**

Агрегация и композиция - когда мы используем разные классы в одном для создания единого приложения

Композиция - классы инициализируются внутри родительского класса и не могут существовать без родительского класса

Агрегация - отдельный независимый класс, который передается как параметры класса и инициализируется вне родительского класса

```
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
```

## Имплементация (Интерфейсы и абстрактные классы)