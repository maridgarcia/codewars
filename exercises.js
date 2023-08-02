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

// Algoritmo de Verificação de Palíndromo: Receba uma palavra e determine se ela é um palíndromo.
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
    if(checkInputType) {
        return `(${numbersArray.join('').substring(0, 3)}) ${numbersArray.join('').substring(3, 6)}-${numbersArray.join('').substring(6, 10)}`;
    }
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))

/* QuickSort */
const quickSort = (arr) => {
    let pivot = arr[0];
    let left = [];
    let right = [];

    if(arr.length <= 1) return arr;

    for(let i = 0; i < arr.length; i+=1) {
        if(arr[i] < pivot) left.push(arr[i]);

        if(arr[i] > pivot) right.push(arr[i]);
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}

/* Binary Search */
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

/*The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

Input
Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

Output
Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

Example
input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]*/

const openOrSenior = (data) => {
    return data.map(([age, handicap]) => age >= 55 && handicap > 7 ? "Senior" : "Open");
}

/* The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false. */

const generateHashtag = (str) => {
    let upperCasingStr = str.replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
        return index === 0 ? word.toUpperCase() : word.toUpperCase();
      }).replace(/\s+/g, '');
    
    if(upperCasingStr.length > 140 || !upperCasingStr || !str) {
        return false;
    }
    return `#${upperCasingStr}`;
}

/*Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet"*/

const domainName = (url) => {
  let domain = url.replace(/^(https?:\/\/)?/, '');
  
  domain = domain.replace(/^www\./, '');

  const regex = /^([a-z0-9-]+)\.[a-z]{2,}/;
  const match = domain.match(regex);
  
  if(match) {
    return match[1]
  }
}

/*Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.

The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

Examples:
toWeirdCase( "String" );//=> returns "StRiNg"
toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"*/


