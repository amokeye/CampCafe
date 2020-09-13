// Display data dependent on user's entry once search button is clicked
$('#select').on('click', function(event) {

    event.preventDefault();
    
    // Call NPS API for campground list
    fetch(
        'https://developer.nps.gov/api/v1/campgrounds?stateCode=' + 
        sCode + 
        '&api_key=' + 
        NPSkey
    )

    // Variable and "for" loop to iterate through list of 
    var infoList = response.data;

    for (var i = 0; i < infoList.length; i++) {
        
        //
        var info1 = infoList[i].description;

        
        if (sCode === "AL" || "al") {
            
            $("#camp-info").append(info1);
            
        }

        else if (sCode === "AK" || "ak") {

            results.append(info1)
            cardContent.append(results);
            campCard.append(cardContent);
            $("#grounds-list").append(campCard);
        }

        else if (sCode === "AZ" || "az") {

            results.append(info1)
            cardContent.append(results);
            campCard.append(cardContent);
            $("#grounds-list").append(campCard);
        }

        else if (sCode === "AR" || "ar") {
            
            results.append(info1)
            cardContent.append(results);
            campCard.append(cardContent);
            $("#grounds-list").append(campCard);
        }

        else if (sCode === "CA" || "ca") {

            results.append(info1)
            cardContent.append(results);
            campCard.append(cardContent);
            $("#grounds-list").append(campCard);
        }

        else if (sCode === "CO" || "co") {

            results.append(info1)
            cardContent.append(results);
            campCard.append(cardContent);
            $("#grounds-list").append(campCard);
        }

        else if (sCode === "CT" || "ct") {

            results.append(info1)
            cardContent.append(results);
            campCard.append(cardContent);
            $("#grounds-list").append(campCard);
        }

        else if (sCode === "DE" || "de") {

            results.append(info1)
            cardContent.append(results);
            campCard.append(cardContent);
            $("#grounds-list").append(campCard);
        }

        else if (sCode === "FL" || "fl") {

            results.append(info1)
            cardContent.append(results);
            campCard.append(cardContent);
            $("#grounds-list").append(campCard);
        }

        else if (sCode === "GA" || "ga") {

            results.append(info1)
            cardContent.append(results);
            campCard.append(cardContent);
            $("#grounds-list").append(campCard);
        }

        else if (sCode === "HI" || "hi") {

            results.append(info1)
            cardContent.append(results);
            campCard.append(cardContent);
            $("#grounds-list").append(campCard);
        }

        else if (sCode === "ID" || "id") {

            results.append(info1)
            cardContent.append(results);
            campCard.append(cardContent);
            $("#grounds-list").append(campCard);
        }

        else if (sCode === "IL" || "il") {

            results.append(info1)
            cardContent.append(results);
            campCard.append(cardContent);
            $("#grounds-list").append(campCard);
        }

        else if (sCode === "IN" || "in") {

            results.append(info1)
            cardContent.append(results);
            campCard.append(cardContent);
            $("#grounds-list").append(campCard);
        }

        else if (sCode === "IA" || "ia") {

            results.append(info1)
            cardContent.append(results);
            campCard.append(cardContent);
            $("#grounds-list").append(campCard);
        }

        else if (sCode === "KS" || "ks") {

            results.append(info1)
            cardContent.append(results);
            campCard.append(cardContent);
            $("#grounds-list").append(campCard);
        }

        else if (sCode === "KY" || "ky") {

            results.append(info1)
            cardContent.append(results);
            campCard.append(cardContent);
            $("#grounds-list").append(campCard);
        }

        else if (sCode === "LA" || "la") {
            
            results.append(info1)
            cardContent.append(results);
            campCard.append(cardContent);
            $("#grounds-list").append(campCard);
        }

        else if (sCode === "ME" || "me") {

            results.append(info1)
            cardContent.append(results);
            campCard.append(cardContent);
            $("#grounds-list").append(campCard);
        }

        else if (sCode === "MD" || "md") {

            results.append(info1)
            cardContent.append(results);
            campCard.append(cardContent);
            $("#grounds-list").append(campCard);
        }

        else if (sCode === "MA" || "ma") {

            results.append(info1)
            cardContent.append(results);
            campCard.append(cardContent);
            $("#grounds-list").append(campCard);
        }

        else if (sCode === "MI" || "mi") {

            results.append(info1)
            cardContent.append(results);
            campCard.append(cardContent);
            $("#grounds-list").append(campCard);
        }

        else if (sCode === "MN" || "mn") {

            results.append(info1)
            cardContent.append(results);
            campCard.append(cardContent);
            $("#grounds-list").append(campCard);
        }

        else if (sCode === "MS" || "ms") {

            results.append(info1)
            cardContent.append(results);
            campCard.append(cardContent);
            $("#grounds-list").append(campCard);
        }

        else if (sCode === "MO" || "mo") {

            results.append(info1)
            cardContent.append(results);
            campCard.append(cardContent);
            $("#grounds-list").append(campCard);
        }

        else if (sCode === "MT" || "mt") {

            results.append(info1)
            cardContent.append(results);
            campCard.append(cardContent);
            $("#grounds-list").append(campCard);
        }

        else if (sCode === "NE" || "ne") {

            results.append(info1)
            cardContent.append(results);
            campCard.append(cardContent);
            $("#grounds-list").append(campCard);
        }

        else if (sCode === "NV" || "nv") {

            results.append(info1)
            cardContent.append(results);
            campCard.append(cardContent);
            $("#grounds-list").append(campCard);
        }

        else if (sCode === "NH" || "nh") {

            results.append(info1)
            cardContent.append(results);
            campCard.append(cardContent);
            $("#grounds-list").append(campCard);
        }

        else if (sCode === "NJ" || "nj") {

            results.append(info1)
            cardContent.append(results);
            campCard.append(cardContent);
            $("#grounds-list").append(campCard);
        }

        else if (sCode === "NM" || "nm") {

            results.append(info1)
            cardContent.append(results);
            campCard.append(cardContent);
            $("#grounds-list").append(campCard);
        }

        else if (sCode === "NY" || "ny") {

            results.append(info1)
            cardContent.append(results);
            campCard.append(cardContent);
            $("#grounds-list").append(campCard);
        }

        else if (sCode === "NC" || "nc") {

            results.append(info1)
            cardContent.append(results);
            campCard.append(cardContent);
            $("#grounds-list").append(campCard);
        }

        else if (sCode === "ND" || "nd") {

            results.append(info1)
            cardContent.append(results);
            campCard.append(cardContent);
            $("#grounds-list").append(campCard);
        }

        else if (sCode === "OH" || "oh") {

            results.append(info1)
            cardContent.append(results);
            campCard.append(cardContent);
            $("#grounds-list").append(campCard);
        }

        else if (sCode === "OK" || "ok") {

            results.append(info1)
            cardContent.append(results);
            campCard.append(cardContent);
            $("#grounds-list").append(campCard);
        }

        else if (sCode === "OR" || "or") {

            results.append(info1)
            cardContent.append(results);
            campCard.append(cardContent);
            $("#grounds-list").append(campCard);
        }

        else if (sCode === "PA" || "pa") {

            results.append(info1)
            cardContent.append(results);
            campCard.append(cardContent);
            $("#grounds-list").append(campCard);
        }

        else if (sCode === "RI" || "ri") {

            results.append(info1)
            cardContent.append(results);
            campCard.append(cardContent);
            $("#grounds-list").append(campCard);
        }

        else if (sCode === "SC" || "sc") {

            results.append(info1)
            cardContent.append(results);
            campCard.append(cardContent);
            $("#grounds-list").append(campCard);
        }

        else if (sCode === "SD" || "sd") {

            results.append(info1)
            cardContent.append(results);
            campCard.append(cardContent);
            $("#grounds-list").append(campCard);
        }

        else if (sCode === "TN" || "tn") {

            results.append(info1)
            cardContent.append(results);
            campCard.append(cardContent);
            $("#grounds-list").append(campCard);
        }

        else if (sCode === "TX" || "tx") {

            results.append(info1)
            cardContent.append(results);
            campCard.append(cardContent);
            $("#grounds-list").append(campCard);
        }

        else if (sCode === "UT" || "ut") {

            results.append(info1)
            cardContent.append(results);
            campCard.append(cardContent);
            $("#grounds-list").append(campCard);
        }

        else if (sCode === "VT" || "vt") {

            results.append(info1)
            cardContent.append(results);
            campCard.append(cardContent);
            $("#grounds-list").append(campCard);
        }

        else if (sCode === "VA" || "va") {

            results.append(info1)
            cardContent.append(results);
            campCard.append(cardContent);
            $("#grounds-list").append(campCard);
        }

        else if (sCode === "WA" || "wa") {

            results.append(info1)
            cardContent.append(results);
            campCard.append(cardContent);
            $("#grounds-list").append(campCard);
        }

        else if (sCode === "WV" || "wv") {

            results.append(info1)
            cardContent.append(results);
            campCard.append(cardContent);
            $("#grounds-list").append(campCard);
        }

        else if (sCode === "WI" || "wi") {

            results.append(info1)
            cardContent.append(results);
            campCard.append(cardContent);
            $("#grounds-list").append(campCard);
        }

        else if (sCode === "WY" || "wy") {

            results.append(info1)
            cardContent.append(results);
            campCard.append(cardContent);
            $("#grounds-list").append(campCard);
        }

    }
})
