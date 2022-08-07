# Tasks for js practice

## Написать функцию которая принимает миллисекунды и возвращает время в виде hours:minutes:seconds
Пример: функция принимает значение `3605000` и должна вернуть `1:00:05`
```
function f(ms) {
  let seconds = ms / 1000;
  let minutes = seconds / 60;
  let hours = minutes / 60;

  if (seconds > 60) {
    seconds = parseInt(seconds % 60, 10);
    seconds = seconds % 60 >= 10 ? seconds % 60 : `0${seconds % 60}`;
    if (minutes > 60) {
      minutes = parseInt(minutes % 60, 10);
      minutes = minutes >= 10 ? minutes : `0${minutes}`;
      if (hours <= 24) {
        hours = parseInt(hours, 10);
        hours = hours >= 10 ? hours : `0${hours}`;
      }
    }
  }

  return `${hours}:${minutes}:${seconds}`;
}

console.log(f(3605000));
```

## Написать функцию которая принимает масив и возвращает новый масив в котором будут продублированны все элементы
Пример: функция принимает значение `[1, 2, 3, 4]` и должна вернуть `[1, 2, 3, 4, 1, 2, 3, 4]`
```
const arr = [1, 2, 3, 4];

const duplicate = arr => [...arr, ...arr];

console.log(duplicate(arr));
```

## Написать функцию инкремент, которая будет увеличивать число на 1. ВАЖНО: В глобальной области видимости может быть обьявлена только функция
```
const inc = (function external() {
  let counter = 0;
  return () =>  counter += 1;
})()

console.log(inc()); // 1
console.log(inc()); // 2
console.log(inc()); // 3
```

## Написать функцию которая принимает масив с дублирующимися значениями и возвращает новый масив только с уникальными значениями и отсортированный от большего количества к меньшему
Пример: функция принимает значение `["apple", "banana", "apple", "pineapple", "orange", "banana", "apple", "pineapple", "apple", "banana"]` и должна вернуть `["apple", "banana", "pineapple", "orange"]`

* Мой вариант:
```
const sortingFruits = (fruits) => {
  let result = [];

  const temp = fruits.reduce((acc, curr) => {
    acc[curr] = acc[curr] ? acc[curr] + 1 : 0 + 1;
    return acc;
  }, {});

  for (let [key, value] of Object.entries(temp)) {
    result.push({ value: key, count: value });
  }

  result.sort(function (a, b) {
    if (a.count < b.count) {
      return 1;
    }
    if (a.count > b.count) {
      return -1;
    }

    return 0;
  });

  return result.map((fruit, i) => result[i] = fruit.value);
};

const result = sortingFruits(fruits);
console.log(result);
```

* Вариант со stackOverflow:
```
const sortingFruits = (fruits) => {
  let result = [];

  const temp = fruits.reduce((acc, curr) => {
    acc[curr] = acc[curr] ? acc[curr] + 1 : 0 + 1;
    return acc;
  }, {});


  const keys = Object.keys(temp);

  return keys.sort((a,b) => {
    return temp[b] - temp[a];
  })
};

const result = sortingFruits(fruits);
console.log(result);
```
## Написать функцию которая принимает неограниченное к-во аргументов и возвращает масив с умножеными аргументами на 2
Пример: функция принимает значение `1, 2, 3, 4, 5, 6` и должна вернуть `[2, 4, 6, 8, 10, 12]`
```
const multipleByTwo = (...args) => args.map(e => e * 2);
console.log(multipleByTwo(1,2,3,4,5,6));
// псевдо-массив arguments не работает с strict mode
```

## Написать функцию которая при вызове следующим образом sum(3)(4) вернет суму двух аргументов
Пример: функция принимает значение `sum(3)(4)` и должна вернуть `7`
* Простой вариант:
```
function sum(a) {
   return (b) => {
     return a + b;
   }
}

console.log(sum(3)(4)); // 7
```
* Продвинутый вариант:
```
function curry(f) {
  return function(a) {
    return function(b) {
      return f(a, b);
    };
  };
}

function sum(a, b) {
  return a + b;
}

let curriedSum = curry(sum);
console.log(curriedSum(3)(4)); //7
```

## Что выведется в консоль?
```
const f1 = (a, b) => {
    console.log(a, b);
};
const f2 = f1.bind(null, "foo");
f2("baz", "bar");
```

Ответ: `foo, baz`

```
let name = "Rabbit";
function go() {
    let name = "Forest";

    console.log(`Run ${name} run`);
}
name = "Alice";
go();
```

Ответ: `Run Forest run`

```
var a = 5;
// a = 5;
function f() {
    //var a = undefined
    if (a) {
        console.log(a);
        var a = 10;
    }
}
f();
```

Ответ: `undefined`

```
console.log(a);
var a = 5;

console.log(b);
let b = 5;
```
Ответ: `undefined`, `undefined`

```
const obj = {
  a: 45,
  say: function () {
    setTimeout(function () {
      console.log(this.a);
    }, 1000);
  }
}

obj.say()
```

Ответ: `undefined`