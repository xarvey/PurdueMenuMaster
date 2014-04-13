var breakfast;
var lunch ;
var dinner;

var breakfast_category;
var lunch_category;
var dinner_category;

var breakfast_item;
var lunch_item ;
var dinner_item;


var current = 2;
function menu_item(name,vegetarian,score,location)
{
    this.name=name;
    this.vegetarian=vegetarian;
    this.score=score; 
    this.location=location;
}
var dining_court=['Earhart',
                  'Wiley',
                  'Ford',
                  'Hillenbrand',
                  'Windsor',                  
                 ];
                  
var dining; 
var x = parseInt(localStorage.getItem("dining"));
                  
function parseFile( path, id, show) {

    function parseXml(data){
            x = parseInt(localStorage.getItem("dining"));
            localStorage.setItem("diningname", dining_court[x]);
            $('.diningname').text(localStorage.getItem('diningname'));
            init();
            get_breakfast(data,x);
            get_lunch(data,x);	
            get_dinner(data,x);
            if(show){
                show_lunch();
                localStorage.setItem("currentTab",1);
            }
            cal_score(x);
    };

    $.ajax({
        type: "GET",
        url: path,
        dataType: "xml",
        success: parseXml
    });
}
findBest();
//parseFile("Earhart.xml", 0, false);
//parseFile("Wiley.xml", 1, false);

function findBest(){
       parseFile("Earhart.xml", 0, false);
       parseFile("Wiley.xml", 1, false);
       var ear = parseInt(localStorage.getItem("Earhart"));
       var wil = parseInt(localStorage.getItem("Wiley"));
       if(ear>wil){
            $('.recName').text("EHRT");
            $('.recDes').text("Earhart Dining Court");
            $('.js-fav1').text(localStorage.getItem("max0_0_name"));
            $('.js-fav2').text(localStorage.getItem("max0_1_name"));
       }
       else{
            $('.recName').text("WILY");
            $('.recDes').text("Wiley Dining Court");
            $('.js-fav1').text(localStorage.getItem("max1_0_name"));
            $('.js-fav2').text(localStorage.getItem("max1_1_name"));
       }
}

function init()
{
    if (breakfast==null) breakfast= new Array(5);

if (lunch==null) lunch = new Array(5);
if (dinner==null)dinner = new Array(5);

if (breakfast_category==null) breakfast_category =new Array(5);
if (lunch_category==null) lunch_category = new Array(5);
if (dinner_category==null) dinner_category = new Array(5);

if (breakfast_item==null) breakfast_item =new Array(5);
if (lunch_item==null) lunch_item = new Array(5);
if (dinner_item==null) dinner_item = new Array(5);
}

function cal_score(j)
    {
        var d = new Date().getHours();
        var i;
        var tot=0;
        localStorage.setItem("max"+j+"_0",0);
        localStorage.setItem("max"+j+"_1",0);
        if (d<=10)
        for (i=0; i<breakfast_item[j].length; i++)
        {
            var num=parseInt(localStorage.getItem(breakfast_item[j][i].name));
            console.log(num + " " + dining_court[j] + " " + breakfast_item[j][i].name);
            if( parseInt(localStorage.getItem("max"+j+"_0")) < num ){
                localStorage.setItem("max"+j+"_0", num);
                localStorage.setItem("max"+j+"_0_name", breakfast_item[j][i].name);
            }
            else if( parseInt(localStorage.getItem("max"+j+"_1")) < num ){
                localStorage.setItem("max"+j+"_1", num);
                localStorage.setItem("max"+j+"_1_name", breakfast_item[j][i].name);
            }
            tot+=num;
        }
        else if (d<=15)
        for (i=0; i<lunch_item[j].length; i++)
        {
            var num=parseInt(localStorage.getItem(lunch_item[j][i].name));
            if( parseInt(localStorage.getItem("max"+j+"_0")) < num ){
                localStorage.setItem("max"+j+"_0", num);
                localStorage.setItem("max"+j+"_0_name", lunch_item[j][i].name);
            }
            else if( parseInt(localStorage.getItem("max"+j+"_1")) < num ){
                localStorage.setItem("max"+j+"_1", num);
                localStorage.setItem("max"+j+"_1_name", lunch_item[j][i].name);
            }
            tot+=num;
        }
        else if (d<=21)
        for (i=0; i<dinner_item[j].length; i++)
        {
            var num=parseInt(localStorage.getItem(dinner_item[j][i].name));
            if( parseInt(localStorage.getItem("max"+j+"_0")) < num ){
                localStorage.setItem("max"+j+"_0", num);
                localStorage.setItem("max"+j+"_0_name", dinner_item[j][i].name);
            }
            else if( parseInt(localStorage.getItem("max"+j+"_1")) < num ){
                localStorage.setItem("max"+j+"_1", num);
                localStorage.setItem("max"+j+"_1_name", dinner_item[j][i].name);
            }
            tot+=num;
        }
        localStorage.setItem(dining_court[j],tot);
        
    }

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
		var item = new menu_item($(this).text(),$(this).next().text(),1);	
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
		
		var item = new menu_item($(this).text(),$(this).next().text(),1);	
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
		
		var item = new menu_item($(this).text(),$(this).next().text(),1);	
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