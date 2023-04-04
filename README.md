 <h1>CodeIt</h1>
    <pThis coding assistant app is a powerful tool for developers, as it is powered by an AI chatbot that utilizes the OpenAI API. The chatbot is designed to provide users with personalized code suggestions, bug fixes, and syntax corrections in real-time, which can help streamline the coding process and increase productivity.</p>

<h2>Getting Started</h2>
<p>Clone the GitHub repository to your local machine by executing the following command in your terminal:</p>
<pre><code>git clone https://github.com/ethandb23/TTT</code></pre>
<p>Open the project folder in your preferred code editor. You can use any code editor such as Visual Studio Code, Atom, or Sublime Text.</p>
<p>Install any necessary dependencies by running the following command in your terminal:</p>
<pre><code>npm install</code></pre>
<p>This will install any required packages and dependencies required to run the project.</p>
<p>To build and start the application, run the following command in your terminal:</p>
<pre><code>npm start</code></pre>
<p>This will compile the code and start a local server at <a href="http://localhost:3000/">http://localhost:3000/</a>.</p>
<p>Finally, open your preferred web browser and navigate to <a href="http://localhost:3000/">http://localhost:3000/</a>. This will open the index.html file and display the application.</p>

<h2>About the Project</h2>
<p>This was a solo project completed during a 1-week sprint.</p>
<h3>Technologies Used</h3>
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
  <li>Bootstrap</li>
  <li>CRESTful API/li>
</ul>

### This coding assistant app is a powerful tool for developers, as it is powered by an AI chatbot that utilizes the OpenAI API. The chatbot is designed to provide users with personalized code suggestions, bug fixes, and syntax corrections in real-time, which can help streamline the coding process and increase productivity.

### One of the key benefits of this app is its user-friendliness, as it is designed to be intuitive and easy to use. Users can easily integrate the app into their existing programming environment, which means they can start using it right away without having to switch between multiple applications.

### The AI chatbot is trained on a vast dataset of programming languages and frameworks, which means it can provide assistance across a wide range of development projects. It can also learn from user feedback, which means it can continue to improve over time and provide even more accurate and helpful suggestions.

### In addition to providing personalized code suggestions, the app also has the ability to help with debugging by identifying and suggesting fixes for common coding errors. This can be a huge time-saver for developers, as it can help them quickly identify and resolve issues before they become major problems.

### Overall, this coding assistant app is an invaluable tool for developers looking to improve their coding efficiency and productivity. With its powerful AI chatbot and user-friendly design, it is sure to be a popular choice among developers of all levels



    <p>During the planning stage, I began with pseudocode</p>
    <pre><code>function handleUserInput(userInput) {
  // Send the user input to the OpenAI API
  const response = sendToOpenAI(userInput);

  // Display the response in the chat window
  displayResponse(response);
}

// Set up a function to send user input to the OpenAI API
function sendToOpenAI(userInput) {
  // Create a request object with the user input
  const request = {
    input: userInput,
    // Set any additional parameters for the request
    parameters: {
      // For example, set the model to use
      model: 'davinci'
    }
  };

  // Send the request to the OpenAI API
  const response = makeRequest(request);

  // Return the response from the API
  return response;
}

// Set up a function to make requests to the OpenAI API
function makeRequest(request) {
  // Use a library like Axios to send the request to the API endpoint
  const response = axios.post('https://api.openai.com/v1/engines/davinci-completion/completions', request);

  // Extract the relevant information from the response and return it
  return response.data.choices[0].text;
}

// Set up a function to display the chatbot's response in the chat window
function displayResponse(response) {
  // Get the chat window element
  const chatWindow = document.querySelector('#chat-window');

  // Create a new chat bubble element with the response text
  const bubble = document.createElement('div');
  bubble.classList.add('chat-bubble');
  bubble.textContent = response;

  // Add the chat bubble to the chat window
  chatWindow.appendChild(bubble);
}

// Set up event listeners to handle user input
const userInput = document.querySelector('#user-input');
userInput.addEventListener('keydown', (event) => {
  // If the user presses Enter, send their input to the chatbot
  if (event.key === 'Enter') {
    handleUserInput(userInput.value);
    userInput.value = '';
  }
});

</code>



<p>My code process involved integrating the OpenAI API into the app and developing the logic for providing personalized code suggestions, bug fixes, and syntax corrections. My app was developed using JavaScript and React, and Bootstrap was used to style the user interface. I tested using various programming environments and programming languages, and feedback was gathered from users to refine the app's functionality. The app was then optimized for performance and speed  </p>

