## Как обрабатывает веб страницу браузер?

1. Формирует DOM дерево из HTML
2. Загружаются стили
3. На основании DOM и CSS формируется древо рендеринга
4. Для каждого элемента расчитывается положение на странице
5. Отрисовка в браузере

## Что такое семантические теги и для чего они нужны?

Семантические теги пришли с HTML5, они созданы для того, что бы определить какие-то конкретные части страницы. Правильное использование семантических тегов улучшает SEO оптимизацию сайта, что позволяет поисковым роботам лучше индексировать страницу.

## Из чего строится размер элемента?
1. Ширина и высота содержимого
2. Внутренних отступов
3. Внешние отступы
4. Рамки

## Приоритезация селекторов

(От наивысшего к наименьшему)

1. !important
2. inline-style (1000)
3. id (100)
4. class (10)
5. tag (1)

## Что такое псевдо классы?

Псевдокласс в CSS — это ключевое слово, добавленное к селектору, которое определяет его особое состояние. Например, :hover может быть использован для изменения цвета кнопки при наведении курсора на неё.

Список стандартных псевдоклассов:
* :active
* :any (en-US)
* :any-link
* :checked
* :default
* :defined
* :dir()
* :disabled
* :empty
* :enabled
* :first
* :first-child
* :first-of-type
* :fullscreen
* :focus
* :hover
* :indeterminate
* :in-range
* :invalid
* :lang()
* :last-child
* :last-of-type
* :left
* :link
* :not()
* :nth-child()
* :nth-last-child()
* :nth-last-of-type()
* :nth-of-type()
* :only-child
* :only-of-type
* :optional
* :out-of-range
* :read-only
* :read-write
* :required
* :right
* :root
* :scope (en-US)
* :target
* :valid
* :visited

## Что такое псевдоэлементы?

Псевдоэлемент в CSS — это ключевое слово, добавляемое к селектору, которое позволяет стилизовать определённую часть выбранного элемента. Например, псевдоэлемент ::first-line может быть использован для изменения шрифта первой строки абзаца.

Список стандартных псевдоэлементов:
* ::after
* ::before
* ::cue
* ::first-letter
* ::first-line
* ::selection
* ::slotted
* ::backdrop Experimental
* ::placeholder Experimental
* ::marker Experimental
* ::spelling-error (en-US) Experimental
* ::grammar-error Experimental

## Что такое async/defer и разница между ними?

Когда браузер загружает HTML и доходит до тега <script>...</script>, он не может продолжать строить DOM. Он должен сначала выполнить скрипт. То же самое происходит и с внешними скриптами <script src="..."></script>: браузер должен подождать, пока загрузится скрипт, выполнить его, и только затем обработать остальную страницу.

### defer

Атрибут defer сообщает браузеру, что он должен продолжать обрабатывать страницу и загружать скрипт в фоновом режиме, а затем запустить этот скрипт, когда DOM дерево будет полностью построено.

Вот тот же пример, что и выше, но с defer:
```
<p>...содержимое перед скриптом...</p>

<script defer src="https://javascript.info/article/script-async-defer/long.js?speed=1"></script>

<!-- отображается сразу же -->
<p>...содержимое после скрипта...</p>
```
1. Скрипты с defer никогда не блокируют страницу.
2. Скрипты с defer всегда выполняются, когда дерево DOM готово, но до события DOMContentLoaded.

### async

Атрибут async означает, что скрипт абсолютно независим:

1. Страница не ждёт асинхронных скриптов, содержимое обрабатывается и отображается.
2. Событие DOMContentLoaded и асинхронные скрипты не ждут друг друга: DOMContentLoaded может произойти как до асинхронного скрипта (если асинхронный скрипт завершит загрузку после того, как страница будет готова), так и после асинхронного скрипта (если он короткий или уже содержится в HTTP-кеше)
3. Остальные скрипты не ждут async, и скрипты c async не ждут другие скрипты.

## CSS transform. Что такое 2D и 3D трансформации?

