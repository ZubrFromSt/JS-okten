// - створити блок,

const doc = document.createElement('div');

// - додати йому класи wrap, collapse, alpha, beta

doc.classList.add('wrap', 'collapse', 'alpha', 'beta');

// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту

doc.style.background = 'red';
doc.style.color = 'blue';
doc.style.fontSize = '35px';
doc.innerText = 'Princess';

// - додати цей блок в body.

document.body.appendChild(doc);

// - клонувати його повністю, та додати клон в body.

let clone = doc.cloneNode(true);

clone.style.background = 'gray';

document.body.appendChild(clone);

// - Є масив:
// ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)

let mas = ['Main','Products','About us','Contacts'];

let ul = document.createElement('ul');
for (let i of mas) {
    let li = document.createElement('li');
    li.innerText = i;
    ul.appendChild(li);
}

document.body.appendChild(ul);

// - Є масив

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли

for (i of coursesAndDurationArray) {
    let doc = document.createElement('div');
    doc.innerText = `${i.title} тривалістю ${i.monthDuration} місяців`;
    document.body.appendChild(doc);
}

// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
// Завдання робити через цикли.


for (i of coursesAndDurationArray) {
    let div = document.createElement('div');
    let h1 = document.createElement('h1');
    let p = document.createElement('p');

    div.classList.add('item');
    h1.classList.add('heading');
    p.classList.add('description');

    h1.innerText = i.title;
    p.innerText = 'не пропускати'

    div.append(h1, p);
    document.body.appendChild(div);

}


