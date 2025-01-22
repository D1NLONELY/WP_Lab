// Function to update the greeting based on the current time
function updateGreeting() {
    const hours = new Date().getHours();
    let greetingMessage = '';

    if (hours >= 5 && hours < 12) {
        greetingMessage = 'Good Morning!';
    } else if (hours >= 12 && hours < 18) {
        greetingMessage = 'Good Afternoon!';
    } else if (hours >= 18 && hours < 21) {
        greetingMessage = 'Good Evening!';
    } else {
        greetingMessage = 'Good Night!';
    }

    // Display greeting in the div with id "greeting"
    document.getElementById('greeting').innerText = greetingMessage;

    // Show a dialog box with the greeting
    alert(greetingMessage);
}

// Function to update the clock every second
function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    const timeString = `${hours}:${minutes}:${seconds}`;

    // Display the time in the div with id "clock"
    document.getElementById('clock').innerText = timeString;
}

// Initialize the greeting and clock
function initializePage() {
    updateGreeting();
    updateClock();
    setInterval(updateClock, 1000);  // Update clock every second
}

// Call the initializePage function when the page loads
window.onload = initializePage;
