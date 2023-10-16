/*********************************************
 * Assignment 1 - See n' Say Storymaker      *
 * COMP1073 - Client-Side JavaScript         *
 * Oct. 15th 2023                            *
 * Jacob Chotenovsky                         *
 * 200545482                                 *
 *********************************************/
/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak
let synth = window.speechSynthesis;
// Get vars for all the buttons based on their id's
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btnSubmit = document.getElementById("btnSubmit");
let btnRandom = document.getElementById("btnRandom");
let btnReset = document.getElementById("btnReset");
// An array of 5 string elements to hold the whole sentence
let textToSpeak = ["", "", "", "", ""];
// A var to output the current sentence
let outputText = document.getElementById("outputText");

/* Functions
-------------------------------------------------- */
function speakNow(string) {
	// Create a new speech object, attaching the string of text to speak
	let utterThis = new SpeechSynthesisUtterance(string);
	// Actually speak the text
	synth.speak(utterThis);
}

// This function takes an array as a parameter and then randomly reads out one of its strings
// This covers all possible options provided by the array from 0 - arr.length-1
function chooseAtRandom(arr) {
	return arr[Math.floor(Math.random() * (arr.length - 1))];
}

function updateText() {
	outputText.textContent = textToSpeak.join(" ");
}

/* Event Listeners
-------------------------------------------------- */
// Onclick handler for each button that speaks the text contained in the arrays provided to the chooseAtRandom function
btn1.onclick = function() {
	textToSpeak[0] = chooseAtRandom(["The Turkey", "Mom", "Dad", "The Dog", "My Teacher", "The Elephant", "The Cat"]);
	speakNow(textToSpeak[0]);
	updateText();
}
btn2.onclick = function() {
	textToSpeak[1] = chooseAtRandom(["sat on", "ate", "danced with", "saw", "doesn't like", "kissed"]);
	speakNow(textToSpeak[1]);
	updateText();
}
btn3.onclick = function() {
	textToSpeak[2] = chooseAtRandom(["a funny", "a scary", "a goofy", "a slimy", "a barking", "a fat"]);
	speakNow(textToSpeak[2]);
	updateText();
}
btn4.onclick = function() {
	textToSpeak[3] = chooseAtRandom(["goat", "monkey", "fish", "cow", "frog", "bug", "worm"]);
	speakNow(textToSpeak[3]);
	updateText();
}
btn5.onclick = function() {
	textToSpeak[4] = chooseAtRandom(["on the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass", "in my shoes"]);
	speakNow(textToSpeak[4]);
	updateText();
}

// This onclick handler adds all the 5 options together with spaces between each word
// The sentence is then passed into the speakNow() function to be read by text to speech
btnSubmit.onclick = function() {
	updateText();
	speakNow(textToSpeak.join(" "));
}

// This onclick handler randomly generates a sentence and reads it out loud
btnRandom.onclick = function() {
	textToSpeak[0] = chooseAtRandom(["The Turkey", "Mom", "Dad", "The Dog", "My Teacher", "The Elephant", "The Cat"]);
	textToSpeak[1] = chooseAtRandom(["sat on", "ate", "danced with", "saw", "doesn't like", "kissed"]);
	textToSpeak[2] = chooseAtRandom(["a funny", "a scary", "a goofy", "a slimy", "a barking", "a fat"]);
	textToSpeak[3] = chooseAtRandom(["goat", "monkey", "fish", "cow", "frog", "bug", "worm"]);
	textToSpeak[4] = chooseAtRandom(["on the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass", "in my shoes"]);
	updateText();
}

// This onclick handler resets the sentence back to nothing
btnReset.onclick = function() {
	textToSpeak = ["", "", "", "", ""];
	updateText();
}