const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let num of numbers) {
    if (num % 3 === 0 && num % 2 !== 0) {
        console.log(num);
    }
}
