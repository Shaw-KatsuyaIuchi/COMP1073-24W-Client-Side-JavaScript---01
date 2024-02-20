const speakButton = document.querySelector("#speakButton");

const noun1 = ['Elephant', 'Rainbow', 'Bicycle', 'Ocean','Telescope'];
const verb = ['jump', 'whisper', 'explore', 'laugh','construct'];
const adjective = ['a sizzling', 'a cozy', 'an enchanting', 'a radiant','a melodic'];
const noun2 = ['mountain', 'symphony', 'cake', 'quilt','lemonade'];
const preposition = ['under the tree', 'beside the river', 'in a cave', 'on the rooftop','between the mountains'];

const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');

let index1 = 0;
let index2 = 0;
let index3 = 0;
let index4 = 0;
let index5 = 0;

let word1 = '';
let word2 = '';
let word3 = '';
let word4 = '';
let word5 = '';

speakButton.addEventListener("click", () => {
  let textToSpeak = new SpeechSynthesisUtterance();
  textToSpeak.text = word1 + ' ' + word2 + ' ' + word3 + ' ' + word4 + ' ' + word5;
  speechSynthesis.speak(textToSpeak);
});

btn1.addEventListener('click', () => {
  word1 = noun1[index1];
  let wordToSpeak1 = new SpeechSynthesisUtterance();
  wordToSpeak1.text = noun1[index1];
  speechSynthesis.speak(wordToSpeak1);

  index1 = (index1 + 1) % 5;
});

btn2.addEventListener('click', () => {
    word2 = verb[index2];
    let wordToSpeak2 = new SpeechSynthesisUtterance();
    wordToSpeak2.text = verb[index2];
    speechSynthesis.speak(wordToSpeak2);
  
    index2 = (index2 + 1) % 5;
});

btn3.addEventListener('click', () => {
  word3 = adjective[index3];
  let wordToSpeak3 = new SpeechSynthesisUtterance();
  wordToSpeak3.text = adjective[index3];
  speechSynthesis.speak(wordToSpeak3);

  index3 = (index3 + 1) % 5;
});

btn4.addEventListener('click', () => {
    word4 = noun2[index4];
    let wordToSpeak4 = new SpeechSynthesisUtterance();
    wordToSpeak4.text = noun2[index4];
    speechSynthesis.speak(wordToSpeak4);

    index4 = (index4 + 1) % 5;
  });
  

btn5.addEventListener('click', () => {
    word5 = preposition[index5];
    let wordToSpeak5 = new SpeechSynthesisUtterance();
    wordToSpeak5.text = preposition[index5];
    speechSynthesis.speak(wordToSpeak5);

    index5 = (index5 + 1) % 5;
});