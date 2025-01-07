let hunger = 50;
let happiness = 50;

function feed() {
    if (hunger > 0) {
        hunger -= 10;
        updateStats();
        alert("You fed your Tamagotchi!");
    } else {
        alert("Your Tamagotchi is full!");
    }
}

function play() {
    if (happiness < 100) {
        happiness += 10;
        updateStats();
        alert("Your Tamagotchi is happy!");
    } else {
        alert("Your Tamagotchi is already very happy!");
    }
}

function updateStats() {
    document.getElementById('hunger').textContent = hunger;
    document.getElementById('happiness').textContent = happiness;
}

function decreaseStats() {
    hunger += 5;
    happiness -= 5;

    if (hunger >= 100 || happiness <= 0) {
        alert("Your Tamagotchi has passed away...");
        clearInterval(gameLoop);
    }

    updateStats();
}

const gameLoop = setInterval(decreaseStats, 5000);
