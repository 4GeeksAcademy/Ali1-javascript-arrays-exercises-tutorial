let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
let counts = {};

// Your code here
for (let char of par) {
    if(char !== " ") {
        char = char.toLowerCase();
        if (counts[char]) {
            counts[char]++;
        } else {
            counts[char] = 1;
        }
    }
}
console.log(counts);
