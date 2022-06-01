/**
 * The while loop represents the game.
 * Each iteration represents a turn of the game
 * where you are given inputs (the heights of the mountains)
 * and where you have to print an output (the index of the mountain to fire on)
 * The inputs you are given are automatically updated according to your last actions.
 **/
// game loop -- THE DESCENT
while (true) {
    //create array variable
    let fireMountain = [];

    for (let i = 0; i < 8; i++) {
        const mountainH = parseInt(readline()); // represents the height of one mountain.
        // push every value of mountain height to fireMountain array
        fireMountain.push(mountainH);
    }

    // get max value of array
    var maxHM = Math.max.apply(this, fireMountain);
    // log or fire index of mountain with max height
    console.log(fireMountain.indexOf(maxHM));     // The index of the mountain to fire on.
}