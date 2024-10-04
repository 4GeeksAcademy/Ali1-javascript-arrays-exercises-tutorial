let myArray = [43, 23, 6, 87, 43, 1, 4, 6, 3, 67, 8, 3445, 3, 7, 5435, 63, 346, 3, 456, 734, 6, 34];

// Define the findMax function
const findMax = (arr) => {
    return Math.max(...arr);
};

// Log the maximum value from myArray
console.log(findMax(myArray)); // This will output the maximum number in myArray