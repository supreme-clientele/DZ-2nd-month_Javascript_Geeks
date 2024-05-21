// Программа подсчета карт VISA из массива с помощью цикла for.. of

let cardNumbers = ["46782346", "45781218", "79874568", "12157845", "36151845", "41250895", "41201961"];
let visaCount = 0;

for (let card of cardNumbers) {
    if (card.startsWith('4')) {
        visaCount++;
    }
}

console.log('Карт VISA ' + visaCount + ' из ' + cardNumbers.length + '.');


// Программа таблицы умножения через prompt с помощью цикла for
let number = parseInt(prompt("Введите число от 2 до 10:"));

if (number >= 2 && number <= 10) {
    for (let i = 1; i <= 10; i++) {
        let result = number * i;
        console.log(number + " × " + i + " = " + result);
    }
} else {
    console.log("Число должно быть от 2 до 10.");
}
