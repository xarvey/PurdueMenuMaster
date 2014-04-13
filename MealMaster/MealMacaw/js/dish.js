(function() {
  var $drawer = $('.js-drawer');
  var $screen = $('.js-screen');

  $('#dish').text(localStorage.getItem("menu"));
  $drawer.on('click', toggleSidebar);
  function toggleSidebar(e){
    var target = 210; 
    if($screen.position().left == 210)
      target = 0;
    $screen.css('left', target); 
  }
})();
