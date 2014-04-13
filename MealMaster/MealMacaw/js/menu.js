var breakfast = new Array();
var lunch = new Array();
var dinner = new Array();

var breakfast_category =new Array();
var lunch_category = new Array();
var dinner_category = new Array();

var breakfast_item =new Array();
var lunch_item = new Array();
var dinner_item = new Array();


var current = 2;
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
	get_breakfast(data);
	get_lunch(data);	
    get_dinner(data);
	show_lunch();
    localStorage.setItem("currentTab",1);
	},
	
	error: function() {
	$('.timeline').text('fuck you');
		//confirm('Fuck you');
    }
    
});


function show_breakfast()
{
    for (i=0; i<breakfast.length; i++)
    {
    if (breakfast_category.indexOf( breakfast[i] )!=-1)
    $( ".viewport" ).append( "<div class=\"meal-section\"><p class=\"sectiontext\">"+breakfast[i]+"</p><div class=\"meal-section-text\"></div></div>");
        else
    $( ".viewport" ).append( "<div onClick=\"alerts("+i+");\" class=\"dishcontainer d"+i.toString+"\" href='dish.html'><p class=\"dishtext\">"+breakfast[i]+"</p><div class=\"dishbg\"></div</div>" );   
    }
}

function show_lunch()
{
    for (i=0; i<lunch.length; i++)
    {
    if (lunch_category.indexOf( lunch[i] )!=-1)
    $( ".viewport" ).append( "<div class=\"meal-section\"><p class=\"sectiontext\">"+lunch[i]+"</p><div class=\"meal-section-text\"></div></div>");
        else
    $( ".viewport" ).append( "<div onClick=\"alerts("+i+");\" class=\"dishcontainer d"+i.toString+"\" href='dish.html'><p class=\"dishtext\">"+lunch[i]+"</p><div class=\"dishbg\"></div</div>" );   
    }
}

function show_dinner()
{
    for (i=0; i<dinner.length; i++)
    {
    if (dinner_category.indexOf( dinner[i] )!=-1)
    $( ".viewport" ).append( "<div class=\"meal-section\"><p class=\"sectiontext\">"+dinner[i]+"</p><div class=\"meal-section-text\"></div></div>");
        else
    $( ".viewport" ).append( "<div onClick=\"alerts("+i+");\" class=\"dishcontainer d"+i.toString+"\" href='dish.html'><p class=\"dishtext\">"+dinner[i]+"</p><div class=\"dishbg\"></div</div>" );   
    }
}


function get_breakfast(data)
    {
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
		if (!flag) 
        {
            breakfast_category.push(breakfast[i]);
        }
	}    
    }

function get_lunch(data)
{
$(data).find('Menu Lunch MenuSection Name').each(function() //all the name
	{
		var item = $(this).text();
		lunch.push(item);       
		
	});
	
	$(data).find('Menu Lunch MenuSection MenuItem Name').each(function() //all the item
	{
		
		var item = new menu_item($(this).text(),$(this).next().text(),0);	
		lunch_item.push(item);
        if (localStorage.getItem(item.name)==null)
        localStorage.setItem(item.name,item.score);
			});
        
    for (i=0;i<lunch.length;i++)
	{
		var flag=false;
		for (j=0; j<lunch_item.length; j++)
		 if (lunch_item[j].name==lunch[i]) flag=true;
		if (!flag) 
        {
            lunch_category.push(lunch[i]);
        }
	}
}



function get_dinner(data)
{
$(data).find('Menu Dinner MenuSection Name').each(function() //all the name
	{
		var item = $(this).text();
		dinner.push(item);       
		
	});
	
	$(data).find('Menu Dinner MenuSection MenuItem Name').each(function() //all the item
	{
		
		var item = new menu_item($(this).text(),$(this).next().text(),0);	
		dinner_item.push(item);
        if (localStorage.getItem(item.name)==null)
        localStorage.setItem(item.name,item.score);
			});
        
    for (i=0;i<dinner.length;i++)
	{
		var flag=false;
		for (j=0; j<dinner_item.length; j++)
		 if (dinner_item[j].name==dinner[i]) flag=true;
		if (!flag) 
        {
            dinner_category.push(dinner[i]);
        }
	}
}