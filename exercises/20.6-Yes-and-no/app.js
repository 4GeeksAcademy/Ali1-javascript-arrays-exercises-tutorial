let booleanArray = [1, 0, 1, 1, 0, 0, 1, 0];

let stringArray = booleanArray.map(function(value) {
    return value === 1 ? 'wiki' : 'woko';
});

console.log(stringArray);