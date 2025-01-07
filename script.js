body {
    font-family: 'Courier New', monospace;
    background-color: #f0f0f0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
}

.tamagotchi-container {
    background-color: #e0e0e0;
    border-radius: 50%;
    width: 300px;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border: 5px solid #000;
}

.screen {
    background-color: #000;
    color: #0f0;
    width: 200px;
    height: 120px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 2px solid #0f0;
    border-radius: 10px;
    margin-bottom: 20px;
}

.pet {
    font-size: 50px;
}

.buttons button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    margin: 5px;
    border-radius: 5px;
    font-size: 18px;
    cursor: pointer;
}

.buttons button:hover {
    background-color: #0056b3;
}
