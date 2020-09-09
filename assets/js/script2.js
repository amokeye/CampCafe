var searchInputEl = document.querySelector('.search-iput');
var inputLocation = 'bodega bay';
var searchBtnEl = document.querySelector('.searchBtn');



var getActivities = function(acad) {
    //URl request
     var npsApi = "https://developer.nps.gov/api/v1/activities?parkCode="+ input +"&api_key=16qnixGPCRxcuKRsBRxu9yl0P6xo3CbdECaehB9V&limit=10"

    //make URL request  
    fetch(npsApi).then(function(response){
        response.json().then(function(data){
            console.log(data);
        });
    
    });

};

var displayactivityResults = function(data) {
    var activities= data.array;
    for (var i=0; i<activities.length; i++){
        var activity = activities[i]
        console.log(activity);

    }
};


var formsubmitHandler = function(event){
     event.preventDefault();
     var searchLocation =searchInputEl.value.trim();
     console.log(searchLocation);

     if(searchLocation){
         getActivities(searchLocation)
         searchInputEl.value = " ";
     } else{
         alert("Please enter search campgrounds location!");
     }

};


searchBtnEl.addEventListener("cick", formsubmitHandler);