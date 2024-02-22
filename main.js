//project 7
let celcius = 0

celcius = prompt("Enter the value in celsius: ")
let mathematicalEquationConvertCelciusToFahrenheit = celcius * 1.8 + 32

alert("celcius: " + celcius + " is igual "+ mathematicalEquationConvertCelciusToFahrenheit.toFixed(2) +" in fahrenheit ")

// project 8

let grade = prompt("Enter the student's grade")

if(0<grade<100){
    alert("invalid grade!!")
}

else if(90<= grade){
    alert("the student got an A")
}
else if(80<= grade){
    alert("the student got an F")
}
else if(70<= grade){
    alert("the student got an C")
}
else if(60<= grade){
    alert("the student got an D")
}else alert("the student got an F")