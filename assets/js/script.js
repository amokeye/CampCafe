var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer Vi0q_KlyjE3_Gpjr2rrAaqjTph5U1XC1MAUy05QestL0bgs04XW3hUjSIwaJ4Gi6YOChOX3gi00XxGo4s4efLcykIAEZGk5YO_RG2ARsYNoOTInWdrGoFiq_B6ZSX3Yx");
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Acces", "");


var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=94127&categories=restaurant&limit=5", requestOptions)
  .then(response => response.json())
  .then(function(data){console.log(data)})
//   .then(function(response){
//     if (response.ok) {
//         response.json().then(function(data){
//             displayCurrentWeather(data)
//             addSearchItem(data.list[0].name);
//         });
  .catch(error => console.log('error', error));
  
  // var yelpApi= 'https://api.yelp.com/v3/businesses/search?location=40515&term&categories=restaurant&limit=10';

// var API_KEY = 'Vi0q_KlyjE3_Gpjr2rrAaqjTph5U1XC1MAUy05QestL0bgs04XW3hUjSIwaJ4Gi6YOChOX3gi00XxGo4s4efLcykIAEZGk5YO_RG2ARsYNoOTInWdrGoFiq_B6ZSX3Yx';

//    var req = new Request(yelpApi, {
//            method: 'GET',
//            headers: new Headers({
//              'Authorization': 'Bearer '+ API_KEY
//            })
//            mode:'no-cors'
//         });

//     fetch (req)
//         .then((response) => {
//             if(response.ok){
//             return response.json();
//         } else {ssss
//             throw new Error();
//         }
//         })
//         .then((jsonData) => {
//             console.log(jsonData);
//         })
//         .catch((err) => {
//             console.log('ERROR: ', err.message);
//         });
