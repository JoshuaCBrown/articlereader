let wordsToExclude = [
    'The',
    'It',
    'However',
    'While',
    'On',
    'These',
    'That',
    'Although',
    'This',
    'It\'s',
    'Those',
    'Without',
    'Overall',
    'When',
    'Where',
    'What',
    'Who',
    'If',
    'Whenever',
    'Whoever',
    'Wherever',
    'Therefore',
    'There',
    'In',
];

let dateIdentifiers = [
    'Monday',
    'Mon',
    'Tuesday',
    'Tues',
    'Wednesday',
    'Wed',
    'Thursday',
    'Thurs',
    'Friday',
    'Fri',
    'Saturday',
    'Sat',
    'Sunday',
    'Sun',
    'January',
    'Jan',
    'February',
    'Feb',
    'March',
    'Mar',
    'April',
    'Apr',
    'May',
    'June',
    'Jun',
    'July',
    'Jul',
    'August',
    'Aug',
    'September',
    'Sep',
    'October',
    'Oct',
    'November',
    'Nov',
    'December',
    'Dec',
    '2020',
    '2021',
    '2022',
    '2023',
    '2024',
    '2025',
    '2026',
    '2027',
    '2028',
    '2029',
    '2030',
];

let spaceIdentifiers = [
    'Road',
    'Parkway',
    'Interstate',
    'Street',
    'S',
    'N',
    'W',
    'E',
    'NW',
    'NE',
    'SW',
    'SE',
    'South',
    'North',
    'East',
    'West',
    'Northwest',
    'Northeast',
    'Southwest',
    'Southeast',
    'Rd',
    'Drive',
    'Dr',
    'Pkwy',
    'Alabama',
    'AL',
    'Alaska',
    'AK',
    'Arizona',
    'AZ',
    'Arkansas',
    'AR',
    'California',
    'CA',
    'Colorado',
    'CO',
    'Connecticut',
    'CT',
    'Delaware',
    'DE',
    'Florida',
    'FL',
    'Georgia',
    'GA',
    'Hawaii',
    'HI',
]

sigIdentifiers = [
    'Construction',
    'Development',
    'Developers',
    'Builders',
    'Inc',
    'Incorporated',
    'LLC',
    'Incorporated',
    'Contractors',
    'Constructors',
    'Group',
    'Capital',
    'Co',
    'Company',
    'Developer',
];

function capFinder (myArr) {
    for (j = 0; j < myArr.length; ++j) {
        capArray[j] = [];
        for (i = 0; i < myArr[j].length; ++i) {
            let currentWord = myArr[j][i].replace(/,/g, '');
            let character = currentWord.charAt(0);
            let nextWord;
            let nextChar;
            if (isNumber(currentWord) === true || (character === character.toUpperCase() && isAlpha(character) === true)) {
                while (myArr[j][i+1] != undefined && (isNumber(myArr[j][i+1]) === true || (myArr[j][i+1].charAt(0) === myArr[j][i+1].charAt(0).toUpperCase() && isAlpha(myArr[j][i+1].charAt(0)) === true))) {
                    nextWord = myArr[j][i+1].replace(/,/g, '');
                    nextChar = nextWord.charAt(0);
                    currentWord += ' ' + nextWord;
                    myArr[j].splice((i+1), 1);
                    console.log(currentWord);
                };
                if (!theRemover(currentWord) && !isNumber(currentWord)) {
                    capArray[j].push(currentWord);
                };
            };
        };
    };
    console.log(capArray);
    makeBtns(capArray);
};

function isNumber(str) {
    console.log(/^\d+$/.test(str));
    return /^\d+$/.test(str);
};

function makeBtns (myArr) {
    for (j = 0; j < myArr.length; ++j) {
        for (i = 0; i < myArr[j].length; ++i) {
            const newBtn = document.createElement('button');
            newBtn.textContent = myArr[j][i];
            newBtn.id = j + 'v' + i;
            newBtn.className = btnClass(myArr[j][i]);
            newBtn.classList.add('all-btn');
            output.appendChild(newBtn);
        };
    };
    showBtns();
};

