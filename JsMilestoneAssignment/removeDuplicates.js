function removeDuplicates(cart) {
    let uniqueCart = [];
    
    for (let item of cart) {
        if (!uniqueCart.includes(item)) {
            uniqueCart.push(item);
        }
    }
    
    return uniqueCart;
}

// Example cart with duplicate items
let customerCart = ['item1', 'item2', 'item1', 'item3', 'item2'];

let newCart = removeDuplicates(customerCart);

console.log("Original Cart:", customerCart);
console.log("Cart without Duplicates:", newCart);
