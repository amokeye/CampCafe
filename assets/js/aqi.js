var searchInputEl = document.querySelector('.search-input');
var searchBtnEl = document.querySelector('.searchBtn');


var getAqi = function(input) {
    //URl request
var aqiAPi = "https://cors-anywhere.herokuapp.com/http://api.airpollutionapi.com/1.0/aqi?lat=28.7040590&lon=77.10249&APPID=1vc52pkt9n68c5fnv6mgkom1ah&units=imperial"
    //make URL request  
    fetch(aqiAPi).then(function(response){
        response.json().then(function(data){
            console.log(data);
            displayaqiResults(data);
        });
    
    });

};
//Acitivities Fetch
var displayaqiResults = function(info) {
    var aqiValue = info.data.value;
    var aqiReport = info.data.text;
    var aqiTemp = info.data.temp;
    console.log(aqiValue);
    console.log(aqiReport);
    $("#aqi-list")
        .append(
            `<li class="list-report-item">
                ${value}
                </br> ${text}
            </li>`

        );

};


var displayaqiInfo =function(info) {

}


getAqi("hayward");