// Task 1 - додає клас з назвою групи, елементу з ід main_header

const mainHeader = document.getElementById('main_header');
mainHeader.classList.add('march-2022');

// Task 2 - робить шириниу елементу ul 400px

const ul = document.getElementsByTagName('ul');
ul[0].style.width = '400px';

// Task 3 - робить шириниу всіх елементів з класом linkList шириною 50%

const links = document.getElementsByClassName('linkList');
for (const link of links) {
    link.style.width = '50%';
}

// Task 4 - отримує текст який зберігається в елементі з класом listElement2

const list2 = document.getElementsByClassName('listElement2');
console.log(list2[0].innerHTML);

// Task 5 - отримує всі елементи li та змінює ім колір фону на сірий

const li = document.getElementsByTagName('li');

for (const liElement of li) {
    liElement.style.backgroundColor = 'grey';
}

// Task 6 - отримує всі елементи 'a' та додає їм клас anchor

const anchors = document.getElementsByTagName('a');

for (const anchor of anchors) {
    anchor.classList.add('anchor');
}

// Task 7 - отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому
//          розмір тексту на 40 пікселів

for (const anchor of anchors) {
    if (anchor.innerHTML === 'link3') {
        anchor.style.fontSize = '40px';
    }
}

// Task 8 - отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

for (const anchor of anchors) {
    anchor.classList.add(`element_${anchor.innerHTML}`);
}
// Task 9 - отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

const titleH3 = document.getElementsByClassName('sub-header');

for (const title of titleH3) {
    title.style.backgroundColor = prompt('Вкажіть колір', '');
}
// Task 10 - отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment .
//           Колір отримати з prompt()

for (const title of titleH3) {
    if (title.innerHTML === 'content 2 segment') {
        title.style.color = prompt('Вкажіть колір', '');
    }
}

// Task 11 - отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

const content_1 = document.getElementsByClassName('content_1');

content_1[0].innerHTML = prompt('Введіть будь який текс', '');

// Task 12 - отримати елементи p та змінити їм padding на 20px

const p = document.getElementsByTagName('p');
p[0].style.padding = '20px';

// Task 13 - отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)

const text2 = document.getElementsByClassName('text2');
text2[0].classList.add('march-2022');