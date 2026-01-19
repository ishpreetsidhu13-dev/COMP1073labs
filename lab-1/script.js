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
function updateDisplay() {
    let description = "This is " + petName + ", your adorable " + petAge + " year old " + petType + ". " + petName + " is a cutest pet!";
    
    document.getElementById("pet-profile").textContent = description;
    document.getElementById("name-input").value = petName;
}

// Event listeners
document.getElementById("generate-btn").addEventListener("click", generatePet);

document.getElementById("name-input").addEventListener("input", function() {
    petName = this.value;
    updateDisplay();
});

document.getElementById("age-up").addEventListener("click", function() {
    petAge = petAge + 1;
    updateDisplay();
});

document.getElementById("age-down").addEventListener("click", function() {
    if (petAge > 0) {
        petAge = petAge - 1;
    }
    updateDisplay();
});

// Start with random pet
generatePet();
