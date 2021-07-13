// 55. JavaScript Objects:

// Creating an objects:
var car = {
    type: "Acura",
    model: "Integra",
    color: "white"
}

document.getElementById('objType').innerHTML = car.type;
document.getElementById('objModel').innerHTML = car.model;

// 56. JavaScript Object Output:

var person = {
    firstName: "Injamul",
    lastName: "Alam",
    age: 60,
    eyeColor: "brown"
}

document.getElementById('demo').innerHTML = 
person.firstName + " has " + person.eyeColor + " eyes.";