const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');

buttons.forEach((button) => {
  console.log(button);
  button.addEventListener('click',  (e) => {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
      h1.style.color='white';
      h2.style.color='white';
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
      h1.style.color='black';
      h2.style.color='black';
    }
    if (e.target.id === 'royalblue') {
      body.style.backgroundColor = e.target.id;
      h1.style.color='white';
      h2.style.color='white';
    }
    if (e.target.id === 'lightcoral') {
      body.style.backgroundColor = e.target.id;
      h1.style.color='black';
      h2.style.color='black';
    }
    
  });
});