var andrest = andrest || {};

andrest.init = function() {
	andrest.window = $(window);
	andrest.email = 'contact@andrest.me';
	$('.myEmail').attr({href: 'mailto:'+andrest.email}).html(andrest.email);
	window.onhashchange = function(){
		var section = location.hash;
	};
	$('#projects a').hover(function(){
		$(this).children().children('div').show();
	},
	function(){
		$(this).children().children('div').hide();
	});
}

$(function() {
	andrest.init();
});