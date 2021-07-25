
          function initMap() {
            var map = new google.maps.Map(document.getElementById("map"), {
                zoom: 3,
                center: {
                     lat: 46.619261,
                    lng: -33.134766
                }
            });

          var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

          var locations = [
              { lat: 53.47849, lng: -2.21120 },
              { lat: 51.50986, lng: 0.11939 },
              { lat: 54.58550, lng: -5.84098 },
              { lat: 41.70183, lng: 2.85011 },
              { lat: 25.37383, lng: 55.26247 },
              { lat: 41.38646, lng: 2.18859 },
              { lat: 49.05717, lng: 2.07283 },
              { lat: 56.12924, lng: -3.44052 },
              { lat: 53.29555, lng: -2.82498 },
              { lat: 53.81352, lng: -3.24112 }
          ];

          var markers = locations.map(function(location, i) {
              return new google.maps.Marker({
                  position: location,
                  label: labels[i % labels.length]
              });
          })

          var markerCluster = new MarkerClusterer(map, markers, {
        imagePath:
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  });

  
}