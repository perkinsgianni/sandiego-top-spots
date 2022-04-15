// jQuery function to detect DOM's "readiness" to execute code
$(document).ready(function() {
    // load data from data.json file using a GET JSON request, execute callback function if request succeeds
    $.getJSON("data.json", function(data) {
        // iterate through top spots 
        data.reverse().forEach((topSpot) => {
            // destructure each spot
            let {
                name,
                description,
                location: [lat, lon]
            } = topSpot;

            // create table row for each spot
            $("#topSpots").after(
                `<tr><td>${name}</td>
                     <td>${description}</td>
                     <td id="location-cell"><a href="https://www.google.com/maps?q=${lat},${lon}"><button id="location-button">Open in Google Maps</button></a></td></tr>`
            )
        });
        
        // add map
        const map = new google.maps.Map(document.getElementById("map"), {
            zoom: 8,
            center: new google.maps.LatLng(32.9420, -116.99572)
        });

        // add markers
        for ( let i = 0; i < data.length; i++ ) {
            let latLng = { lat: data[i].location[0], lng: data[i].location[1] };
            let description = data[i].description;

            let markers = new google.maps.Marker({
                position: latLng,
                map: map,
                title: description
            })
        }
    });
});