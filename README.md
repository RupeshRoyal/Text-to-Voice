# Text-to-Voice

The idea of the project is to create a Text-to-Voice Converter. Users can enter text into a textarea on a web page, and by clicking a button, the provided text is converted into speech. The speech synthesis functionality is implemented using JavaScript's SpeechSynthesisUtterance and speechSynthesis API. The project combines HTML, CSS, and JavaScript to create a simple web application that allows users to convert text into speech.

Here's a simplified summary of the files:

HTML file:

Contains a heading, a textarea for input, and a button to trigger text-to-voice conversion.
References an external CSS file for styling and an external JavaScript file for functionality.

CSS file:

Sets the background color, text alignment, and font family for the body.
Defines styles for the heading, textarea, conversion button, mode button, and footer.

JavaScript file:

Creates a speech synthesis utterance object.
Adds a click event listener to the button.
When the button is clicked, it assigns the value of the textarea to the speech object's text property.
Triggers speech synthesis to speak the provided text.
The provided summary focuses on the essential elements and functionalities of the files.




