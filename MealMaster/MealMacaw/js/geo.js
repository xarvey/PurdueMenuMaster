var mapDiv;
window.onload = function(){
    mapDiv = $('.location');
    mapDiv.innerHTML = 'Trying to get your location...';
    if(navigator.geolocation)
        navigator.geolocation.getCurrentPosition(handleGetCurrentPosition, handleGetCurrentPositionError);
}


function handleGetCurrentPosition(location){
    
    var position = new google.maps.LatLng(location.coords.latitude, location.coords.longitude)
    
    var map = new google.maps.Map(mapDiv, {
        zoom: 16,
        center: position,
        mapTypeId: google.maps.MapTypeId.HYBRID
    });
    
    var marker = new google.maps.Marker({
        position: position,
        map: map
    })
    
    var x = location.coords.latitude;
    var y = location.coords.longitude;
    
    new google.maps.Geocoder().geocode({location: position}, handleGeocoderGetLocations);
    
    $(".loaction").append(x+" "+y);
}


function handleGeocoderGetLocations( addresses, status ){
        if (status != google.maps.GeocoderStatus.OK)
            return maybe_log( 'failed to talk to google' );
            
        var city = getCityFromPlacemarks(addresses);
        var country = getCountryFromPlacemarks(addresses);
        
        var mapOverlay = document.getElementById('gotcha-at');
        mapOverlay.innerHTML = 'Gotcha at <strong>' + addresses[0].formatted_address + '</strong>';
        mapOverlay.style.visibility = 'visible';
    }
    
    
function getCityFromPlacemarks( placemarks ){
    return extractNameFromGoogleGeocoderResults('locality', placemarks)
}


function getCountryFromPlacemarks(placemarks){
    return extractNameFromGoogleGeocoderResults('country', placemarks)
}


function extractNameFromGoogleGeocoderResults(type, results){
    for( var i = 0, l = results.length; i < l; i ++)
        for(var j = 0, l2 = results[i].types.length; j < l2; j++ )
            if( results[i].types[j] == type )
                 return results[i].address_components[0].long_name;
    return ''
}
    
function handleGetCurrentPositionError(){
    mapDiv.innerHTML = 'Something went horribly wrong!';
}
