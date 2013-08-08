var win = Ti.UI.createWindow({
	backgroundColor : "#fff",
	layout : "vertical"
});

var youtubePlayer = require('titutorial.youtubeplayer');
Ti.API.info("module is => " + youtubePlayer);
/*
 * Play video by videoId
 */
var playVideo = Ti.UI.createButton({
	title : 'Play video',
	height : '40dp',
	width : Ti.UI.SIZE,
	top : '100dp'
});
win.add(playVideo);

playVideo.addEventListener('click', function() {
	youtubePlayer.playVideo("FjMs_imWkFM");
});

/*
 * Play video by playListId
 */
var playPlayListVideo = Ti.UI.createButton({
	title : 'Play playlist video',
	height : '40dp',
	width : Ti.UI.SIZE,
	top : '100dp'
});

playPlayListVideo.addEventListener('click', function() {
	youtubePlayer.playPlayListVideo("PLB03EA9545DD188C3");
});

win.add(playPlayListVideo);

win.open();
