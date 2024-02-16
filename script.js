const apiKey = "3a66665b147974b2c11778d23a3c50b3";
const apiUrl = "http://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');
async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    
    var data = await response.json();

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temparture').innerHTML = Math.round(data.main.temp)  +'°c';
    document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
    document.querySelector('.wind').innerHTML = data.wind.speed+'km/h';
    if(data.weather[0].main=='Clouds'){
        weatherIcon.src = 'assests/clouds.png';
    }else if(data.weather[0].main=='Clear'){
        weatherIcon.src = 'assests/clear.png';
    }else if(data.weather[0].main=='Rain'){
        weatherIcon.src = 'assests/rain.png';
    }else if(data.weather[0].main=='Drizzle'){
        weatherIcon.src = 'assests/drizzle.png';
    }else if(data.weather[0].main=='Mist'){
        weatherIcon.src = 'assests/mist.png';
    }
    document.querySelector('.weather').style.display = 'block';
     document.querySelector('.error').style.display = 'none';

}

searchBtn.addEventListener('click',()=>{
    checkWeather(searchBox.value);
})
