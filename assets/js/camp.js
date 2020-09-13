var searchInputEl = document.querySelector(".search-input");
var searchBtnEl = document.querySelector(".searchBtn");

var getRestaurants = function(input) {

    var yelpApi = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=" + input + "&categories=restaurant&limit=5";

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
        var price = restaurants[i].price;
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

var displayRestaurantInfo = function(info) {

}

var convertToMiles =  function(meters) {
    return (meters/1609.34).toFixed(2);
}
getRestaurants("hayward");
