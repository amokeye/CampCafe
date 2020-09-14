// Camping API key from NPS
const NPSkey = "4bS2JoIIGZlYQfUEJWb94fOKALNEJFeLfF7RUSAI";

// Display data dependent on user's entry once search button is clicked
$('#select').on('click', function(event) {

    event.preventDefault();

    // Variable for user's entry
    const sCode = $('#entry')
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
        '&api_key=' + 
        NPSkey
    )

    // Return API data to page
    .then(function(response) {
            return response.json();
        })

    .then(function(response) {
        
        // Hide loader once response loads to page
        $('#loading').hide();

        console.log(response);

        // Ensure that user's inputs are valid
        if (response.data.length === 0) {
            $('#wrong')
                .show();
        }

        else if (sCode === "") {
            $('#wrong')
                .show();
        }

        // Ensure that results are based on state input from user
        else {

            console.log(response);

            // Variable and "for" loop to iterate through list of 
            var grounds = response.data;

            for (var i = 0; i < grounds.length; i++) {
                
                var index = i;
                var names1 = grounds[i].name;
                var campCard = $("<div>").addClass("card listing text-black");
                campCard.attr("id", index);
                var cardContent = $("<div>").addClass("card-body");
                var results = $("<a>").attr("href", "./campground.html");
                results.addClass("no-underline");
                results.attr("target", "_blank");

                
                if (sCode === "AL" || "al") {
                    
                    results.append(names1)
                    cardContent.append(results);
                    campCard.append(cardContent);
                    $("#grounds-list").append(campCard);
                    
                    
                }

                else if (sCode === "AK" || "ak") {

                    results.append(names1)
                    cardContent.append(results);
                    campCard.append(cardContent);
                    $("#grounds-list").append(campCard);
                }

                else if (sCode === "AZ" || "az") {

                    results.append(names1)
                    cardContent.append(results);
                    campCard.append(cardContent);
                    $("#grounds-list").append(campCard);
                }

                else if (sCode === "AR" || "ar") {
                    
                    results.append(names1)
                    cardContent.append(results);
                    campCard.append(cardContent);
                    $("#grounds-list").append(campCard);
                }

                else if (sCode === "CA" || "ca") {

                    results.append(names1)
                    cardContent.append(results);
                    campCard.append(cardContent);
                    $("#grounds-list").append(campCard);
                }

                else if (sCode === "CO" || "co") {

                    results.append(names1)
                    cardContent.append(results);
                    campCard.append(cardContent);
                    $("#grounds-list").append(campCard);
                }

                else if (sCode === "CT" || "ct") {

                    results.append(names1)
                    cardContent.append(results);
                    campCard.append(cardContent);
                    $("#grounds-list").append(campCard);
                }

                else if (sCode === "DE" || "de") {

                    results.append(names1)
                    cardContent.append(results);
                    campCard.append(cardContent);
                    $("#grounds-list").append(campCard);
                }

                else if (sCode === "FL" || "fl") {

                    results.append(names1)
                    cardContent.append(results);
                    campCard.append(cardContent);
                    $("#grounds-list").append(campCard);
                }

                else if (sCode === "GA" || "ga") {

                    results.append(names1)
                    cardContent.append(results);
                    campCard.append(cardContent);
                    $("#grounds-list").append(campCard);
                }

                else if (sCode === "HI" || "hi") {

                    results.append(names1)
                    cardContent.append(results);
                    campCard.append(cardContent);
                    $("#grounds-list").append(campCard);
                }

                else if (sCode === "ID" || "id") {

                    results.append(names1)
                    cardContent.append(results);
                    campCard.append(cardContent);
                    $("#grounds-list").append(campCard);
                }

                else if (sCode === "IL" || "il") {

                    results.append(names1)
                    cardContent.append(results);
                    campCard.append(cardContent);
                    $("#grounds-list").append(campCard);
                }

                else if (sCode === "IN" || "in") {

                    results.append(names1)
                    cardContent.append(results);
                    campCard.append(cardContent);
                    $("#grounds-list").append(campCard);
                }

                else if (sCode === "IA" || "ia") {

                    results.append(names1)
                    cardContent.append(results);
                    campCard.append(cardContent);
                    $("#grounds-list").append(campCard);
                }

                else if (sCode === "KS" || "ks") {

                    results.append(names1)
                    cardContent.append(results);
                    campCard.append(cardContent);
                    $("#grounds-list").append(campCard);
                }

                else if (sCode === "KY" || "ky") {

                    results.append(names1)
                    cardContent.append(results);
                    campCard.append(cardContent);
                    $("#grounds-list").append(campCard);
                }

                else if (sCode === "LA" || "la") {
                    
                    results.append(names1)
                    cardContent.append(results);
                    campCard.append(cardContent);
                    $("#grounds-list").append(campCard);
                }

                else if (sCode === "ME" || "me") {

                    results.append(names1)
                    cardContent.append(results);
                    campCard.append(cardContent);
                    $("#grounds-list").append(campCard);
                }

                else if (sCode === "MD" || "md") {

                    results.append(names1)
                    cardContent.append(results);
                    campCard.append(cardContent);
                    $("#grounds-list").append(campCard);
                }

                else if (sCode === "MA" || "ma") {

                    results.append(names1)
                    cardContent.append(results);
                    campCard.append(cardContent);
                    $("#grounds-list").append(campCard);
                }

                else if (sCode === "MI" || "mi") {

                    results.append(names1)
                    cardContent.append(results);
                    campCard.append(cardContent);
                    $("#grounds-list").append(campCard);
                }

                else if (sCode === "MN" || "mn") {

                    results.append(names1)
                    cardContent.append(results);
                    campCard.append(cardContent);
                    $("#grounds-list").append(campCard);
                }

                else if (sCode === "MS" || "ms") {

                    results.append(names1)
                    cardContent.append(results);
                    campCard.append(cardContent);
                    $("#grounds-list").append(campCard);
                }

                else if (sCode === "MO" || "mo") {

                    results.append(names1)
                    cardContent.append(results);
                    campCard.append(cardContent);
                    $("#grounds-list").append(campCard);
                }

                else if (sCode === "MT" || "mt") {

                    results.append(names1)
                    cardContent.append(results);
                    campCard.append(cardContent);
                    $("#grounds-list").append(campCard);
                }

                else if (sCode === "NE" || "ne") {

                    results.append(names1)
                    cardContent.append(results);
                    campCard.append(cardContent);
                    $("#grounds-list").append(campCard);
                }

                else if (sCode === "NV" || "nv") {

                    results.append(names1)
                    cardContent.append(results);
                    campCard.append(cardContent);
                    $("#grounds-list").append(campCard);
                }

                else if (sCode === "NH" || "nh") {

                    results.append(names1)
                    cardContent.append(results);
                    campCard.append(cardContent);
                    $("#grounds-list").append(campCard);
                }

                else if (sCode === "NJ" || "nj") {

                    results.append(names1)
                    cardContent.append(results);
                    campCard.append(cardContent);
                    $("#grounds-list").append(campCard);
                }

                else if (sCode === "NM" || "nm") {

                    results.append(names1)
                    cardContent.append(results);
                    campCard.append(cardContent);
                    $("#grounds-list").append(campCard);
                }

                else if (sCode === "NY" || "ny") {

                    results.append(names1)
                    cardContent.append(results);
                    campCard.append(cardContent);
                    $("#grounds-list").append(campCard);
                }

                else if (sCode === "NC" || "nc") {

                    results.append(names1)
                    cardContent.append(results);
                    campCard.append(cardContent);
                    $("#grounds-list").append(campCard);
                }

                else if (sCode === "ND" || "nd") {

                    results.append(names1)
                    cardContent.append(results);
                    campCard.append(cardContent);
                    $("#grounds-list").append(campCard);
                }

                else if (sCode === "OH" || "oh") {

                    results.append(names1)
                    cardContent.append(results);
                    campCard.append(cardContent);
                    $("#grounds-list").append(campCard);
                }

                else if (sCode === "OK" || "ok") {

                    results.append(names1)
                    cardContent.append(results);
                    campCard.append(cardContent);
                    $("#grounds-list").append(campCard);
                }

                else if (sCode === "OR" || "or") {

                    results.append(names1)
                    cardContent.append(results);
                    campCard.append(cardContent);
                    $("#grounds-list").append(campCard);
                }

                else if (sCode === "PA" || "pa") {

                    results.append(names1)
                    cardContent.append(results);
                    campCard.append(cardContent);
                    $("#grounds-list").append(campCard);
                }

                else if (sCode === "RI" || "ri") {

                    results.append(names1)
                    cardContent.append(results);
                    campCard.append(cardContent);
                    $("#grounds-list").append(campCard);
                }

                else if (sCode === "SC" || "sc") {

                    results.append(names1)
                    cardContent.append(results);
                    campCard.append(cardContent);
                    $("#grounds-list").append(campCard);
                }

                else if (sCode === "SD" || "sd") {

                    results.append(names1)
                    cardContent.append(results);
                    campCard.append(cardContent);
                    $("#grounds-list").append(campCard);
                }

                else if (sCode === "TN" || "tn") {

                    results.append(names1)
                    cardContent.append(results);
                    campCard.append(cardContent);
                    $("#grounds-list").append(campCard);
                }

                else if (sCode === "TX" || "tx") {

                    results.append(names1)
                    cardContent.append(results);
                    campCard.append(cardContent);
                    $("#grounds-list").append(campCard);
                }

                else if (sCode === "UT" || "ut") {

                    results.append(names1)
                    cardContent.append(results);
                    campCard.append(cardContent);
                    $("#grounds-list").append(campCard);
                }

                else if (sCode === "VT" || "vt") {

                    results.append(names1)
                    cardContent.append(results);
                    campCard.append(cardContent);
                    $("#grounds-list").append(campCard);
                }

                else if (sCode === "VA" || "va") {

                    results.append(names1)
                    cardContent.append(results);
                    campCard.append(cardContent);
                    $("#grounds-list").append(campCard);
                }
    
                else if (sCode === "WA" || "wa") {

                    results.append(names1)
                    cardContent.append(results);
                    campCard.append(cardContent);
                    $("#grounds-list").append(campCard);
                }

                else if (sCode === "WV" || "wv") {

                    results.append(names1)
                    cardContent.append(results);
                    campCard.append(cardContent);
                    $("#grounds-list").append(campCard);
                }

                else if (sCode === "WI" || "wi") {

                    results.append(names1)
                    cardContent.append(results);
                    campCard.append(cardContent);
                    $("#grounds-list").append(campCard);
                }

                else if (sCode === "WY" || "wy") {

                    results.append(names1)
                    cardContent.append(results);
                    campCard.append(cardContent);
                    $("#grounds-list").append(campCard);
                }

        
            }
 
        }

        $('.card').on('click', function(event) {

            event.preventDefault();
            
           // var campInfo;
        
                window.open("campground.html");
                //console.log("testing");
                
                document.getElementById("camp-info").innerHTML = response.data[0].description;

                //campInfo = response.data[0].description;
               // $('#camp-list').append(campInfo);
                
           // }

            //else {alert('boooo!')}
        
        
        })
    
    })
    
    })







