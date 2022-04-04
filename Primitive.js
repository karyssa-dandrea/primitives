const string = 'Josh is super cool';

function reverseWords(sentence) {
  return sentence
    .split(' ')
    .map((word) => {
      return word.split('').reverse().join('');
    })
    .join(' ');
}

//oddish-evenish

const number = 121;

function isEven(number) {
  if (number % 2 === 0) {
    return 'Evenish';
  } else {
    return 'oddish';
  }
}

function oddishOrEvenish(number) {
  // let total = 0
  const string = number
    .toString()
    .split('')
    .map((string) => {
      return Number(string);
    })
    .reduce((previous, current) => previous + current, 0);
  return isEven(string);
}

console.log(oddishOrEvenish(number));

// partner 2 - title Case
function titleCase(sentence) {
  return sentence
    .split(' ')
    .map((word) => {
      return word[0].toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(' ');
}

const newTItle = titleCase('alchemy ROCKS goLD');

//array at
function at(arr, index) {
  if (index > -1) {
    return arr[index];
  } else {
    return arr[arr.length + index];
  }
}

function fizzBuzz(number) {
  const numbersArr = [];
  for (let i = 1; number >= i; i++) {
    numbersArr.push(i);
    if (i % 3 === 0 && i % 5 === 0) {
      numbersArr.pop();
      numbersArr.push('FizzBuzz');
    } else if (i % 3 === 0) {
      numbersArr.pop();
      numbersArr.push('Fizz');
    } else if (i % 5 === 0) {
      numbersArr.pop();
      numbersArr.push('Buzz');
    }
  }
  return numbersArr;
}
fizzBuzz(16);

console.log(fizzBuzz(16));
