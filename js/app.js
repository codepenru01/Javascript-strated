var intro = alert("Xush kelibsiz!");
console.log("F.I.SH: " + prompt("F.I.SH ?"));
console.log("Yoshi: " + prompt("Yoshingiz nechida ?"));
console.log("Qayerdanligi: " + prompt("Qayerdansiz ?"));
console.log("Qayerda ta'lim olish " + prompt("Qayerda ta'lim olasiz, yoki ishlaysiz ?"));
console.log("Oilaviy muhiti: " + prompt("Oilaviy muhit ?"));
console.log("Tel raqami: " + prompt("Tel raqamingiz ?"));
console.log("Email: " + prompt("Elektron pochtangiz(email,gmail,mail,yandex)"));
console.log("Turar joy: " + prompt("Turar joyiz ?"));
console.log("Poshta indexsi: " + prompt("Pochta indeksi ?"));

var elMode = document.querySelector(".btn__mode");
var elBody = document.querySelector("body");

elMode.addEventListener("click", function() {
    elBody.classList.toggle("dark");
})