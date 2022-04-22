// [1,2,[3,4,5,[6,[7],8]],[[]],9,0] => [1,2,3,4,5,6,7,8,9,0];

const arr = [1,2,[3,4,5,[6,[7],8]],[[]],9,0];

const func = (arr) => {
    let newArr = [];

    if (typeof value == 'number') {
        newArr.push(value);
    } else {
        newArr = newArr.concat(func(value));
    }

    return newArr;
}

const resultArray = func(arr);

//________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________

// Перевести любые данные из строки в число

let stringToNumber = function(str){
    // put your code here
    let num = parseInt(str);
    return num;
}

stringToNumber('123123'); //123123

//________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________

// Удалить все пробелы в строке

function noSpace(x) {
    return x.includes(' ') ? x.replace(/\s/g, '') : x;
}

noSpace('Ukraine is the most popular country'); //Ukraineisthemostpopularcountry
