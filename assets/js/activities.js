var searchInputEl = document.querySelector('.search-input');
var searchBtnEl = document.querySelector('.searchBtn');


var getActivities = function(input) {
    //URl request
     var npsApi = "https://cors-anywhere.herokuapp.com/https://developer.nps.gov/api/v1/activities?parkCode="+ input +"&api_key=16qnixGPCRxcuKRsBRxu9yl0P6xo3CbdECaehB9V&limit=15"


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
            console.log(data);
            displayactivityResults(data);
        });
    
    });

};
//Activities Fetch
var displayactivityResults = function(info) {
    var activities= info.data;
    console.log(activities);
     for (var i=0; i<10; i++){
         var randomActivity = activities[Math.floor(Math.random() *activities.length)]
            console.log(randomActivity.name)
        //console.log(activity);
        $("#activ-list")
            .append(
                `<div class="list-activities-item">
                    ${randomActivity.name}
                </div>`
                
            )
    }
    
};


var dislayactivitiesInfo = function(info) {

}


getActivities("hayward");