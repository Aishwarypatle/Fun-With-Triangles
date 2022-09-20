const inputs = document.querySelectorAll('.input');
const button = document.querySelector('.submit')
const output = document.querySelector('.output')

// adding event listener to button
button.addEventListener('click',Hypotenuse) 

function Hypotenuse(){   

var sumOfSquares= processing(Number(inputs[0].value),Number(inputs[1].value))
var lengthOfHypotenuse = Math.sqrt(sumOfSquares);

   if(inputs[0].value < 0){
       output.innerText = "length cannot be negative"
     }   else if(inputs[1].value < 0){
         output.innerText = "length cannot be negative"
     }   else if(inputs[0].value === ""){
         output.innerText = "Fill the length box so we can check"
    }    else if(inputs[1].value === ""){
         output.innerText = "Fill the length box so we can check"
}  else {
       output.innerText = "The length of hypotenuse is: " + lengthOfHypotenuse
     }
}

// core processing
function processing(a,b){
    var sumOfSquares = a*a  + b*b
    return sumOfSquares
}