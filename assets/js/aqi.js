var searchInputEl = document.querySelector('.search-input');
var searchBtnEl = document.querySelector('.searchBtn');


var getAqi = function(input) {
    //URl request
    var aqiAPi = "http://api.airvisual.com/v2/nearest_city?key=97969920-1691-4c77-a5a4-3c3905b9f663"
    //make URL request  
    fetch(aqiAPi).then(function(response){
        response.json().then(function(data){
            console.log(data);
            displayaqiResults(data);
        });
    
    });

};

// var WeatherIcon =function(){
//     var imgEl = document.createElement("img");
//     var iconId =iconId;

//     imgEl.setAttribute("src", geticonimgUrl(iconId));
//     imgEl.setAttribute("width", "50px");
//     imgEl setAttribute("height", "50px");
//     document.getElementById("aqi-list").appendChild(imgEl);
// };

//Acitivities Fetch
var displayaqiResults = function(info) {
    var aqiCity = info.data.city;
    var aqiState =info.data.state;
    var aqiValue = info.data.current.pollution.aqius;
    var aqiTemp = info.data.current.weather.hu;
    var aqiIcon =info.data.current.weather.ic;
    console.log(aqiCity);
    console.log(aqiState);
    console.log(aqiValue);
    console.log(aqiTemp);
    
    $("#aqi-list")
        .append(
            `<div class="list-report-item">
                </br> 
                <b>Nearest City Air Quality Available</b> </br> </br>${aqiCity}, ${aqiState}
                </br>
                </br>
                <b>Current Air Quality Value</b> </br> </br>${aqiValue}
                </br>
                </br>
                <b>Current Temperature</b> </br> </br>${aqiTemp}°F
                </br>
                </br>
                <img src="https://airvisual.com/images/${aqiIcon}.png">
            </div>`

        );

};


var displayaqiInfo =function(info) {

}


getAqi("hayward");