[Развернутая информация по трансформации от «Фрилансер по жизни»](https://fls.guru/transform.html)

С помощью 2D и 3D трансформации мы сможем сдвигать, поворачивать, масштабировать элементы и делать многое другое!

### Translate (x, y)

Сдвигает элемент на новое место, перемещая относительно изначального положения объекта вправо и вниз, используя координаты X и Y. Записывается следующим образом translate (x,y).

```
/* стили оболочки */
.block__wrapper{
    width: 150px;
    height: 150px;
    background-color: rgba(24, 181, 165, 0.2);
}

/* стили блока */
.block{
    background-color: #18b5a4;
    width: 100%;
    height: 100%;
    transform: translate(30px, 30px);
}
```

### Scale (x, y)

Масштабирует элементы, делая их больше или меньше.

```
.block__wrapper{
    width: 150px;
    height: 150px;
    background-color: rgba(24, 181, 165, 0.2);
}

.block{
    background-color: #18b5a4;
    width: 100%;
    height: 100%;
    transform: scale(0.5, 0.2);
}
```

### Rotate (n + deg)

Поворачивает элементы.

```
.block__wrapper{
    width: 150px;
    height: 150px;
    background-color: rgba(24, 181, 165, 0.2);
}

.block{
    background-color: #18b5a4;
    width: 100%;
    height: 100%;
    transform: rotate(45deg);
}
```

### Skew (x + deg, y + deg)

Деформирует (наклоняет) элементы.

```
.block__wrapper{
    width: 150px;
    height: 150px;
    background-color: rgba(24, 181, 165, 0.2);
}

.block{
    background-color: #18b5a4;
    width: 100%;
    height: 100%;
    transform: skew(10deg,10deg);
}
```

### Matrix (a, c, b, d, x, y)

Позволяет объединить несколько функций 2D-трансформаций в одной. 

Значение a изменяет масштаб по горизонтали. Значение от 0 до 1 уменьшает элемент, больше 1 — увеличивает. Значение c деформирует (сдвигает) стороны элемента по оси Y, положительное значение — вверх, отрицательное — вниз. Значение b деформирует (сдвигает) стороны элемента по оси X, положительное значение — влево, отрицательное — вправо. Значение d изменяет масштаб по вертикали. Значение меньше 1 уменьшает элемент, больше 1 — увеличивает. Значение x смещает элемент по оси X, положительное — вправо, отрицательное — влево. Значение y смещает элемент по оси Y, положительное значение — вниз, отрицательное — вверх.

```
.block__wrapper{
    width: 150px;
    height: 150px;
    background-color: rgba(24, 181, 165, 0.2);
}

.block{
    background-color: #18b5a4;
    width: 100%;
    height: 100%;
    transform: matrix(0.5, 0.1, 0.1, 0.5, 10, 15);
}
```

### Множественные 2D трансформации

Позволяет объединить несколько функций 2D-трансформаций в одной.

```
.block__wrapper{
    width: 150px;
    height: 150px;
    background-color: rgba(24, 181, 165, 0.2);
}

.block{
    background-color: #18b5a4;
    width: 100%;
    height: 100%;
    transform: translate(30px, 30px) rotate(45deg) scale(0.8);
}
```

### Transform-origin

Позволяет сместить центр трансформации, относительно которого происходит изменение положения/размера/формы элемента.

```
.block__wrapper{
    width: 150px;
    height: 150px;
    background-color: rgba(24, 181, 165, 0.2);
}

.block{
    background-color: #18b5a4;
    width: 100%;
    height: 100%;
    transform-origin:top left;
    transform: rotate(45deg);
}
```

### Perspective, perspective-origin

Установка глубины и смена точки начала координат.

```
.block__wrapper{
    width: 150px;
    height: 150px;
    background-color: rgba(24, 181, 165, 0.2);
    perspective: 400px;
}

.block{
    background-color: #18b5a4;
    width: 100%;
    height: 100%;
    transform: rotateX(45deg);
}
```

### Translate3d (x, y, z)

По аналогии со своим 2D братом, это значение задает перемещение элемента, но в 3D-пространстве. Помимо оси X и Y добавляется ось Z.

```
.block__wrapper{
    width: 150px;
    height: 150px;
    background-color: rgba(24, 181, 165, 0.2);
    perspective: 400px;
}

.block{
    background-color: #18b5a4;
    width: 100%;
    height: 100%;
    transform: translate3d(30px, 30px, 30px);
}
```

### Scale3d (x, y, z)

Задает трехмерное масштабирование по одной из осей X Y Z. Фактически повторяет функционал своего 2d аналога.

```
.block__wrapper{
    width: 150px;
    height: 150px;
    background-color: rgba(24, 181, 165, 0.2);
    perspective: 400px;
}

.block{
    background-color: #18b5a4;
    width: 100%;
    height: 100%;
    transform: scale3d(1.5, 1.5, 1.5);
}
```

### Rotate3d (x, y, z, deg)

Вращает элемент относительно трех осей. Элемент поворачивается под углом, задаваемым последним параметром относительно вектора направления x,y,z.

```
.block__wrapper{
    width: 150px;
    height: 150px;
    background-color: rgba(24, 181, 165, 0.2);
    perspective: 400px;
}

.block{
    background-color: #18b5a4;
    width: 100%;
    height: 100%;
    transform: rotate3d(1, 1, 1, 0deg);
}
```

### Matrix3d (n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)

Задает трехмерное преобразование как однородную матрицу размером 4×4 с шестнадцатью значениями в столбцах.

[Генератор 3D матриц](http://ds-overdesign.com/transform/matrix3d.html)

### Transform-style

Определяет, как дочерние элементы должны отображаться в 3D-пространстве.

```
.block__wrapper{
    width: 150px;
    height: 150px;
    background-color: rgba(24, 181, 165, 0.2);
    perspective:400px;
    transform-style:preserve-3d;
}

.block{
    background-color: #18b5a4;
    width: 100%;
    height: 100%;
    transform: rotateY(30deg);
}
```

### Backface-visibility

Отображение обратной стороны объекта.

```
.block__wrapper{
    width: 150px;
    height: 150px;
    background-color: rgba(24, 181, 165, 0.2);
    perspective:400px;
}

.block{
    background-color: #18b5a4;
    width: 100%;
    height: 100%;
    transform: rotateY(150deg);
    backface-visibility: visible;
}
```

## CSS переходы (CSS transition). Что такое CSS переходы?

[Развернутая информация по переходам от «Фрилансер по жизни»](https://fls.guru/csstransition.html)

CSS – переходы либо CSS – transitions могут применяться ко всем элементам и даже к псевдоэлементам. Используются для оживления нашей верстки. Что в свою очередь приводит к улучшению взаимодействия с пользователем, как правило путем приятной анимированной реакции на его действия. Например – наведение и нажатие на кнопку. Также свойства transition можно использовать для построения несложных сценариев анимации. Фактически, CSS – переходы обеспечивают смену значений других свойств с определенной анимацей и сценарием. Всю эту магию можно описать универсальным CSS свойcтвом transition, либо рядом следующих отдельных свойств:

### Transition-duration

Определяет промежуток времени, в течение которого должен осуществляться переход. Собственно – тут мы указываем время за которое одно значение свойства по переходит (анимируется) в другое. Свойство не наследуется.

```
transition-duration: 500ms;
```
Или (универсальная запись):
```
transition: 500ms;
```
### Transition-property

Содержит название CSS-свойств, к которым будет применен эффект перехода. Значение свойства может содержать как одно свойство, так и список свойств через запятую. Свойство не наследуется.

```
transition-property: background-color;
transition-duration: 0.5s;
```

Или (универсальная запись):

```
transition: background-color 0.5s;
```

### Transition-delay

Задержка выполнения перехода. Позволяет сделать так, чтобы изменение свойства происходило не моментально, а с некоторой задержкой. Время задержки перехода указывается в секундах или миллисекундах. Свойство не наследуется.

```
transition-property: all;
transition-duration: 0.5s;
transition-delay: 1s;
```

Или (универсальная запись):

```
transition: all 0.5s 1s;
```

### Transition-timing-function

Задаёт стиль нашего перехода, то есть некий сценарий, по которому будет осуществятся анимация.

```
transition-property: all;
transition-duration: 0.5s;
transition-delay: 0s;
transition-timing-function: ease-in;
```

Или (универсальная запись):

```
transition: all 0.5s ease-in 0s;
```

### Значения перехода для каждого свойства

Для элемента можно задать несколько последовательных переходов, перечислив их через запятую. Каждый переход можно оформить своими значениями перехода.

```
transition-property: background-color, padding;
transition-duration: 1s, 5s;
transition-delay: 0.5s, 0s;
transition-timing-function: ease, ease-out;
```

Или (универсальная запись):

```
transition: background-color 1s ease 0.5s, padding 5s ease-out 0s;
```

## CSS анимация (CSS animation & @keyframes). Что такое CSS анимация?

[Развернутая информация по анимации от «Фрилансер по жизни»](https://fls.guru/cssanimation.html)

Как и CSS свойство плавных переходов transition, о котором мы говорили в предыдущем уроке, свойство animation призвано сделать нашу верстку более динамичной, оживить её для лучшего взаимодействия с пользователем и создания WOW эффекта. Но в отличие от CSS переходов, создание анимации базируется на ключевых кадрах @keyframes, которые позволяют автоматически воспроизводить и повторять эффекты на протяжении заданного времени, а также приостанавливать анимацию по определенному событию. Другими словами, использование конструкции animation и @keyframes позволяет нам создавать более сложные сценарии анимаций.

### Animation-name

Определяет список применяемых к элементу анимаций (ключевых кадров). Можно указать через запятую. Причем приоритет у последней записи.

Связываем селектор animation__circle с ключевыми кадрами circle.

```
.animation__circle{
    animation-name: circle;
}

@keyframes circle{
    0%{
    /* css свойства */
    }
    100%{
    /* css свойства */
    }
}
```
Или (универсальная запись):

```
/* селектор */
.animation__circle{
    animation: circle;
}
```
### Animation-duration

Отвечает за продолжительность анимации.

Переход будет длиться 2.5 секунды

```
.animation__circle{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: #5e5373;
    position: relative;
    animation-name: circle;
    animation-duration: 2.5s;
}

@keyframes circle{
    0%{
        left: 0%;
    }
    50%{
        border-radius: 0%;
    }
    100%{
        left: 50%;
    }
}
```
Или (универсальная запись):

```
.animation__circle{
    animation: circle 2.5s;
}
```

### Animation-timing-function

Задаёт сценарий развития анимации между ключевыми кадрами.

```
.animation__circle{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: #5e5373;
    position: relative;
    animation-name: circle;
    animation-duration: 1s;
    animation-timing-function: ease;
    }

/* ключевые кадры */
@keyframes circle{
    0%{
        left: 0%;
    }
    50%{
        border-radius: 0%;
    }
    100%{
        left: 50%;
    }
}
```
Или (универсальная запись):
```
.animation__circle{

/* все те же стили селектора */
animation: circle 1s ease;
}

/* те же ключевые кадры */
```

### Animation-iteration-count

Отвечает за повтор проигрывания ключевых кадров.

```
.animation__circle{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: #5e5373;
    position: relative;
    animation-name: circle;
    animation-duration: 1s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
}

@keyframes circle{
    0%{
        left: 0%;
    }
    50%{
        border-radius: 0%;
    }
    100%{
        left: 50%;
    }
}
```

Или (универсальная запись):
```
.animation__circle{
    animation: circle 1s linear infinite;
}
```

### Animation-direction

Определяет направление и тип проигрывания ключевых кадров.

* normal (по умолчанию)
* reverse
* alternate
* alternate-reverse

```
.animation__circle{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: #5e5373;
    position: relative;
    animation-name: circle;
    animation-duration: 1s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-direction: alternate;
}

@keyframes circle{
    0%{
        left: 0%;
    }
    50%{
        border-radius: 0%;
    }
    100%{
        left: 50%;
    }
}
```
Или (универсальная запись):
```
.animation__circle{
    animation: circle 1s linear infinite alternate;
}
```

### Animation-play-state

Позволяет запускать или останавливать анимацию по событию.

```
.animation__circle{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: #5e5373;
    position: relative;
    animation-name: circle;
    animation-duration: 1s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-direction: normal;
}

.animation__circle:hover{
    animation-play-state: paused;
}

@keyframes circle{
    0%{
        left: 0%;
    }
    50%{
        border-radius: 0%;
    }
    100%{
        left: 50%;
    }
}
```
Или (универсальная запись):
```
.animation__circle{
    animation: circle 1s linear infinite normal;
}

.animation__circle:hover{
    animation-play-state: paused;
}
```

### Animation-delay

Отвечает за задержку перед проигрыванием.

```
.animation__circle{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: #5e5373;
    position: relative;
    animation-name: circle;
    animation-duration: 1s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-direction: normal;
    animation-play-state: running;
    animation-delay: 1s;
}

@keyframes circle{
    0%{
        left: 0%;
    }
    50%{
        border-radius: 0%;
    }
    100%{
        left: 50%;
    }
}
```
Или (универсальная запись):
```
.animation__circle{
    animation: circle 1s linear infinite normal running 1s;
}
```

### Animation-fill-mode

Определяет какие значения анимируемых css свойств применятся к объекту после завершения анимации

```
.animation__circle{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: #5e5373;
    position: relative;
    animation-name: circle;
    animation-duration: 1s;
    animation-timing-function: linear;
    animation-iteration-count: 1;
    animation-direction: normal;
    animation-play-state: running;
    animation-delay: 0s;
    animation-fill-mode: forwards;
}

@keyframes circle{
    0%{
        left: 0%;
    }
    50%{
        border-radius: 0%;
    }
    100%{
        left: 50%;
    }
}
```
Или (универсальная запись):
```
.animation__circle{
    animation: circle 1s linear infinite normal running 0s forwards;
}
```