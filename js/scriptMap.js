var map;

function initMap() {
	var map = new google.maps.Map(document.getElementById("map-canvas"), {
		center: {
			lat: 59.9391232,
			lng: 30.321575
		},
		zoom: 17
	});
	var image="img/map-marker.png"
	var marker = new google.maps.Marker({
		position: {
			lat: 59.9386832,
			lng: 30.3238000
		},
		map: map,
		tile: "hello",
		icon: image,
		
	});
}
