let chunkOne = [ 'Lebron', 'Aaliyah', 'Diamond', 'Dominique', 'Aliyah', 'Jazmin', 'Darnell' ];
let chunkTwo = [ 'Lucas', 'Jake', 'Scott', 'Amy', 'Molly', 'Hannah', 'Lucas' ];

const mergeArrays = (firstArray, secondArray) => {
    return [...firstArray, ...secondArray];
    
};
const mergedArrays = mergeArrays(chunkOne, chunkTwo);

console.log(mergeArrays(chunkOne, chunkTwo));
