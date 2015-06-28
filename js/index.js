/*
 * Check for browser support
 */
var supportMsg = document.getElementById('msg');

if ('speechSynthesis' in window) {
	supportMsg.innerHTML = 'Your browser <strong>supports</strong> speech synthesis.';
} else {
	supportMsg.innerHTML = 'Sorry your browser <strong>does not support</strong> speech synthesis.<br>Try this in <a href="http://www.google.co.uk/intl/en/chrome/browser/canary.html">Chrome Canary</a>.';
	supportMsg.classList.add('not-supported');
}

// define elements
var boom = document.getElementById('boom');
var chicka = document.getElementById('chicka');
var bow = document.getElementById('bow');
var wow = document.getElementById('wow');
var dirnt = document.getElementById('dirnt');
var fillip = document.getElementById('fillip');
var kra = document.getElementById('kra');
var ka = document.getElementById('ka');
var neow = document.getElementById('neow');
var pah = document.getElementById('pah');
var ra = document.getElementById('ra');
var tom = document.getElementById('tom');
var wah = document.getElementById('wah');
var umpa = document.getElementById('umpa');

var boom2 = document.getElementById('boom2');
var chicka2 = document.getElementById('chicka2');
var bow2 = document.getElementById('bow2');
var wow2 = document.getElementById('wow2');
var dirnt2 = document.getElementById('dirnt2');
var fillip2 = document.getElementById('fillip2');
var kra2 = document.getElementById('kra2');
var ka2 = document.getElementById('ka2');
var neow2 = document.getElementById('neow2');
var pah2 = document.getElementById('pah2');
var ra2 = document.getElementById('ra2');
var tom2 = document.getElementById('tom2');
var wah2 = document.getElementById('wah2');
var umpa2 = document.getElementById('umpa2');

// Create a new utterance for the specified text and add it to
// the queue.
function speak(text) {
  // Create a new instance of SpeechSynthesisUtterance.
	var msg = new SpeechSynthesisUtterance();
  
  // Set the text.
	msg.text = text;
  
  // Set the attributes.
	msg.volume = 1;
	msg.rate = 2;
	msg.pitch = 1;
  
  // set the utterance instance's voice attribute.
		msg.voice = speechSynthesis.getVoices().filter(function(voice) { return voice.name == 'Daniel'; })[0];
	
  // Queue this utterance.
	window.speechSynthesis.speak(msg);
}

function speak2(text) {
  // Create another new instance of SpeechSynthesisUtterance.
	var msg2 = new SpeechSynthesisUtterance();
  
  // Set the text.
	msg2.text = text;
  
  // Set the attributes.
	msg2.volume =1;
	msg2.rate = 2;
	msg2.pitch = 1;
  
  // set the utterance instance's voice attribute.
		msg2.voice = speechSynthesis.getVoices().filter(function(voice) { return voice.name == 'Trinoids' })[0];
	
  // Queue this utterance.
	window.speechSynthesis.speak(msg2);
}

//click event listeners
boom.addEventListener('click', function(e) {
	notes.push("boom");
});
chicka.addEventListener('click', function(e) {
	notes.push("chicka");
});
bow.addEventListener('click', function(e) {
	notes.push("bow");
});
wow.addEventListener('click', function(e) {
	notes.push("wow");
});
dirnt.addEventListener('click', function(e) {
	notes.push("dirnt");
});
fillip.addEventListener('click', function(e) {
	notes.push("fillip");
});
kra.addEventListener('click', function(e) {
	notes.push("kra");
});
ka.addEventListener('click', function(e) {
	notes.push("ka");
});
neow.addEventListener('click', function(e) {
	notes.push("neow");
});
pah.addEventListener('click', function(e) {
	notes.push("pah");
});
ra.addEventListener('click', function(e) {
	notes.push("ra");
});
tom.addEventListener('click', function(e) {
	notes.push("tom");
});
wah.addEventListener('click', function(e) {
	notes.push("wah");
});
umpa.addEventListener('click', function(e) {
	notes.push("umpa");
});


/*boom2.addEventListener('click', function(e) {
	notes2.push("boom");
});
chicka2.addEventListener('click', function(e) {
	notes2.push("chicka");
});
bow2.addEventListener('click', function(e) {
	notes2.push("bow");
});
wow2.addEventListener('click', function(e) {
	notes2.push("wow");
});
dirnt2.addEventListener('click', function(e) {
	notes2.push("dirnt");
});
fillip2.addEventListener('click', function(e) {
	notes2.push("fillip");
});
kra2.addEventListener('click', function(e) {
	notes2.push("kra");
});
ka2.addEventListener('click', function(e) {
	notes2.push("ka");
});
neow2.addEventListener('click', function(e) {
	notes2.push("neow");
});
pah2.addEventListener('click', function(e) {
	notes2.push("pah");
});
ra2.addEventListener('click', function(e) {
	notes2.push("ra");
});
tom2.addEventListener('click', function(e) {
	notes2.push("tom");
});
wah2.addEventListener('click', function(e) {
	notes2.push("wah");
});
umpa2.addEventListener('click', function(e) {
	notes2.push("umpa");
});
*/

