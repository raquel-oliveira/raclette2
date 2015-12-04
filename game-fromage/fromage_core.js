window.addEventListener("keydown", movePredador, false);
var game_over = false;
var predador = new Array(2); //head and tail
var predador_length = 2;
var dir = "right";
var food = "";
var heigh = 640;
var width = 640;
var level = new Array();
var lvl_width = 20;
var lvl_height = 20;

//images to the predador
predadorHead = new Image();
predadorHead.src = "resources/head2.png"
create_predador();

//images to the food
foodimage = new Image();
foodimage.src = "resources/cheese.png"
create_food();

for(i = 0; i < lvl_width; i++)
{
	level[i] = new Array(lvl_height);
	for(var ii = 0; ii < lvl_height; ii++)
	{
		level[i][ii] = -1;
	}
}

window.requestAnimFrame = (function(callback) 
{
	return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
	function(callback) 
	{
		window.setTimeout(callback, 1000);
	};
})();


var the_date = new Date();
var test1 = the_date.getTime();
var stamp = the_date.getTime() + 250;

function animate() 
{
	the_date = new Date();
	test1 = the_date.getTime();
	if(stamp <= test1)
	{
		move_s();
		the_date = new Date();
		stamp = the_date.getTime() + 250;
	}
	if(game_over == false)
	{
		context.clearRect(0, 0, canvas.width, canvas.height);
		displayText("Score: " + (predador_length - 4));
	}
	else
	{
		displayText("C'est pas possible. Go home!");
	}
} 

function create_predador(){
	predador[0] = {xx: 2, yy:: 1};
	predador[2 = {xx: 1, yy:: 1};
}

function create_food(){
	var x = 0;
	var y = 0;
	var recreate = false;
	do{
		recreate = false;
		x =  Math.floor((Math.random() * (lvl_width-1)));
		y =  Math.floor((Math.random() * (lvl_height-1)));
		
		for(i = 0; i < predador_length; i++)
		{
			if( (predador[i].xx == x) && (predador[i].yy == y) )
			{
				recreate = true;
				break;
			}
		}
	} while(recreate == true);
	food = {xx: x, yy: y};
}

function display(){}


function insertMessage(message){
	context.font = "20px Arial";
	context.fillText(message, 50, 50);
}

function movePredador(op){
	switch(op.keyCode){
		case 37:
			if(dir != "right")
			{
				dir = "left";
			}
            break;
		case 38:
			if(dir != "down")
			{
				dir = "up";
			}
			break;
        case 39:
			if(dir != "left")
			{
				dir = "right"; 
			}			
			break;
        case 40:
			if(dir != "up")
			{
				dir = "down";
			}
            break;  
    }
}

function checkPermitionToMove(x, y){
	if(x < 32)
	{
		var x_index = 0;
	}
	else
	{
		var x_index = Math.round(x / 32);
	}
	
	if(y < 32)
	{
		var y_index = 19;
	}
	else
	{
		var y_index = (total_height / 32) - Math.round(y / 32);
	}
	
	if(level[x_index][y_index] == -1)
	{
		return true;
	}
	else
	{
		return false;
	}
}

function rotateImage(image, x, y, grau){
	var TO_RADIANS = Math.PI/180; 
	context.save(); 
	context.translate(x, y);
	context.rotate(angle * TO_RADIANS);
	context.drawImage(image, -(image.width/2), -(image.height/2));
	context.restore(); 
}