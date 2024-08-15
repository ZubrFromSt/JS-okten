// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

let S = (a,b) => a * b;

console.log(S(2,4));


// - створити функцію яка обчислює та повертає площу кола з радіусом r

let Sk = (r) => Math.PI * (Math.pow(r, 2));

console.log(Sk(2));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

let Sc = (r,h) => ((Math.PI * (Math.pow(r, 2)))*2)+Math.PI*r*h;

console.log(Sc(2,5));

// - створити функцію яка приймає масив та виводить кожен його елемент

let mas = (a) => {
    for (let i = 0;i < a.length; i++) {
        console.log(a[i]);
    }
}

mas([1,2,4,'tfg',123])

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

let text = (text) => document.write(`<p>${text}</p>`)

text ('horovod')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий


let ul = (text) => {
    document.write(`<ul>`)
    for (let i = 0; i < 3; i++ ) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}

ul ('text li')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)


let ul1 = (text,il) => {
    document.write(`<ul>`)
    for (let i = 0; i < il; i++ ) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}

ul1 ('text li',5)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let mas1 = (a) => {
    document.write(`<ul>`)
    for (let i = 0;i < a.length; i++) {
        document.write(`<li>${a[i]}</li>`)
    }
    document.write(`</ul>`)
}

mas1([1,2,4,'tfg',123])

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let object = (a) => {
    for (let item of a){
        document.write(`<div>` + item.name + ' ' + item.id + ' ' + item.age + `</div>`)
    }
}


object  ([
    {name:'a',id: 123,age: 24},
    {name:'2',id: 13,age: 24},
    {name:'as',id: 23,age: 23},
    {name:'a3',id: 12,age: 21}
]);

// - створити функцію яка повертає найменьше число з масиву

let numbers = (a) => {
    let min = a[0];
    for (let i = 0; i < a.length; i++) {
        if (a[i] < min) {
            min = a[i]
        }
    }
    return min
}

console.log(numbers([3,56,23,134,21]));


// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

function sum(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum
}

console.log(sum([1,2,10,12]));


// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах

let swap = (arr,index1,index2) => {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
    return arr
}

console.log(swap([1,2,3,4,5],0,4))

// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)

let exchange = (sumUAH,currencyValues,exchangeCurrency) => {
    for (let i = 0; i < currencyValues.length; i++) {
        if (currencyValues[i].currency === exchangeCurrency) {
            return sumUAH = sumUAH / currencyValues[i].value;
        }
    }
}

console.log(exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD'))

// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250