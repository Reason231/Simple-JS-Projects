## How to get the api key
- We have gone to the openweathermap.org website
- Link => https://openweathermap.org/
- Created an account and confirm the activation in your gmail.
- <b>Email will get the important message of the api key</b>.
- After that go on the api section of the website
- Scroll down and go to the <b>API doc</b> of the current weather data.
- Then go to the built-in API request by city name.
- Then copy the first one i.e => https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}


- Paste in the new tab by modifying the {city name}=kathamdnu
and {API key} with your api key from the gmail. And you will see the weather information in the <b>Json format</b>
- It should be like this => https://api.openweathermap.org/data/2.5/weather?q=kathmandu&appid=af49f6a3ace5e7d514a3694c27e33a42&units=metric
- Notes:
 1. Sometimes it can give invalid error, it means it need couple of hours to activate your api.
 2. At last use the <b>&units=metric</b> to show the temperature in degree celsius
 3. After that copy the whole url

 ## How to implement the api key in our code
 - Copy the whole url it would be something like this => 
  https://api.openweathermap.org/data/2.5/weather?q=kathmandu&appid=af49f6a3ace5e7d514a3694c27e33a42&units=metric
  - After that come to the js code and make two api key and url
  - Cut the api key from the url and paste it to the api key.
  - Paste the url in the apiUrl without the api key in it.