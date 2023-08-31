function calculateRentalCost(daysRented, carType) {
    let rentalRate;
    
    switch (carType.toLowerCase()) {
        case 'economy':
            rentalRate = 4000;
            break;
        case 'midsize':
            rentalRate = 15000;
            break;
        case 'luxury':
            rentalRate = 25000;
            break;
        default:
            return 'Invalid car type';
    }
    
    const totalCost = rentalRate * daysRented;
    return totalCost;
}

const daysRented = 7; // Number of days rented
const carType = 'midsize'; // Car type ('economy', 'midsize', or 'luxury')

const rentalCost = calculateRentalCost(daysRented, carType);

console.log(`Total rental cost: Rs. ${rentalCost.toFixed(2)}`);
