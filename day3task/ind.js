
// 1.Do the below programs in anonymous function & IIFE



//Convert all the strings to title caps in a string array
const word = ["hello", "world", "javascript", "programming"];

const titleCaps = word.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());

console.log(titleCaps);

//num of all numbers in an array
const number = [1, 2, 3, 4, 5];

const sum = number.reduce((acc, num) => acc + num, 0);

console.log("Sum:", sum);

//Return all the prime numbers in an array
const num = [2, 3, 4, 5, 6, 7, 8, 9, 10];

const isPr = num => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};

const primes = num.filter(isPr);

console.log(primes);


//Return all the palindromes in an array
const word1 = ["madam", "hello", "racecar", "javascript", "level"];

const isPalindr = str => str === str.split('').reverse().join('');

const palindromes = word1.filter(isPalindr);

console.log(palindr);

//Return median of two sorted arrays of the same size
const nums1 = [1, 3, 5];
const nums2 = [2, 4, 6];

const findMedianSortedArrays = (nums1, nums2) => {
    const merged = nums1.concat(nums2).sort((a, b) => a - b);
    const n = merged.length;
    return n % 2 === 0 ? (merged[n / 2 - 1] + merged[n / 2]) / 2 : merged[Math.floor(n / 2)];
};

console.log("Median:", findMedianSortedArrays(nums1, nums2));

//Remove duplicates from an array
const numbers1 = [1, 2, 2, 3, 4, 4, 5];

const uniqueNumbers = [...new Set(numbers1)];

console.log(uniqueNumbers);

//Rotate an array by k times
const rotateArray = (arr, k) => {
    k = k % arr.length;
    return [...arr.slice(-k), ...arr.slice(0, -k)];
};

const numbers2 = [1, 2, 3, 4, 5];
const k = 2;
const rotatedArray = rotateArray(numbers2, k);

console.log(rotatedArray);


//2.Do the below programs in arrow functions.


//Print odd numbers in an array
const printOddNumbers = arr => arr.filter(number => number % 2 !== 0);

const numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(printOddNumbers(numbers3));

//Convert all the strings to title caps in a string array
const toTitleCaps = arr => arr.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());

const words11 = ["hello", "world", "javascript", "programming"];
console.log(toTitleCaps(words11));


//Sum of all numbers in an array
const sumOfNumbers = arr => arr.reduce((acc, num) => acc + num, 0);

const numbers6 = [1, 2, 3, 4, 5];
console.log(sumOfNumbers(numbers6));


//Return all the prime numbers in an array
const isPrime = num => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};

const getPrimeNumbers = arr => arr.filter(isPrime);

const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(getPrimeNumbers(numbers));

//Return all the palindromes in an array
const isPalindrome = str => str === str.split('').reverse().join('');

const getPalindromes = arr => arr.filter(isPalindrome);

const words = ["madam", "hello", "racecar", "javascript", "level"];
console.log(getPalindromes(words));



const numbers8 = [2,3,47,9,5,3,22,23,27,26];
console.log("odd numbers:");
numbers8.forEach(numbers8 =>{
    if(numbers8 % 2 !==0){
        console.log(numbers8);
    }
});

