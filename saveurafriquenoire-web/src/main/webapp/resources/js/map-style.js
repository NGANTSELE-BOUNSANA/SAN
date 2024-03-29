function mapStylesInit() {
	var styledMapOptionsYellow = {map: map, name: 'yellow'};
	var sMapType = new google.maps.StyledMapType( [
										{
										"featureType": "all",
										"elementType": "labels.text.fill",
										"stylers": [
											{
												"saturation": 0
											},
											{
												"color": "#f5f5f5"
											},
											{
												"lightness": 0
											}
										]
									},
									{
										"featureType": "all",
										"elementType": "labels.text.stroke",
										"stylers": [
											{
												"visibility": "on"
											},
											{
												"color": "#000000"
											},
											{
												"lightness": 16
											}
										]
									},
									{
										"featureType": "all",
										"elementType": "labels.icon",
										"stylers": [
											{
												"visibility": "off"
											}
										]
									},
									{
										"featureType": "administrative",
										"elementType": "geometry.fill",
										"stylers": [
											{
												"color": "#000000"
											},
											{
												"lightness": 20
											}
										]
									},
									{
										"featureType": "administrative",
										"elementType": "geometry.stroke",
										"stylers": [
											{
												"color": "#2c2c2c"
											},
											{
												"lightness": 0
											},
											{
												"weight": 1.2
											}
										]
									},
									{
										"featureType": "landscape",
										"elementType": "geometry",
										"stylers": [
											{
												"color": "#070707"
											},
											{
												"lightness": 0
											}
										]
									},
									{
										"featureType": "poi",
										"elementType": "geometry",
										"stylers": [
											{
												"color": "#070707"
											},
											{
												"lightness": 0
											}
										]
									},
									{
										"featureType": "road.highway",
										"elementType": "geometry",
										"stylers": [
											{
												"color": "#2c2c2c"
											},
											{
												"gamma": "0"
											},
											{
												"weight": "0"
											}
										]
									},
									{
										"featureType": "road.highway",
										"elementType": "geometry.fill",
										"stylers": [
											{
												"color": "#000000"
											},
											{
												"lightness": 17
											}
										]
									},
									{
										"featureType": "road.highway",
										"elementType": "geometry.stroke",
										"stylers": [
											{
												"color": "#000000"
											},
											{
												"lightness": 29
											},
											{
												"weight": 0.2
											}
										]
									},
									{
										"featureType": "road.arterial",
										"elementType": "geometry",
										"stylers": [
											{
												"color": "#000000"
											},
											{
												"lightness": 18
											}
										]
									},
									{
										"featureType": "road.local",
										"elementType": "geometry",
										"stylers": [
											{
												"color": "#2c2c2c"
											},
											{
												"lightness": 0
											}
										]
									},
									{
										"featureType": "transit",
										"elementType": "geometry",
										"stylers": [
											{
												"color": "#2d2d2d"
											},
											{
												"lightness": 19
											}
										]
									},
									{
										"featureType": "water",
										"elementType": "geometry",
										"stylers": [
											{
												"color": "#c6a325"
											},
											{
												"lightness": 0
											}
										]
									}],styledMapOptionsYellow);
	map.mapTypes.set('yellow', sMapType);
	
	var styledMapOptionsBlue = {map: map, name: 'blue'};
	var sMapType = new google.maps.StyledMapType( [
										{
										"featureType": "all",
										"elementType": "labels.text.fill",
										"stylers": [
											{
												"saturation": 0
											},
											{
												"color": "#f5f5f5"
											},
											{
												"lightness": 0
											}
										]
									},
									{
										"featureType": "all",
										"elementType": "labels.text.stroke",
										"stylers": [
											{
												"visibility": "on"
											},
											{
												"color": "#000000"
											},
											{
												"lightness": 16
											}
										]
									},
									{
										"featureType": "all",
										"elementType": "labels.icon",
										"stylers": [
											{
												"visibility": "off"
											}
										]
									},
									{
										"featureType": "administrative",
										"elementType": "geometry.fill",
										"stylers": [
											{
												"color": "#000000"
											},
											{
												"lightness": 20
											}
										]
									},
									{
										"featureType": "administrative",
										"elementType": "geometry.stroke",
										"stylers": [
											{
												"color": "#2c2c2c"
											},
											{
												"lightness": 0
											},
											{
												"weight": 1.2
											}
										]
									},
									{
										"featureType": "landscape",
										"elementType": "geometry",
										"stylers": [
											{
												"color": "#070707"
											},
											{
												"lightness": 0
											}
										]
									},
									{
										"featureType": "poi",
										"elementType": "geometry",
										"stylers": [
											{
												"color": "#070707"
											},
											{
												"lightness": 0
											}
										]
									},
									{
										"featureType": "road.highway",
										"elementType": "geometry",
										"stylers": [
											{
												"color": "#2c2c2c"
											},
											{
												"gamma": "0"
											},
											{
												"weight": "0"
											}
										]
									},
									{
										"featureType": "road.highway",
										"elementType": "geometry.fill",
										"stylers": [
											{
												"color": "#000000"
											},
											{
												"lightness": 17
											}
										]
									},
									{
										"featureType": "road.highway",
										"elementType": "geometry.stroke",
										"stylers": [
											{
												"color": "#000000"
											},
											{
												"lightness": 29
											},
											{
												"weight": 0.2
											}
										]
									},
									{
										"featureType": "road.arterial",
										"elementType": "geometry",
										"stylers": [
											{
												"color": "#000000"
											},
											{
												"lightness": 18
											}
										]
									},
									{
										"featureType": "road.local",
										"elementType": "geometry",
										"stylers": [
											{
												"color": "#2c2c2c"
											},
											{
												"lightness": 0
											}
										]
									},
									{
										"featureType": "transit",
										"elementType": "geometry",
										"stylers": [
											{
												"color": "#2d2d2d"
											},
											{
												"lightness": 19
											}
										]
									},
									{
										"featureType": "water",
										"elementType": "geometry",
										"stylers": [
											{
												"color": "#01bafd"
											},
											{
												"lightness": 0
											}
										]
									}],styledMapOptionsBlue);
	map.mapTypes.set('blue', sMapType);
	
	var styledMapOptionsGreen = {map: map, name: 'green'};
	var sMapType = new google.maps.StyledMapType( [
																			{
										"featureType": "all",
										"elementType": "labels.text.fill",
										"stylers": [
											{
												"saturation": 0
											},
											{
												"color": "#f5f5f5"
											},
											{
												"lightness": 0
											}
										]
									},
									{
										"featureType": "all",
										"elementType": "labels.text.stroke",
										"stylers": [
											{
												"visibility": "on"
											},
											{
												"color": "#000000"
											},
											{
												"lightness": 16
											}
										]
									},
									{
										"featureType": "all",
										"elementType": "labels.icon",
										"stylers": [
											{
												"visibility": "off"
											}
										]
									},
									{
										"featureType": "administrative",
										"elementType": "geometry.fill",
										"stylers": [
											{
												"color": "#000000"
											},
											{
												"lightness": 20
											}
										]
									},
									{
										"featureType": "administrative",
										"elementType": "geometry.stroke",
										"stylers": [
											{
												"color": "#2c2c2c"
											},
											{
												"lightness": 0
											},
											{
												"weight": 1.2
											}
										]
									},
									{
										"featureType": "landscape",
										"elementType": "geometry",
										"stylers": [
											{
												"color": "#070707"
											},
											{
												"lightness": 0
											}
										]
									},
									{
										"featureType": "poi",
										"elementType": "geometry",
										"stylers": [
											{
												"color": "#070707"
											},
											{
												"lightness": 0
											}
										]
									},
									{
										"featureType": "road.highway",
										"elementType": "geometry",
										"stylers": [
											{
												"color": "#2c2c2c"
											},
											{
												"gamma": "0"
											},
											{
												"weight": "0"
											}
										]
									},
									{
										"featureType": "road.highway",
										"elementType": "geometry.fill",
										"stylers": [
											{
												"color": "#000000"
											},
											{
												"lightness": 17
											}
										]
									},
									{
										"featureType": "road.highway",
										"elementType": "geometry.stroke",
										"stylers": [
											{
												"color": "#000000"
											},
											{
												"lightness": 29
											},
											{
												"weight": 0.2
											}
										]
									},
									{
										"featureType": "road.arterial",
										"elementType": "geometry",
										"stylers": [
											{
												"color": "#000000"
											},
											{
												"lightness": 18
											}
										]
									},
									{
										"featureType": "road.local",
										"elementType": "geometry",
										"stylers": [
											{
												"color": "#2c2c2c"
											},
											{
												"lightness": 0
											}
										]
									},
									{
										"featureType": "transit",
										"elementType": "geometry",
										"stylers": [
											{
												"color": "#2d2d2d"
											},
											{
												"lightness": 19
											}
										]
									},

									{
										"featureType": "water",
										"elementType": "geometry",
										"stylers": [
											{
												"color": "#82b440"
											},
											{
												"lightness": 0
											}
										]
									}],styledMapOptionsGreen);
	map.mapTypes.set('green', sMapType);
	
	var styledMapOptionsOrange = {map: map, name: 'orange'};
	var sMapType = new google.maps.StyledMapType( [
																			{
										"featureType": "all",
										"elementType": "labels.text.fill",
										"stylers": [
											{
												"saturation": 0
											},
											{
												"color": "#f5f5f5"
											},
											{
												"lightness": 0
											}
										]
									},
									{
										"featureType": "all",
										"elementType": "labels.text.stroke",
										"stylers": [
											{
												"visibility": "on"
											},
											{
												"color": "#000000"
											},
											{
												"lightness": 16
											}
										]
									},
									{
										"featureType": "all",
										"elementType": "labels.icon",
										"stylers": [
											{
												"visibility": "off"
											}
										]
									},
									{
										"featureType": "administrative",
										"elementType": "geometry.fill",
										"stylers": [
											{
												"color": "#000000"
											},
											{
												"lightness": 20
											}
										]
									},
									{
										"featureType": "administrative",
										"elementType": "geometry.stroke",
										"stylers": [
											{
												"color": "#2c2c2c"
											},
											{
												"lightness": 0
											},
											{
												"weight": 1.2
											}
										]
									},
									{
										"featureType": "landscape",
										"elementType": "geometry",
										"stylers": [
											{
												"color": "#070707"
											},
											{
												"lightness": 0
											}
										]
									},
									{
										"featureType": "poi",
										"elementType": "geometry",
										"stylers": [
											{
												"color": "#070707"
											},
											{
												"lightness": 0
											}
										]
									},
									{
										"featureType": "road.highway",
										"elementType": "geometry",
										"stylers": [
											{
												"color": "#2c2c2c"
											},
											{
												"gamma": "0"
											},
											{
												"weight": "0"
											}
										]
									},
									{
										"featureType": "road.highway",
										"elementType": "geometry.fill",
										"stylers": [
											{
												"color": "#000000"
											},
											{
												"lightness": 17
											}
										]
									},
									{
										"featureType": "road.highway",
										"elementType": "geometry.stroke",
										"stylers": [
											{
												"color": "#000000"
											},
											{
												"lightness": 29
											},
											{
												"weight": 0.2
											}
										]
									},
									{
										"featureType": "road.arterial",
										"elementType": "geometry",
										"stylers": [
											{
												"color": "#000000"
											},
											{
												"lightness": 18
											}
										]
									},
									{
										"featureType": "road.local",
										"elementType": "geometry",
										"stylers": [
											{
												"color": "#2c2c2c"
											},
											{
												"lightness": 0
											}
										]
									},
									{
										"featureType": "transit",
										"elementType": "geometry",
										"stylers": [
											{
												"color": "#2d2d2d"
											},
											{
												"lightness": 19
											}
										]
									},

									{
										"featureType": "water",
										"elementType": "geometry",
										"stylers": [
											{
												"color": "#ff6702"
											},
											{
												"lightness": 0
											}
										]
									}],styledMapOptionsOrange);
	map.mapTypes.set('orange', sMapType);
	
	var styledMapOptionsPurple = {map: map, name: 'purple'};
	var sMapType = new google.maps.StyledMapType( [
																			{
										"featureType": "all",
										"elementType": "labels.text.fill",
										"stylers": [
											{
												"saturation": 0
											},
											{
												"color": "#f5f5f5"
											},
											{
												"lightness": 0
											}
										]
									},
									{
										"featureType": "all",
										"elementType": "labels.text.stroke",
										"stylers": [
											{
												"visibility": "on"
											},
											{
												"color": "#000000"
											},
											{
												"lightness": 16
											}
										]
									},
									{
										"featureType": "all",
										"elementType": "labels.icon",
										"stylers": [
											{
												"visibility": "off"
											}
										]
									},
									{
										"featureType": "administrative",
										"elementType": "geometry.fill",
										"stylers": [
											{
												"color": "#000000"
											},
											{
												"lightness": 20
											}
										]
									},
									{
										"featureType": "administrative",
										"elementType": "geometry.stroke",
										"stylers": [
											{
												"color": "#2c2c2c"
											},
											{
												"lightness": 0
											},
											{
												"weight": 1.2
											}
										]
									},
									{
										"featureType": "landscape",
										"elementType": "geometry",
										"stylers": [
											{
												"color": "#070707"
											},
											{
												"lightness": 0
											}
										]
									},
									{
										"featureType": "poi",
										"elementType": "geometry",
										"stylers": [
											{
												"color": "#070707"
											},
											{
												"lightness": 0
											}
										]
									},
									{
										"featureType": "road.highway",
										"elementType": "geometry",
										"stylers": [
											{
												"color": "#2c2c2c"
											},
											{
												"gamma": "0"
											},
											{
												"weight": "0"
											}
										]
									},
									{
										"featureType": "road.highway",
										"elementType": "geometry.fill",
										"stylers": [
											{
												"color": "#000000"
											},
											{
												"lightness": 17
											}
										]
									},
									{
										"featureType": "road.highway",
										"elementType": "geometry.stroke",
										"stylers": [
											{
												"color": "#000000"
											},
											{
												"lightness": 29
											},
											{
												"weight": 0.2
											}
										]
									},
									{
										"featureType": "road.arterial",
										"elementType": "geometry",
										"stylers": [
											{
												"color": "#000000"
											},
											{
												"lightness": 18
											}
										]
									},
									{
										"featureType": "road.local",
										"elementType": "geometry",
										"stylers": [
											{
												"color": "#2c2c2c"
											},
											{
												"lightness": 0
											}
										]
									},
									{
										"featureType": "transit",
										"elementType": "geometry",
										"stylers": [
											{
												"color": "#2d2d2d"
											},
											{
												"lightness": 19
											}
										]
									},

									{
										"featureType": "water",
										"elementType": "geometry",
										"stylers": [
											{
												"color": "#8d5ce6"
											},
											{
												"lightness": 0
											}
										]
									}],styledMapOptionsPurple);
	map.mapTypes.set('purple', sMapType);
	
	
}