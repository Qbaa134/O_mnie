let hunger = 50;
let happiness = 50;
let cleanliness = 50;
let health = 50;

function updateMessage(msg) {
    document.getElementById('message').innerText = msg;
}

function feed() {
    hunger -= 10;
    if (hunger < 0) hunger = 0;
    updateMessage("You fed your Tamagotchi!");
}

function play() {
    happiness += 10;
    if (happiness > 100) happiness = 100;
    updateMessage("You played with your Tamagotchi!");
}

function clean() {
    cleanliness += 20;
    if (cleanliness > 100) cleanliness = 100;
    updateMessage("You cleaned up!");
}

function heal() {
    health += 10;
    if (health > 100) health = 100;
    updateMessage("You healed your Tamagotchi!");
}

function checkStats() {
    if (hunger > 100) {
        updateMessage("Your Tamagotchi is starving!");
    } else if (happiness < 20) {
        updateMessage("Your Tamagotchi is sad!");
    } else if (cleanliness < 20) {
        updateMessage("Your Tamagotchi is dirty!");
    } else if (health < 20) {
        updateMessage("Your Tamagotchi is sick!");
    }
}

setInterval(() => {
    hunger += 5;
    happiness -= 5;
    cleanliness -= 5;
    health -= 5;

    checkStats();
}, 5000);
