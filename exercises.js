/* Function to break text in two lines if the text has more than 38 characters. 
The first line must have 38 characters and the second one 35 + '...'.*/
function breakText(text) {
  if(text.length <= 38) return text;

  if(text.length > 38) {
    const firstLine = text.substring(0, 38);
    let secondLine = text.substring(38, 73);

    if(secondLine.length >= 32) {
      secondLine = secondLine.substring(0, 35) + "...";
    }
    return `${firstLine}\n${secondLine}`;
  }
}

/* Write a JavaScript program to display the current day and time in the following format.
Sample Output : Today is : Tuesday.
Current time is : 10 PM : 30 : 38
*/
function currentDayAndTime() {
  const weekDays = [
    {day: 'Monday', dayNumber: 1},
    {day: 'Tuesday', dayNumber: 2},
    {day: 'Wednesday', dayNumber: 3},
    {day: 'Thursday', dayNumber: 4},
    {day: 'Friday', dayNumber: 5},
    {day: 'Saturday', dayNumber: 6},
    {day: 'Sunday', dayNumber: 7}
  ]
  const date = new Date();
  const today = date.getDay();
  const currentTime = `${date.getHours()} PM : ${date.getMinutes()} : ${date.getSeconds()}`;

  weekDays.forEach((i) => {
    if(today == i.dayNumber) {
        console.log(`Today is : ${i.day}.\nCurrent time is : ${currentTime}`);
    }
  })
}

/*Algoritmo de Verificação de Primo: Receba um número e determine se ele é primo ou não.*/
const isItPrimeNumber = (number) => {
    if (number === 1) return `1 não é primo nem composto`;

    if (number > 1) {
        if (number % number === 0) {
            return `${number} é primo`;
        } else {
            return `${number} não é primo`;
        }
    }
}

/* Algoritmo de Busca Binária: Receba uma lista ordenada e um elemento alvo e determine se o elemento está presente na lista, utilizando o algoritmo de busca binária.*/
const binarySearch = (array, elem) => {
    // o primeiro elemento deve ser menor que o último elemento
    let primeiroElemento = array[0];
    let ultimoElemento = array.length - 1;

    // checar se o primeiro indice é igual ao elemento procurado
    if(primeiroElemento === elem) return `${elem} encontrado!`;
    
    // enquanto primeiro indice for menor que o ultimo indice, iniciar a busca - em três partes
    while(primeiroElemento <= ultimoElemento) {
        // 1. encontrar a metade do array
        let meio = Math.floor((primeiroElemento + ultimoElemento) / 2);
        
        // 2. se o valor da metade do array for igual o elmento, retornar
        if(array[meio] === elem) {
            return `${elem} encontrado!`
        // 3. se não: a)buscar pela direita
        } else if(array[meio] < elem) {
            primeiroElemento = meio + 1;
        // b)buscar pela esquerda
        } else if(array[meio] > elem) {
            ultimoElemento = meio - 1;
        }
    }
    // se elemento procurado não existir na lista, retornar falsy
    return `Elemento não existe na lista`;
}

// Algoritmo de Verificação de Palíndromo: Receba uma palavra ou frase e determine se ela é um palíndromo.
const isPalindrome = (word) => {
    let wordToArray = word.split("");
    let reverseWordArray = wordToArray.reverse();
    let wordReversedToString = reverseWordArray.join("");

    if(wordReversedToString === word) {
       return `${word} is a palidrome!`;
    } else { 
       return `${word} is not a palidrome :(`;
    }
}


// Algoritmo de Cálculo de Média: Receba uma lista de números e calcule a média deles.
const calculateAvarage = (numbers) => numbers.reduce((acc, curr) => acc + curr, 0) / numbers.length;


/* Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms. In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell). */
const DNAStrand = (dna) => {
    let convert = '';

    for(let i = 0; i < dna.length; i ++) {
        if(dna[i] === 'A') {
            convert += 'T';
        } else if(dna[i] === 'T') {
            convert += 'A';
        } else if(dna[i] === 'C') {
            convert += 'G';
        }  else if(dna[i] === 'G') {
            convert += 'C';
        }
    }
    return convert;
}

/* Write a function that returns both the minimum and maximum number of the given list/array. */
const minMax = (arr) => [arr.sort((a, b) => a - b)[0], +arr.slice(-1)];

/* In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

The string has a length greater or equal to one and contains only letters from a to z.

Examples:
s="aaabbbbhaijjjm"
printer_error(s) => "0/14"

s="aaaxbbbbyyhwawiwjjjwwm"
printer_error(s) => "8/22" */

const printerError = (s) => {
    if(s.length <=1) return;

    const errorCodes = ['n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let errorCounter = 0;

    for(let index in s) {
        if(errorCodes.includes(s[index])) {
            errorCounter += 1;
        }
    }
    return `${errorCounter}/${s.length}`;
}

/* accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt" */

const accum = (str) => {
    let result = '';
    
    for(let i = 0; i < str.length; i += 1) {
        result += str[i].toUpperCase() + str[i].repeat(i).toLowerCase();
        if(i < str.length - 1) {
            result += '-';
        }
    }
    return result;
}

/* Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number. 
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"*/
const createPhoneNumber = (numbersArray) => {
    let checkInputType = numbersArray.every((number) => typeof number === 'number');
    let phoneNumber = `(${numbersArray.join('').substring(0, 3)}) ${numbersArray.join('').substring(3, 6)}-${numbersArray.join('').substring(6, 10)}`;
    if(checkInputType) {
        return phoneNumber;
    }
}

