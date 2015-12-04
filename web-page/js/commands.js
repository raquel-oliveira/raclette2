function playmusic1() {
    var audio = new Audio('sounds/star.mp3');
    audio.play();
}
function playmusic2() {
    var audio = new Audio('sounds/cavaco.mp4');
    audio.play();
}
function playmusic3(path) {
    var audio = new Audio(path);
    audio.play();
}
function scrolling(id) {
    window.location.hash = id;
} 
function init() { 
	shortcut.add("Ctrl+Z", function() {
		// Night mode
		$('#nightmode').toggle()
	}); 
	shortcut.add("b", function() {
		playmusic1();
	});
	shortcut.add("c", function() {
		playmusic2();
	});
	shortcut.add("1", function() {
		scrolling("header");
	}); 
	shortcut.add("2", function() {
		scrolling("services");
	}); 
	shortcut.add("3", function() {
		scrolling("portfolio");
	}); 
	shortcut.add("4", function() {
		scrolling("about");
	}); 
	shortcut.add("5", function() {
		scrolling("team");
	}); 
	shortcut.add("6", function() {
		scrolling("clients");
	}); 
	shortcut.add("7", function() {
		scrolling("contact");
	});
		shortcut.add("w", function() {
		playmusic3('sounds/wilhelmscream.mp3');
	});

		shortcut.add("y", function() {
		playmusic3('sounds/quentin.mp3');
	});
		shortcut.add("r", function() {
		playmusic3('sounds/R2D2-yeah.mp3');
	});
	shortcut.add("v", function() {
		playmusic3('sounds/swvader02.mp3');
	});
	shortcut.add("f", function() {
		playmusic3('sounds/force.mp3');
	});
		shortcut.add("k", function() {
		playmusic3('sounds/chewy_roar.mp3');
	});
			shortcut.add("p", function() {
		playmusic3('sounds/pew.mp3');
	});
} 
window.onload=init;