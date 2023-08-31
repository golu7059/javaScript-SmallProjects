function countVowels(name) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let vowelCount = 0;

    for (let char of name.toLowerCase()) {
        if (vowels.includes(char)) {
            vowelCount++;
        }
    }

    return vowelCount;
}

let userName = prompt("Enter your name:");
let numberOfVowels = countVowels(userName);

console.log(`Number of vowels in the name: ${numberOfVowels}`);
