// Store a reference to the <h1> in a variable
const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/front_image.png") {
    myImage.setAttribute("src", "images/mine.png");
  } else {
    myImage.setAttribute("src", "images/front_image.png");
  }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  }
  else{
    localStorage.setItem("name", myName);
    myHeading.textContent = `Welcome to the CP BATTLE Minesweeper, ${myName}`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Welcome to the CP BATTLE Minesweeper, ${storedName}`;
}

myButton.addEventListener("click", () => {
  setUserName();
});