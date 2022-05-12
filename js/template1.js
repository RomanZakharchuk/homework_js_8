// Task 1 -- отримує текст з параграфа з id "content"

const content = document.getElementById('content');
console.log(content.innerHTML);

// Task 2 -- отримує текст з блоку з id "rules"

const rules = document.getElementById('rules');
console.log(rules.innerHTML);

// Task 3 -- замініть текст параграфа з id 'content' на будь-який інший

content.innerHTML = 'Жили у бабусі два веселі гусі)';

// Task 4 -- замініть текст параграфа з id 'rules' на будь-який інший

rules.innerHTML = 'Заміна айдішки успішно виконана)';

// Task 5 -- змініть кожному елементу колір фону на червоний

const p = document.getElementsByTagName('p'),
    div = document.getElementsByTagName('div'),
    liColection = document.getElementsByTagName('li');

p[0].style.backgroundColor = 'red';
div[0].style.backgroundColor = 'red';
for (const li of liColection) {
    li.style.backgroundColor = 'red';
}

// Task 6 -- змініть кожному елементу колір тексту на синій

p[0].style.color = 'blue';
div[0].style.color = 'blue';
for (const li of liColection) {
    li.style.color = 'blue';
}

// Task 7 -- отримати весь список класів елемента з id=rules і вивести їх в console.log

const allRules = document.getElementById('rules');
console.log(allRules.classList);

// Task 8 -- поміняти колір тексту у всіх елементів fc_rules на червоний

const fcRules = document.getElementsByClassName('fc_rules');
for (const fcRule of fcRules) {
    fcRule.style.color = 'red';
}