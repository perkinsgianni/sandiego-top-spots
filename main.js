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
    });
});

// initialize and add map
function initMap() {
    // map, centered at san diego zoo
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 8,
        center: new google.maps.LatLng(32.9420, -116.99572)
    });

    // markers
    const zooMarker = new google.maps.Marker({
        position: { lat: 33.09745, lng: -116.99572 },
        map: map,
    });

    const seaportVillageMarker = new google.maps.Marker({
        position: { lat: 32.70922, lng: -117.17007 },
        map: map
    });

    const comicConMarker = new google.maps.Marker({
        position: { lat: 32.70648, lng: -117.16614 },
        map: map
    });

    const stoneBreweryMarker = new google.maps.Marker({
        position: { lat: 33.115875, lng: -117.120022 },
        map: map
    });

    const cafe21Marker = new google.maps.Marker({
        position: { lat: 32.715382, lng: -117.160545 },
        map: map
    });

    const surfariMarker = new google.maps.Marker({
        position: { lat: 32.783761, lng: -117.252811 },
        map: map
    });

    const TorreyPinesMarker = new google.maps.Marker({
        position: { lat: 32.926988, lng: -117.259269 },
        map: map
    });

    const gaslampMarker = new google.maps.Marker({
        position: { lat: 32.712614, lng: -117.160163 },
        map: map
    });

    const aquariumMarker = new google.maps.Marker({
        position: { lat: 32.865938, lng: -117.250414 },
        map: map
    });

    const manMuseumMarker = new google.maps.Marker({
        position: { lat: 32.731771, lng: -117.152293 },
        map: map
    });

    const adamsBookstoreMarker = new google.maps.Marker({
        position: { lat: 32.763499, lng: -117.117130 },
        map: map
    });

    const crazeeBurgerMarker = new google.maps.Marker({
        position: { lat: 32.750202, lng: -117.129937 },
        map: map
    });

    const convoyStMarker = new google.maps.Marker({
        position: { lat: 32.824932, lng: -117.155888 },
        map: map
    });

    const aguaCalienteMarker = new google.maps.Marker({
        position: { lat: 32.951521, lng: -116.305594},
        map: map
    });

    const thriftTraderMarker = new google.maps.Marker({
        position: { lat: 32.799316, lng: -117.244245 },
        map: map
    });

    const fashionValleyMarker = new google.maps.Marker({
        position: { lat: 32.767874, lng: -117.166531 },
        map: map
    });

    const FarmersMktMarker = new google.maps.Marker({
        position: { lat: 32.746271, lng: -117.250631 },
        map: map
    });

    const scubaHouseMarker = new google.maps.Marker({
        position: { lat: 32.819280, lng: -117.225294 },
        map: map
    });

    const casbahMarker = new google.maps.Marker({
        position: { lat: 32.730278, lng: -117.171850 },
        map: map
    });

    const legolandMarker = new google.maps.Marker({
        position: { lat: 33.128048, lng: -117.311518 },
        map: map
    });

    const libraryMarker = new google.maps.Marker({
        position: { lat: 32.709029, lng: -117.154239 },
        map: map
    });

    const oldGlobeMarker = new google.maps.Marker({
        position: { lat: 32.732280, lng: -117.151504 },
        map: map
    });

    const organPavilionMarker = new google.maps.Marker({
        position: { lat: 32.729410, lng: -117.150415 },
        map: map
    });

    const RaysMarker = new google.maps.Marker({
        position: { lat: 32.782899, lng: -117.252743 },
        map: map
    });

    const driveInMarker = new google.maps.Marker({
        position: { lat: 32.578109, lng: -117.086512 },
        map: map
    });

    const nightRaceMarker = new google.maps.Marker({
        position: { lat: 32.731115, lng: -117.138240 },
        map: map
    });

    const blacksBeachMarker = new google.maps.Marker({
        position: { lat: 32.887686, lng: -117.252963 },
        map: map
    });

    const barrioLoganMarker = new google.maps.Marker({
        position: { lat: 32.692975, lng: -117.136492 },
        map: map
    });

    const dessertsMarker = new google.maps.Marker({
        position: { lat: 32.720263, lng: -117.165970 },
        map: map
    });

    const hashHouseMarker = new google.maps.Marker({
        position: { lat: 32.743886, lng: -117.160621 },
        map: map
    });
};