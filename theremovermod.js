export const theRemover = function(myArr) {
    let cleanArr = [];
    cleanArr = myArr.filter( ( el ) => !wordsToExclude.includes( el ) );
}

let wordsToExclude = [
    'The',
    'It',
    'However',
    'While',
]

