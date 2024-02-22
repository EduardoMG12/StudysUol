const paragraph = document.getElementById("paragraph")

let firstName = prompt("What your first name? ") 
let lastName = prompt("What your second name? ") 
let yearsOld = prompt("how old are you? ")

paragraph.innerHTML= ("My name is: " + firstName + " " + lastName + "; I have " + yearsOld + " years old")