var searchInputEl = document.querySelector(".search-input");
var searchBtnEl = document.querySelector(".searchBtn");
var campNameEl = document.getElementById("camp-name");

var campLat = localStorage.getItem('latitude');
var campLong = localStorage.getItem('longitude');
var userLat = localStorage.getItem('userLat');
var userLong = localStorage.getItem('userLong');

campNameEl.textContent = localStorage.getItem('name');

var getActivities = function(input) {
    //URl request
    var npsApi = "https://cors-anywhere.herokuapp.com/https://developer.nps.gov/api/v1/activities?parkCode="+ input +"&api_key=16qnixGPCRxcuKRsBRxu9yl0P6xo3CbdECaehB9V&limit=15";

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Acces", "");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };
        //make URL request  
    fetch(npsApi,requestOptions).then(function(response){
        response.json().then(function(data){
            displayactivityResults(data);
        });
    
    });
};


var displayactivityResults = function(info) {
    var activities= info.data;
    console.log(activities);
    var activityArr = [];
     for (var i=0; i<20; i++){
         var randomActivity = activities[Math.floor(Math.random() *activities.length)]
            activityArr.push(randomActivity.name)
    }  
    let activitySet = [...new Set(activityArr)];
    for (var j = 0; j < 10; j++) {
        $("#activ-list")
            .append(
                `<div class="list-activities-item">
                    ${activitySet[j]}
                </div>`
            )
    }
};


// Function to call Air Visual API
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


// AQI Results
var displayaqiResults = function(info) {
    var aqiCity = info.data.city;
    var aqiState =info.data.state;
    var aqiValue = info.data.current.pollution.aqius;
    var aqiTemp = info.data.current.weather.hu;
    var aqiIcon =info.data.current.weather.ic;
    
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
                <img class ="icon" src="https://airvisual.com/images/${aqiIcon}.png">
            </div>`
        );
};

var getRestaurants = function() {

    var yelpApi = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?latitude=" + campLat + "&longitude=" + campLong + "&categories=restaurant&limit=5";

    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer Vi0q_KlyjE3_Gpjr2rrAaqjTph5U1XC1MAUy05QestL0bgs04XW3hUjSIwaJ4Gi6YOChOX3gi00XxGo4s4efLcykIAEZGk5YO_RG2ARsYNoOTInWdrGoFiq_B6ZSX3Yx");
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Acces", "");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    // Yelp fetch
    fetch(yelpApi, requestOptions)
    .then(response => response.json())
    .then(function(data){displayYelpResults(data)})
    .catch(error => console.log('error', error));
 
};

var displayYelpResults = function(data) {
    var restaurants = data.businesses;
    console.log(restaurants);
    for (var i=0; i < restaurants.length; i++) {
        var distance = convertToMiles(restaurants[i].distance);
        var name = restaurants[i].name;
        var url = restaurants[i].url;

        if ("price" in restaurants[i]) {
            var price = restaurants[i].price;
        } else {
            var price = "";
        }
        
        var phone = restaurants[i].phone;
        $("#resto-list")
            .append(
                `<li class="list-group-item">
                    <a href="${url}">${name}</a> <span>${price}</span>
                   </br>${phone} ${distance}mi away
                </li>`
            );
    }
};

function initMap() {
    const directionsRenderer = new google.maps.DirectionsRenderer();
    const directionsService = new google.maps.DirectionsService();
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 10,
      center: { lat: parseFloat(campLat), lng: parseFloat(campLong) }
    });
    directionsRenderer.setMap(map);
    calculateAndDisplayRoute(directionsService, directionsRenderer);
    document.getElementById("mode").addEventListener("change", () => {
      calculateAndDisplayRoute(directionsService, directionsRenderer);
    });
}
  
function calculateAndDisplayRoute(directionsService, directionsRenderer) {
const selectedMode = document.getElementById("mode").value;
directionsService.route(
    {
    origin: { lat: parseFloat(userLat), lng: parseFloat(userLong) },
    destination: { lat: parseFloat(campLat), lng: parseFloat(campLong) },
    

    travelMode: google.maps.TravelMode[selectedMode]
    },
    (response, status) => {
    if (status == "OK") {
        directionsRenderer.setDirections(response);
    } else {
        window.alert("Directions request failed due to " + status);
    }
    }
);
}

var convertToMiles =  function(meters) {
    return (meters/1609.34).toFixed(2);
}

getActivities();
getAqi();
getRestaurants();