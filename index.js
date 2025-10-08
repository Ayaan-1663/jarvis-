// Predefined responses
const responses = {
  "hello": "Hi there! I am Jarvis, your AI assistant.",
  "hi": "Hello! I am Jarvis 😊",
  "umama kaun hai": "hizruboi hai",
  "how are you": "I am doing great, thanks for asking!",
  "your name": "I am Jarvis, built with HTML, CSS, and JS.",
  "hello jarvis": "Hello Ayaan, how are you?",
  "fine how are u": "I am also fine, how may I help you now?",
  "bye": "Goodbye! Have a nice day!"
};
// Function to append messages in chatbox
function appendMessage(sender, text) {
  const chatbox = document.getElementById("chatbox");
  const p = document.createElement("p");
  p.innerHTML = `<strong>${sender}:</strong> ${text}`;
  chatbox.appendChild(p);
  chatbox.scrollTop = chatbox.scrollHeight;
}

// Get bot response based on input
function getBotResponse(input) {
  input = input.toLowerCase();

  // Time response special case
  if (input.includes("time")) {
    const now = new Date();
    return `Abhi ka time hai: ${now.getHours()}:${now.getMinutes().toString().padStart(2, "0")}`;
  }

  // Loop through responses
  for (let key in responses) {
    if (input.includes(key)) {
      return responses[key];
    }
  }

  return "Sorry, samajh nahi aaya.";
}

// Send text message
function sendMessage() {
  const input = document.getElementById("userInput");
  const msg = input.value.trim();
  if (!msg) return;

  appendMessage("You", msg);
  input.value = "";

  const reply = getBotResponse(msg);
  setTimeout(() => {
    appendMessage("Jarvis", reply);
    speak(reply);
  }, 500);
}

// Voice recognition (Speech-to-Text)
function startVoice() {
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.lang = "hi-IN"; // Hindi + English
  recognition.start();

  recognition.onresult = (event) => {
    const voiceMsg = event.results[0][0].transcript;
    appendMessage("You (Voice)", voiceMsg);
    const reply = getBotResponse(voiceMsg);
    appendMessage("Jarvis", reply);
    speak(reply);
  };

  recognition.onerror = () => {
    appendMessage("Jarvis", "Mic kaam nahi kar raha ya permission deny hui.");
  };
}

// Text-to-Speech
function speak(text) {
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = "hi-IN";
  speechSynthesis.speak(utter);
}


