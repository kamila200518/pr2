'use strict';

let name = "Джон";
let admin = name;
alert(admin);
console.log(admin);




let name1 = prompt("Название города:" , "Неизвестно");
let year = prompt("Год образования города:" , "Неизвестно");
let population = prompt("Население города:" , "Неизвестно");
let year2 = 2024;
let cityAge = year2 - year;
let message = `Городу ${name1} ${cityAge} лет. Население - ${population} человек.`;
console.log(message);
alert(message);



let r = prompt("Введите радиус");
let r2 = (3.14*(r**2));
alert (r2);
console.log(r2);


let a = prompt("Введите число a");
let b = prompt("Введите второе число b");
let sum = Number(a)+Number(b);
let mes = (`Сумма: ${sum} Разность: ${a-b} Частное: ${a/b} Произведение: ${a*b}`);
alert (mes);
console.log(mes);
