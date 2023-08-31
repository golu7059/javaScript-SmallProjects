function capitalizeFirstLetter(name) {
    return name.charAt(0).toUpperCase() + name.slice(1);
}

function fixName(name) {
    return name.charAt(0).toLowerCase() === name.charAt(0)
        ? capitalizeFirstLetter(name)
        : name;
}

let userName = prompt("Enter your name:");
let correctedName = fixName(userName);

console.log(`Corrected name: ${correctedName}`);

