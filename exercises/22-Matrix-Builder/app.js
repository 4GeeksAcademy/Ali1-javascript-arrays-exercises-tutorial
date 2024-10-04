function matrixBuilder(size) {
    const matrix = [];

    // Loop to create the rows
    for (let i = 0; i < size; i++) {
        const row = [];
        // Loop to fill the row with 0s and 1s
        for (let j = 0; j < size; j++) {
            // Use Math.random() to generate a random value of 0 or 1
            row.push(Math.round(Math.random())); // Generates either 0 or 1
        }
        // Add the row to the matrix
        matrix.push(row);
    }

    return matrix; // Return the completed matrix
}

// Do not change anything from this line down
console.log(matrixBuilder(5));