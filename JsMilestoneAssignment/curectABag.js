function correctCartQuantities(cart) {
    const correctedCart = cart.map(quantity => quantity * 2);
    return correctedCart;
}

// Example cart array with quantities
const cartArray = [1, 3, 2, 5, 4];

const correctedCart = correctCartQuantities(cartArray);

console.log("Original Cart:", cartArray);
console.log("Corrected Cart:", correctedCart);
