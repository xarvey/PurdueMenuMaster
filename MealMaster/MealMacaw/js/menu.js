var breakfast = new Array();
var lunch = new Array();
var dinner = new Array();

var breakfast_category =new Array();
var lunch_category = new Array();

var breakfast_item =new Array();
var lunch_item = new Array();

function menu_item(name,vegetarian,score)
{
this.name=name;
this.vegetarian=vegetarian;
this.score=score;
}

$.ajax({
	url: 'menu.xml',
	dataType: 'xml',
	
	success: function(data)
	{
<<<<<<< HEAD
	//$(data).find('Menu Breakfast MenuSection Name').each(function()
=======
>>>>>>> FETCH_HEAD
	$(data).find('Menu Breakfast MenuSection Name').each(function()
	{
		
		var item = $(this).text();
		breakfast.push(item);
		
	});
	
	$(data).find('Menu Breakfast MenuSection MenuItem Name').each(function()
	{			
		var item = new menu_item($(this).text(),$(this).next().text(),0);	
		breakfast_item.push(item);
		
	});
	
	for (i=0;i<breakfast.length;i++)
	{
		var flag=false;
		for (j=0; j<breakfast_item.length; j++)
		 if (breakfast_item[j].name==breakfast[i]) flag=true;
		if (!flag) breakfast_category.push(breakfast[i]);
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
		if (lunch_item.indexOf(lunch[i])==-1){
			lunch_category.push(lunch[i]);
			$( ".viewport" ).append( "<div class=\"meal-section\"><p class=\"sectiontext\">"+lunch[i]+"</p><div class=\"meal-section-text\"></div></div>");
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