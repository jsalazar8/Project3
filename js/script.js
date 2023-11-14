function init() {
    var el = document.getElementById('mapcanvas');
    var myLocation = new google.maps.LatLng(20.682027, -103.462431);
    var mapOptions = {
	  center: myLocation,
	  zoom: 15,
	  mapTypeId: google.maps.MapTypeId.SATELLITE,
	  mapTypeControlOptions: {
	  position: google.maps.ControlPosition.BOTTOM_CENTER
		}
	};

	var myMap = new google.maps.Map(el, mapOptions);
    var marker = new google.maps.Marker({
	  position: myLocation,
	  map: myMap,
      animation: google.maps.Animation.DROP,
      icon:'images/chivas.png'
    });


    var contentString ='<h1>Estadio Akron</h1><p>Estadio Akron is the home football stadium for my favorite football club C.D. Guadalajara.</p>';

    var infowindow = new google.maps.InfoWindow({
      content: contentString
    });

    google.maps.event.addListener(marker, 'mouseover', function() {
    infowindow.open(myMap, marker);
    });
    }
    google.maps.event.addDomListener(window, 'load', init);