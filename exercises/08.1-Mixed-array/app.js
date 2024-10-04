let mix = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];
let typesArray = [];

for (let i = 0; i < mix.length; i++) {
    typesArray.push(typeof mix[i]);
}
console.log(typesArray);
// Your code here
