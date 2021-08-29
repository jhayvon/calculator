let screen = document.querySelector('#screen');

let one = document.querySelector('#one');
let two = document.querySelector('#two');
let three = document.querySelector('#three');
let four = document.querySelector('#four');
let five = document.querySelector('#five');
let six = document.querySelector('#six');
let seven = document.querySelector('#seven');
let eight = document.querySelector('#eight');
let nine = document.querySelector('#nine');
let point = document.querySelector('#point');
let zero = document.querySelector('#zero');


let add = document.querySelector('#add');
let minus = document.querySelector('#minus');
let divide = document.querySelector('#divide');
let times = document.querySelector('#times');
let equal = document.querySelector('#equal');
let clear = document.querySelector('#clear');
let del = document.querySelector('#delete');

one.addEventListener("click", function () {
    screen.value += one.value;
});
two.addEventListener("click", function () {
    screen.value += two.value;
});
three.addEventListener("click", function () {
    screen.value += three.value;
});
four.addEventListener("click", function () {
    screen.value += four.value;
});
five.addEventListener("click", function () {
    screen.value += five.value;
});
six.addEventListener("click", function () {
    screen.value += six.value;
});
seven.addEventListener("click", function () {
    screen.value += seven.value;
});

eight.addEventListener("click", function () {
    screen.value += eight.value;
});

nine.addEventListener("click", function () {
    screen.value += nine.value;
});
zero.addEventListener("click", function () {
    screen.value += zero.value;
});

point.addEventListener("click", function () {
    screen.value += point.value;
});


add.addEventListener("click", function () {
    screen.value += add.value;
});
minus.addEventListener("click", function () {
    screen.value += minus.value;
});
divide.addEventListener("click", function () {
    screen.value += divide.value;
});
times.addEventListener("click", function () {
    screen.value += times.value;
});
equal.addEventListener("click", function () {
    screen.value = eval(screen.value);
});

clear.addEventListener("click", function () {
    screen.value = "";
});
del.addEventListener("click", function () {
    screen.value = screen.value.slice(0, -1);
});