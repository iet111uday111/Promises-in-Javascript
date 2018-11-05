var calculationPromise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1 + 1)
    }, 1000);
});

var calculationPromise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1 + 2)
    }, 500);
});

function addTwo(value) {
    return value + 2;
};

function printFinalValue(nextValue) {
    console.log('The Final Value is', nextValue);
};

// calculationPromise.then((value) => {
//     return value + 2;
// }).then((nextValue) => {
//     console.log('Final Value',nextValue);  
// })

calculationPromise1
    .then(addTwo)
    .then(addTwo)
    .then(printFinalValue);

calculationPromise2
    .then(addTwo)
    .then(addTwo)
    .then(printFinalValue);