function showBtns() {
    let btnText;
    console.log('fuck');
    const allBtns = document.querySelectorAll('.all-btn');
    const sigBtns = document.querySelectorAll('.sig-btn');
    const dateBtns = document.querySelectorAll('.date-btn');
    const spaceBtns = document.querySelectorAll('.space-btn');
    const overFlowBtns = document.querySelectorAll('.overflow-btn');
    const btnArr = [
        allBtns,
        sigBtns,
        dateBtns,
        spaceBtns,
        overFlowBtns
    ]
    const boxStatus = [
        allBox.checked,
        sigBox.checked,
        dateBox.checked,
        spaceBox.checked,
        overFlowBox.checked,
    ];
    for (j = 1; j < btnArr.length; ++j) {
        if (boxStatus[j] != true) {
            for (i = 0; i < btnArr[j].length; ++i) {
                btnArr[j][i].style.display = 'none';
            };
        allBox.checked = false;
        } else {
            for (k = 0; k <btnArr[j].length; ++k) {
                btnArr[j][k].style.display = null;
            }
        }
    };
    btnText = allBtns[0].textContent + ' ';
    for (i = 1; i < allBtns.length; ++i) {
        btnText += (' ' + allBtns[i].textContent);
    };
    btnWords = btnText.split(' ').filter( Boolean );
    buttonWordCount.textContent = btnWords.length + ' words';
    return;
};

function btnClass(str) {
    if (dateIdentifiers.includes(str)) {
        return 'date-btn';
    };
    if (!str.includes(' ')) {
        return 'overflow-btn';
    };
    let wordSplit = str.split(' ');
    for (h = 0; h < wordSplit.length; ++h) {
        console.log(wordSplit[h]);
        if (dateIdentifiers.includes(wordSplit[h])) {
            return 'date-btn';
        }; 
    };
    for (k = 0; k < wordSplit.length; ++k) {
        if (isNumber(wordSplit[k]) === true) {
            return 'space-btn';
        };
    };
    for (l = 0; l < wordSplit.length; ++l) {
        console.log(wordSplit[l]);
        if (sigIdentifiers.includes(wordSplit[l]) === true) {
            console.log(wordSplit[l]);
            return 'likely';
        };
    };
    return 'sig-button';
};



function theRemover (myWord) {
    return wordsToExclude.includes(myWord);
}




//checks if character is letter, returns false on punctuation, spaces, and numbers
function isAlpha (ch) {
    return /^[A-Z]$/i.test(ch);
  };


function wordsFromSentences(sArray) {
    wordKey = sArray.length;
    for (i = 0; i < sArray.length; ++i) {
        sentences[i] = sArray[i].split(' ');
        console.log(sentences[i]);
    };
    capFinder(sentences);
};

function clearAll() {
    sentenceArray = [];
    wordArray = [];
    sentences = [];
    capArray = [];
    boxStatus = [];
    let allOldBtns = document.querySelectorAll('.all-btn');
    for (i = 0; i < allOldBtns.length; ++i) {
        output.removeChild(allOldBtns[i]);
    };
    allOldBtns = [];
    return;
}




// function sentenceFinder ()

let sentenceArray = [];
let wordArray = [];
let sentences = [];
let capArray = [];
let boxStatus = [];
let wordKey;
let idForMe;
// capFinder(wordArray);
// wordArray = formContent.split(' ');
// console.log(wordArray);


const process = document.querySelector('#process');
const btn = process.addEventListener ('click', () => {
    const formContent = myArticle.value;
    //replace line breaks with space, take out quote marks
    const modFormContent = formContent.replace(/\n/g, '. ').replace(/[()“"”]+/g, '');
    const allTheWords = modFormContent.split(' ');
    clearAll();
    wordCount.textContent = allTheWords.length + ' words';
    sentenceArray = modFormContent.split('. ');
    wordsFromSentences(sentenceArray);
    console.log(sentenceArray);
});

const output = document.querySelector('.output');
const showSentence = document.querySelector('.show-sentence')
const wordSelect = output.addEventListener('click', (e) => {
    getId = e.target.id;
    showId = getId.split('v')[0];
    showSentence.textContent = sentenceArray[showId];
});

const dateBox = document.querySelector('#datebox');
const sigBox = document.querySelector('#sigbox');
const spaceBox = document.querySelector('#spacebox');
const overFlowBox = document.querySelector('#overflowbox');
const allBox = document.querySelector('#allbox');
sigBox.checked = true;

allBox.addEventListener('change', () => {
    sigBox.checked = allBox.checked;
    dateBox.checked = allBox.checked;
    spaceBox.checked = allBox.checked;
    overFlowBox.checked = allBox.checked;
    showBtns();
});

sigBox.addEventListener('change', showBtns);
dateBox.addEventListener('change', showBtns);
spaceBox.addEventListener('change', showBtns);
overFlowBox.addEventListener('change', showBtns);

const wordCount = document.querySelector('.wordcounter');
const buttonWordCount = document.querySelector('.buttoncounter');

const myArticle = document.querySelector('#article');
myArticle.addEventListener('click', (e) => {
    e.target.select();
})