//Error

// debugger
let counter = 1

try {
    // counter(5)
    counter = counter + 1

} catch (err) {
    console.log(err, counter)

} finally {
    console.log("finally worked out")
}

//DOM

let div1Element = document.getElementById("div1")
console.log(div1Element)
div1Element.classList.add("class1")
div1Element.innerHTML = " <b> div2 </b> haha"

function runDiv() {
    div1Element.style.backgroundColor = "yellow"
    div1Element.style.color = "red"
}

let div2Element = document.getElementsByClassName("div2")
console.log(div2Element)

let div3Element = document.getElementsByTagName("div")
console.log(div3Element)

let newDivElement = document.createElement("div")
newDivElement.innerText = "I am created by js"
div1Element.appendChild(newDivElement)
newDivElement.classList.add("class2")
console.log(newDivElement)

let div4Element = document.getElementById("div4")

div4Element.addEventListener("click", (event)=>{
    div4Element.style.backgroundColor = "blue"
    console.log("div4Element::: ", div4Element)
})


let div5Element = document.getElementById("div5")
div5Element.onclick = () => {
    div5Element.remove()
}


let form1Element = document.getElementById("form1")
form1Element.addEventListener("submit", (e)=>{
    e.preventDefault()
})

/* 
... that gets  username and password from the use through a form and
compares them with a predefined username and passswork. IF both
correct, print "welcome" to the console; otherwise, print "Wrong info"
to the console
*/


//BOM

//window
console.log("width: ", window.innerWidth)
console.log("innerHeight: ", window.innerHeight)

console.log("location: ", window.location)
console.log("location pathname: ", window.location.pathname)



//screen
console.log("screen width: ", screen.width)
console.log("screen height: ", screen.height)
/*
if (confirm("press a button")) {
    console.log("u pressed ok")
} else {
    console.log("u pressed cancel")
}
    */

//Cookies

document.cookie = "userbane=memo"
console.log("document.cookie", document.cookie)

//JS API FETCH
fetch("https://isitdownstatus.com/api/v1/status/github")
    .then(function(response){
        return response.text()
    })
    .then(function(data){
        console.log(data)
})


/*
When a user click a button which named "download data", get 
data from the server and then print just data to the console

*/

//JSON

/*
{
    "name":"memo",
    "age":20,
    "lang":["turkish","india","swedish","english"],
    "family":{
        "surname":"hellow",
        "size": 7
    }
}
    */

    /* 
    create a Json object that represents a student
    Your Json should include
    -the studen"s name, age, email,
    -A boolean vlaue showing whether the student is active
    -An array of at least 3 courses
    -An address object containing city, country, and postal code.
    -An array of oject representing exam result. Each result should
    contain a course name and a socre.
    -A value that is null

    use appropriate Json data types such as string, number, boolean,
    array, object, and null
    

    
    
    */

//Json.parse



const mData = {
    name: "memo",
    age: 20,
    lang: ["turkish","india","swedish","english"],
    family:{
        surname:"hllow",
        size: 7
    }
}

//json.stringfy

//JS WEB API

function getLocation(){
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition)
    } else {
        console.log("not supported")
    }
}

function showPosition(position) {
    console.log(position)

    console.log(position.coords.latitude)
    console.log(position.coords.longitude)
}

getLocation()

//LocalStorage
localStorage.setItem("name","surja")

console.log("stored name ", localStorage.getItem("name"))


let x = 4

function run1(printer) {
    setTimeout(() => {
        x = x + 1
        printer(x)
    }, 2000);
}

function print1(result) {
    console.log("calc result is: ", result)
}

run1(print1)
