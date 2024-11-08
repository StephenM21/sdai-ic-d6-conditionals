//challange #1
// all code for this lab to be completed in this file
let currentTemperature = 32
console.log("currentTemperature", currentTemperature)

//two possibilaties: either freezing or not
if (currentTemperature <= 32) {
    console.log("It freezing.") //#1
} else {
    console.log("It not freezing.") //#2
}

//Challange #2
let age1 = 88
let age2 = 28

//three posibilities: older, younger, same age
if (age1 > age2) {
    console.log("age1 is older") 
} else if (age1 < age2) {
    console.log("age2 is older")
} else if (age1 === age2) {
    console.log("same age")
} else { //capture data
    console.log("error try again")
}
