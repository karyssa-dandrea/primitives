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
