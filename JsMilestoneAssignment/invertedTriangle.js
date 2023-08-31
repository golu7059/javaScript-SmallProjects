const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter the number of rows: ', function (input) {
    const numRows = parseInt(input);

    for (let i = numRows; i >= 1; i--) {
        let asterisks = '';
        for (let j = 1; j <= i; j++) {
            asterisks += '*';
        }
        console.log(asterisks);
    }

    rl.close();
});
