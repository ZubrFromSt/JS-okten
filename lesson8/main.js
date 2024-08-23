// #AiN5CoUQ
// Створити функцію, яка робить глибоку копію об'єкту.
// Додаки перевірки на undefined, null, NaN.
// Подумати і реалізувати логіку, в якій кінцевий об'єкт буде мати функції,які в нього були до цього моменту.

let user = {
    name: 'Pedro',
    age: 35,
    status: false,
    greeting: function () {
        console.log('Hello')
    }
}

let objCopy = (obj) => {

    if (typeof obj === 'object') {

        let stringCopy = JSON.stringify(obj);

        let objCopy = JSON.parse(stringCopy);

        for ( let kay in obj) {
            if (typeof obj[kay] === 'function') {
                objCopy[kay] = obj[kay]
            }
        }

        return objCopy
    }

    else {
        return console.log('It is not Object')
    }

}

console.log (objCopy(user))
console.log (objCopy(user) === user) // false
console.log (objCopy(user).greeting === user.greeting) //true

// #iz6emEsP2BA
// - є масив
let coursesAndDurationArray = [
 {title: 'JavaScript Complex', monthDuration: 5},
 {title: 'Java Complex', monthDuration: 6},
 {title: 'Python Complex', monthDuration: 6},
 {title: 'QA Complex', monthDuration: 4},
 {title: 'FullStack', monthDuration: 7},
 {title: 'Frontend', monthDuration: 4}
];
// за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration
//     Зробити все ВИКЛЮЧНО за допомоги інлайн конструкції

let newArray = coursesAndDurationArray.map((course, index) => ({

    id: index + 1,

    title: course.title,

    monthDuration: course.monthDuration

}));

console.log(newArray);