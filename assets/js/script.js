var loaderEl = document.querySelector(".loader");
var searchBtnEl = document.querySelector(".searchBtn");
var searchInputEl = document.querySelector(".search-input");
var resultsEl  = document.getElementById("resultsContainer");
var resultsListEl  = document.getElementById("results-list");



var userCoords = { 
    "lat": 0, 
    "long" : 0 
};


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
                displayCamps(data);
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


var displayCamps = function(location) {
    var camps = location.data;
    loaderEl.setAttribute("class", "hide");

    resultsListEl.textContent = "";
    resultsEl.removeAttribute("class","hide");
    
    for (var i=0; i<camps.length; i++){
        var camp = camps[i];
        var name = camp.name;
        var coordString = userCoords.lat + "," + userCoords.long;
        var toCoords = camp.latitude + "," + camp.longitude;
        $("#results-list").append(`<li><a href="campground.html?camp=${name}&from=${coordString}&to=${toCoords}">${name}</a></li>`);
    }
    console.log(camps);
};

var formSubmitHandler = function(event) {
    event.preventDefault();
    
    var searchLocation = searchInputEl.value.trim();
    
    if (searchLocation) {
        // window.location.href = "campground.html?from=" + userCoords.lat + "," + userCoords.long;
        getCamps(searchLocation);
        searchInputEl.value = "";
    } else {
        alert("Please enter a location to search campgrounds!");
    }
};

var success = function(pos) {
    // var searchIconEl = document.querySelector("#searchIcon");
    console.log("hello");
    var coord = pos.coords;
    userCoords.lat = coord.latitude;
    userCoords.long = coord.longitude;
    
    // new_html = '<a href="campground.html?loc=' + userCoords.lat + ',' + userCoords.long + '">' + searchIconEl + '</a>';
    // document.querySelector(".searchBtn").innerHTML = new_html;
    // $(".searchBtn").html(`<a href="campground.html?loc=${userCoords.lat},${userCoords.long}"><i class="fas fa-search" id="searchIcon"></i></a>`);
}

var error = function() {
    
}

// get user's location to enable route to selected campground
if (userCoords.lat === 0) {
    window.navigator.geolocation
    .getCurrentPosition(success, error);
}

if (searchBtnEl) {
    searchBtnEl.addEventListener("click", formSubmitHandler);
}



