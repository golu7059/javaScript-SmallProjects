const calculateTotalCost = cart => {
    return cart.reduce((total, item) => total + (item.unitPrice * item.quantity), 0);
};

const customerCart = [
    { unitPrice: 10, quantity: 2 },
    { unitPrice: 5, quantity: 3 },
    { unitPrice: 20, quantity: 1 }
];

const totalCost = calculateTotalCost(customerCart);

console.log(`Total cost of items: $${totalCost}`);
