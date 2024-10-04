let people = ['juan', 'ana', 'michelle', 'daniella', 'stefany', 'lucy', 'barak', 'emilio'];

// Define the deletePerson function
const deletePerson = (personToDelete) => {
    return people.filter(person => person !== personToDelete);
};

// Call the function and store the results
const updatedList1 = deletePerson('daniella'); // Should not include 'daniella'
const updatedList2 = deletePerson('juan');      // Should not include 'juan'
const updatedList3 = deletePerson('emilio');    // Should not include 'emilio'

// Log the updated lists
console.log(updatedList1); // ['juan', 'ana', 'michelle', 'stefany', 'lucy', 'barak', 'emilio']
console.log(updatedList2); // ['ana', 'michelle', 'daniella', 'stefany', 'lucy', 'barak', 'emilio']
console.log(updatedList3); 