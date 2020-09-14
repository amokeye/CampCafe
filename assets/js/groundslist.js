var groundsListEl = document.getElementById("grounds-list");
var campsArr = [];

// Camping API key from National Park Service
const NPSkey = "4bS2JoIIGZlYQfUEJWb94fOKALNEJFeLfF7RUSAI";

// Display data dependent on user's entry once search button is clicked
$('#select').on('click', function(event) {

    event.preventDefault();

    // Variable for user's entry
    var sCode = $('#entry')
        .val();
    
    // Empty what was previously displayed in the list of campgrounds
    $('#grounds-list')
        .empty();

    $('#wrong')
        .hide();

    // Empty textbox entry
    $('#entry')
        .val('');

    // Show loader while NPS API fetch is taking place
    $('#loading')
        .show();
    
    // Call NPS API for campground list
    fetch(
        'https://developer.nps.gov/api/v1/campgrounds?stateCode=' + 
        sCode + 
        '&limit=10&api_key=' + 
        NPSkey
    )

    // Return API data to page
    .then(function(response) {
            return response.json();
        })

    .then(function(response) {
        
        $('#none1')
            .hide();

        // Hide loader once response loads to page
        $('#loading')
            .hide();
        

        // Ensure that user's inputs are valid
        if (response.data.length === 0) {
            $('#none1')
                .show();
        }

        else if (sCode === "") {
            $('#wrong')
                .show();
        }

        // Ensure that results are based on state input from user
        else {

            // Variable for campground data
            var grounds = response.data;

            // For loop to iterate through data for campground results
            for (var i = 0; i < grounds.length; i++) {
                
                var index = i;
                var names1 = grounds[i].name;
                var campCard = $("<div>").addClass("card listing text-black");
                campCard.attr("id", index);
                var cardContent = $("<div>").addClass("card-body");
                var results = $("<a>").attr("href", "./campground.html");
                results.addClass("no-underline");
                results.attr("target", "_blank");
                results.attr("id", i); 
                
                // Function that renders the campground names to the page
                function displayNames() {
                    results.append(names1);
                    cardContent.append(results);
                    campCard.append(cardContent);
                    $("#grounds-list").append(campCard);
                }
                
                // If/else if loops to loop through all 50 states and display respective results
                if (sCode === "AL" || "al") {
                    
                    displayNames();
                                   
                }

                else if (sCode === "AK" || "ak") {

                    displayNames();

                }

                else if (sCode === "AZ" || "az") {

                    displayNames();

                }

                else if (sCode === "AR" || "ar") {
                    
                    displayNames();

                }

                else if (sCode === "CA" || "ca") {

                    displayNames();

                }

                else if (sCode === "CO" || "co") {

                    displayNames();

                }

                else if (sCode === "CT" || "ct") {

                    displayNames();

                }

                else if (sCode === "DE" || "de") {

                    displayNames();

                }

                else if (sCode === "FL" || "fl") {

                    displayNames();

                }

                else if (sCode === "GA" || "ga") {

                    displayNames();

                }

                else if (sCode === "HI" || "hi") {

                    displayNames();

                }

                else if (sCode === "ID" || "id") {

                    displayNames();

                }

                else if (sCode === "IL" || "il") {

                    displayNames();

                }

                else if (sCode === "IN" || "in") {

                    displayNames();

                }

                else if (sCode === "IA" || "ia") {

                    displayNames();

                }

                else if (sCode === "KS" || "ks") {

                    displayNames();

                }

                else if (sCode === "KY" || "ky") {

                    displayNames();

                }

                else if (sCode === "LA" || "la") {
                    
                    displayNames();

                }

                else if (sCode === "ME" || "me") {

                    displayNames();

                }

                else if (sCode === "MD" || "md") {

                    displayNames();

                }

                else if (sCode === "MA" || "ma") {

                    displayNames();

                }

                else if (sCode === "MI" || "mi") {

                    displayNames();

                }

                else if (sCode === "MN" || "mn") {

                    displayNames();

                }

                else if (sCode === "MS" || "ms") {

                    displayNames();

                }

                else if (sCode === "MO" || "mo") {

                    displayNames();

                }

                else if (sCode === "MT" || "mt") {

                    displayNames();

                }

                else if (sCode === "NE" || "ne") {

                    displayNames();

                }

                else if (sCode === "NV" || "nv") {

                    displayNames();

                }

                else if (sCode === "NH" || "nh") {

                    displayNames();

                }

                else if (sCode === "NJ" || "nj") {

                    displayNames();

                }

                else if (sCode === "NM" || "nm") {

                    displayNames();

                }

                else if (sCode === "NY" || "ny") {

                    displayNames();

                }

                else if (sCode === "NC" || "nc") {

                    displayNames();

                }

                else if (sCode === "ND" || "nd") {

                    displayNames();

                }

                else if (sCode === "OH" || "oh") {

                    displayNames();

                }

                else if (sCode === "OK" || "ok") {

                    displayNames();

                }

                else if (sCode === "OR" || "or") {

                    displayNames();

                }

                else if (sCode === "PA" || "pa") {

                    displayNames();

                }

                else if (sCode === "RI" || "ri") {

                    displayNames();

                }

                else if (sCode === "SC" || "sc") {

                    displayNames();

                }

                else if (sCode === "SD" || "sd") {

                    displayNames();

                }

                else if (sCode === "TN" || "tn") {

                    displayNames();

                }

                else if (sCode === "TX" || "tx") {

                    displayNames();

                }

                else if (sCode === "UT" || "ut") {

                    displayNames();

                }

                else if (sCode === "VT" || "vt") {

                    displayNames();

                }

                else if (sCode === "VA" || "va") {

                    displayNames();

                }
    
                else if (sCode === "WA" || "wa") {

                    displayNames();

                }

                else if (sCode === "WV" || "wv") {

                    displayNames();

                }

                else if (sCode === "WI" || "wi") {

                    displayNames();

                }

                else if (sCode === "WY" || "wy") {

                    displayNames();

                }
        
            }
            
 
        }


        // Click events that display campground info on results page with respect to user's campground of choice
        $('#0').on('click', function(event) {

            event.preventDefault();

            var descr = grounds[0].description;
            localStorage.setItem('descriptions', descr);
    
            window.open("campground.html");
        
        
        })


        $('#1').on('click', function(event) {

            event.preventDefault();

            var descr = grounds[1].description;
            localStorage.setItem('descriptions', descr);
    
            window.open("campground.html");
        
        
        })

        $('#2').on('click', function(event) {

            event.preventDefault();

            var descr = grounds[2].description;
            localStorage.setItem('descriptions', descr);
    
            window.open("campground.html");
        
        
        })

        $('#3').on('click', function(event) {

            event.preventDefault();

            var descr = grounds[3].description;
            localStorage.setItem('descriptions', descr);
    
            window.open("campground.html");
        
        
        })

        $('#4').on('click', function(event) {

            event.preventDefault();

            var descr = grounds[4].description;
            localStorage.setItem('descriptions', descr);
    
            window.open("campground.html");
        
        
        })

        $('#5').on('click', function(event) {

            event.preventDefault();

            var descr = grounds[5].description;
            localStorage.setItem('descriptions', descr);
    
            window.open("campground.html");
        
        
        })

        $('#6').on('click', function(event) {

            event.preventDefault();

            var descr = grounds[6].description;
            localStorage.setItem('descriptions', descr);
    
            window.open("campground.html");
        
        
        })

        $('#7').on('click', function(event) {

            event.preventDefault();

            var descr = grounds[7].description;
            localStorage.setItem('descriptions', descr);
    
            window.open("campground.html");
        
        
        })

        $('#8').on('click', function(event) {

            event.preventDefault();

            var descr = grounds[8].description;
            localStorage.setItem('descriptions', descr);
    
            window.open("campground.html");
        
        
        })

        $('#9').on('click', function(event) {

            event.preventDefault();

            var descr = grounds[9].description;
            localStorage.setItem('descriptions', descr);
    
            window.open("campground.html");
        
        
        })

        $('#10').on('click', function(event) {

            event.preventDefault();

            var descr = grounds[10].description;
            localStorage.setItem('descriptions', descr);
    
            window.open("campground.html");
        
        
        })
    
    })
    
})


var campLinkHandler = function(event) {
    var id = event.target.getAttribute("id");
    let campObj = campsArr[id];
    localStorage.setItem("name", campObj.name);
    localStorage.setItem("description", campObj.description);
    localStorage.setItem("campsites", campObj.campsites.totalSites);

    if (campObj.reservationUrl === "") {
        localStorage.setItem("reservationInfo", campObj.reservationInfo);
    } else {
        localStorage.setItem("url", campObj.reservationUrl);
    }

    if (campObj.latitude === "") {
        localStorage.setItem("park", campObj.parkCode);
    } else {
        localStorage.setItem("latitude", campObj.latitude);
        localStorage.setItem("longitude", campObj.longitude);
    }

};

var success = function(pos) {
    var coord = pos.coords;
    localStorage.setItem("userLat", coord.latitude);
    localStorage.setItem("userLong", coord.longitude);
};

var error = function() {
    
};

groundsListEl.addEventListener('click', campLinkHandler);

// get user's location to enable route to selected campground
window.navigator.geolocation
  .getCurrentPosition(success, error);