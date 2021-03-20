const numberList = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty", "twenty-one", "twenty-two", "twenty-three", "twenty-four", "twenty-five", "twenty-six", "twenty-seven", "twenty-eight", "twenty-nine", "thirty", "thirty-one", "thirty-two", "thirty-three", "thirty-four", "thirty-five", "thirty-six", "thirty-seven", "thirty-eight", "thirty-nine", "forty", "forty-one", "forty-two", "forty-three", "forty-four", "forty-five", "forty-six", "forty-seven", "forty-eight", "forty-nine", "fifty"];

const first = document.getElementById("first")
const operator = document.getElementById("operator")
const second = document.getElementById("second")
const submit = document.getElementById("submit")
const result = document.getElementById("result")

first.addEventListener('input', compute);
operator.addEventListener('input', compute);
second.addEventListener('input', compute);


function compute() {
  num1 = numberList.indexOf(first.value.toLowerCase())
  num2 = numberList.indexOf(second.value.toLowerCase())
  if (num1 === -1 || num2 === -1) {
    result.textContent = "Missing field"
  } else {
      result.textContent = eval(num1 + operator.value + num2)
  }
}