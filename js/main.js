
let data_button = document.querySelector(".main-card div button");


data_button.addEventListener("click",async function(){
    
    var city = document.querySelector("#city-input").value;

    var apiKey = '8ffda38a97e5428f8a931351250206';

    if(city === ''){
        return;
    }
    try{

        var items = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`);
        var result = await items.json();
        var current = result.current;
        if(result.error && result.error.code === 1006){
            alert(result.error.message);
            return;
        }else{
            var outputIn = document.querySelector(".weather-info");
            var cartoona = `
                        <div class="weather_card animate__animated animate__fadeInDown animate__slow py-4 ">
                         <img src="http:${current.condition.icon}">
                         <h2 class="text-info mb-2 text-center h1">${Math.round(current.temp_c)}<sup>°C</sup></h2>
                         <h3 class="  text-center mb-5 h2">${current.condition.text}</h3>
                         <div class="d-flex justify-content-between">
                            <div class="d-flex align-items-center">
                                <i class="fa-solid fa-water fa-2x"></i>
                                <div class="ml-3 text-left">
                                    <p class=" h4">${current.humidity}%</p>
                                    <small>Humidity</small>
                                </div>
                            </div>
                            <div class="d-flex align-items-center">
                                <i class="fa-solid fa-wind fa-2x"></i>
                                <div class="ml-3 text-left">
                                    <p class=" h4">${Math.round(current.wind_kph)} km/h</p>
                                    <small>Wind Speed</small>
                                </div>
                            </div>
                        </div>
                        </div>

            `;
        outputIn.innerHTML = cartoona;
        }       
    }
    catch(err){
        console.error("Error: ",err);
    }






})
