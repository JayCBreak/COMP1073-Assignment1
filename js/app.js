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
let textToSpeak = ["", "", "", "", ""];

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

/* Event Listeners
-------------------------------------------------- */
// Onclick handler for each button that speaks the text contained in the arrays provided to the chooseAtRandom function
btn1.onclick = function() {
	textToSpeak[0] = chooseAtRandom(["The Turkey", "Mom", "Dad", "The Dog", "My Teacher", "The Elephant", "The Cat"]);
}
btn2.onclick = function() {
	textToSpeak[1] = chooseAtRandom(["sat on", "ate", "danced with", "saw", "doesn't like", "kissed"]);
}
btn3.onclick = function() {
	textToSpeak[2] = chooseAtRandom(["a funny", "a scary", "a goofy", "a slimy", "a barking", "a fat"]);
}
btn4.onclick = function() {
	textToSpeak[3] = chooseAtRandom(["goat", "monkey", "fish", "cow", "frog", "bug", "worm"]);
}
btn5.onclick = function() {
	textToSpeak[4] = chooseAtRandom(["on the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass", "in my shoes"]);
}

// This adds all the 5 options together
btnSubmit.onclick = function () {
	speakNow(textToSpeak.join(" "));
}