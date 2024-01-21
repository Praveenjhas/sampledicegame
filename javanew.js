var a = Math.floor(Math.random() * 6);
var b = Math.floor(Math.random() * 6);
var src1 = "Dicee Challenge - Starting Files/images/dice" + a + ".png";
var src2 = "Dicee Challenge - Starting Files/images/dice" + b + ".png";

document.querySelector('.firstimage').innerHTML = '<img src="' + src1 + '">';
document.querySelector('.secondimage').innerHTML = '<img src="' + src2 + '">';



