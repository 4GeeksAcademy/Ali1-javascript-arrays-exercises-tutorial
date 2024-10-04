let mySampleArray = [3423, 5, 4, 47889, 654, 8, 867543, 23, 48, 56432, 55, 23, 25, 12];

let initialValue = 7; // Start from the 8th element (index 7)
let stopValue = mySampleArray.length; // The length of the array
let increasingValue = 1; // Increment by 1 to print each element

// Loop through the array from initialValue to stopValue
for (let i = initialValue; i < stopValue; i += increasingValue) {
    console.log(mySampleArray[i]); // Print each element in the loop
}