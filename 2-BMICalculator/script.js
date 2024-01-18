const form = document.querySelector('form');
// this usecase will give empty value
// const height = parseInt(document.querySelector('#height').value)
// const weight = parseInt(document.querySelector('#weight').value);


form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(1);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
    if(bmi<18.6)
    {
        document.getElementById('1').style.color='yellow';
        document.getElementById('2').style.color='white';
        document.getElementById('3').style.color='white';
    }
    else if(bmi >=18.6 && bmi< 24.9)
    {
        document.getElementById('2').style.color='yellow';
        document.getElementById('1').style.color='white';
        document.getElementById('3').style.color='white';

    }
    else if(bmi >= 24.9)
    {
        document.getElementById('3').style.color='yellow';
        document.getElementById('1').style.color='white';
        document.getElementById('2').style.color='white';

    }
    
  }
});