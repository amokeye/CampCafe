var loaderEl = document.querySelector(".loader");
var searchBtnEl = document.querySelector(".searchBtn");
var searchInputEl = document.querySelector(".search-input");

var getCamps = function(input) {
    //URl request
     var npsApi = "https://developer.nps.gov/api/v1/campgrounds?q="+ input +"&api_key=16qnixGPCRxcuKRsBRxu9yl0P6xo3CbdECaehB9V&limit=10";
    //make URL request
    console.log(input)
    loaderEl.removeAttribute("class", "hide");

    fetch(npsApi)
    .then(function(response){
        if (response.ok) {
            response.json().then(function(data){
                displayactivityResults(data);
            });
        } else {
            loaderEl.setAttribute("class", "hide");
            alert("Error: " + response.statusText);
        }
    })
    .catch(function(error){
        loaderEl.setAttribute("class", "hide");
        alert("Unable to connect to OpenWeather");
    });
};

var displayactivityResults = function(location) {
    var activities= location.data;
    loaderEl.setAttribute("class", "hide");
    for (var i=0; i<activities.length; i++){
        var activity = activities[i]
        console.log(activity);
    }
};

var formSubmitHandler = function(event) {
    event.preventDefault();
    
    var searchLocation = searchInputEl.value.trim();
    
    if (searchLocation) {   
        getCamps(searchLocation);
        searchInputEl.value = "";
    } else {
        alert("Please enter a location to search campgrounds!");
    }
};

searchBtnEl.addEventListener("click", formSubmitHandler);

// get user's location to enable route to selected campground
window.navigator.geolocation
  .getCurrentPosition(console.log, console.log);