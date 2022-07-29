const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    
const exprArray = expr.split('')
let arraytens = []

for (let i=0; i<expr.length; i=i+10) {

    arraytens.push(exprArray.slice(i, i+10))}

let array = []
let newArray = []
let array1 = []
let resultingArray = []
let result = []

for (let i=0; i<arraytens.length; i=i+1) {
array[i] = arraytens[i].join('').split(/(.{2})/).filter(O=>O)
newArray[i] = array[i].filter(function(currentValue) {return currentValue !== '00'})
array1[i] = newArray[i].join('')
resultingArray[i] = ((array1[i].replace(/10/gi, '.')).replace(/11/gi, '-'))

for (key in MORSE_TABLE) {
    if (key = resultingArray[i]) {
        result[i]= MORSE_TABLE[key]
    }
}
}
for (let i=0; i< result.length; i++) {
    if (result[i] === undefined) {result[i] = ' '}
    else {result[i] = result[i]}
}
return result.join('')
}

module.exports = {
    decode
}