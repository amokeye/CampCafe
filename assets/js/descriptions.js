// Calls campground description to results page
document.getElementById("camp-list").innerHTML = localStorage.getItem('descriptions');
document.getElementById("camp-name").innerHTML = localStorage.getItem('campground-name');