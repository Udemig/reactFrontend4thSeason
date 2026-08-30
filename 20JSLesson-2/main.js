"use strict";

/*
x = 453
var eval = "hello"

document.write("x: " + x + "</br>")
*/
//JS Number
let number = 123.234542
let numberInString = number.toString()

let numberWith2Digits = number.toFixed(2)

let numberWith2Digits1 = number.toPrecision(2)


document.write("numberWith2Digits: " + numberWith2Digits + "</br>")

document.write("numberWith2Digits1: " + numberWith2Digits1 + "</br>")

let numberInString1 = "25398"

let numberInNumber = numberInString1.valueOf()

document.write("numberInNumber: " + numberInNumber + "</br>")


//Functions

function sayHello() {
    document.write("hellloooo: " + "</br>")
}

sayHello()


function addThem(a, b) {
    let total = a + b
    document.write("total: " + total + "</br>")
}

addThem(2, 3)

function subtractThem(a, b) {
    let result = a - b
    return result
}

let result1 = subtractThem(4, 2)
document.write("result1: " + result1 + "</br>")

function add2(x, y) {
    let total2 = x + y
    return total2
}

const add1 = (x, y) => {
    let total2 = x + y
    return total2
}

let result3 = add1(3, 4)
document.write("result3: " + result3 + "</br>")

//Timers

setTimeout(() => {

    console.log("hello i am a timer")

}, 3000);


/*
setInterval(() => {

    console.log("setInterval")

}, 1000);
*/

//Object

let car = {
    type: "Volvo",
    model: 2022,
    color: "white",
    run: function () {
        document.write("volvo started to run" + "</br>")
    },
    stop: function () {
        document.write("volvo stoped itself" + "</br>")
    }
}

document.write("car type: " + car.type + "</br>")
car.run()

/* 
Write a js object that includes your family name and number of
family members, Also add two methods called eatFood and drinkWater,
When these methods are called, the should print that the family are food 
or drank water.

Access the properties from outside the object and print them ro the
console. Then, call the methods from outside of the object
and make sure they work

*/

const person = {
    firstname: "memo",
    lastname: "can",
    age: 50,

    wakeUp: function () {
        document.write("Memo is waking up: " + "</br>")

    },

    fullname: function () {
        document.write("firstname:  " + this.firstname + " lastname: " + this.lastname + "</br>")
        this.wakeUp()
    },


}

person.fullname()

for (let x in person) {
    document.write("forlet: " + person[x] + "</br>")
}



const person1 = {
    firstname: "memo",
    lastname: "can",
    age: 50,
}

const myPerson1Array = Object.values(person1)
document.write("myPerson1Array: " + myPerson1Array + "</br>")

for (let [name, value] of Object.entries(person1)) {
    document.write("name: " + name + " value: " + value + "</br>")
}

let person1InText = JSON.stringify(person1)
document.write("person1InText: " + person1InText + "</br>")

document.write("x : " + x + "</br>")

var x = 6436

/*
document.write("a1 : " + a1  + "</br>")
 
let a1 = 532


document.write("b2 : " + b2  + "</br>") //New String

const b2 = 542 // new Number

*/


const date = new Date()

document.write("date: " + date + "</br>")

date.setMonth(10)
document.write("date getMonth: " + date.getMonth() + "</br>")


//Arrays
const carList = ["volvo", "bmw", "mercedes", "togg"] //new Array
carList[0] = "Porcshe"
carList.push("volvo")
carList.pop()
carList.unshift("vvolvo")
carList.shift()

const myNewCarList = carList.slice(1, 2)


document.write("- -- -- -- -- - - - -  " + "</br>")
document.write("carList : " + carList + "</br>")
document.write("- -- -- -- -- - - - -  " + "</br>")

document.write("- -- -- -- -- - - - -  " + "</br>")
document.write("myNewCarList : " + myNewCarList + "</br>")
document.write("- -- -- -- -- - - - -  " + "</br>")


document.write("carList 0: " + carList[0] + "</br>")

document.write("carList length: " + carList.length + "</br>")

document.write("carList indexOf: " + carList.indexOf("bmw") + "</br>")

document.write("carList includes: " + carList.includes("bmw") + "</br>")


const numbers = [5, 6, 8, 9, 2, 8, 90, 76]

document.write("- -- -- -- -- - - - -  " + "</br>")
document.write("numbers : " + numbers + "</br>")
document.write("- -- -- -- -- - - - -  " + "</br>")


let first = numbers.find(findIt)
document.write("first : " + first + "</br>")


function findIt(value, index, array) {
    return value > 18
}

let sortedCarList = carList.reverse()
document.write("sortedCarList reverse: " + sortedCarList + "</br>")


numbers.forEach(iterateArray)

function iterateArray(value, index, array) {
    document.write("value : " + value + " index: " + index + "</br>")
}

const newNumbers = numbers.map(iterateArray2)
document.write("newNumbers : " + newNumbers + "</br>")


function iterateArray2(value, index, array) {
    return value * 2
}

const over18 = numbers.filter(iterateArray3)


function iterateArray3(value, index, array) {
    return value > 18
}

document.write("over18 : " + over18 + "</br>")

let sum = numbers.reduce(iterateArray4)
document.write("sum : " + sum + "</br>")


function iterateArray4(total, value, index, array) {
    return total + value
}


//SET

const names = new Set(["memo", "can", "seyhan"])
names.add("memo")
names.delete("can")
names.clear()

for (const key of names) {
    document.write("key : " + key + "</br>")

}


//MAP
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["ornages", 200]
])

fruits.set("mangos", 100)

if (fruits.has("mangos")) {
    document.write("yes it has mangos " + "</br>")

}
let applesValues = fruits.get("apples")
document.write("applesValues : " + applesValues + "</br>")


for (const key of fruits) {
    document.write("key : " + key[0] + "</br>")
}


//MATH

let price = 5829.52375

document.write("Math round: " + Math.round(price) + "</br>")

document.write("Math price: " + Math.ceil(price) + "</br>")

document.write("Math floor: " + Math.floor(price) + "</br>")


document.write("typeof price: " + typeof price + "</br>")

//NaN

let xState = 100 / "apple"

document.write("xState: " + xState + "</br>")


//toLocaleString

let dollars = price.toLocaleString("en-US",{
    style:"currency",
    currency:"USD"
})

let euros = price.toLocaleString("de-DE",{
    style:"currency", currency:"EUR"
})


document.write("dollars: " + dollars + "</br>")
document.write("euros: " + euros + "</br>")

const person2 = {
    firstName: "memo",
    lastname: "seyhan",
    age: 20
}

let {firstName, lastname} = person2

document.write("firstName: " + firstName + "</br>")
