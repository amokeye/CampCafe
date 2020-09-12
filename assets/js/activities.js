var searchInputEl = document.querySelector('.search-input');
var searchBtnEl = document.querySelector('.searchBtn');


var getActivities = function(input) {
    //URl request
     var npsApi = "https://cors-anywhere.herokuapp.com/https://developer.nps.gov/api/v1/activities?parkCode="+ input +"&api_key=16qnixGPCRxcuKRsBRxu9yl0P6xo3CbdECaehB9V&limit=10"


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
     for (var i=0; i<activities.length; i++){
         var name = activities[i].name;
        //console.log(activity);
        $("#activ-list")
            .append(
                `<li class="list-activities-item">
                    ${name}
                </li>`
                
            );
    }
    
};


var dislayactivitiesInfo = function(info) {

}


getActivities("hayward");