// const name = 'Evgeny'
// const age = 17

// function getAge () {
//     return age
// }

// const output = 'Привет, меня зовут ' + name + ' и мой возраст ' + age + 'лет!'
// const output = `Привет, меня зовут ${name} и мой возраст ${getAge()} лет!`
// const output = `
//     <div>This is DIV</div>
//     <p>this is o</p>
// `

// console.log(output)

// const name = 'Evgeny'
// console.log(name.length)
// console.log(name.toUpperCase())
// console.log(name.toLowerCase())
// console.log(name.charAt(2))
// console.log(name.indexOf('gen'))
// console.log(name.startsWith('E'))
// console.log(name.toUpperCase().startsWith('E'))
// console.log(name.toLowerCase().startsWith('E'))
// console.log(name.endsWith('y'))
// console.log(name.repeat(3))
// const string = '    password     '
// console.log(string)
// console.log(string.trim()) //del space
// console.log(string.trimLeft())
// console.log(string.trimRight())

// !!!!!!!!!!!!!!!!!!


function logPerson(s, name, age) {
    console.log(s, name, age)
    return `${s[0]}${name}${s[1]}${age}${s[2]}`
}

const personName = 'Evgeny'
const age = 17

const output = logPerson`Имя: ${personName}, Возраст: ${age}!`

console.log(output)


// !!!!!!!!!!!!!!!!!!






