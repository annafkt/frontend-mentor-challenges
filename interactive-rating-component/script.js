const rating = document.querySelector('.rating');
const radio = document.querySelector('.radio-buttons');
const subBtn = document.querySelector('.submit-button');

let userRate = '';

radio.addEventListener('click', (e) => {
  subBtn.disabled = false;
  userRate = e.target.value;
});

rating.addEventListener('submit', (e) => {
  //Prevent page refresh:
  e.preventDefault();

  const response = document.createElement('div');
  const respImg = document.createElement('div');
  const para1 = document.createElement('p');
  const heading = document.createElement('h2');
  const para2 = document.createElement('p');

  response.className = 'response';
  respImg.className = 'response-img';

  para1.textContent = `You selected ${userRate} out of 5`;
  heading.textContent = 'Thank you!';
  para2.textContent = 'We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!';
  
  response.appendChild(respImg);
  response.appendChild(para1);
  response.appendChild(heading);
  response.appendChild(para2);
  
  rating.replaceWith(response);
});