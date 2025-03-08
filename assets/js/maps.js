function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 13,
      center: { lat: 51.5074, lng: -0.1278 },
    });
  
    var labels = "ABCDEFGHIJKLMNOPQRTSUVWXYZ";
    var locations = [
        { lat: 51.5154, lng: -0.1420 }, // Oxford Circus
    ];
  
    var markers = locations.map(function (location, i) {
      return new google.maps.Marker({
        position: location,
        label: labels[i % labels.length],
      });
    });
  
    new markerClusterer.MarkerClusterer({
      map,
      markers,
    });
  }