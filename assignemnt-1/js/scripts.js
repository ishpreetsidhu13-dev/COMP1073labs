
// Story words
const words = {
    part1: ["The turkey", "The dog", "My teacher", "The elephant"],
    part2: ["sat on", "danced with", "ate", "saw"],
    part3: ["a funny", "a scary", "a goofy", "a slimy"],
    part4: ["monkey", "frog", "bug", "worm"],
    part5: ["on the moon", "in my soup", "on the grass", "in my shoes"]
};

// position
let currentIndex = {
    part1: 0,
    part2: 0,
    part3: 0,
    part4: 0,
    part5: 0
};

const partButtons = [
    document.getElementById("part1"),
    document.getElementById("part2"),
    document.getElementById("part3"),
    document.getElementById("part4"),
    document.getElementById("part5")
];

const showStoryBtn = document.getElementById("showStory");
const randomStoryBtn = document.getElementById("randomStory");
const resetBtn = document.getElementById("reset");
const storyOutput = document.getElementById("storyOutput");

// Array
const partKeys = ["part1", "part2", "part3", "part4", "part5"];

// Cycle
function cycleWord(partKey) {
    const currentPos = currentIndex[partKey];
    const wordList = words[partKey];
    const nextPos = (currentPos + 1) % wordList.length;
    currentIndex[partKey] = nextPos;
    return wordList[nextPos];
}


function buildStory() {
    const storyParts = partKeys.map(key => words[key][currentIndex[key]]);
    return storyParts.join(" ") + ".";
}

// UpdateButton
function updateButtonDisplay(buttonIndex) {
    const key = partKeys[buttonIndex];
    partButtons[buttonIndex].textContent = words[key][currentIndex[key]];
}

// Buttons
function initButtons() {
    partKeys.forEach((key, index) => {
        partButtons[index].textContent = words[key][0];
    });
}


function setupPartButtonHandlers() {
    partButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
            const newWord = cycleWord(partKeys[index]);
            button.textContent = newWord;
        });
    });
}

// currentstory
function showStory() {
    const story = buildStory();
    storyOutput.textContent = story;
    storyOutput.classList.remove("placeholder");
}

// random
function randomStory() {
    partKeys.forEach((key, index) => {
        const randomPos = Math.floor(Math.random() * words[key].length);
        currentIndex[key] = randomPos;
        partButtons[index].textContent = words[key][randomPos];
    });
    showStory();
}

// Reset
function resetStory() {
    partKeys.forEach((key, index) => {
        currentIndex[key] = 0;
        partButtons[index].textContent = words[key][0];
    });
    storyOutput.textContent = "Click here";
    storyOutput.classList.add("placeholder");
}


function init() {
    initButtons();
    setupPartButtonHandlers();
    
    showStoryBtn.addEventListener("click", showStory);
    randomStoryBtn.addEventListener("click", randomStory);
    resetBtn.addEventListener("click", resetStory);
}


init();