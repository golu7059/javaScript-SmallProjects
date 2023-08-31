const customerAccount = {
    name: "John Doe",
    balance: 1000
};

function deposit(amount) {
    if (amount > 0) {
        customerAccount.balance += amount;
        console.log(`Deposited $${amount}. New balance: $${customerAccount.balance}`);
    } else {
        console.log("Invalid deposit amount.");
    }
}

function withdraw(amount) {
    if (amount > 0 && amount <= customerAccount.balance) {
        customerAccount.balance -= amount;
        console.log(`Withdrawn $${amount}. New balance: $${customerAccount.balance}`);
    } else {
        console.log("Insufficient balance or invalid withdrawal amount.");
    }
}

// Perform deposit and withdrawal
deposit(500);
withdraw(200);
