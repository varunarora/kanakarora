var polygons = document.getElementsByTagName('polygon'), i, j;

var message = [
	'Shapes',
	'They are powerful, aren\'t they?',
	'The thing about them is that individually,',
	'they don\'t mean much',
	'rectangles, squares, circles',
	'all too basic, all too familiar.',
	'But only when you put them together do they',
	'complete a larger whole, greater than the sum of their parts.',
	'The power of each and every shape',
	'lies in the hands of its crafter',
	'Siddhatia and Varunia\'s traits and skills are just like elementary shapes',
	'individually simple, common, and familiar',
	'but they mean something today,',
	'only because you took the time to craft them together.',
	'Thank you for shaping us into more than just our parts',
	'Happy birthday, ma!'
];

// First set everything to clear the fill opacity.
for (i = 0; i < polygons.length; i++){
	polygons[i].classList.add('initial');
}

setTimeout(function(){
	var remove = function(el, time){
		setTimeout(function(){
			el.classList.remove('initial');
		}, time);
	}

	// Now randomly go through the polygons and with a little delay,
	//     animate their strokes.
	var reducer = 10;
	for (i = 0; i < polygons.length; i++){
		polygons[i].style.animationDelay = (i * 0.1 * reducer) + 's';
		polygons[i].classList.add('animate');
		
		remove(polygons[i], (5000 + (i * 100 * reducer)));

		reducer -= 0.02;
	}

	var hood = document.getElementById('hood-message');
	var changeMessage = function(phrase, position){
		setTimeout(function(){
			hood.innerHTML = phrase;
			hood.classList.add('show');

			setTimeout(function(){
				if (position !== message.length - 1)
					hood.classList.remove('show');
			}, 5000);
		}, position * 7000);
	}

	// Animate the message.
	setTimeout(function(){
		for (j = 0; j < message.length; j++){
			changeMessage(message[j], j);
		}
	}, 5000);

}, 1000);