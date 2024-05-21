// Программа  "Конвертер чисел"

// Используем if..else
function convertToRomanWithIfElse(num) {
    let romanNum = '';
    if (num === 1) {
        romanNum = 'I';
    } else if (num === 2) {
        romanNume = 'II';
    } else if (num === 3) {
        romanNum = 'III';
    } else if (num === 4) {
        romanNum = 'IV';
    } else if (num === 5) {
        romanNum = 'V';
    } else if (num === 6) {
        romanNum = 'VI';
    } else if (num === 7) {
        romanNum = 'VII';
    } else if (num === 8) {
        romanNum = 'VIII';
    } else if (num === 9) {
        romanNum = 'IX';
    }
    return romanNum;
}

let num = 7;

console.log('Convert with if..else:', convertToRomanWithIfElse(num));

// Используем switch..case
function convertToRomanWithSwitchCase(num) {
    let romanNum = '';
    switch (num) {
        case 1:
            romanNum = 'I';
            break;
        case 2:
            romanNum = 'II';
            break;
        case 3:
            romanNum = 'III';
            break;
        case 4:
            romanNum = 'IV';
            break;
        case 5:
            romanNum = 'V';
            break;
        case 6:
            romanNum = 'VI';
            break;
        case 7:
            romanNum = 'VII';
            break;
        case 8:
            romanNum = 'VIII';
            break;
        case 9:
            romanNum = 'IX';
            break;
    }
    return romanNum;
}

console.log('Convert with switch..case:', convertToRomanWithSwitchCase(num));


// Программа лояльности в Газпроме

//  на if..else
function calculatePoints(cardType, liters) {
    let points = 0;
    if (cardType === 'SILVER') {
        points = liters * 0.5;
    } else if (cardType === 'GOLD') {
        points = liters * 0.75;
    } else if (cardType === 'PLATINUM') {
        points = liters * 1;
    }
    return points;
}

let cardType = 'GOLD'; 
let liters = 10;
let earnedPoints = calculatePoints(cardType, liters);
console.log('Earned points:', earnedPoints);

// Программа лояльности в Газпроме на switch..case c другими названиями переменных, чтоб не было ошибки в коде
function calculatePoints(tipKarty, litry) {
    let bally = 0;
    switch (tipKarty) {
        case 'SILVER':
            bally = litry * .5;
            break;
        case 'GOLD':
            bally = litry * .75;
            break;
        case 'PLATINUM':
            bally = litry * 1;
            break;
    }
    return bally;
}

let tipKarty = 'SILVER';
let litry = 100;

let zarabotannyeBally = calculatePoints(tipKarty, litry);
console.log('Zarabotannye Bally:', zarabotannyeBally);


// программа, которая переводит сумму в сомах в количество литров бензина
// Используем if..else
function calculateLitersWithIfElse(fuelType, amount) {
    let liters = 0;
    if (fuelType === '92') {
        liters = amount / 65.4;
    } else if (fuelType === '95') {
        liters = amount / 72.9;
    } else if (fuelType === '98') {
        liters = amount / 88;
    } else if (fuelType === 'DT') {
        liters = amount / 73.8;
    } else if (fuelType === 'Gas') {
        liters = amount / 32;
    }
    return liters;
}

let fuelType = '95';
let amount = 500;

console.log('Liters with if..else:', calculateLitersWithIfElse(fuelType, amount));


// Используем switch..case c другими названиями переменных, чтоб не было ошибки в коде
function calculateLitersWithSwitchCase(vidTopliva, summa) {
    let litry = 0;
    switch (vidTopliva) {
        case '92':
            litry = summa / 65.4
            break;
        case '95':
            litry = summa / 72.9;
            break;
        case '98':
            litry = summa / 88;
            break;
        case 'DT':
            litry = summa / 73.8;
            break;
        case 'Gas':
            litry = summa / 32;
            break;
    }
    return litry;
}

let vidTopliva = 'Gas';
let summa = 1000;

console.log("Litry s switch..case:", calculateLitersWithSwitchCase(vidTopliva, summa));