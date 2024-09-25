const readline = require('readline');

const kamus = {
    'A': 0, 'B': 1, 'C': 1, 'D': 1, 'E': 2, 'F': 3, 'G': 3, 'H': 3, 'I': 4, 'J': 5, 'K': 5, 'L': 5, 'M': 5, 'N': 5,
    'O': 6, 'P': 7, 'Q': 7, 'R': 7, 'S': 7, 'T': 7, 'U': 8, 'V': 9, 'W': 9, 'X': 9, 'Y': 9, 'Z': 9,
    'a': 9, 'b': 8, 'c': 8, 'd': 8, 'e': 7, 'f': 6, 'g': 6, 'h': 6, 'i': 5, 'j': 4, 'k': 4, 'l': 4, 'm': 4, 'n': 4,
    'o': 3, 'p': 2, 'q': 2, 'r': 2, 's': 2, 't': 2, 'u': 1, 'v': 0, 'w': 0, 'x': 0, 'y': 0, 'z': 0, ' ': 0
};

function convertToNumbers(input) {
    return input.split('').map(char => kamus[char] !== undefined ? kamus[char] : null).filter(x => x !== null);
}

function calculateResult(numbers, operations) {
    let result = numbers[0];

    for (let i = 0; i < operations.length; i++) {
        if (operations[i] === '+') {
            result += numbers[i + 1];
        } else if (operations[i] === '-') {
            result -= numbers[i + 1];
        }
    }

    return result;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan kalimat; operasi; angka tambahan (contoh: Titanic; + - + - + -;  7 5 2 9 4 5 8): ", (input) => {
    const [sentence, opsInput, numsInput] = input.split(';').map(part => part.trim());

    const result = convertToNumbers(sentence);
    console.log(`Hasil konversi '${sentence}' ke angka:`, result.join(' '));

    const operations = opsInput.split(' ');
    const additionalNumbers = numsInput.split(' ').map(Number);

    const finalNumbers = result.concat(additionalNumbers);
    const finalResult = calculateResult(finalNumbers, operations);

    console.log("Hasil akhir setelah operasi:", finalResult);
    rl.close();
});
