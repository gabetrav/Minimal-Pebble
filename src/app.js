/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */

var UI = require('ui');
var Vector2 = require('vector2');

// Create the Window
var window = new UI.Window();

// Create TimeText
var timeText = new UI.TimeText({
  position: new Vector2(0, 25),
  size: new Vector2(144, 30),
  text: "%I:%M",
  font: 'bitham-42-light',
  color: 'black',
  textAlign: 'center'
});

//Create dateText
var dateText = new UI.TimeText({
  position: new Vector2(0, 80),
  size: new Vector2(144, 30),
  text: "%m-%d",
  font: 'bitham-42-light',
  color: 'black',
  textAlign: 'center'
});

// Create a background Rect
var bgRect = new UI.Rect({
  position: new Vector2(0, 0),
  size: new Vector2(144, 168),
  backgroundColor: 'white'
});


// Add the:
window.add(bgRect);
window.add(dateText);
window.add(timeText);

window.show();