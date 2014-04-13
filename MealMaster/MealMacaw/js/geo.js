window.onload = function(){
    //getLocation();
}

function getLocation()
  {
  if (navigator.geolocation)
    {
    navigator.geolocation.getCurrentPosition(showPosition);
    }
  else{}
  }
function showPosition(position)
  {
      $('.location').text(position.coords.latitude + " " + position.coords.longitude);
  }
