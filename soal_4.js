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

function processInput(input) {
    let numbers = convertToNumbers(input);
    console.log("Hasil konversi ke bilangan:", numbers.join(' '));

    if (numbers.length >= 2) {
        numbers[numbers.length - 2] = 1;
        numbers[numbers.length - 1] = 2;
    }
    console.log("Setelah operasi matematika:", numbers.join(' '));

    const result = convertToLetters(numbers);
    console.log("Hasil akhir konversi ke huruf:", result);
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan string huruf (pisahkan dengan spasi) contoh A B E F I A B A B: ", (input) => {
    processInput(input);
    rl.close();
});
