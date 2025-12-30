🎮 Rock Paper Scissors Game (JavaScript)

A simple and interactive Rock Paper Scissors game built using HTML, CSS, and JavaScript.
This project focuses on understanding core JavaScript concepts by building a real, working mini-game instead of just learning syntax.

📌 Project Overview

This game allows a user to play Rock Paper Scissors against the computer.

The user selects Rock, Paper, or Scissors by clicking an image.

The computer randomly selects its choice.

The result (User Won / CPU Won / Match Draw) is displayed.

CSS animations are used to make the game more interactive.

JavaScript controls all the logic and UI updates.

This project is part of my frontend learning journey and focuses mainly on JavaScript logic and DOM manipulation.

🛠️ Technologies Used

HTML – Structure of the game

CSS – Styling, layout, and animations

JavaScript – Game logic and interactivity

📂 Project Structure
Rock-Paper-Scissors/
│
├── index.html        # Game structure
├── style.css         # Styling and animations
├── script.js         # Game logic
├── images/           # Rock, Paper, Scissors images
└── README.md         # Project documentation

🎯 How the Game Works 

The page loads with default Rock images for both user and CPU.

The user clicks on one option (Rock / Paper / Scissors).

The game starts an animation to simulate thinking.

The computer randomly chooses an option.

JavaScript compares both choices.

The final result is displayed on the screen.

🧠 JavaScript Concepts Used

This project helped me understand and apply the following concepts:

1️⃣ DOM Manipulation

Used querySelector and querySelectorAll to select and update HTML elements dynamically.

Example:

Updating images

Changing result text

Adding and removing CSS classes

2️⃣ Event Handling

Used addEventListener to detect user clicks on game options.

Example:

Running game logic when a user clicks Rock, Paper, or Scissors

3️⃣ Arrays

Used arrays to:

Store CPU image paths

Map user and CPU choices to values (R, P, S)

4️⃣ Objects

Used an object to store all possible game outcomes instead of writing multiple if-else conditions.

This made the logic:

Cleaner

Easier to understand

Easy to maintain

5️⃣ Random Logic

Used Math.random() and Math.floor() to generate random CPU choices.

6️⃣ Asynchronous JavaScript

Used setTimeout() to:

Delay result calculation

Allow animations to run smoothly

Improve user experience

7️⃣ JavaScript + CSS Integration

Used classList.add() and classList.remove() to control CSS animations from JavaScript.

🎨 Features

Interactive UI with animations

Smooth game flow using delays

Clean and readable JavaScript logic

Beginner-friendly structure

Responsive and user-friendly design

🚀 How to Run the Project

Clone the repository:

git clone https://github.com/sabiraS/Rock_paper_scissors/edit/sabiraS


Open the project folder.

Open index.html in your browser.

That’s it — no setup required.

📚 What I Learned

How JavaScript controls HTML and CSS

How small concepts combine to build real applications

How to think logically instead of memorizing code

How to structure code for readability and maintainability

🔮 Future Improvements

Add a score counter

Add a restart/reset button

Improve mobile responsiveness

Add sound effects

🙌 Acknowledgement

This project was built as part of my learning process by practicing and understanding JavaScript concepts through hands-on implementation.
