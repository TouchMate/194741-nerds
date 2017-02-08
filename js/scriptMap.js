var map;

function initMap() {
	var map = new google.maps.Map(document.getElementById("map-canvas"), {
		center: {
			lat: 59.9388232,
			lng: 30.320875
		},
		zoom: 17
	});
	var marker = new google.maps.Marker({
		position: {
			lat: 59.9386832,
			lng: 30.3238000
		},
		map: map,
		tile: "hello",
		icon: "../img/map-marker.png",
	});
}