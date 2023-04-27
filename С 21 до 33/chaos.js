"use strict"

// Автоматическое преобразование типов данных - задания в уме, код писать не велено

let a = "10";
let b = "20";
alert(Number (a) + Number (b));

// Дальнейшие несколько задач так-же не требуют запуска кода

a = "2";
b = "3";
alert(+a + +b);

a = parseFloat("5px");
b = parseFloat("6px");
alert(a + b);

a = parseFloat("5.5px");
b = parseFloat("6.25px");
let c = "px";
alert(a + b + c);

let num1 = "20";
let num2 = "4";
alert(String(num1) + String(num2));
let num = "23761283689";
alert(String(num).length);
num1 = "312";
num2 = "5";
let sum1 = (String(num1).length);
let sum2 = (String(num2).length);
alert(sum1 + sum2);

// Дальнейшие несколько задач так-же не требуют запуска кода

let str = "abcde";
alert(str[0]);alert(str[2]);alert(str[4]);

str = "abcde";
alert(str[4]);alert(str[3]);alert(str[2]);alert(str[1]);alert(str[0]);

str = "abcde";
num = " 3";
alert(str + num);

str = "abcde";
let last = str.length-"1";
alert(str[last]);

str = "abcde";
last = str.length-"2";
alert(str[last]);

str = "abcde";
last = str.length-"3";
alert(str[last]);

num = "12345";
alert(Number(num[0]) + Number(num[1]) + Number(num[2]) + Number(num[3]) + Number(num[4]));

let test = String(12345);
alert(Number(test[0]) + Number(test[1]) + Number(test[2]) + Number(test[3]) + Number(test[4]));

test = String(12345);
alert(test[1] * test[2] * test[3] * test[4]);

num = "12345";
alert(num[5]);alert(num[4]);alert(num[3]);alert(num[2]);alert(num[1]);

num = 47;
num += 7;
num -= 18;
num *= 10;
num /= 15;
alert(num);

num = 10;
num ++;
num ++;
num --;
alert(num);

//дальнейшие задания так-же высчитываются в уме, переходим на следующие

alert('Ваш возраст: ' + prompt('Каков Ваш возраст?'));

num1 = prompt('Введите первое число');
num2 = prompt('Введите второе число');
alert((Number(num1))+(Number(num2)));

a = prompt("Сторона квадрата?");
alert(a * a);

num1 = prompt('Введите сторону прямоугольника');
num2 = prompt('Введите другую сторону прямоугольника');
alert((Number(num1))+(Number(num2)));