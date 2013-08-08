# Android YouTube Player Module

## Description

Android component that plays videos from YouTube. This module is focused on creating an Android activity that allows developers to play videos that are hosted on YouTube

**NOTE: If module unable to get the RTSP url from YouTube server, then video cannot be played.**

## Accessing the youtubeplayer Module

To access this module from JavaScript, you would do the following:
```javascript
var youtubePlayer = require("titutorial.youtubeplayer");
```
The youtubeplayer variable is a reference to the Module object.

## Reference

This module based on Android YouTube Player(http://code.google.com/p/android-youtube-player/) library.

## Methods

### playVideo(videoId)

Takes video id as input parameter and plays video automatcally. 

### playPlayListVideo(playListId)

Takes playlist id as input parameter then it will play the latest video added to a YouTube playlist

## Usage
```javascript
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
```

###Screenshot
![Video Screenshot](https://github.com/railskarthi/YoutubePlayer-Android/blob/master/screens/screenshot.png?width=480&height=320&raw=true "Optional title")

## Author

Karthi Ponnusamy - karthi.nkl@gmail.com

## License

Copyright (c) 2013 Karthi Ponnusamy

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
