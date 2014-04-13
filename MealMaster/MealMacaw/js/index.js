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
 
})
 var tot=new Array();
  function cal_score()
    {
        var d = new Date();
        var k=d.getHours()
        var i;
        var j;
        for (j=0; j<2; j++)
        {
            tot[j]=0;
        for (i=0; i<breakfast_item[j].length; i++)
        {
            var num=parseInt(localStorage.getItem(breakfast_item[j][i].name));
            tot[j]+=num;
        }
        for (i=0; i<lunch_item[j].length; i++)
        {
            var num=parseInt(localStorage.getItem(lunch_item[j][i].name));
            tot[j]+=num;
        }
        
        for (i=0; i<dinner_item[j].length; i++)
        {
            var num=parseInt(localStorage.getItem(dinner_item[j][i].name));
            tot[j]+=num;
        }
        }
        
    }

    
