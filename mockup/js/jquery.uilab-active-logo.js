
var uilabLogo = window.uilabLogo || {};

uilabLogo.setStyle = function($container) {
	$container.css({
		'display': 'block',
		'position': 'relative'
	});
};

uilabLogo.getLengthes = function(containerSize, matrixSize, smallDotRatio, bigDotRatio) {
	var smallDotSize = containerSize * smallDotRatio;
	var bigDotSize = containerSize * bigDotRatio;
	var outerMargin = bigDotSize * 0.5;
	var innerMargin = (containerSize - (2 * outerMargin)) / (matrixSize - 1);

	// return {
	// 	'outerMargin': outerMargin,
	// 	'innerMargin': innerMargin,
	// 	'smallDotSize': smallDotSize,
	// 	'bigDotSize': bigDotSize
	// };
	return {
		'outerMargin': Math.round(outerMargin),
		'innerMargin': Math.round(innerMargin),
		'smallDotSize': Math.round(smallDotSize),
		'bigDotSize': Math.round(bigDotSize)
	};
	
};

uilabLogo.createDot = function($container, className, x, y, size) {
	$container.append('<div class="' + className + '"></div>');
	var dot = $container.find('.' + className);
	dot.css({
		'position': 'absolute',
		'top': y - (size * 0.5) + 'px',
		'left': x - (size * 0.5) + 'px',
		'width': size + 'px',
		'height': size + 'px',
		// 'border-radius': size * 0.5 + 'px',
		'border-radius': '50%',
		'background-color': '#333333',
		'transition': 'all 0.3s ease-in-out',
	});
	return dot;
};

uilabLogo.increaseDot = function($container, dots, lengthes, i, j) {
	var x = lengthes.outerMargin + j * lengthes.innerMargin;
	var y = lengthes.outerMargin + i * lengthes.innerMargin;
	var size = lengthes.bigDotSize;
	dots[i][j].css({
		'width': lengthes.bigDotSize,
		'height': lengthes.bigDotSize,
		'top': y - (size * 0.5) + 'px',
		'left': x - (size * 0.5) + 'px',
	});
};

uilabLogo.decreaseDot = function($container, dots, lengthes, i, j) {
	var x = lengthes.outerMargin + j * lengthes.innerMargin;
	var y = lengthes.outerMargin + i * lengthes.innerMargin;
	var size = lengthes.smallDotSize;
	dots[i][j].css({
		'width': lengthes.bigDotSize,
		'height': lengthes.bigDotSize,
		'top': y - (size * 0.5) + 'px',
		'left': x - (size * 0.5) + 'px',
	});
};

uilabLogo.createDots = function($container) {
	var i, j;
	var matrixSize = 4;
	var smallDotRatio = 0.07;
	var bigDotRatio = 0.20;
	// var maxDotRatio = 0.25;

	var containerSize = $container.width();
	var lengthes = uilabLogo.getLengthes(containerSize, matrixSize, smallDotRatio, bigDotRatio);

	var dots = [];
	var x, y, size;
	for (i = 0; i < matrixSize; i++) {
		var dotLine = []
		for (j = 0; j < matrixSize; j++) {
			x = lengthes.outerMargin + j * lengthes.innerMargin;
			y = lengthes.outerMargin + i * lengthes.innerMargin;
			size = lengthes.smallDotSize;
			dotLine.push(uilabLogo.createDot($container, 'dot-' + i + '-' + j, x, y, size))
		}
		dots.push(dotLine);
	}

	$.data($container, 'lengthes', lengthes);
	$.data($container, 'dots', dots);
	
	setTimeout(function(){
		uilabLogo.increaseDot($container, dots, lengthes, 1, 0);
		dots[1][0].css('background-color', '#ed0000');
	 }, 500);
	setTimeout(function(){
		uilabLogo.increaseDot($container, dots, lengthes, 1, 1);
		
	 }, 1000);
	setTimeout(function(){
		uilabLogo.increaseDot($container, dots, lengthes, 1, 2);
		uilabLogo.increaseDot($container, dots, lengthes, 2, 2);
	 }, 1500);
	setTimeout(function(){
		uilabLogo.increaseDot($container, dots, lengthes, 1, 3);
		uilabLogo.increaseDot($container, dots, lengthes, 3, 3);
	 }, 2000);
};

uilabLogo.drawLines = function() {

};

$.fn.extend({
	fillUilabLogo: function() {
		uilabLogo.createDots(this);
		return this;
	}
});