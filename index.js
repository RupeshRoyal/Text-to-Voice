// function toggleDarkMode() {
//     var body = document.body;
//     body.classList.toggle("dark-mode");
// };

let speech=new SpeechSynthesisUtterance();

    document.querySelector("button").addEventListener("click",()=>{
    speech.text= document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
    });
    