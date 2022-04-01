const btn1 = document.querySelector(".btn_1");
const btn2 = document.querySelector(".btn_2");
const btn3 = document.querySelector(".btn_3");
const btn4 = document.querySelector(".btn_4");
const btn5 = document.querySelector(".btn_5");
const btn6 = document.querySelector(".btn_6");
const btn7 = document.querySelector(".btn_7");
const btn8 = document.querySelector(".btn_8");


const colors={
  0:"black",
   1:'green',
   2:'red',
   3:'yellowgreen',
   4: 'aqua',
   5: 'grey',
   6: 'orange',
   7:'blueviolet',
   8: 'darkolivegreen',
   9: 'hotpink',
   10:'lightpink',
   11:'springgreen',
};
let num1=Math.floor(Math.random() * 12);
console.log(colors[num1]);
btn1.addEventListener("click", bgc1);
btn1.style.background =colors[num1];
function bgc1() {
  document.body.style.background = colors[num1];
  console.log(btn1);
}
//=========================================
let num2=Math.floor(Math.random() * 12);
console.log(colors[num2]);
btn2.addEventListener("click", bgc2);
btn2.style.background =colors[num2];
function bgc2() {
  document.body.style.background = colors[num2];
 
}
//=========================================
let num3=Math.floor(Math.random() * 12);
console.log(colors[num3]);
btn3.addEventListener("click", bgc3);
btn3.style.background =colors[num3];
function bgc3() {
  document.body.style.background = colors[num3];
}
//=========================================
let num4=Math.floor(Math.random() * 12);
console.log(colors[num4]);
btn4.addEventListener("click", bgc4);
btn4.style.background =colors[num4];
function bgc4() {
  document.body.style.background = colors[num4];
}
//=========================================
let num5=Math.floor(Math.random() * 12);
console.log(colors[num5]);
btn5.addEventListener("click", bgc5);
btn5.style.background =colors[num5];
function bgc5() {
  document.body.style.background = colors[num5];
}
//=========================================
let num6=Math.floor(Math.random() * 12);
console.log(colors[num6]);
btn6.addEventListener("click", bgc6);
btn6.style.background =colors[num6];
function bgc6() {
  document.body.style.background = colors[num6];
  console.log(btn6);
}
//=========================================
let num7=Math.floor(Math.random() * 12);
console.log(colors[num7]);
btn7.addEventListener("click", bgc7);
btn7.style.background =colors[num7];
function bgc7() {
  document.body.style.background = colors[num7];
  console.log(btn7);
}
//=========================================
let num8=Math.floor(Math.random() * 12);
console.log(colors[num8]);
btn8.addEventListener("click", bgc8);
btn8.style.background =colors[num8];
function bgc8() {
  document.body.style.background = colors[num8];
}