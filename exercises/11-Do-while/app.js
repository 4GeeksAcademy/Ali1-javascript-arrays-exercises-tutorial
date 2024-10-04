let i = 20;

do {
    if (i === 0) {
        console.log('LIFTOFF'); // Print LIFTOFF when i is 0
    } else if (i % 5 === 0) {
        console.log(i + '!'); // Print with exclamation mark if multiple of 5
    } else {
        console.log(i); // Print the number normally
    }
    i--; // Decrement the counter
} while (i >= 0);
