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

const decode = (code) => {
    let array = codeToArray(code);
    let arrayMorse = toMorse(array);
    
    let newStr = '';
    arrayMorse.forEach( element => {
        if(element === '*') newStr += ' ';
        else {
            newStr += MORSE_TABLE[element];
        }
        
    })
    
   return newStr;
}

const codeToArray = (code) => {
    let array = [];
    let i = 0;
    let index = 0;
    while( i !== code.length) {
        array[index] = code.slice(i, i + 10);
        index++;
        i += 10;
    }
    return array;
}

const toMorse = (array) => {
    let arrayMorse = new Array(array.length);
    arrayMorse.fill('');
    let temp = '';
    let j = 0;
    let i;
    array.forEach( item => {
        if (item === '**********') {
            arrayMorse[j] += '*';
            j++;
        } else {
            i = 0;
            while( i !== item.length) {
                temp = item.slice(i, i + 2);
        
                if(temp === '10') {
                    arrayMorse [j] += '.';
                }
                if(temp === '11') {
                    arrayMorse [j] += '-';
                }
                i += 2;
            }
            j++; 
        }
    });
    return arrayMorse;
}

module.exports = {
    decode
}