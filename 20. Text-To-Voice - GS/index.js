// Create a new SpeechSynthesisUtterance instance, which will handle the text-to-speech functionality
let speech = new SpeechSynthesisUtterance();

// Get the <select> dropdown from the HTML where the voices will be displayed
let voiceSelect = document.querySelector("select");

// Event listener for the "click" event on the button i.e. 1st step
document.querySelector("button").addEventListener("click", () => {
    // Set the text to be spoken to the content entered in the textarea
    speech.text = document.querySelector("textarea").value;

    // Trigger the speech synthesis to speak the text using the selected voice and options
    window.speechSynthesis.speak(speech);
});


// Array to store the available voices on the device
let voices = [];


// Event triggered when the list of available voices changes (usually when they load initially)
window.speechSynthesis.onvoiceschanged = () => {
    // Get and store the list of voices available on the device
    voices = window.speechSynthesis.getVoices();
    console.log(voices)

    
    // Set the default voice to the first voice in the voices array
    speech.voice = voices[0];

    // Populate the dropdown with the list of voices available, means it shows the voices list
    // For each voice, create a new option element in the select dropdown
    voices.forEach((voice, i) => {
        // Set each option's label to the voice name and the value to the index
        voiceSelect.options[i] = new Option(voice.name, i);
    });
};

// Event listener for when the user selects a different voice in the dropdown
voiceSelect.addEventListener("change", () => {
    // Update the speech voice to the one selected by the user, using the index from voiceSelect.value
    speech.voice = voices[voiceSelect.value];
});

