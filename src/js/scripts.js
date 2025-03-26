// This is where you should write all JavaScript
// for your project. Remember a few things as you start!
// - Use let or const for all variables
// - Do not use jQuery - use JavaScript instead
// - Do not use onclick - use addEventListener instead
// - Run npm run test regularly to check autograding
// - You'll need to link this file to your HTML :)

console.log("hello world");

const myName = "Caitlyn";
let myAge = 23;

console.log(myAge);

// Find toggling text

const toggledPara = document.querySelector('.show'); /* Looks for first item on the page that uses this selector */
console.log(toggledPara);

// Function that toggles .show off and .hide on
function togglePara() { /*name a new set of instructions*/
    toggledPara.classList.toggle("hide");
    toggledPara.classList.toggle("show");
    console.log("Now you see me, now you don't");
    console.log(toggledPara);
}

// Find button
const toggleButton = document.querySelector('#toggle-control');

// Add event listener
toggleButton.addEventListener("click", togglePara);