var breakfast = new Array();
var lunch = new Array();
var dinner = new Array();

var counter;

$.ajax({
	url: 'menu.xml',
	dataType: 'xml',
	
	success: function(data)
	{
	$(data).find('Menu Breakfast MenuSection Name').each(function()
	{
		
		var item = $(this).text();
		breakfast.push(item);
		//alert(item);
	});
	
	
	$(data).find('Menu Lunch MenuSection Name').each(function()
	{
		
		var item = $(this).text();
		lunch.push(item);
        $( ".viewport" ).append( "<div onClick=\"window.location='dish.html';\" class=\"dishcontainer\"><p class=\"dishtext\">"+item+"</p><div class=\"dishbg\"></div</div>" );
		
	});
	
	$(data).find('Menu Dinner MenuSection Name').each(function()
	{
		
		var item = $(this).text();
		dinner.push(item);
	});
	
	
	
	
	},
	
	error: function() {
	$('.timeline').text('fuck you');
		//confirm('Fuck you');
		}
});