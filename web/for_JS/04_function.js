// 1 - Функции

// Function Declaration
// function greet (name) {
//     console.log('Hi, ' + name + '!')
// }
// greet('Lena')

//Function Expression
// const greet2 = function greet2 (name) {
//     console.log('Hi, ' + name + '!')
// }
// greet2('Len')


// console.log(typeof greet)
// console.dir(greet)

// 2 - Анонимные функции
// let counter = 0
// const interval = setInterval(function() {  // setTimeout
//     if (counter === 5){
//         clearInterval(interval)  // clearTimeout
//     } else {
//     console.log(++counter)
//     }
// }, 1000)


// 3 - Стрелочные функции

// function greet (name) {
//     console.log('Hi, ' + name + '!')
// }

// name = 'Evg'
// const arrow = (name) => {
//     console.log(name)
// }
// arrow(name)

// const arrow2 = name => console.log(name)
// arrow2(name)


// const pow2 = num => num ** 2
// console.log(pow2(5))


// 4 - Параметры по умолчанию

// const sum = (a, b = 1) => a + b  // (a = 40, b = a * 2)
// console.log(sum(41, 50)) // (41)

// function sumAll(...all) {
//     let result = 0
//     for (let num of all) {
//         result += num
//     }
//     console.log(result)
// }
// sumAll(1, 4, 2, 4)

// 5 Замыкания

function createMember(name) {
    return function(lastName){
        console.log(name + lastName)
    }
}

const logWithLastName = createMember('Evgeny')
console.log(logWithLastName('Smirnov'))


