
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

let text = 'Тут є текст';

for (let i = 0; i <10 ; i++) {
    document.write(`<div>` + text + `</div>`);
}

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

for (let i = 0; i <10 ; i++) {
    document.write(`<div><h1>` + i + '  ' + text + `</h1></div>`);
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

i = 0;

while (i<10) {
    document.write(`<div><h1>` + text + `</h1></div>`);
    i++;
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

while (i<10) {
    document.write(`<div><h1>` + i +''+ text + `</h1></div>`);
    i++;
}

// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:

let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

// ШАБЛОН:
//  <ul>
//     <li>ITEM OF ARRAY</li>
//         і тд інші об'єкти масиву
//          ...
//          ...
//          ...
// </ul>

// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву

let list = `<ul>`;

for (let item of listOfItems) {
    list += `<li>` + item + `</li>` ;
}

list += `</ul>`;

document.write (list)

// Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон

let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];

// ШАБЛОН
//  <div class="product-card">
//         <h3 class="product-title">TITLE. Price - PRICE</h3>
//         <img src="IMAGE" alt="" class="product-image">
// </div>
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту

let div = `<div class="product-card">`

for (let item of products) {
    div += `<h3 class="product-title">` + item.title + '_' + item.price + `</h3>`
        + `<img style = "width:200px" src="` + item.image + `" alt="" class="product-image">`
}

div += `</div>`

document.write(div);

//     є масив

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

// за допомоги циклу вивести:
//     - користувачів зі статусом true

for (let item of users) {
    if (item.status) {
        document.write(`<div>` + item.name + ' ' + item.status +`</div>`);
    }
}

// - користувачів зі статусом false

for (let item of users) {
    if (!item.status) {
        document.write(`<div>` + item.name + ' ' + item.status +`</div>`);
    }
}

// - користувачів які старші за 30 років

for (let item of users) {
    if (item.age > 30) {
        document.write(`<div>` + item.name + ' ' + item.age +`</div>`);
    }
}