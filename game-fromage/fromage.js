var game_over = false;
var predador = new Array(2); //head and tail
var predador_length = 2;
var dir = "right";
var food = "";
var heigh = 700;
var width = 700;

//images to the predador
predadorHead = new Image();
predadorHead.src = "resources/head2.png"
create_predador();

//images to the food
foodimage = new Image();
foodimage.src = "resources/cheese.png"
create_food();

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