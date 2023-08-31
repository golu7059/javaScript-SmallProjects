function mixColors(color1, color2) {
    let resultingColor;

    switch (color1) {
        case "red":
            switch (color2) {
                case "blue":
                    resultingColor = "purple";
                    break;
                case "yellow":
                    resultingColor = "orange";
                    break;
                default:
                    resultingColor = "Invalid color combination";
            }
            break;
        case "blue":
            switch (color2) {
                case "red":
                    resultingColor = "purple";
                    break;
                case "yellow":
                    resultingColor = "green";
                    break;
                default:
                    resultingColor = "Invalid color combination";
            }
            break;
        case "yellow":
            switch (color2) {
                case "red":
                    resultingColor = "orange";
                    break;
                case "blue":
                    resultingColor = "green";
                    break;
                default:
                    resultingColor = "Invalid color combination";
            }
            break;
        default:
            resultingColor = "Invalid color combination";
    }

    console.log(`Resulting color: ${resultingColor}`);
}

// Test cases
mixColors("red", "blue");     // Output: Resulting color: purple
mixColors("blue", "yellow");  // Output: Resulting color: green
mixColors("red", "green");    // Output: Resulting color: Invalid color combination
