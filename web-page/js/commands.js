function playmusic1() {
    var audio = new Audio('sounds/star.mp3');
    audio.play();
}
function playmusic2() {
    var audio = new Audio('sounds/cavaco.mp4');
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
} 
window.onload=init;