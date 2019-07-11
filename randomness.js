//////////////////////
// GLOBAL VARIABLES //
//////////////////////
const alphabet = "abcdefghijklmnopqrstuvwxyz";
const foods = [
    "pizza",
    "burgers",
    "rice and beans",
    "lasagna",
    "macaroni and cheese",
    "baked potatoes"
];
const students = [
    "Bob",
    "Martin",
    "Danny",
    "Mahdi",
    "Harry",
    "Sean",
    "Robert"
];
/////////////////////////////
// END OF GLOBAL VARIABLES //
/////////////////////////////

function randomNumber(){
    let random = Math.random();
    let num = Math.floor(random * 21)
    console.log(num)
}

randomNumber()


function randomLetter() {
    let random = Math.random();
    let index = Math.floor(random * (alphabet.length - 1))
    console.log(alphabet[index])
}

randomLetter()


function randomFood() {
    let random = Math.random()
    let index = Math.floor(random * (foods.length - 1))
    console.log(foods[index])
}
randomFood()


function randStudent(){
    let random = Math.random()
    let index = Math.floor(random* (students.length-1))
    console.log(students[index])
}
randStudent()

function randGroup(){
    for (let i= 0; i<3; i++){ 
        randStudent()
    }
}
randGroup()