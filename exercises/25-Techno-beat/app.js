function lyricsGenerator(arr) {
    let lyrics = '';
    let consecutiveOnes = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            lyrics += 'Boom ';
            consecutiveOnes = 0; 
        } else if (arr[i] === 1) {
            lyrics += 'Drop the bass ';
            consecutiveOnes++;

            // Check for three consecutive 1s
            if (consecutiveOnes === 3) {
                lyrics += '!!!Break the bass!!! ';
            }
        }
    }

    return lyrics.trim(); // Return the constructed lyrics, trimmed of extra spaces
}

// Don't change anything below this line
console.log(lyricsGenerator([0, 0, 1, 1, 0, 0, 0])); // Output: "Boom Boom Drop the bass Drop the bass"
console.log(lyricsGenerator([0, 0, 1, 1, 1, 0, 0, 0])); // Output: "Boom Boom Drop the bass Drop the bass Drop the bass !!!Break the bass!!!"
console.log(lyricsGenerator([0, 0, 0])); // Output: "Boom Boom Boom"
console.log(lyricsGenerator([1, 0, 1])); // Output: "Drop the bass Boom Drop the bass"
console.log(lyricsGenerator([1, 1, 1])); 