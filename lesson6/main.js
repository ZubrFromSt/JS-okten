// - Знайти та вивести довижину настипних стрінгових значень
//     'hello world', 'lorem ipsum', 'javascript is cool'

let data = "'hello world', 'lorem ipsum', 'javascript is cool'";

let arr = data.split(',');

console.log(arr[0].length, arr[1].length, arr[2].length);

// - Перевести до великого регістру наступні стрінгові значення
//       'hello world', 'lorem ipsum', 'javascript is cool'

let uppData = data.toUpperCase();

console.log(uppData);

// - Перевести до нижнього регістру наступні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

let lowData = uppData.toLowerCase();

console.log(lowData);

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str = '  dirty string   '

let replace = str
    .replaceAll(' ', '')
    .replaceAll('y', 'y ');

console.log(replace);

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
//     let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

let str1 = 'Ревуть воли як ясла повні';

let stringToarray = (a) => {
    let arr = a.split(' ');
    return arr;
}

console.log(stringToarray(str1));

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

let numbers = [10,8,-7,55,987,-1011,0,1050,0];

let stringNumbers = numbers.map((number) => {
    return String(number);
});

console.log(stringNumbers);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

let nums = [11,21,3];

let sortNums = (array, sort) =>{
    if (sort === 'ascending') {
        array.sort((a,b) => a - b);
    } else if (sort === 'descending'){
        array.sort((a,b) => b - a);
    } else {
        return console.log('Error');
    }
    return console.log(array);
}

sortNums(nums, 'descending');

// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

//  -- відсортувати його за спаданням за monthDuration

coursesAndDurationArray.sort((a,b) => {
    return b.monthDuration - a.monthDuration;
});

//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

let coursesAndDurationArrayFilter = coursesAndDurationArray.filter((coursesAndDurationArray) => {
    return coursesAndDurationArray.monthDuration > 5
});

console.log(coursesAndDurationArrayFilter);

//  -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

coursesAndDurationArray.map ((coursesAndDurationArray,index) => {
    return coursesAndDurationArray.id = index + 1;
});

console.log(coursesAndDurationArray);

//  описати колоду карт (від 6 до туза без джокерів)
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//     value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }

let carts = [
    { cardSuit: 'spade', value: '6', color: 'black' },
    { cardSuit: 'diamond', value: '6', color: 'red' },
    { cardSuit: 'heart', value: '6', color: 'red' },
    { cardSuit: 'clubs', value: '6', color: 'black' },
    { cardSuit: 'spade', value: '7', color: 'black' },
    { cardSuit: 'diamond', value: '7', color: 'red' },
    { cardSuit: 'heart', value: '7', color: 'red' },
    { cardSuit: 'clubs', value: '7', color: 'black' },
    { cardSuit: 'spade', value: '8', color: 'black' },
    { cardSuit: 'diamond', value: '8', color: 'red' },
    { cardSuit: 'heart', value: '8', color: 'red' },
    { cardSuit: 'clubs', value: '8', color: 'black' },
    { cardSuit: 'spade', value: '9', color: 'black' },
    { cardSuit: 'diamond', value: '9', color: 'red' },
    { cardSuit: 'heart', value: '9', color: 'red' },
    { cardSuit: 'clubs', value: '9', color: 'black' },
    { cardSuit: 'spade', value: '10', color: 'black' },
    { cardSuit: 'diamond', value: '10', color: 'red' },
    { cardSuit: 'heart', value: '10', color: 'red' },
    { cardSuit: 'clubs', value: '10', color: 'black' },
    { cardSuit: 'spade', value: 'jack', color: 'black' },
    { cardSuit: 'diamond', value: 'jack', color: 'red' },
    { cardSuit: 'heart', value: 'jack', color: 'red' },
    { cardSuit: 'clubs', value: 'jack', color: 'black' },
    { cardSuit: 'spade', value: 'queen', color: 'black' },
    { cardSuit: 'diamond', value: 'queen', color: 'red' },
    { cardSuit: 'heart', value: 'queen', color: 'red' },
    { cardSuit: 'clubs', value: 'queen', color: 'black' },
    { cardSuit: 'spade', value: 'king', color: 'black' },
    { cardSuit: 'diamond', value: 'king', color: 'red' },
    { cardSuit: 'heart', value: 'king', color: 'red' },
    { cardSuit: 'clubs', value: 'king', color: 'black' },
    { cardSuit: 'spade', value: 'ace', color: 'black' },
    { cardSuit: 'diamond', value: 'ace', color: 'red' },
    { cardSuit: 'heart', value: 'ace', color: 'red' },
    { cardSuit: 'clubs', value: 'ace', color: 'black' },
];

//  - знайти піковий туз

let tuxP = carts.filter((carts) => {
    return carts.value === 'ace' && carts.cardSuit === 'spade'
});

console.log(tuxP);

//  - всі шістки

let sixes = carts.filter((carts) => {
    return carts.value === '6'
});

console.log(sixes);

//  - всі червоні карти

let red = carts.filter((carts) => {
    return carts.color === 'red'
});

console.log(red);

//  - всі буби

let diamond = carts.filter((carts) => {
    return carts.cardSuit === 'diamond';
});

console.log(diamond);

//  - всі трефи від 9 та більше

let clubs9 = carts.filter((carts) => {
    return carts.cardSuit === "clubs" && (carts.value >= "9" || parseInt(carts.value) >= 9);
});

console.log(clubs9);

// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }

let pacDeck = carts.reduce((accum, card) => {
    if (!accum[card.cardSuit]) {
        accum[card.cardSuit] = [];
    }
    accum[card.cardSuit].push(card);
    return accum;
},{});

console.log(pacDeck);

// взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

// --написати пошук всіх об'єктів, в який в modules є sass

let sass = coursesArray.filter((coursesArray) => {
    return coursesArray.modules.includes('sass');
});

console.log(sass)

// --написати пошук всіх об'єктів, в який в modules є docker

let docker = coursesArray.filter((coursesArray) => {
    return coursesArray.modules.includes('docker');
});

console.log(docker)
