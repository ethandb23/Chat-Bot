import bot from './assets/bot.svg';
import user from './assets/user.svg';

const form = document.querySelector('form');
const chatContainter = document.querySelector('#chat_container');

let loadInterval;

function loader(element) {
  element.textContent = '';

  loadInterval = setInterval(() => {
    element.textContent += '.';

    if (element.textContent === '....') {
      element.textContent = '';
    }
  }, 300)
}

  function typeText(element, text) {
    let index = 0;

    let interval = setInterval(() => {
      if(index < text.length) {
        element.innerHTML += text.charAt(index);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 20)
  }


function generatUniqueID() {
  const timestamp = Date.now();
  const randomNumber = Math.random();
  const hexadecimalString = randomNumber.toString(16);

  return `id-${timestamp}-${hexadecimalString}`;
}

function chatStripe (isAI, value, uniqueID) {
  return (
    `
    <div class="wrapper ${isAI && 'ai'}">
      <div class="chat">
        <div className="profile">
          <img
            src="${isAI ? bot : user}"
            alt="${isAI ? 'bot' : 'user'}"
            />
      </div>
      <div class="message" id=${uniqueID}>${value}</div>
    </div>
  </div>
    `
  )
}

const handleSubmit = async (e) => {
  e.preventDefault();

  const data = new FormData(form);

  // user's chatstripe
  chatContainter.innerHTML += chatStripe(false, data.get('prompt'));

  form.reset();

  //bot chatstripe
  const uniqueID = generatUniqueID();
  chatContainter.innerHTML += chatStripe(true, " ", uniqueID);

  chatContainter.scrollTop = chatContainter.scrollHeight;

  const messageDiv = document.getElementById(uniqueID);

  loader(messageDiv);

  
  
  const response = await fetch('https://codeit-gtgf.onrender.com', {
    method: 'POST',
    headers:
   {
      'Content-type': 'application/json'
   },
   body: JSON.stringify({
    prompt: data.get('prompt')
   })
  })

  clearInterval(loadInterval);
  messageDiv.innerHTML = '';

  if(response.ok) {
    const data = await response.json();
    const parsedData = data.bot.trim();


    typeText(messageDiv, parsedData);
  } else {
    const err = await response.text();


    messageDiv.innerHTML = "Something went wrong";

    alert(err);
  }
}

form.addEventListener('submit', handleSubmit);
form.addEventListener('keyup', (e) => {
  if(e.keyCode === 13) {
    handleSubmit(e);
  }
}
)