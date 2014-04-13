(function() {
  var $fav2 = $('.js-fav2');
  var $fav1 = $('.js-fav1');
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


    
