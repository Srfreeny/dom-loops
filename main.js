"use strict";

// const ageCheck = (age) => {
//     if (age < 21) {
//         console.log("No drinks for you!")
//     } else {
//         console.log("PARTAY!!!!")
//     }
// }

// ageCheck(12);
// ageCheck(21);

// const lengthOutput = (strang) => {
//     return strang.length
// }

// console.log(lengthOutput([1,2,3,4,5,6,7]))

// const quoteFinder = (testString) => {
//     return "winter is coming".indexOf(testString)
// }

// console.log(quoteFinder('is'));

const employee = {
    firstName: 'Stephen',
    lastName: 'Freeny',
    role: 'student',
    accountNumber: '1-45678900',
    isManager: false,
    titles: ['Student', 'Mostly Harmless'],
    accolade: {
        title: 'Most Improved',
        dateEarned: '1/2/2020',
        expires: '12/21/2020',
        isCool: true
    }
}

console.log(employee.firstName)
const keyToCheck = 'accolade';

console.log(employee[keyToCheck])
console.log(employee[keyToCheck]['isCool'])

const objectMod = (employeeName) => {
    if (employeeName.firstName[0] === 'S') {
        employeeName.status = 'vip'
    } else {
         employeeName.status = 'peasant'
    }
}

objectMod(employee);
console.log(employee.status);