const apiKey="af49f6a3ace5e7d514a3694c27e33a42"
// q=Kathmandu => shows the kathmandu city, q repesetns the city
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const searchBox=document.querySelector(".search input")
const searchBtn=document.querySelector(".search button")
const weatherIcon=document.querySelector(".weather-icon")



async function checkWeather(city){
    try{
        
    // Iniitally the weather information would be hide
    document.querySelector(".weather").style.display="block"


    // city represents the "q=" in te api url and if we get city name it would be "q=city" such as "q=Kathmandu" 
        const response=await fetch(apiUrl + city + `&appid=${apiKey}`)
        var data=await response.json()
        console.log(data)
    

    // Update of weather information
    localStorage.setItem("City",document.querySelector(".city").innerHTML = data.name)
    
    // It round up the decimal point to the number like 18.3=> 18
    localStorage.setItem("Humidity",document.querySelector(".humidity").innerHTML = data.main.humidity+"%")
    localStorage.setItem("Temperature",document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+"&deg;C")
    localStorage.setItem("Wind",document.querySelector(".wind").innerHTML = data.wind.speed+" km/h")


    // Weather image status
    const weatherStatus=data.weather[0].main;
    if(weatherStatus=="Mist"){
        weatherIcon.src="../images/mist.png"
    }
    else if(weatherStatus == "Clear"){
        weatherIcon.src="../images/clear.png"
    }
    else if(weatherStatus == "Rain"){
        weatherIcon.src="../images/rain.png"
    }
    else if(weatherStatus == "Drizzle"){
        weatherIcon.src="../images/drizzle.png"
    }
    else if(weatherStatus == "Clouds"){
        weatherIcon.src="../images/clouds.png"
    }

}

// If users put the wrong city
catch(e){
    alert(data.message)
    document.querySelector(".weather").style.display="none"
}
}


// Search functionality
searchBtn.addEventListener("click",()=>{
    // It will pass the city name to the checkWeather function
    checkWeather(searchBox.value)
})



// To show the data even after the reload
const weatherStorage={
    city: localStorage.getItem("City"),
    humidity: localStorage.getItem("Humidity"),
    temp: localStorage.getItem("Temperature"),
    wind: localStorage.getItem("Wind")
}

function showTask(){
    document.querySelector(".city").innerHTML=weatherStorage.city
    document.querySelector(".humidity").innerHTML = weatherStorage.humidity
    document.querySelector(".temp").innerHTML = weatherStorage.temp
    document.querySelector(".wind").innerHTML =weatherStorage.wind
}

// If the data contains in the localStorage, then it would make the weather information visibile
if (weatherStorage.city && weatherStorage.humidity && weatherStorage.temp && weatherStorage.wind) {
    document.querySelector(".weather").style.display="block"
    showTask()
}
else{
    document.querySelector(".weather").style.display="none"
}

