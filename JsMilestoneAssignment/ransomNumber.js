const randomGenerator = (() => {
    return Math.floor(Math.random() * 100) + 1;
})();

console.log(`Generated random number: ${randomGenerator}`);
