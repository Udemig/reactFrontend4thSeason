import { message, surname } from "./info.js";



//GET SET
const person = {
    firstName: "memo",
    lastName: "can",
    age: 30,
    get currentAge() {
        return this.age
    },
    set changeAge(newAge){
        this.age = newAge
    }
}

person.changeAge = 50
let myAge = person.currentAge
/*
document.write("myAge: " + myAge +  " </br>")

//CLASSES

class Car {

    constructor(name, year) {
        this.name = name
        this.year = year
        this.color = "black"
    }

    age(){
        const data = new Date()
        return data.getFullYear() - this.year
    }
}

const myCar1 = new Car("Ford",2020)
const myCar2 = new Car("BMW",2021)


document.write("myCar1: " + myCar1.name +  " </br>")
document.write("myCar2: " + myCar2.age() +  " </br>")


//Inheritance
class Model extends Car {

    constructor(name, year, mod) {
        super(name, year)
        this.mod = mod
        this.color = "blue" //override

    }

    show(){
        return this.age()
    }
}

const model1 = new Model("Hundai", 2022, "fast")


document.write("myCar1: " + model1.show() +  " </br>")
document.write("myCar1 color: " + model1.color +  " </br>")

//Asynchronous

async function getData() {
    let response = await fetch("https://isitdownstatus.com/api/v1/status/github")
    let text = await response.text()
    console.log(text)


}

getData()
*/
surname
console.log("message: ", message())
console.log("surname: ", surname)