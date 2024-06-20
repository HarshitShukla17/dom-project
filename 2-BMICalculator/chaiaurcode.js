const form = document.querySelector('form');
let result = document.querySelector('#results');

form.addEventListener('click', function (e) {
  e.preventDefault();
  let height = parseInt(document.getElementById('height').value);
  let weight = parseInt(document.getElementById('weight').value);
  if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = 'please provide valid height';
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = 'please provide valid height';
  } else {
    result.innerHTML = (weight / (height * height)).toFixed(2);
  }
});
