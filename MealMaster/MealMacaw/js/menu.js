var breakfast = new Array(5);
var lunch = new Array(5);
var dinner = new Array(5);

var breakfast_category =new Array(5);
var lunch_category = new Array(5);
var dinner_category = new Array(5);

var breakfast_item =new Array(5);
var lunch_item = new Array(5);
var dinner_item = new Array(5);


var current = 2;
function menu_item(name,vegetarian,score,location)
{
    this.name=name;
    this.vegetarian=vegetarian;
    this.score=score;
    this.location=location;
}
var dining_court=['earhart',
                  'wiley',
                  'ford',
                  'hillenbrand',
                  'windsor',                  
                 ];
                  
var dining; 
var x = parseInt(localStorage.getItem("dining"));
$.ajax({
    
	url: dining_court[parseInt(localStorage.getItem("dining"))]+'.xml',
	dataType: 'xml',
	
	success: function(data)
	{
        
	    get_breakfast(data,x);
	    get_lunch(data,x);	
        get_dinner(data,x);
	    show_lunch();
        localStorage.setItem("currentTab",1);
	},
	
	error: function() {
	$('.timeline').text('fuck you');
		//confirm('Fuck you');
    }
    
});

        /*        
$.ajax({
    
	url: dining_court[1]+'.xml',
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
    
});*/


function show_breakfast()
{
    var x = parseInt(localStorage.getItem("dining"));
    for (i=0; i<breakfast[x].length; i++)
    {
    if (breakfast_category[x].indexOf( breakfast[x][i] )!=-1)
    $( ".viewport" ).append( "<div class=\"meal-section\"><p class=\"sectiontext\">"+breakfast[x][i]+"</p><div class=\"meal-section-text\"></div></div>");
        else
    $( ".viewport" ).append( "<div onClick=\"alerts("+i+");\" class=\"dishcontainer d"+i.toString+"\" href='dish.html'><p class=\"dishtext\">"+breakfast[x][i]+"</p><div class=\"dishbg\"></div</div>" );   
    }
}

function show_lunch()
{
    var x = parseInt(localStorage.getItem("dining"));
    for (i=0; i<lunch[x].length; i++)
    {
    if (lunch_category[x].indexOf( lunch[x][i] )!=-1)
    $( ".viewport" ).append( "<div class=\"meal-section\"><p class=\"sectiontext\">"+lunch[x][i]+"</p><div class=\"meal-section-text\"></div></div>");
        else
    $( ".viewport" ).append( "<div onClick=\"alerts("+i+");\" class=\"dishcontainer d"+i.toString+"\" href='dish.html'><p class=\"dishtext\">"+lunch[x][i]+"</p><div class=\"dishbg\"></div</div>");   
    }
}

function show_dinner()
{
    var x = parseInt(localStorage.getItem("dining"));
    for (i=0; i<dinner[x].length; i++)
    {
    if (dinner_category[x].indexOf( dinner[x][i] )!=-1)
    $( ".viewport" ).append( "<div class=\"meal-section\"><p class=\"sectiontext\">"+dinner[x][i]+"</p><div class=\"meal-section-text\"></div></div>");
        else
    $( ".viewport" ).append( "<div onClick=\"alerts("+i+");\" class=\"dishcontainer d"+i.toString+"\" href='dish.html'><p class=\"dishtext\">"+dinner[x][i]+"</p><div class=\"dishbg\"></div</div>" );   
    }
}


function get_breakfast(data,x)
{
    breakfast[x] = new Array();
    breakfast_item[x] = new Array();
    breakfast_category[x] = new Array();
    $(data).find('Menu Breakfast MenuSection Name').each(function()
	{
		
		var item = $(this).text();
		breakfast[x].push(item);
		
	});
	
	$(data).find('Menu Breakfast MenuSection MenuItem Name').each(function()
	{			
		var item = new menu_item($(this).text(),$(this).next().text(),0);	
		breakfast_item[x].push(item);		
        if (localStorage.getItem(item.name)==null)
            localStorage.setItem(item.name,item.score);
	});
	
	for (i=0;i<breakfast[x].length;i++)
	{
		var flag=false;
		for (j=0; j<breakfast_item[x].length; j++)
		 if (breakfast_item[x][j].name==breakfast[x][i]) flag=true;
		if (!flag) 
        {
            breakfast_category[x].push(breakfast[x][i]);
        }
	}    
    }

function get_lunch(data,x)
{
    lunch[x] = new Array();
    lunch_item[x] = new Array();
    lunch_category[x] = new Array();
    $(data).find('Menu Lunch MenuSection Name').each(function() //all the name
	{
		var item = $(this).text();
		lunch[x].push(item);       
		
	});
	
	$(data).find('Menu Lunch MenuSection MenuItem Name').each(function() //all the item
	{
		
		var item = new menu_item($(this).text(),$(this).next().text(),0);	
		lunch_item[x].push(item);
        if (localStorage.getItem(item.name)==null)
            localStorage.setItem(item.name,item.score);
    });
        
    for (i=0;i<lunch[x].length;i++)
	{
		var flag=false;
		for (j=0; j<lunch_item[x].length; j++)
		 if (lunch_item[x][j].name==lunch[x][i]) flag=true;
		if (!flag) 
        {
            lunch_category[x].push(lunch[x][i]);
        }
	}
}



function get_dinner(data,x)
{
    dinner[x] = new Array();
    dinner_item[x] = new Array();
    dinner_category[x] = new Array();
    $(data).find('Menu Dinner MenuSection Name').each(function() //all the name
	{
		var item = $(this).text();
		dinner[x].push(item);       
		
	});
	
	$(data).find('Menu Dinner MenuSection MenuItem Name').each(function() //all the item
	{
		
		var item = new menu_item($(this).text(),$(this).next().text(),0);	
		dinner_item[x].push(item);
        if (localStorage.getItem(item.name)==null)
        localStorage.setItem(item.name,item.score);
			});
        
    for (i=0;i<dinner[x].length;i++)
	{
		var flag=false;
		for (j=0; j<dinner_item[x].length; j++)
		 if (dinner_item[x][j].name==dinner[x][i]) flag=true;
		if (!flag) 
        {
            dinner_category[x].push(dinner[x][i]);
        }
	}
}