var andrest = andrest || {};

andrest.init = function() {
	andrest.window = $(window);
	andrest.canvas = $('canvas');
	andrest.sections = $('.section');
	setInterval(function(){
		andrest.canvas.height(andrest.window.height()).width(andrest.window.width());
		andrest.canvas.css('background-size', andrest.window.width()+"px "+andrest.window.height()+"px");
	},1000);
	andrest.email = 'contact@andrest.me';
	$('.myEmail').attr({href: 'mailto:'+andrest.email}).html(andrest.email);
	$('a').attr('target', '_blank');
	$('#menu a.toSec').click(function(e) {
		e.preventDefault();
		var dest = this.href.split('/');
		andrest.sections.fadeOut(1000);
		$(dest[dest.length-1]).fadeIn(1000);
	});

	$('#menu a.toSec.first').click();
}

$(function() {
	andrest.init();
});