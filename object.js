const body  = document.querySelector('body')
const input  = document.querySelector('input')
console.log(input);
function getValue(){
 const values = input.value
 body.style.background = values
}
