const key ="421d2075b8fbd24a94d6868b15ca679d";
const apiurl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const  searchbox =document.querySelector("input");
const btn =document.querySelector(" button");


async function weather(city){
    const response = await fetch(apiurl+ city +`&appid=${key}`);
    var data =await response.json();
  
    document.querySelector(".cname").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity 
    + "%";
    document.querySelector(".wind").innerHTML=data.wind.speed +"km/h";
 


}
btn.addEventListener("click",()=>{
    weather(searchbox.value);
})