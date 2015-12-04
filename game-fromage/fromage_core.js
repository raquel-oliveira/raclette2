window.addEventListener("keydown", movepredador, false);
var game_over = false;
var predador = new Array(4);
var predadorLen = 4;
var dir = "right";
var food = "";
var level = new Array();
var height = 640;
var width = 640;
var lvl_width = 20;
var lvl_height = 20;

predadorHeadImage = new Image();
predadorHeadImage.src = "resources/ahead.png";
predadorBodyImage = new Image();
predadorBodyImage.src = "resources/bod.jpg";
predadorTailImage = new Image();
predadorTailImage.src = "resources/butt.jpg";

//food
foodImage = new Image();
foodImage.src = "resources/afood.png";

create_predador();
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
		move_predador();
		the_date = new Date();
		stamp = the_date.getTime() + 250;
	}
	if(game_over == false)
	{
		// clear
		context.clearRect(0, 0, canvas.width, canvas.height);
		displayText("Score: " + (predadorLen - 4));
		display();
	}
	else
	{
		context.clearRect(0, 0, canvas.width, canvas.height);
		displayText("Game Over! C'est pas possible! You lost with "+ (predadorLen - 4) + " points.");
	}
	//context.drawImage(aniblock, aniblock_x, aniblock_y); 

	// request new frame
	requestAnimFrame(function()
	{
	  animate();
	});
} 

function displayText(what)
{
	context.font = "20px Arial";
	context.fillText(what, 50, 50);
}

function checkpredadorCollide()
{
	if( predador[0].xx == food.xx && predador[0].yy == food.yy )
	{
		create_food();
		return true;
	}
	else
	{
		//if head moving right
		if(dir == "right")
		{
			if(predador[0].xx > lvl_width - 1)
			{
				game_over = true;
			}
		}
		else if(dir == "left")
		{
			if(predador[0].xx < 0)
			{
				game_over = true;
			}
		}
		else if(dir == "up")
		{
			if(predador[0].yy <= -1)
			{
				game_over = true;
			}
		}
		else if(dir = "down")
		{
			if(predador[0].yy >= lvl_height)
			{
				game_over = true;
			}
		}
		
		for(i = 2; i < predadorLen; i++)
		{
			if( (predador[0].xx == predador[i].xx) && (predador[0].yy == predador[i].yy) )
			{
				game_over = true;
				break;
			}
		}
		
		return false;
	}
}

setTimeout(function() {
animate();
}, 1000);

function movepredador(e) 
{
    switch(e.keyCode) 
	{
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

function checkAllowMove(x, y)
{
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
		var y_index = (height / 32) - Math.round(y / 32);
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

function create_food()
{
	var x = 0;
	var y = 0;
	var recreate = false;
	do
	{
		recreate = false;
		x =  Math.floor((Math.random() * (lvl_width-1)));
		y =  Math.floor((Math.random() * (lvl_height-1)));
		
		for(i = 0; i < predadorLen; i++)
		{
			if( (predador[i].xx == x) && (predador[i].yy == y) )
			{
				recreate = true;
				break;
			}
		}
	}while(recreate == true);
	food = {xx: x, yy: y};
}

function create_predador()
{
	//var x =  Math.floor((Math.random() * (lvl_width-1)));
	//var y =  Math.floor((Math.random() * (lvl_height-1)));
	predador[0] = {xx: 4, yy: 1};
	predador[1] = {xx: 3, yy: 1};
	predador[2] = {xx: 2, yy: 1};
	predador[3] = {xx: 1, yy: 1};
	dir = "right";
}

function move_predador()
{
	var temp_x = 0;
	var temp_y = 0;
	var temp_xx = 0;
	var temp_yy = 0;
	var swap = true;

	//move predador forward
	for(var ii = 0; ii < predadorLen; ii++)
	{		
		if(ii == 0)
		{
			temp_x = predador[ii].xx;
			temp_y = predador[ii].yy;

			//if head moving right
			if(dir == "right")
			{
				predador[0] = {xx: (predador[0].xx + 1), yy: predador[0].yy};
			}
			else if(dir == "left")
			{
				predador[0] = {xx: (predador[0].xx - 1), yy: predador[0].yy};
			}
			else if(dir == "up")
			{
				predador[0] = {xx: predador[0].xx, yy: (predador[0].yy - 1)};
			}
			else if(dir = "down")
			{
				predador[0] = {xx: predador[0].xx, yy: (predador[0].yy + 1)};
			}
			
			if(checkpredadorCollide())
			{
				predador.push({xx: predador[(predador.length-1)].xx, yy: predador[(predador.length-1)].yy});
				predadorLen++;
			}
		}
		else
		{
			if(swap == true)
			{
				temp_xx = predador[ii].xx;
				temp_yy = predador[ii].yy;
				predador[ii] = {xx: temp_x, yy: temp_y};

				swap = false;
			}
			else
			{
				temp_x = predador[ii].xx;
				temp_y = predador[ii].yy;
				predador[ii] = {xx: temp_xx, yy: temp_yy};
				swap = true;
			}
		}
	}

}

function display()
{
	
	for(var i = 0; i < predadorLen; i++)
	{
		if(i == 0)
		{
			switch (dir)
			{
				case "left":
					context.drawImage(predadorHeadImage, (predador[i].xx * 32), (predador[i].yy * 32) ); 
					break;
				case "right":
					drawRotatedImage(predadorHeadImage,(predador[i].xx * 32), (predador[i].yy * 32), 180);
					break;
				case "up":
					drawRotatedImage(predadorHeadImage,(predador[i].xx * 32), (predador[i].yy * 32), 90);
					break;
				case "down":
					drawRotatedImage(predadorHeadImage,(predador[i].xx * 32), (predador[i].yy * 32), 270);
					break;
			}
		}
		else if(i == (predadorLen - 1) )
		{
			//following left
			if(predador[i].xx > predador[i-1].xx)
			{
				context.drawImage(predadorTailImage, (predador[i].xx * 32), (predador[i].yy * 32) ); 
			}
			//following right
			else if(predador[i].xx < predador[i-1].xx)
			{
				drawRotatedImage(predadorTailImage,(predador[i].xx * 32), (predador[i].yy * 32), 180);
			}
			//following up
			else if(predador[i].yy > predador[i-1].yy)
			{
				drawRotatedImage(predadorTailImage,(predador[i].xx * 32), (predador[i].yy * 32), 90);
			}
			//following down
			else if(predador[i].yy < predador[i-1].yy)
			{
				drawRotatedImage(predadorTailImage,(predador[i].xx * 32), (predador[i].yy * 32), 270);
			}
		}
		else
		{
			context.drawImage(predadorBodyImage, (predador[i].xx * 32), (predador[i].yy * 32) ); 
		}

	}
	
	context.drawImage(foodImage, (food.xx * 32), (food.yy * 32) ); 

}

function drawRotatedImage(image, x, y, angle) 
{ 
	var TO_RADIANS = Math.PI/180; 

	// save the current co-ordinate system 
	// before we screw with it
	context.save(); 
 
	// move to the middle of where we want to draw our image
	context.translate(x, y);
 
	// rotate around that point, converting our 
	// angle from degrees to radians 
	context.rotate(angle * TO_RADIANS);
 
	// draw it up and to the left by half the width
	// and height of the image 
	context.drawImage(image, -(image.width/2), -(image.height/2));
 
	// and restore the co-ords to how they were when we began
	context.restore(); 
}