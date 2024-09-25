const readline = require('readline');

function convertToLetterFromSum(number) {
    const reverseDictionary = {
        0: 'A', 1: 'B', 2: 'E', 3: 'F', 4: 'I', 5: 'J', 6: 'O', 7: 'P', 8: 'U', 9: 'V'
    };
    number = Math.abs(number);
    let sequence = [];
    if (number === 12) {
        sequence = [0, 1, 2, 3, 4, 0, 1, 0, 1];
    } else if (number === 16) {
        sequence = [0, 1, 2, 3, 4, 5, 0, 1];
    }

    return {
        output: sequence.map(digit => reverseDictionary[digit] || '').join(' '),
        uraian: sequence.map(digit => `${digit} -> ${reverseDictionary[digit]}`).join(', ')
    };
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan angka (misalnya, 12 atau -16): ", (input) => {
    const number = parseInt(input);
    const result = convertToLetterFromSum(number);

    console.log("Output huruf:", result.output);
    console.log("Uraian:", result.uraian);

    rl.close();
});