<p>This is a block of JavaScript code that handles the submission of a form that enables users to chat with a bot. Here is a step-by-step explanation of the code:</p>









<pre><code>
function loader(element) {
  element.textContent = '';
</code>

<p>The loader function receives an HTML element as an argument and starts a setInterval function that adds a period to the element's text content every 300 milliseconds until the text content is '....'. Once the text content is '....', the function clears the interval and sets the text content of the element to an empty string.</p>

<pre><code>
  loadInterval = setInterval(() => {
    element.textContent += '.';

    if (element.textContent === '....') {
      element.textContent = '';
    }
  }, 300)
}
</code>
<p>The typeText function receives an HTML element and a string of text as arguments. It sets an index variable to 0 and starts a setInterval function that adds one character of the string of text to the element's innerHTML every 20 milliseconds until the end of the string is reached. Once the end of the string is reached, the function clears the interval.</p>
<pre><code>
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
  } </code>
<p>
The generatUniqueID function generates a unique ID for a chat stripe using the current timestamp and a random hexadecimal number.</p>

<pre><code>
function generatUniqueID() {
  const timestamp = Date.now();
  const randomNumber = Math.random();
  const hexadecimalString = randomNumber.toString(16);

  return `id-${timestamp}-${hexadecimalString}`;
}</code>

<p>The chatStripe function returns a string of HTML that represents a chat stripe. The function receives three arguments: a boolean value that indicates whether the stripe is for the bot or the user, a string of text that represents the message to be displayed in the stripe, and a unique ID for the stripe.</p>
<pre><code>
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
</code>
<p>The handleSubmit function is an asynchronous function that is called when the form is submitted. It prevents the default form submission behavior, gets the user's input from the form, creates a new chat stripe for the user's input, clears the form, creates a new chat stripe for the bot's response with a unique ID generated by the generatUniqueID function, scrolls the chat container to the bottom, and starts the loader function to display loading dots in the bot's chat stripe. It then makes a POST request to the server at the specified URL with the user's input as a JSON object. If the response is OK, it parses the response data, clears the loading dots, and types the bot's response in the bot's chat stripe using the typeText function. If the response is not OK, it displays an error message.</p>
<pre><code>
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
</code>
<p>The last two lines of the code add event listeners to the form for the 'submit' and 'keyup' events. When the user presses the 'Enter' key, the handleSubmit function is called. </p>



# Challenges

<p>During the course of the project, one of the biggest obstacles I had to overcome was implementing cors correctly so that I could utilize the API. CORS, or Cross-Origin Resource Sharing, is a security feature of web browsers that restricts web pages from making requests to a different domain than the one that served the web page. This can often be a challenge when working with APIs, as the data that the API provides is often hosted on a different server than the one the application is running on. I had to ensure that the API was properly configured to allow our application to access its resources, which required us to configure our application to include the appropriate CORS headers. After much trial and error, I were eventually able to implement CORS properly and utilize the API to its full potential, which was a major accomplishment.</p>

<p>Throughout the project, I encountered various challenges, but persevered and achieved a significant victory by successfully implementing CORS to access the API. CORS, or Cross-Origin Resource Sharing, can pose a challenge when working with APIs because it restricts web pages from making requests to a different domain than the one that served the web page. In order to access the data provided by the API, I had to ensure that the API was properly configured to allow my application to access its resources. This required me to configure my application to include the appropriate CORS headers, which was a time-consuming and challenging task. However, I persisted and eventually overcame the obstacle, which was a major accomplishment for the project. Being able to utilize the API to its full potential was a significant win for me and I was proud of what we had achieved</p>


<p>Working with APIs can be a challenging endeavor, especially when confronted with security features like CORS. However, overcoming these challenges is essential for utilizing the API to its fullest potential. Proper configuration of the API is necessary to grant access to resources and avoid common pitfalls.</p>

<p>One of the most significant challenges in working with APIs is configuring the application with appropriate CORS headers. This can be a time-consuming and challenging process, requiring persistence and dedication. However, successfully implementing CORS and gaining access to the API is a significant victory. It represents a major accomplishment for the project, and opens the door to utilizing the API's full potential. By persevering through the difficulties of working with APIs and properly configuring the application, developers can unlock the full potential of these powerful tools.</p>

