const first = document.getElementById("first")
const operator = document.getElementById("operator")
const second = document.getElementById("second")
const submit = document.getElementById("submit")
const result = document.getElementById("result")

function z () {
  let val = operator.value;
  console.log(val); 
  return val;
}

let x = submit.addEventListener("click", z)

console.log(x)