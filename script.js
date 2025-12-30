// Selecting the main game container
const gameContainer = document.querySelector(".container");

// Selecting the image where user's choice will be shown
const userResult = document.querySelector(".user_result img");

// Selecting the image where CPU's choice will be shown
const cpuResult = document.querySelector(".cpu_result img");

// Selecting the text area where result (User Won / CPU Won / Draw) will appear
const result = document.querySelector(".result");

// Selecting all option images (Rock, Paper, Scissors)
const optionImages = document.querySelectorAll(".option_image img");

// Loop through each option image
optionImages.forEach((image, index) => {

  // Adding click event to each option image
  image.addEventListener("click", () => {

    // Remove 'active' class from all option images
    optionImages.forEach(img => img.classList.remove("active"));

    // Add 'active' class to the clicked image
    image.classList.add("active");

    userResult.src= cpuResult.src ="./images/Screenshot 2025-12-28 145126.png";
    result.textContent="wait...!!"

    // Add animation class to the game container
    gameContainer.classList.add("start");

    // Delay result calculation for animation effect
    let time = setTimeout(() => {

      // Remove animation class after delay
      gameContainer.classList.remove("start");

      // Set user's selected image as result image
      userResult.src = image.src;

      // Generate a random number between 0 and 2 for CPU choice
      const randomNumber = Math.floor(Math.random() * 3);

      // Create an array containing CPU image paths
      let cpuImages = [
        "./images/Screenshot 2025-12-28 145126.png", // Rock
        "./images/paper.png",                       // Paper
        "./images/scissor.png"                      // Scissors
      ];

      // Set CPU result image using random number
      cpuResult.src = cpuImages[randomNumber];

      // Assign letter values to CPU choices
      // R = Rock, P = Paper, S = Scissors
      let cpuValue = ["R", "P", "S"][randomNumber];

      // Assign letter value to user's clicked option
      let userValue = ["R", "P", "S"][index];

      // Object containing all possible game outcomes
      let outcomes = {
        RR: "Draw",
        RP: "CPU",
        RS: "User",
        PP: "Draw",
        PR: "User",
        PS: "CPU",
        SS: "Draw",
        SR: "CPU",
        SP: "User",
      };

      // Find the outcome based on user and CPU choices
      let outComeValue = outcomes[userValue + cpuValue];

      // Display the final result
      result.textContent =
        userValue === cpuValue
          ? "Match Draw"
          : `${outComeValue} Won!!`;

      // Log outcome in console for debugging
      console.log(outComeValue);

    }, 2500); // 2.5 seconds delay

  });
});
