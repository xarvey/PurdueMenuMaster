(function() {
  var $drawer = $('.js-drawer');
  var $screen = $('.js-screen');

  $drawer.on('click', toggleSidebar);

  function toggleSidebar(e){
    var target = 210; 
    if($screen.position().left == 210)
      target = 0;
    $screen.css('left', target); 
  }
  
})();