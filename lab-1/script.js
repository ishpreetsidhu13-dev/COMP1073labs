// Variables
let petName = "";
let petType = "";
let petAge = 0;

// Arrays
const types = ["dog", "cat", "dragon", "hamster"];
const names = ["Luna", "Max", "Bella", "Charlie", "Daisy", "Buddy"];
// Generate random pet
function generatePet() {
    petName = names[Math.floor(Math.random() * names.length)];
    petType = types[Math.floor(Math.random() * types.length)];
    petAge = Math.floor(Math.random() * 10) + 1;
    
    updateDisplay();
}
// Update display