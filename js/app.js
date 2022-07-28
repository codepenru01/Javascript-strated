var intro = alert("Xush kelibsiz!");
console.log(prompt("Familyangiz ?"));
console.log(prompt("Ismingiz ?"));
console.log(prompt("Qayerdansiz"));
console.log(prompt("Telefon raqamingiz ?"));
console.log(prompt("Dadangizni ismlari ?"));
console.log(prompt("Onangizni ismlari ?"));
console.log(prompt("Qayerda o'qiysiz ?"));
console.log(confirm("Sizga saytimiz yoqdimi ?"));

var elMode = document.querySelector(".btn__mode");
var elBody = document.querySelector("body");

elMode.addEventListener("click", function() {
    elBody.classList.toggle("dark");
})