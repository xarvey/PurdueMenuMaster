var breakfast = new Array();
var lunch = new Array();
var dinner = new Array();

var breakfast_category =new Array();
var lunch_category = new Array();

var breakfast_item =new Array();
var lunch_item = new Array();




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
		
	});
	
	$(data).find('Menu Breakfast MenuSection MenuItem Name').each(function()
	{
		
		var item = $(this).text();
		breakfast_item.push(item);
	});
	
	for (i=0;i<breakfast.length;i++)
	{
		if (breakfast_item.indexOf(breakfast[i])==-1)
			breakfast_category.push(breakfast[i]);
	}
	
	$(data).find('Menu Lunch MenuSection Name').each(function() //all the name
	{
		
		var item = $(this).text();
		lunch.push(item);
        
		
	});
	
	$(data).find('Menu Lunch MenuSection MenuItem Name').each(function() //all the item
	{
		
		var item = $(this).text();
		lunch_item.push(item);
			});
	
	for (i=0;i<lunch.length;i++) //category
	{
		if (lunch_item.indexOf(lunch[i])==-1)
		{
			lunch_category.push(lunch[i]);
			$( ".viewport" ).append( "<div onClick=\"window.location='dish.html';\" class=\"dishcontainer\"><p class=\"dishtext\">"+"@@@@"+lunch[i]+"@@@@"+"</p><div class=\"dishbg\"></div</div>" );
		}
		else
		$( ".viewport" ).append( "<div onClick=\"window.location='dish.html';\" class=\"dishcontainer\"><p class=\"dishtext\">"+lunch[i]+"</p><div class=\"dishbg\"></div</div>" );
			
	}
	
	
	
	
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