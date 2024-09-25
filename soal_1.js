const readline = require('readline');

function createKamus(upperCaseRefs, upperCaseValues, lowerCaseRefs, lowerCaseValues) {
    const kamus = {};
    for (let i = 0; i < upperCaseRefs.length; i++) {
        kamus[upperCaseRefs[i]] = upperCaseValues[i];
    }
    for (let i = 0; i < lowerCaseRefs.length; i++) {
        kamus[lowerCaseRefs[i]] = lowerCaseValues[i];
    }
    return kamus;
}


const upperCaseRefs = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const upperCaseValues = [0, 1, 1, 1, 2, 3, 3, 3, 4, 5, 5, 5, 5, 5, 6, 7, 7, 7, 7, 7, 8, 9, 9, 9, 9, 9];
const lowerCaseRefs = 'abcdefghijklmnopqrstuvwxyz ';
const lowerCaseValues = [9, 8, 8, 8, 7, 6, 6, 6, 5, 4, 4, 4, 4, 4, 3, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0];

const kamus = createKamus(upperCaseRefs, upperCaseValues, lowerCaseRefs, lowerCaseValues);

function convertToNumbers(input) {
    return input.split('').map(char => kamus[char] !== undefined ? kamus[char] : null).filter(x => x !== null);
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan kalimat yang ingin dikonversi ke angka: ", function (input) {
    const result = convertToNumbers(input);
    console.log("Hasil konversi '" + input + "' ke angka:", result.join(' '));
    rl.close();
});
