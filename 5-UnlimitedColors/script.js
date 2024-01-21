//generate a random color

const randomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hex[Math.round(Math.random() * 16)];
    }
    return color;
  };
  
  let intervalId;
  
  const startChangingColor = function () {
    function changeBgColor() {
        document.body.style.backgroundColor = randomColor();
      }
    
    //!intervalId: Checks if intervalId is not currently set (meaning no interval is running).
    if (!intervalId) {
      intervalId = setInterval(changeBgColor, 1000);
    }
  
  };

  const stopChangingColor = function () {
    clearInterval(intervalId);
    intervalId = null;
  };
  
  document.querySelector('#start').addEventListener('click', startChangingColor);
  
  document.querySelector('#stop').addEventListener('click', stopChangingColor);

  