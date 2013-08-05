var win = Ti.UI.createWindow({
	backgroundColor : "#ccc",
	layout : "vertical"
});

var youtubePlayer = require('titutorial.youtubeplayer');
Ti.API.info("module is => " + youtubePlayer);

// Create a Button.
var play = Ti.UI.createButton({
	title : 'Play Video',
	height : '40dp',
	width : '200dp',
	top : '100dp'
});

// Listen for click events.
play.addEventListener('click', function() {
	youtubePlayer.playVideo("FjMs_imWkFM");
});

// Add to the parent view.
win.add(play);

win.open();
