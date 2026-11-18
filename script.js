function showPicture() {
    const pic = document.getElementById('surprisePicture');
    if (pic.style.display === 'none') {
        pic.style.display = 'block';
    } else {
        pic.style.display = 'none';
    }
}

// My First JavaScript Code
console.log("Hello from JavaScript! 🎉");

// ==========================================
// 📦 LESSON 2: VARIABLES
// ==========================================
let favoriteGame = "Minecraft";
console.log(favoriteGame);

favoriteGame = "Roblox";
console.log(favoriteGame);

let playerName = "BadMonki";
let greeting = "Welcome, " + playerName + "!";
console.log(greeting);

// ==========================================
// 🔁 LESSON 3: FUNCTIONS
// ==========================================
function sayHi() {
    console.log("Hi there! 👋");
}
sayHi();

// ==========================================
// 🤔 LESSON 4: IF / ELSE
// ==========================================
let isHungry = true;
if (isHungry === true) {
    console.log("Time to eat! 🍔");
}

let timeOfDay = "night";
if (timeOfDay === "morning") {
    console.log("Good morning! ☀️");
} else {
    console.log("Good night! 🌙");
}

let score = 85;
if (score >= 90) {
    console.log("Excellent! 🌟");
} else if (score >= 70) {
    console.log("Good job! ✅");
} else {
    console.log("Keep practicing! 💪");
}

let myAge = 24;
if (myAge >= 18) {
    console.log("You're an adult! 🎉");
} else {
    console.log("You're still young! Enjoy it! ✨");
}

let favoriteNumber = 3;
if (favoriteNumber === 7) {
    console.log("7 is lucky! 🍀");
} else if (favoriteNumber === 0) {
    console.log("Zero is cool too! ⭕");
} else {
    console.log("Nice number! 👍");
}

// ==========================================
// 🎨 LESSON 5: CHANGE YOUR PAGE
// ==========================================
const myHeading = document.querySelector("h1");
myHeading.textContent = "BADMonki RULES! 🐵⚡";
myHeading.style.color = "purple";
document.body.style.backgroundColor = "#e6a8d3";

// ==========================================
// 🆕 CREATE A DISPLAY SECTION FOR LESSONS 6-7
// ==========================================
const lessonsZone = document.createElement("div");
lessonsZone.style.margin = "50px auto";
lessonsZone.style.padding = "25px";
lessonsZone.style.maxWidth = "450px";
lessonsZone.style.backgroundColor = "rgba(255,255,255,0.85)";
lessonsZone.style.borderRadius = "12px";
lessonsZone.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
document.body.appendChild(lessonsZone);

const zoneTitle = document.createElement("h2");
zoneTitle.textContent = "📚 My JavaScript Zone";
zoneTitle.style.color = "#333";
zoneTitle.style.textAlign = "center";
zoneTitle.style.marginTop = "0";
lessonsZone.appendChild(zoneTitle);

// ==========================================
// 👆 LESSON 6: CLICK & HOVER — ON YOUR PAGE!
// ==========================================
const part6Title = document.createElement("h3");
part6Title.textContent = "👆 Lesson 6: Click Counter";
part6Title.style.color = "#2563eb";
lessonsZone.appendChild(part6Title);

const clickBtn = document.createElement("button");
clickBtn.textContent = "👆 Click Me!";
clickBtn.style.padding = "12px 24px";
clickBtn.style.fontSize = "18px";
clickBtn.style.border = "none";
clickBtn.style.borderRadius = "8px";
clickBtn.style.backgroundColor = "#2563eb";
clickBtn.style.color = "white";
clickBtn.style.cursor = "pointer";
clickBtn.style.width = "100%";
clickBtn.style.marginBottom = "10px";
lessonsZone.appendChild(clickBtn);

const clickText = document.createElement("p");
clickText.textContent = "Button clicked: 0 times";
clickText.style.fontSize = "17px";
clickText.style.textAlign = "center";
lessonsZone.appendChild(clickText);

let clickCount = 0;
clickBtn.addEventListener("click", function() {
    clickCount++;
    clickText.textContent = "✅ Button clicked: " + clickCount + " times!";
});

clickBtn.addEventListener("mouseover", function() {
    clickBtn.style.backgroundColor = "#1d4ed8";
});
clickBtn.addEventListener("mouseout", function() {
    clickBtn.style.backgroundColor = "#2563eb";
});

// ==========================================
// 🔁 LESSON 7: LOOP — YOUR FAVORITES LIST!
// ==========================================
const part7Title = document.createElement("h3");
part7Title.textContent = "🔁 Lesson 7: My Favorites";
part7Title.style.color = "#16a34a";
part7Title.style.marginTop = "30px";
lessonsZone.appendChild(part7Title);

const myFavorites = ["🦍 Gorilla", "🏃 Skiding", "💻 Coding"];

for (let i = 0; i < myFavorites.length; i++) {
    const favItem = document.createElement("p");
    favItem.textContent = "✨ " + myFavorites[i];
    favItem.style.fontSize = "17px";
    favItem.style.padding = "8px 12px";
    favItem.style.backgroundColor = "#f0fdf4";
    favItem.style.borderRadius = "6px";
    favItem.style.margin = "6px 0";
    lessonsZone.appendChild(favItem);
}

// Counting — Console + on-page note
for (let i = 1; i <= 10; i++) {
    console.log("I LOVE FEMBOI! 💻 —", i);
}

const note = document.createElement("p");
note.textContent = "💡 Open Console (F12) to see the counting loop!";
note.style.fontSize = "14px";
note.style.color = "#666";
note.style.fontStyle = "italic";
note.style.marginTop = "20px";
lessonsZone.appendChild(note);

// ==========================================
// 🖱️ YOUR ORIGINAL BUTTON — keep these at the bottom!
// ==========================================
const myButton = document.querySelector("button");

myButton.addEventListener("click", function() {
    alert("You clicked the button! 🎉");
    console.log("Button was clicked! ✅");
});

myButton.addEventListener("mouseover", function() {
    myButton.style.backgroundColor = "purple";
    myButton.style.color = "white";
});

myButton.addEventListener("mouseout", function() {
    myButton.style.backgroundColor = "";
    myButton.style.color = "";
});

const mainHeading = document.querySelector("h1");
mainHeading.addEventListener("click", function() {
    alert("You clicked the heading! 🌟");
    mainHeading.style.color = "gold";
});
