Random Facts Popup
This project is a simple popup web application that displays random facts from the Useless Facts API. Users can load new facts by clicking a button, which includes a loading animation for a smooth user experience.

Demo

Features
Random Fact Display: Fetches a new random fact on each button click.
Loading Animation: Shows a loading spinner within the button while fetching data.
Error Handling: Displays an error message if the fact cannot be loaded.
Keyboard Shortcut: Press the Spacebar to load a new fact.
Animations: Hover effects and smooth transitions for the fact box.
Getting Started
Prerequisites
Basic HTML, CSS, and JavaScript knowledge.
Internet connection to access the Useless Facts API.
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/random-facts-popup.git
Navigate to the project directory:

bash
Copy code
cd random-facts-popup
Open the popup.html file in your browser: Open popup.html to run the app directly.

Project Structure
bash
Copy code
.
├── popup.html       # Main HTML file for the popup UI
├── popup.css        # CSS file for styling the popup
├── popup.js         # JavaScript file with the logic for fetching and displaying facts
└── README.md        # Project documentation
Usage
Open popup.html in a browser to start the popup.
The app loads a random fact initially. Click the Get New Fact button to load another fact.
Observe a loading spinner in the button during fetching, along with hover animations for the fact box.
Press the Spacebar as a shortcut to load a new fact.
Code Overview
popup.js
Main Functionality: Fetches a random fact from the Useless Facts API and displays it in the factText element.
Error Handling: Shows an error message if the API call fails.
Loading Animation: The button shows a loading spinner and is disabled during the API call.
Event Listeners:
Button click for loading new facts.
Spacebar keydown for loading facts using the keyboard.
Hover effect for the fact container.
popup.css
Button Styles: Styling for the loading spinner inside the button.
Animations: Transition effects for the fact box and button click.
API
This project uses the Useless Facts API to fetch random facts.
