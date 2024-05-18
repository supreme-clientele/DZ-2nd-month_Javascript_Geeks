// функция капитализации строк
function capitalizeString(s) {
    if (s.length === 0) {
        return "";
    }
    let firstChar = s[0].toUpperCase();
    let restOfString = s.substring(1).toLowerCase();
    return firstChar + restOfString;
}

console.log(capitalizeString('MURAT'));
console.log(capitalizeString('bUKARBAEV'));


// функция подсчета количества определенных символов в строке
function charCount(str, char) {
    let lowerStr = str.toLowerCase();
    let lowerChar = char.toLowerCase();
    
    let count = 0;
    
    for (let i = 0; i < lowerStr.length; i++) {
        if (lowerStr[i] === lowerChar) {
            count++;
        }
    }
    return count;
}

console.log(charCount('Abrakadabra', 'a'));
console.log(charCount('pneumonia', 'n'));
console.log(charCount('Essential', 'n'));
