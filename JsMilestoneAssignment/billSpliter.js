function calculateBill(costPerDish, numberOfPeople) {
    const totalBill = costPerDish * numberOfPeople;
    const billPerPerson = totalBill / numberOfPeople;
    
    return {
        totalBill: totalBill,
        billPerPerson: billPerPerson
    };
}

const costPerDish = 250; // Cost of each dish
const numberOfPeople = 4; // Number of people sharing the dishes

const billDetails = calculateBill(costPerDish, numberOfPeople);

console.log("Total Bill:", billDetails.totalBill);
console.log("Bill Per Person:", billDetails.billPerPerson);
