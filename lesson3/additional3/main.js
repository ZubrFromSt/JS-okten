// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.
//     b. заповнити його 50 непарними числами за допомоги циклу.
//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
//     d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)

const arr = [];

for (let i = 2; i<=100; i+=2) {
   arr.push(i);
}

for (let i = 1; i<=100; i+=2) {
    arr.push(i);
}

for (let i = 1; i<=20; i++) {
    let random = Math.floor(Math.random() * 1000);
    arr.push(random);
}

for (let i = 1; i<=20; i++) {
    let random = 8 + Math.floor(Math.random() * 724);
    arr.push(random);
}

console.log(arr)

// 2. Вивести за допомогою console.log кожен третій елемен

for (let i= -1 ; i < arr.length; i+=3) {
        console.log(arr[i])
}

// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.

for (let i= -1 ; i < arr.length; i+=3) {
    if(arr[i] % 2 === 0){
        console.log(arr[i])
    }
}

// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив

let arr2 = []

for (let i= -1 ; i < arr.length; i+=3) {
    if(arr[i] % 2 === 0){
        arr2.push(arr[i])
    }
}

console.log(arr2)

// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56

for (let i = 0; i < arr.length ; i++) {
    if ((arr[i] + 1) % 2 === 0 ){
        console.log(arr[i])
    }
}

// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.

let prise = [100,250,50,168,120,345,188];

let sum = 0;

for(let i = 0; i < prise.length; i++){
    sum += prise[i];
}

let averageCost = sum / prise.length

console.log(averageCost)

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.

let arr3 =[]

for (const element of arr2) {
    arr3.push(element*5)
}

console.log(arr3)

// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.

let arr4 = ['sweat',true,4,245,'car',false,11,24,'object']

let arr5 = []

for (const element of arr4) {
    if (typeof element === "number") {
        console.log(element)
    }
}

// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив

let users = []

for (let i = 0; i < usersWithId.length; i++) {
    let user = usersWithId[i];
    let city = null;
    let user_id = null;
    let country = null;

    for (let c = 0; c < citiesWithId.length; c++){
        if (citiesWithId[c].user_id === user.id) {
            city = citiesWithId[c].city;
            user_id = citiesWithId[c].user_id;
            country = citiesWithId[c].country;
        }
    }
    users.push({
        id: user.id,
        name: user.name,
        age: user.age,
        status: user.status,
        address: {
            user_id: user_id,
            country: country,
            city: city
        }
    });
}
console.log(users)

// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

let arr6 = [1,2,3,4,5,6,7,8,9,10];

for (let i= 0; i < arr6.length ; i++ ) {
    if (arr6[i] % 2 === 0){
        console.log(arr6[i])
    }
}

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.

let arr7 =[];

for (let i= 0; i < arr6.length ; i++ ) {
    arr7.push(arr6[i])
}

console.log(arr7)

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.

let arr8 = [ 'a', 'b', 'c'];

let word = '';

// for (let i= 0; i < arr7.length ; i++ ) {
//     word = (`${word}${arr8[i]}`)
//     if(word === 'abc'){
//         break
//     }
// }

console.log(word)

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.

// let i = 0

// while (i < arr7.length) {
//     word = (`${word}${arr8[i]}`)
//     if(word === 'abc'){
//         break
//     }
//     i++
// }

console.log(word)

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

for (const element of arr7) {
    word = (`${word}${arr8[element-1]}`)
    if(word === 'abc'){
        break
    }
}

console.log(word)