const btn1 = document.querySelector(".btn_1");
const btn2 = document.querySelector(".btn_2");
const btn3 = document.querySelector(".btn_3");
const btn4 = document.querySelector(".btn_4");
const btn5 = document.querySelector(".btn_5");
const btn6 = document.querySelector(".btn_6");
const btn7 = document.querySelector(".btn_7");
const btn8 = document.querySelector(".btn_8");
const title = document.querySelector(".title");

let numm1;
symbols = "0123456789abcdef";
numm1 = "#";
for (let i = 0; i < 6; i++) {
  numm1 += symbols[Math.floor(Math.random() * 16)];
}

btn1.addEventListener("click", bgc1);
btn1.style.background = numm1;
btn1.innerHTML = numm1;
function bgc1() {
  document.body.style.background = numm1;
  title.innerHTML = numm1;
  title.style.color = "white";
}
//=========================================
let numm2;
symbols = "0123456789abcdef";
numm2 = "#";
for (let i = 0; i < 6; i++) {
  numm2 += symbols[Math.floor(Math.random() * 16)];
}

btn2.addEventListener("click", bgc2);
btn2.style.background = numm2;
btn2.innerHTML = numm2;
function bgc2() {
  document.body.style.background = numm2;
  title.innerHTML = numm2;
  title.style.color = "white";
}
//=========================================
let numm3;
symbols = "0123456789abcdef";
numm3 = "#";
for (let i = 0; i < 6; i++) {
  numm3 += symbols[Math.floor(Math.random() * 16)];
}

btn3.addEventListener("click", bgc3);
btn3.style.background = numm3;
btn3.innerHTML = numm3;
function bgc3() {
  document.body.style.background = numm3;
  title.innerHTML = numm3;
  title.style.color = "white";
}
//=========================================
let numm4;
symbols = "0123456789abcdef";
numm4 = "#";
for (let i = 0; i < 6; i++) {
  numm4 += symbols[Math.floor(Math.random() * 16)];
}

btn4.addEventListener("click", bgc4);
btn4.style.background = numm4;
btn4.innerHTML = numm4;
function bgc4() {
  document.body.style.background = numm4;
  title.innerHTML = numm4;
  title.style.color = "white";
}
//=========================================
let numm5;
symbols = "0123456789abcdef";
numm5 = "#";
for (let i = 0; i < 6; i++) {
  numm5 += symbols[Math.floor(Math.random() * 16)];
}

btn5.addEventListener("click", bgc5);
btn5.style.background = numm5;
btn5.innerHTML = numm5;
function bgc5() {
  document.body.style.background = numm5;
  title.innerHTML = numm5;
  title.style.color = "white";
}
//=========================================
let numm6;
symbols = "0123456789abcdef";
numm6 = "#";
for (let i = 0; i < 6; i++) {
  numm6 += symbols[Math.floor(Math.random() * 16)];
}

btn6.addEventListener("click", bgc6);
btn6.style.background = numm6;
btn6.innerHTML = numm6;
function bgc6() {
  document.body.style.background = numm6;
  title.innerHTML = numm6;
  title.style.color = "white";
}
//=========================================
let numm7;
symbols = "0123456789abcdef";
numm7 = "#";
for (let i = 0; i < 6; i++) {
  numm7 += symbols[Math.floor(Math.random() * 16)];
}

btn7.addEventListener("click", bgc7);
btn7.style.background = numm7;
btn7.innerHTML = numm7;
function bgc7() {
  document.body.style.background = numm7;
  title.innerHTML = numm7;
  title.style.color = "white";
}
//=========================================
let numm8;
symbols = "0123456789abcdef";
numm8 = "#";
for (let i = 0; i < 6; i++) {
  numm8 += symbols[Math.floor(Math.random() * 16)];
}

btn8.addEventListener("click", bgc8);
btn8.style.background = numm8;
btn8.innerHTML = numm8;
function bgc8() {
  document.body.style.background = numm8;
  title.innerHTML = numm8;
  title.style.color = "white";
}
