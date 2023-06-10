function capFinder (myArr) {
    for (j = 0; j < myArr.length; ++j) {
        capArray[j] = [];
        for (i = 0; i < myArr[j].length; ++i) {
            let currentWord = myArr[j][i];
            let character = currentWord.charAt(0);
            let nextWord;
            let nextChar;
            if (character === character.toUpperCase() && isAlpha(character) === true) {
                while (myArr[j][i+1] != undefined && (myArr[j][i+1].charAt(0) === myArr[j][i+1].charAt(0).toUpperCase() && isAlpha(myArr[j][i+1].charAt(0)) === true)) {
                    nextWord = myArr[j][i+1];
                    nextChar = nextWord.charAt(0);
                    currentWord += ' ' + nextWord;
                    myArr[j].splice((i+1), 1);
                    console.log(currentWord);
                };
                capArray[j].push(currentWord);
            };
        };
    };
    console.log(capArray);
    makeBtns(capArray);
};

function makeBtns (myArr) {
    for (j = 0; j < myArr.length; ++j) {
        for (i = 0; i < myArr[j].length; ++i) {
            const newBtn = document.createElement('button');
            newBtn.className = j;
            newBtn.textContent = myArr[j][i];
            output.appendChild(newBtn);
        };
    };
};

//checks if character is letter, returns false on punctuation, spaces, and numbers
function isAlpha (ch) {
    return /^[A-Z]$/i.test(ch);
  };


function wordsFromSentences (sArray) {
    wordKey = sArray.length;
    for (i = 0; i < sArray.length; ++i) {
        sentences[i] = sArray[i].split(' ');
        console.log(sentences[i]);
    };
    capFinder(sentences);
};
// function sentenceFinder ()

let sentenceArray = [];
let wordArray = [];
let sentences = [];
let capArray = [];
let wordKey;
let idForMe;
// capFinder(wordArray);
// wordArray = formContent.split(' ');
// console.log(wordArray);


const process = document.querySelector('#process');
const btn = process.addEventListener ('click', () => {
    const formContent = document.querySelector('#article').value;
    const modFormContent = formContent.replace(/\n/g, ' ');
    sentenceArray = modFormContent.split('. ');
    wordsFromSentences(sentenceArray);
    console.log(sentenceArray);
});

const output = document.querySelector('.output');
const showSentence = document.querySelector('.show-sentence')
const wordSelect = output.addEventListener('click', (e) => {
    showId = e.target.className;
    console.log(showId);
    showSentence.textContent = sentenceArray[showId];
})