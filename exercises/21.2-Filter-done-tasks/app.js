let names = [
  'Liam', 'Noah', 'Oliver', 'Elijah', 'William',
  'James', 'Benjamin', 'Lucas', 'Henry', 'Alexander',
  'Amelia', 'Charlotte', 'Ava', 'Sophia', 'Isabella',
  'Mia', 'Evelyn', 'Harper', 'Camila', 'Gianna',
  'Samuel', 'Jacob', 'John', 'Luke', 'Matthew'
];

// Function to filter names
function filterByName(array, filterCriteria) {
  return array.filter(function(name) {
    // Check if the name includes the filter criteria (case insensitive)
    return name.toLowerCase().includes(filterCriteria.toLowerCase());
  });
}

// Call the function with the filter criteria
let filteredNames = filterByName(names, 'am');

// Print the filtered names to the console
console.log(filteredNames); 
