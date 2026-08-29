//Syntax- Statements
// definiton of a variable
var name = "sreeja"
var name = "can "

/* 
document.write allows user to show their text or value on the 
screen
*/
document.write('name: ' + name + "</br>")

let name1 = "mehmet"
document.write('name1: ' + name1 + "</br>")

name1 = "memo111"
document.write('name1: ' + name1 + "</br>")

const PI = 3.14

let isItRaining = true

let surname
document.write('surname: ' + surname + "</br>")

let surname1 = null
document.write('surname1: ' + surname1 + "</br>")

//Operators 

let number1 = 2
let number2 = 4

document.write('-- - - - - -- - - - -- - - -- - - : ' + "</br>")


document.write('number1: ' + number1 + "</br>")
document.write('number2: ' + number2 + "</br>")

document.write('-- - - - - -- - - - -- - - -- - - : ' + "</br>")


let total = number1 + number2
document.write('total: ' + total + "</br>")

let subtractBoth = number2 - number1
document.write('subtractBoth: ' + subtractBoth + "</br>")

let devideBoth = number2 / number1
document.write('devideBoth: ' + devideBoth + "</br>")

let mutiplyBoth = number1 * number2
document.write('mutiplyBoth: ' + mutiplyBoth + "</br>")

let totalName = name + name1
document.write('totalName: ' + totalName + "</br>")

number1++ // number1 = number1 + 1
document.write('number1: ' + number1 + "</br>")

number1-- // number1 = number1 - 1
document.write('number1: ' + number1 + "</br>")


if (number1 == "2") {
    document.write('number1 equals 2 ' + "</br>")
}

if (number1 === "2") {
    document.write('number1 equals 2 . .. . .. 2' + "</br>")
}

if (number1 != 3) {
    document.write('number1 not equals 3 ' + "</br>")
}

if (number1 > 1) {
    document.write('number1 greater than 1' + "</br>")
}

if (number1 >= 2) {
    document.write('number1 is greater than 2 or equals 2' + "</br>")
}

if (number1 < 3) {
    document.write('number1 is less than 3' + "</br>")
}

if (number1 <= 2) {
    document.write('number1 is less than 2 or equals 2' + "</br>")
}


if (number1 == 3) {
    document.write('number1 equals 3 ' + "</br>")
} else {
    document.write('number1 not equals 3 ' + "</br>")
}

if (number1 == 3) {
    document.write('number1 equals 3 ' + "</br>")
} else if (number1 == 2) {
    document.write('number1 equals 2 ' + "</br>")
} else {
    document.write('number1 not equals 3 or 2 ' + "</br>")
}


//Ternary Operator
let myAge = 18

let result = myAge >= 18 ? "can join" : "can't join"

document.write('result: ' + result + "</br>")

//Switch Case

let day = 10

switch (day) {
    case 0:
        document.write('sunday ' + "</br>")
        break;
    case 1:
        document.write('monday ' + "</br>")
        break;
    case 2:
        document.write('tuesday ' + "</br>")
        break;
    case 3:
        document.write('wednesday ' + "</br>")
        break;
    case 4:
        document.write('thursday ' + "</br>")
        break;
    case 5:
        document.write('friday ' + "</br>")
        break;
    case 6:
        document.write('saturday ' + "</br>")
        break;
    default:
        document.write('unknown day ' + "</br>")
        break;
}

//loop
for (let i = 0; i < 10; i++) {
    if (i == 3) {
        continue
    }

    if (i == 7) {
        break
    }
    document.write('i ' + i + "</br>")
}

let counter = 0

while (counter < 5) {
    document.write('counter ' + counter + "</br>")
    counter++
}

let newCounter = 6

do {
    document.write('newCounter ' + newCounter + "</br>")
    newCounter++
} while (newCounter < 5);

let surname2 = "seyhan"
let surname3 = new String("seyhan3")

let nameAndSurname = `hello my name is ${name1} , and surname is ${surname2}`
document.write('nameAndSurname: ' + nameAndSurname + "</br>")


//String Methods
document.write('nameAndSurname length: ' + nameAndSurname.length + "</br>")

let text1= "hello how are u?    gg"
let text2 = "    not too bad, how about u?"

document.write('nameAndSurname length: ' + nameAndSurname.length + "</br>")

let totalText = text1.concat(text2) // text1 + text2
document.write('totalText concat: ' + totalText + "</br>")


let partText = text1.slice(7) //substring
document.write('partText slice: ' + partText + "</br>")

let textWithoutSpace = text1.trim()
document.write('textWithoutSpace trim: ' + textWithoutSpace + "</br>")


let findIt = text1.indexOf("how")
document.write('findIt indexOf: ' + findIt + "</br>")

/* 
let getAText = Number(prompt("your number?"))
console.log(getAText)


write a program that takes two numbers from the user,
adds them together and prints the result to the console

*/

/* 
Write a program that takes two numbers from the user, finds
the langer one, and prints it to the console
Note: If they are equal, print it to console "They are equal"
*/

/* 

write a program that takes a number from the user. If the number is
zero, print "Zero", if it is positive, print "positive", and 
if it is negative, print "negative"
*/

/* 
... that askas the user for a username and password. If they 
match the username and password u already have, print "welcome"
to the console, otherwise, print "invalid login"
*/

let myNumber = new Number(2837)

let randomNumber = parseInt(Math.random()*100)

document.write('randomNumber: ' + randomNumber + "</br>")
