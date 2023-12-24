let scaleFactor = 1; // Step 1

// Add your query for the sign now button here
let signNowButton = document.getElementById("sign-now-button");

// Select the modal image
const modalImage = document.getElementById("modal-image"); // Step 2

// Function to scale the image
const scaleImage = () => {
  scaleFactor = scaleFactor === 1 ? 0.8 : 1; // Step 3
  modalImage.style.transform = `scale(${scaleFactor})`; // Step 3
};

// Function to toggle the modal
const toggleModal = (person) => {
  const modal = document.getElementById("thanks-modal");
  const modalContent = document.getElementById("modal-text-container");

  modal.style.display = "flex";
  modalContent.textContent = `Thank you so much ${person.name}!`;

  let intervalId = setInterval(scaleImage, 500); // Step 4

  setTimeout(() => {
    clearInterval(intervalId); // Step 5
    modal.style.display = "none";
  }, 4000);
};

// Function to add a signature
const addSignature = (person) => {
  var name = person.name;
  var hometown = person.hometown;
  var email = person.email;

  var newSignature = document.createElement("p");
  newSignature.textContent =
    "🖊️ " + name + " from " + hometown + " supports this.";

  var signaturesSection = document.querySelector(".signatures");
  signaturesSection.appendChild(newSignature);

  toggleModal(person);

  document.getElementById("name").value = "";
  document.getElementById("hometown").value = "";
  document.getElementById("email").value = "";
};

// Function to validate the form
const validateForm = () => {
  let containsErrors = false;
  var petitionInputs = document.getElementById("sign-petition").elements;

  let person = {
    name: petitionInputs[0].value,
    hometown: petitionInputs[1].value,
    email: petitionInputs[2].value,
  };

  for (let i = 0; i < petitionInputs.length; i++) {
    if (person[Object.keys(person)[i]].length < 2) {
      containsErrors = true;
      petitionInputs[i].classList.add("error");
    } else {
      petitionInputs[i].classList.remove("error");
    }
  }

  if (!person.email.includes(".com")) {
    containsErrors = true;
    document.getElementById("email").classList.add("error");
  } else {
    document.getElementById("email").classList.remove("error");
  }

  if (!containsErrors) {
    addSignature(person);
    for (let i = 0; i < petitionInputs.length; i++) {
      petitionInputs[i].value = "";
    }
  }
};

signNowButton.addEventListener("click", validateForm);

let animation = {
  revealDistance: 100, // Adjust this value to control when the animation activates
  initalOpacity: 0,
  transitionDelay: 0,
  transitionDuration: "2s",
  transitionProperty: "all",
  transitionTimingFunction: "ease",
};

let revealableContainers = document.querySelectorAll(".revealable");
let reveal = () => {
  for (let i = 0; i < revealableContainers.length; i++) {
    let windowHeight = window.innerHeight;
    let topOfRevealableContainer =
      revealableContainers[i].getBoundingClientRect().top;
    if (topOfRevealableContainer < windowHeight - animation.revealDistance) {
      revealableContainers[i].classList.add("active");
    } else {
      revealableContainers[i].classList.remove("active");
    }
  }
};

window.addEventListener("scroll", reveal);

// Link JS

// TODO: Query for buttons with the class "header-button"
let exploreImpactButton = document.querySelector(
  ".header-button:nth-of-type(1)"
); // Assuming the first button is for Explore Impact
let signPetitionButton = document.querySelector(
  ".header-button:nth-of-type(2)"
); // Assuming the second button is for Sign Petition

// TODO: Define functions for button clicks
const exploreImpactClick = () => {
  // Scroll to the "impact" section
  document.getElementById("impact").scrollIntoView({ behavior: "smooth" });
};

const signPetitionClick = () => {
  // Scroll to the "petition" section
  document.getElementById("petition").scrollIntoView({ behavior: "smooth" });
};

// TODO: Register 'click' event listeners for the buttons
exploreImpactButton.addEventListener("click", exploreImpactClick);
signPetitionButton.addEventListener("click", signPetitionClick);

// In your JavaScript file or script tag
document.addEventListener("DOMContentLoaded", function () {
  // Get the title element
  const titleElement = document.getElementById("typewriter-title");

  // Set the initial content of the title
  const originalText = "Break the Scroll";
  titleElement.textContent = "";

  // Function to simulate the typewriter effect
  const typeWriter = (text, index) => {
    if (index < text.length) {
      titleElement.textContent += text.charAt(index);
      index++;
      setTimeout(() => typeWriter(text, index), 100); // Adjust the typing speed (milliseconds)
    }
  };

  // Trigger the typewriter effect
  typeWriter(originalText, 0);
});

// Add this to your index.js or in a <script> tag at the end of your HTML body

document.addEventListener("DOMContentLoaded", function () {
  var lastScrollTop = 0;
  var navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", function () {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Check if the user is scrolling up or down
    if (scrollTop > lastScrollTop) {
      // Scrolling down
      navbar.classList.add("navbar-hidden");
    } else {
      // Scrolling up
      navbar.classList.remove("navbar-hidden");
    }

    lastScrollTop = scrollTop;
  });
});
