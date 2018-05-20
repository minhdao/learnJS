/**
 * async-await is a way to write cleaner async code
 * async returned a Promise
 * a possible approach:
 *   write promises to do async work
 *   call them promises inside the async function
 *   async function runs all the promises, process and return the result
 * this will make code cleaner since promise chaining is reduced
 */
let calculateSomethingComplex = (number) => {
    return new Promise((resolve, reject) => {
        if (typeof number !== 'number') {
            reject('input must be number');
        }
        setTimeout(() => {
            resolve(number);
        }, number * 1000);
    });
};

// calculateSomethingComplex(1).then((result) => {
//     console.log(result);
// }).catch((error) => {
//     console.log(error);
// });

let calculateManyThingsComplex = async (count) => {
    console.log(`Running complex cal ... `);
    let result = 0;
    for (let i = 0; i < count; i++) {
        result = result + await calculateSomethingComplex(2);
    }
    return result;
};

calculateManyThingsComplex(3).then((result) => {
    console.log(`Completed in ${result} second(s).`);
}).catch((error) => {
    console.log(error);
});

// get puzzle from puzzle.mead.io/puzzle
let wordCounts = 3;
let puzzleAPIs = `http://puzzle.mead.io/puzzle/?wordCount=${wordCounts}`;
// using promise
// let getPuzzle = () => {
//     return fetch(puzzleAPI, {}).then((response) => {
//         if (response.status === 200) {
//             return response.json();
//         }else {
//             throw new Error('Cannot get puzzle');
//         }
//     }).then((data) => {
//         return data;
//     });
// };

// using async/await
let getPuzzleAsync = async () => {
    let response = await fetch(puzzleAPIs, {});
    console.log(puzzleAPIs);
    if (response.status !== 200) {
        throw new Error('cannot get puzzle');
    }
    let data = await response.json();
    return data.puzzle;
};

getPuzzleAsync().then((puzzle) => {
    console.log('found a puzzle', puzzle);
}).catch((error) => {
    console.log(error);
});
