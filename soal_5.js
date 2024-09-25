const readline = require('readline');

const kamus = {
    'A': 0, 'B': 1, 'C': 1, 'D': 1, 'E': 2, 'F': 3, 'G': 3, 'H': 3, 'I': 4, 'J': 5, 'K': 5, 'L': 5, 'M': 5, 'N': 5,
    'O': 6, 'P': 7, 'Q': 7, 'R': 7, 'S': 7, 'T': 7, 'U': 8, 'V': 9, 'W': 9, 'X': 9, 'Y': 9, 'Z': 9
};
const reverseKamus = {
    0: 'A', 1: 'B', 2: 'E', 3: 'F', 4: 'I', 5: 'J', 6: 'O', 7: 'P', 8: 'U', 9: 'V'
};

function convertToNumbers(input) {
    return input.split(' ').map(char => kamus[char]);
}
function convertToLetters(numbers) {
    return numbers.map(num => reverseKamus[num]).join(' ');
}
function processNumbers(numbers, replacements) {
    return numbers.map((num, index) => replacements[index] !== undefined ? replacements[index] : num);
}
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Masukkan kalimat dan penggantian (contoh: 'A B E F I A B B E; 0:1, 2:3, 4:5, 5:1, 8:3'): ", (input) => {
    const [sentence, replacementsInput] = input.split(';').map(part => part.trim());
    let numbers = convertToNumbers(sentence);
    console.log("Hasil konversi ke bilangan:", numbers.join(' '));

    const replacements = {};
    replacementsInput.split(',').forEach(pair => {
        const [key, value] = pair.split(':').map(Number);
        replacements[key] = value;
    });

    let processedNumbers = processNumbers(numbers, replacements);
    console.log("Setelah operasi matematika:", processedNumbers.join(' '));

    const resultLetters = convertToLetters(processedNumbers);
    console.log("Hasil akhir konversi ke huruf:", resultLetters);

    console.log("Output:", processedNumbers.join(' '));

    rl.close();
});
