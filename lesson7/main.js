// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone

function User (id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

// створити пустий масив, наповнити його 10 об'єктами new User(....)

let users = [
    new User(9, 'ivan', 'petrovuch','aaa.a1900gmail.com','0932224451'),
new User(1, 'roman', 'sumovuch','aaa.a1901gmail.com','0932224452'),
new User(2, 'vovan', 'danulovuch','aaa.a1902gmail.com','0932224453'),
new User(3, 'dolban', 'dolbovuch','aaa.a1903gmail.com','0932224454'),
new User(6, 'kazan', 'kazanovuch','aaa.a1904gmail.com','0932224455'),
new User(5, 'butan', 'butanovuch','aaa.a1905gmail.com','0932224456'),
new User(4, 'propan', 'propanovuch','aaa.a1906gmail.com','0932224457'),
new User(7, 'dekan', 'decanovuch','aaa.a1907gmail.com','0932224458'),
new User(8, 'joan', 'joanovuch','aaa.a1908gmail.com','0932224459'),
new User(0, 'taliban', 'talibanovuch','aaa.a1909gmail.com','0932224450'),
]

// - Взяти масив з User[] з попереднього завдання, та відфільтрувати, залишивши тільки об'єкти з парними id (filter)

let userFilterId = users.filter((user) => {
    return user.id % 2 === 0;
});

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

users.sort((a,b) => {
    return a.id - b.id;
});

console.log(users)

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

function Client (id, name, surname, email, phone, order) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
}

// створити пустий масив, наповнити його 10 об'єктами Client

let clients = [
    new Client(9, 'ivan', 'petrovuch','aaa.a1900gmail.com','0932224451',['Moloko', 'Puvo','hlib']),
    new Client(1, 'roman', 'sumovuch','aaa.a1901gmail.com','0932224452',['Moloko',]),
    new Client(2, 'vovan', 'danulovuch','aaa.a1902gmail.com','0932224453',['Puvo']),
    new Client(3, 'dolban', 'dolbovuch','aaa.a1903gmail.com','0932224454',['Moloko', 'hlib','kovbasa']),
    new Client(6, 'kazan', 'kazanovuch','aaa.a1904gmail.com','0932224455',['Moloko', 'kovbasa']),
    new Client(5, 'butan', 'butanovuch','aaa.a1905gmail.com','0932224456',['Moloko', 'kovbasa','puvo']),
    new Client(4, 'propan', 'propanovuch','aaa.a1906gmail.com','0932224457',['hlib', 'Puvo']),
    new Client(7, 'dekan', 'decanovuch','aaa.a1907gmail.com','0932224458',['Moloko', 'Puvo','hlib','kovbasa']),
    new Client(8, 'joan', 'joanovuch','aaa.a1908gmail.com','0932224459',['Moloko', 'Puvo']),
    new Client(0, 'taliban', 'talibanovuch','aaa.a1909gmail.com','0932224450',['Moloko', 'Puvo']),
]

// #8abtVjRv
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

clients.sort((a,b) => {
    return a.order.length - b.order.length;
});

console.log(clients)

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
function Car(model, manufacturer, year, maxSpeed, engineVolume) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineVolume = engineVolume;
}

// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`

Car.prototype.drive = function() {
    console.log(`Їдемо зі швидкістю ${this.maxSpeed} км/год`);
};

let car1 = new Car('A4', 'Audi', 2020, 250, 2.0);

car1.drive()

// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`

Car.prototype.info = function() {
    for (let prop in this) {
        if (this.hasOwnProperty(prop)) {
            console.log(`${prop} - ${this[prop]}`);
        }
    }
};

let car2 = new Car('Civic', 'Honda', 2019, 200, 1.5);
car2.info();

// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed

Car.prototype.increaseMaxSpeed = function(newSpeed) {
    this.maxSpeed += newSpeed;
};

car1.increaseMaxSpeed(50);
console.log(car1.maxSpeed);

// -- changeYear (newValue) - змінює рік випуску на значення newValue

Car.prototype.changeYear = function(newValue) {
    this.year = newValue;
};

car2.changeYear(2021);
console.log(car2.year);

// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

Car.prototype.addDriver = function(driver) {
    this.driver = driver;
};

let driver1 = { name: 'Propan', age: 30,};

car1.addDriver(driver1);

console.log(car1);

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class clasCar {
    constructor(model, manufacturer, year, maxSpeed, engineVolume) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
    }

    drive() {
        console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }

    info() {
        for (let prop in this) {
            if (this.hasOwnProperty(prop)) {
                console.log(`${prop} - ${this[prop]}`);
            }
        }
    }

    increaseMaxSpeed(newSpeed) {
        this.maxSpeed += newSpeed;
    }

    changeYear(newValue) {
        this.year = newValue;
    }

    addDriver(driver) {
        this.driver = driver;
    }
}

let car3 = new clasCar('A3', 'Audi', 2020, 230, 2.0);
let driver3 = { name: 'Butan', age: 25};

car3.drive();
car3.info();
car3.increaseMaxSpeed(50);
car3.changeYear(2021);
car3.addDriver(driver3);

console.log(car3);

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

let cinderellas = [
    new Cinderella('ylya', 20, 37),
    new Cinderella('dulya', 22, 36),
    new Cinderella('bulya', 25, 38),
    new Cinderella('srulya', 19, 35),
    new Cinderella('pulya', 23, 36),
    new Cinderella('mulya', 21, 37),
    new Cinderella('valya', 24, 38),
    new Cinderella('dalya', 20, 36),
    new Cinderella('halya', 22, 37),
    new Cinderella('Dmutro', 35, 45)
];

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.

class Prince {
    constructor(name, age, foundShoe) {
        this.name = name;
        this.age = age;
        this.foundShoe = foundShoe;
    }
}

let prince = new Prince('Vadik z bazaru', 30, 45);

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.

let taEduna = null;

for (let i = 0; i < cinderellas.length; i++) {
    if (cinderellas[i].footSize === prince.foundShoe) {
        taEduna = cinderellas[i];
    }
}

if (taEduna) {
    console.log(`Попелюшка ${taEduna.name} твій вибір`);
} else {
    console.log(`Принц потрібен королівству і не має часу на жінок`);
}

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

let ceVona = cinderellas.find(function(cinderella) {
    return cinderella.footSize === prince.foundShoe;
});

if (ceVona) {
    console.log(`Попелюшка ${taEduna.name} твій вибір`);
} else {
    console.log(`Принц потрібен королівству і не має часу на стосунки`);
}

// *Через Array.prototype. створити власний foreach, filter

const arr = [31, 22, 33, 44];

Array.prototype.myForEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i);
    }
};

arr.myForEach(function(element, index) {
    console.log(`Елемент з індексом ${index} має значення ${element}`);
});



Array.prototype.myFilter = function(callback) {
    const resultArray = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i])) {
            resultArray.push(this[i]);
        }
    }
    return resultArray;
};


const eachFilteredValue = arr.myFilter(function (element){
    return element > 32
});

console.log(eachFilteredValue);