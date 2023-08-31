function calculator(num1, num2, operator) {
    let result;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            console.log("Invalid operator");
            return;
    }

    console.log(`Result: ${result}`);
}

// Test cases
calculator(5, 3, '+');  // Output: Result: 8
calculator(10, 4, '-'); // Output: Result: 6
calculator(6, 2, '*');  // Output: Result: 12
calculator(8, 2, '/');  // Output: Result: 4
calculator(7, 3, '%');  // Output: invalid operator
