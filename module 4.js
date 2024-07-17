// Array of names
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

// Helper libraries (to be fixed)
(function(window) {
  var helloSpeaker = {};
  helloSpeaker.speak = function(name) {
    console.log("Hello " + name);
  };
  window.helloSpeaker = helloSpeaker;
})(window);

(function(window) {
  var byeSpeaker = {};
  byeSpeaker.speak = function(name) {
    console.log("Goodbye " + name);
  };
  window.byeSpeaker = byeSpeaker;
})(window);

// Loop through the array and print greetings
for (var i = 0; i < names.length; i++) {
  var firstLetter = names[i].charAt(0).toLowerCase();
  if (firstLetter === 'j') {
    byeSpeaker.speak(names[i]);
  } else {
    helloSpeaker.speak(names[i]);
  }
}
