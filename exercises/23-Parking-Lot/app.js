function getParkingLotState(parkingState) {
  let totalSlots = 0; // Counter for total slots
  let occupiedSlots = 0; // Counter for occupied slots

  // Loop through each row in the parking state
  for (let row of parkingState) {
      // Loop through each slot in the current row
      for (let slot of row) {
          totalSlots++; // Increment total slots count
          
          // Check if the slot is occupied or reserved
          if (slot === 1 || slot === 2) {
              occupiedSlots++; // Increment occupied slots count
          }
      }
  }

  // Calculate available slots
  const availableSlots = totalSlots - occupiedSlots;

  // Return the state object
  return {
      totalSlots: totalSlots,
      availableSlots: availableSlots,
      occupiedSlots: occupiedSlots
  };
}

// Example parking state
let parkingState = [
  [1, 0, 1, 1, 0, 1],
  [2, 0, 1, 1, 0, 1],
  [1, 0, 2, 1, 0, 1],
  [1, 0, 1, 1, 0, 1],
  [1, 0, 1, 1, 0, 2],
  [1, 0, 1, 1, 0, 1],
];

// Call the function and print the output
console.log(getParkingLotState(parkingState));