// let user = {
// 	age: 24,
// 	name: "john"
// };
// alert("Привет, меня зовут " + user.name);
// alert("Мне " + user.age + " года.");
// let key = "Ойооуу ниггаааа";
// user[key] = "Ойооуу ниггаааа";
// alert(user[key]);
// function randomInRange(from, to) {

// 	return Math.round(Math.random() * (to - from)) + from;

// }
// alert(randomInRange(0, 1));
let call = prompt("Сколько за сутки вы сьедаете каллорий?", "1000"); 
	if (call < 1000) {
		alert("Да вы просто должны быть худышкой");
	} else if (call >= 1000 && call < 3000) {
		alert("Это норма!");
	} else {
		alert("Чё то ДОХРЕНА! Садись на диету, пока не распёрло!!!");
	}
