function appendMessage(sender, text) {
  const chatbox = document.getElementById('chatbox');
  const p = document.createElement('p');
  p.innerHTML = `<strong>${sender}:</strong> ${text}`;
  chatbox.appendChild(p);
  chatbox.scrollTop = chatbox.scrollHeight;
}

// Jarvis ka AI logic + voice reply
function jarvisReply(msg) {
  let reply = "Sorry, samajh nahi aaya.";

  const lower = msg.toLowerCase();
  if (lower.includes("hello") || lower.includes("hi")) {
    reply = "Hi, I am Jarvis! 😊";
  } else if (lower.includes("time")) {
    reply = "Abhi ka time hai " + new Date().toLocaleTimeString();
  } else if (lower.includes("kaise ho")) {
    reply = "Main mast hoon! Tu kaisa hai?";
  } else if (lower.includes("bye")) {
    reply = "Bye! Jaldi milte hain.";
  } else if (lower.includes("hello Jarvis")) {
    reply=  "hello Ayaan how are you?";
  } else if (lower.includes('fine how are u')){
    reply= "im also fine how may help you now ";
  } else if( lower.includes("umama kaun hai")){
    reply= "hizruboi hai";
  }

  appendMessage('Jarvis', reply);
  speak(reply); // Jarvis ka jawab awaz me
}

// Text input se bhejna
function sendMessage() {
  const input = document.getElementById('userInput');
  const msg = input.value.trim();
  if (!msg) return;

  appendMessage('You', msg);
  input.value = '';
  setTimeout(() => jarvisReply(msg), 500);
}

// Voice recognition
function startVoice() {
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.lang = 'hi-IN'; // Hindi+English mix ke liye
  recognition.start();

  recognition.onresult = (event) => {
    const voiceMsg = event.results[0][0].transcript;
    appendMessage('You (Voice)', voiceMsg);
    jarvisReply(voiceMsg);
  };

  recognition.onerror = () => {
    appendMessage('Jarvis', "Mic kaam nahi kar raha ya permission deny hui.");
  };
}

// Jarvis ke jawab ko bolne ke liye
function speak(text) {
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = 'hi-IN';
  speechSynthesis.speak(utter);
}
const messagesDiv = document.getElementById('messages');


const responses = {
'hello': 'Hi there! I am Jarvis, your AI assistant.',
'hi': 'Hello! I am Jarvis 😊',
' umama kaun hai': 'hizruboi hai',
'how are you': "I am doing great, thanks for asking!",
'your name': "I am Jarvis, built with HTML, CSS, and JS.",
'hello Jarvis':"hello Ayaan how are you?",
'fine how are u':"im also fine how may help you now ", 
'bye': 'Goodbye! Have a nice day!'
};

function appendMessage(sender, text) {
    const chatbox = document.getElementById("chatbox");
    const msg = document.createElement("div");
    msg.classList.add("message", sender); // user ya bot
    msg.textContent = text;
    chatbox.appendChild(msg);
    chatbox.scrollTop = chatbox.scrollHeight;
}



function sendMessage() {
const input = document.getElementById('userInput');
const userText = input.value.trim();
if (userText === '') return;


appendMessage(userText, 'user');
input.value = '';


setTimeout(() => {
const botReply = getBotResponse(userText.toLowerCase());
appendMessage(botReply, 'bot');
speak(botReply);
}, 500);
}


function getBotResponse(input) {
for (let key in responses) {
if (input.includes(key)) return responses[key];
}
return "Sorry, I don't understand that.";
}


// Voice recognition using Web Speech API
function startVoice() {
const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.lang = 'en-US';
recognition.start();
recognition.onresult = function(event) {
const transcript = event.results[0][0].transcript;
document.getElementById('userInput').value = transcript;
sendMessage();
};
}


// Text-to-speech
function speak(text) {
const synth = window.speechSynthesis;
const utterThis = new SpeechSynthesisUtterance(text);
synth.speak(utterThis);
}
function getBotResponse(input) {
  if (input.includes('time')) {
    const now = new Date();
    return `Abhi ka time hai: ${now.getHours()}:${now.getMinutes().toString().padStart(2,'0')}`;
  }
  for (let key in responses) {
    if (input.includes(key)) return responses[key];
  }
  return "Sorry, I don't understand that.";
}


function sendMessage() {
  const input = document.getElementById('userInput');
  const msg = input.value.trim();
  if (!msg) return;

  appendMessage('You', msg);
  input.value = '';

  // Jarvis ka simple AI logic
  let reply = "Sorry, samajh nahi aaya.";
  const lower = msg.toLowerCase();

  if (lower.includes("hello") || lower.includes("hi")) {
    reply = "Hi, I am Jarvis! 😊";
  } else if (lower.includes("time")) {
    reply = "Abhi ka time: " + new Date().toLocaleTimeString();
  } else if (lower.includes("kaise ho")) {
    reply = "Main badiya hoon, tu sunaa?";
  } else if (lower.includes("bye")) {
    reply = "Bye! Milte hain phir.";
  }

  setTimeout(() => appendMessage('Jarvis', reply), 500);
}

function appendMessage(sender, text) {
  const chatbox = document.getElementById('chatbox');
  const p = document.createElement('p');
  p.innerHTML = `<strong>${sender}:</strong> ${text}`;
  chatbox.appendChild(p);
  chatbox.scrollTop = chatbox.scrollHeight;
}

