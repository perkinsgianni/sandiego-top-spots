// jQuery function to detect DOM's "readiness" to execute code
$(document).ready(function() {
    // load data from data.json file using a GET JSON request, execute callback function if request succeeds
    $.getJSON("data.json", function(data) {
        // iterate through top spots 
        data.reverse().forEach((topSpot) => {
            // deconstruct each spot
            let {
                name,
                description,
                location: [lon, lat]
            } = topSpot;

            // create table row for each spot
            $("#topSpots").after(
                `<tr><td>${name}</td>
                     <td>${description}</td>
                     <td id="location-cell"><a href="https://www.google.com/maps?q=${lon},${lat}"><button id="location-button">Open in Google Maps</button></a></td></tr>`
            )
        });
    });
});