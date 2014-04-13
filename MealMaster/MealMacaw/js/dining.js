(function() {
  var $drawer = $('.js-drawer');
  var $screen = $('.js-screen');

  $('.js-drawer').on('click', toggleSidebar);
  $('.diningname').text(localStorage.getItem("diningname"));
  function toggleSidebar(e){
    var target = 210; 
    if($screen.position().left == 210)
      target = 0;
    $screen.css('left', target); 
  }
  
})();