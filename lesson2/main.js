//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

// Масиви та об'єкти:

// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let array1 = [1,2,3,true,false,'string1','string2','string3',3.16,100500];

console.log(array1);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let books=[
    {title:'WarHummer4000',pageCount:235,genre:'dark fantasy'},
    {title:'The Lord of the Rings',pageCount:743,genre:'adventures'},
    {title:'MyKampf',pageCount:235,genre:'history of psychological illness'},
];

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.

let books2=[
    {title:'WarHummer4000',pageCount:235,genre:'dark fantasy',authors:{name:'Jakis_chel',age:'???'}},
    {title:'The Lord of the Rings',pageCount:743,genre:'adventures',authors:{name:'Tolkien',age:1892}},
    {title:'MyKampf',pageCount:235,genre:'history of psychological illness',authors:{name:'Pitler',age:1888}},
];

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let users=[
    {name:'Pedro',username:'P1',password:'123'},
    {name:'Hulio',username:'H2',password:'321'},
    {name:'Nick',username:'N3',password:'213'},
    {name:'Jhon',username:'J4',password:'231'},
    {name:'Roman',username:'R5',password:'132'},
    {name:'Vova',username:'V6',password:'312'},
    {name:'Vasya',username:'V7',password:'111'},
    {name:'Anjey',username:'A8',password:'222'},
    {name:'Bogdan',username:'B9',password:'333'},
    {name:'Yarik',username:'Y10',password:'112'},
];

console.log(users[0].password,users[1].password,users[2].password,users[3].password,users[4].password,users[5].password,users[6].password,users[7].password,users[8].password,users[9].password,);

// - описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів. Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2. Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу

let  weekTemp = [
    {day:'monday', morning: 16, midday: 25, evening: 21},
    {day:'tuesday', morning: 13, midday: 22, evening: 19},
    {day:'wednesday', morning: 14, midday: 23, evening: 21},
    {day:'thursday', morning: 16, midday: 26, evening: 22},
    {day:'friday', morning: 17, midday: 23, evening: 18},
    {day:'saturday', morning: 12, midday: 20, evening: 17},
    {day:'sunday', morning: 10, midday: 19, evening: 15}
];

// Логічні розгалуження:

//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = +prompt('your x?');

if (x !== 0){
    console.log('Вірно')
}else {
    console.log('Невірно')
}

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time= +prompt('time in the moment:');

if (time<=15) {
    console.log('1/4');
}else if (time<=30) {
    console.log('2/4');
}else if (time<=45) {
    console.log('3/4');
}else if (time<=59) {
    console.log('4/4');
}else {
    console.log('Error');
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let dayM = +prompt('day in the Mouth:');

if (dayM<=10) {
    console.log('1/3');
}else if (dayM<=20) {
    console.log('2/3');
}else if (dayM<=30) {
    console.log('3/3');
}

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).-->

let dayW = +prompt('number of day in the Week:');

switch (dayW) {
    case '1':
        console.log('Monday');
        break
    case '2':
        console.log('Tuesday');
        break
    case '3':
        console.log('Wednesday');
        break
    case '4':
        console.log('Thursday');
        break
    case '5':
        console.log('Friday');
        break
    case '6':
        console.log('Saturday');
        break
    case '7':
        console.log('Sunday');
        break
}

//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

let a = +prompt('Number 1:');
let b = +prompt('Number 2:');

if (a>b) {
    console.log(a);
}else if (a<b) {
    console.log(b);
}else {
    console.log('Number1=Number2');
}

//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).

let y = prompt('Only true values');

if (!!y === true) {
    console.log(y)
}else {
    y = "default"
    console.log(y)
}

// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".-->

let cour = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (cour[0].monthDuration > 5) {
    console.log('cool')
}
if (cour[1].monthDuration > 5) {
    console.log('cool')
}
if (cour[2].monthDuration > 5) {
    console.log('cool')
}
if (cour[3].monthDuration > 5) {
    console.log('cool')
}
if (cour[4].monthDuration > 5) {
    console.log('cool')
}
if (cour[5].monthDuration > 5) {
    console.log('cool')
}

// PS з ітерацією було б простіше)