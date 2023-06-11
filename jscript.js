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
            // let wordSplit = myArr[j][i].split(' ');
            // for (i = 0; i < wordSplit.length; ++i) {
            //     if (dateIdentifiers.includes(wordSplit[i])) {
            //         newBtn.className = 'date-btn';
            //     }; 
            // };
            // if (wordSplit.length > 1) {
            //     if (isAlpha(wordSplit[0])) {
            //         for (i = 1; i < wordSplit.length; ++i) {
            //             if (isNumber(wordSplit[i])) {
            //                 newBtn.className = 'place-btn';
            //             } 
            //         }
            //     } else if (isNumber(wordSplit[0])) {
            //         for (i = 1; i < wordSplit.length; ++i) {
            //             if (isAlpha(wordSplit[i])) {
            //                 newBtn.className = 'place-btn';
            //             }
            //         }
            //     } else {
            //         newBtn.className = 'sig-btn';
            //     }
            // } else {
            //     newBtn.className = 'overflow-btn';
            // };
            newBtn.id = j + 'v' + i;
            newBtn.className = btnClass(myArr[j][i]);
            newBtn.classList.add('all-btn');
            output.appendChild(newBtn);
        };
    };
    showBtns();
};

function showBtns() {
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
    // if (boxStatus[0] === true) {
        // sigBox.checked = boxStatus[0];
        // spaceBox.checked = boxStatus[0];
        // dateBox.checked = boxStatus[0];
        // overFlowBox.checked = boxStatus[0];
    // };
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
    // for (i = 0; i < boxStatus.length; ++i) {
    //     let theBox = boxStatus[i];
    //     let theBtns = btnArr[i];
    //     if (theBox = true) {
    //         for (j = 0; j < theBtns.length; ++j) {
    //             theBtns[j].style.display = null;
    //         }
    //     } else {
    //         for (j = 0; j < theBtns.length; ++j) {
    //             theBtns[j].style.display = 'none';
    //         }
    //     }
    // }
};

function btnClass (str) {
    if (dateIdentifiers.includes(str)) {
        return 'date-btn';
    };
    if (!str.includes(' ')) {
        return 'overflow-btn';
    };
    let wordSplit = str.split(' ');
    for (h = 0; h < wordSplit.length; ++h) {
        if (dateIdentifiers.includes(wordSplit[h])) {
            return 'date-btn';
        }; 
    };
    for (k = 0; k < wordSplit.length; ++k) {
        if (isNumber(wordSplit[k]) === true) {
            return 'space-btn';
        };
    };
    return 'sig-btn';
    };
    



function theRemover (myWord) {
    return wordsToExclude.includes(myWord);
}




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
let boxStatus = [];
let wordKey;
let idForMe;
// capFinder(wordArray);
// wordArray = formContent.split(' ');
// console.log(wordArray);


const process = document.querySelector('#process');
const btn = process.addEventListener ('click', () => {
    const formContent = document.querySelector('#article').value;
    //replace line breaks with space, take out quote marks
    const modFormContent = formContent.replace(/\n/g, '. ').replace(/[()“"”]+/g, '');
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


// allBox.addEventListener('change', () => {
//     const allBtns = document.querySelectorAll('.all-btn');
//     sigBox.checked = allBox.checked;
//     dateBox.checked = allBox.checked;
//     spaceBox.checked = allBox.checked;
//     overFlowBox.checked = allBox.checked;
//     checkBoxFun(allBox, allBtns);
// });

// const checkBoxes = document.querySelector('.checkboxes');
// checkBoxes.addEventListener('change', showBtns);

// const sigBox = document.querySelector('#sigbox');
// sigBox.addEventListener('change', () => {
//     const sigBtns = document.querySelectorAll('.sig-btn');
//     checkBoxFun(sigBox, sigBtns);
// });

// const dateBox = document.querySelector('#datebox');
// dateBox.addEventListener('change', () => {
//     const dateBtns = document.querySelectorAll('.date-btn');
//     console.log(dateBox.checked);
//     checkBoxFun(dateBox, dateBtns); 
// });

// const spaceBox = document.querySelector('#spacebox');
// spaceBox.addEventListener('change', () => {
//     const spaceBtns = document.querySelectorAll('.space-btn');
//     checkBoxFun(spaceBox, spaceBtns);
// });

// const overFlowBox = document.querySelector('#overflowbox');
// overFlowBox.addEventListener('change', () => {
//     const overFlowBtns = document.querySelectorAll('.overflow-btn');
//     checkBoxFun(overFlowBox, overFlowBtns);
// });

// function checkBoxFun (box, btns) {
//     if (!box.checked) {
//         allBox.checked = false;
//         for (i = 0; i < btns.length; ++i) {
//             btns[i].style.display = 'none';
//         };
//     } else {
//         for (i = 0; i < btns.length; ++i) {
//             btns[i].style.display = null;
//         };
//     };
// };




//   **NEW CHECKBOX STUFF**


// function checkReader(cbArr) {
//     const allBtns = document.querySelectorAll('.all-btn');
//     const sigBtns = document.querySelectorAll('.sig-btn');
//     const dateBtns = document.querySelectorAll('.date-btn');
//     const spaceBtns = document.querySelectorAll('.space-btn');
//     const overFlowBtns = document.querySelectorAll('.overflow-btn');
//     const cbValArr = [
//         allBtns,
//         sigBtns,
//         dateBtns,
//         spaceBtns,
//         overFlowBtns,
//     ];
//     console.log(cbArr);
//     console.log(cbValArr);
//     for (i = 0; i < cbArr.length; ++i) {
//         if (cbArr[i] = true) {
//             for (j = 0; j < cbValArr[i].length; ++j) {
//                 cbValArr[i][j].style.display = null;
//             } 
//         } else {
//             for (k = 0; k < cbValArr[i].length; ++k) {
//                 cbValArr[i][k].style.display = 'none';
//             }
//         }
//     }
// };

// const dateBox = document.querySelector('#datebox');
// const sigBox = document.querySelector('#sigbox');
// const spaceBox = document.querySelector('#spacebox');
// const overFlowBox = document.querySelector('#overflowbox');
// const allBox = document.querySelector('#allbox');
// const checkBoxes = document.querySelector('.checkboxes');
// let checkBoxArray = [];
// checkBoxes.addEventListener('change', () => {
//     checkBoxArray = [];
//     checkBoxArray[0] = allBox.checked;
//     checkBoxArray[1] = sigBox.checked;
//     checkBoxArray[2] = spaceBox.checked;
//     checkBoxArray[3] = dateBox.checked;
//     checkBoxArray[4] = overFlowBox.checked;
//     checkReader(checkBoxArray);
// });
//reads checkboxes and adjusts buttons accordingly

//     dateBox.checked
//     sigBox.checked = allBox.checked;
//     dateBox.checked = allBox.checked;
//     spaceBox.checked = allBox.checked;
//     overFlowBox.checked = allBox.checked;
//     checkBoxFun(allBox, allBtns);
// });

// function checkBoxFun (box, btns) {
//     if (!box.checked) {
//         allBox.checked = false;
//         for (i = 0; i < btns.length; ++i) {
//             btns[i].style.display = 'none';
//         };
//     } else {
//         for (i = 0; i < btns.length; ++i) {
//             btns[i].style.display = null;
//         };
//     };
// };
