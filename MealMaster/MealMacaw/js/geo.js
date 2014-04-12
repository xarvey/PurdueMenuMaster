var mapDiv;
window.onload = function(){
    mapDiv = $('.location');
    mapDiv.innerHTML = 'Trying to get your location...';
    if(navigator.geolocation)
        navigator.geolocation.getCurrentPosition(handleGetCurrentPosition, handleGetCurrentPositionError);
}

var x=document.getElementById("demo");
function getLocation()
  {
  if (navigator.geolocation)
    {
    navigator.geolocation.getCurrentPosition(showPosition);
    }
  else{x.innerHTML="Geolocation is not supported by this browser.";}
  }
function showPosition(position)
  {
  alert("Latitude: " + position.coords.latitude + 
  "Longitude: " + position.coords.longitude);	
  }
