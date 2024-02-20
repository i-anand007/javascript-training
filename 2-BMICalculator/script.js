const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault()

  const height = document.querySelector('#height').value
  const weight = document.querySelector('#weight').value

  const results = document.querySelector('#results')

  let BMI = Math.floor(weight *10000 / (height*height));

  console.log(BMI)

  function bmiGuide (BMI) {
    if( BMI < 18.6 ) {
    return "Under Weight"
  } else 
    if( BMI > 18.6  && BMI < 24.9 ) {
    return "Normal Range" 
  } else 
    if( BMI > 24.9 ) {
    return "Overweight" }
  }

  console.log(bmiGuide(BMI))

  results.innerHTML = `BMI - ${BMI} ${bmiGuide(BMI)} `
})