var notes = ["boom", "chicka"];
//var notes2 = ["kra", "ka"];

var position = 0;
//var position2 = 0;


Tone.Transport.setInterval(function(time){
    var note = notes[position++];
    position = position % notes.length;

   // var note2 = notes2[position2++];
    //position2 = position2 % notes2.length;

    if (notes.length > 0){
	   speak(note);
	   //speak2(note2);
	  }

   if (note == "boom"){
    $('.boom').addClass("selected");
  } else {
    $('.boom').removeClass("selected");
  }
  if (note == "chicka"){
    $('.chicka').addClass("selected");
  } else {
    $('.chicka').removeClass("selected");
  }
  if (note == "bow"){
    $('.bow').addClass("selected");
  } else {
    $('.bow').removeClass("selected");
  }
  if (note == "wow"){
    $('.wow').addClass("selected");
  } else {
    $('.wow').removeClass("selected");
  }
  if (note == "dirnt"){
    $('.dirnt').addClass("selected");
  } else {
    $('.dirnt').removeClass("selected");
  }
  if (note == "fillip"){
    $('.fillip').addClass("selected");
  } else {
    $('.fillip').removeClass("selected");
  }
  if (note == "kra"){
    $('.kra').addClass("selected");
  } else {
    $('.kra').removeClass("selected");
  }
  if (note == "ka"){
    $('.ka').addClass("selected");
  } else {
    $('.ka').removeClass("selected");
  }
  if (note == "neow"){
    $('.neow').addClass("selected");
  } else {
    $('.neow').removeClass("selected");
  }
  if (note == "pah"){
    $('.pah').addClass("selected");
  } else {
    $('.pah').removeClass("selected");
  }
  if (note == "ra"){
    $('.ra').addClass("selected");
  } else {
    $('.ra').removeClass("selected");
  }
  if (note == "tom"){
    $('.tom').addClass("selected");
  } else {
    $('.tom').removeClass("selected");
  }
  if (note == "wah"){
    $('.wah').addClass("selected");
  } else {
    $('.wah').removeClass("selected");
  }
  if (note == "umpa"){
    $('.umpa').addClass("selected");
  } else {
    $('.umpa').removeClass("selected");
  }

   /*if (note2 == "boom"){
    $('.boom2').addClass("selected2");
  } else {
    $('.boom2').removeClass("selected2");
  }
  if (note2 == "chicka"){
    $('.chicka2').addClass("selected2");
  } else {
    $('.chicka2').removeClass("selected2");
  }
  if (note2 == "bow"){
    $('.bow2').addClass("selected2");
  } else {
    $('.bow2').removeClass("selected2");
  }
  if (note2 == "wow"){
    $('.wow2').addClass("selected2");
  } else {
    $('.wow2').removeClass("selected2");
  }
  if (note2 == "dirnt"){
    $('.dirnt2').addClass("selected2");
  } else {
    $('.dirnt2').removeClass("selected2");
  }
  if (note2 == "fillip"){
    $('.fillip2').addClass("selected2");
  } else {
    $('.fillip2').removeClass("selected2");
  }
  if (note2 == "kra"){
    $('.kra2').addClass("selected2");
  } else {
    $('.kra2').removeClass("selected2");
  }
  if (note2 == "ka"){
    $('.ka2').addClass("selected2");
  } else {
    $('.ka2').removeClass("selected2");
  }
  if (note2 == "neow"){
    $('.neow2').addClass("selected2");
  } else {
    $('.neow2').removeClass("selected2");
  }
  if (note2 == "pah"){
    $('.pah2').addClass("selected2");
  } else {
    $('.pah2').removeClass("selected2");
  }
  if (note2 == "ra"){
    $('.ra2').addClass("selected2");
  } else {
    $('.ra2').removeClass("selected2");
  }
  if (note2 == "tom"){
    $('.tom2').addClass("selected2");
  } else {
    $('.tom2').removeClass("selected2");
  }
  if (note2 == "wah"){
    $('.wah2').addClass("selected2");
  } else {
    $('.wah2').removeClass("selected2");
  }
  if (note2 == "umpa"){
    $('.umpa2').addClass("selected2");
  } else {
    $('.umpa2').removeClass("selected2");
  }*/

  }, 0.5);

Tone.Transport.start();