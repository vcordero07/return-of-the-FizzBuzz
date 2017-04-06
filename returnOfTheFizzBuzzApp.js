// your code here
//04/05/17
const strFizzBuzz = 'fizzbuzz';
const strBuzz = 'buzz';
const strFizz = 'fizz';


let getInputValue = () => {
    return $('#number-choice').val();
};

let getRange = num => {
    console.log(num);
    //   let range = [];
    //   for(let i = 1; i <= num; i++ ) {
    //     range.push(i);
    //   }
    //   console.log(range);
    return new Array(num).fill(0).map((el, ind) => ind + 1);
};

// let getFizzBuzzRange = arr => {
//
//     return arr.map((el, ind) => {
//         if (el % 15 === 0) {
//             return "fizzbuzz";
//         } else if (el % 5 === 0) {
//             return "buzz";
//         } else if (el % 3 === 0) {
//             return "fizz";
//         } else {
//             return el;
//         }
//     });
// };
//
// let pushFizzBuzzHTML = arr => {
//     return arr.map((el, ind) => {
//
//         //first I used .html() instead of .append() but html was just placing the last item
//         if (el === 'fizzbuzz') {
//             return $('.js-results').append(`<div class="fizz-buzz-item fizzbuzz"> <span>${el}</span> </div>`);
//         } else if (el === 'buzz') {
//             return $('.js-results').append(`<div class="fizz-buzz-item buzz"> <span>${el}</span> </div>`);
//         } else if (el === "fizz") {
//             return $('.js-results').append(`<div class="fizz-buzz-item fizz"> <span>${el}</span> </div>`);
//         } else {
//             return $('.js-results').append(`<div class="fizz-buzz-item"> <span>${el}</span> </div>`);
//         }
//     });
// };
//refactor
let getFizzBuzzRange = arr => {

    return arr.map((el, ind) => {
        if (el % 15 === 0) {
            return `<div class="fizz-buzz-item fizzbuzz"> <span>${strFizzBuzz}</span> </div>`;
        } else if (el % 5 === 0) {
            return `<div class="fizz-buzz-item buzz"> <span>${strBuzz}</span> </div>`;
        } else if (el % 3 === 0) {
            return `<div class="fizz-buzz-item fizz"> <span>${strFizz}</span> </div>`;
        } else {
            return `<div class="fizz-buzz-item"> <span>${el}</span> </div>`;
        }

    });
};

let pushFizzBuzzHTML = arr => {
    return $('.js-results').append(arr);
};

$('#number-chooser').on('click', '#btn-submit', event => {
    //I had to clear the div everytime I click the submit button to prevent leaving the previous number results
    $('.js-results').html('');
    let inputValue = Number(getInputValue());
    let range = getRange(inputValue);
    //getFizzBuzzRange return the array with the correct display values
    let fizzBuzzRange = getFizzBuzzRange(range);
    console.log(fizzBuzzRange);
    let pushFizzBuzzResults = pushFizzBuzzHTML(fizzBuzzRange);
    //console.log(pushFizzBuzzResults);
});
