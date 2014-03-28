var andrest = andrest || {};

andrest.init = function() {
	andrest.window = $(window);
	andrest.email = 'contact@andrest.me';
	$('.myEmail').attr({href: 'mailto:'+andrest.email}).html(andrest.email);
}

$(function() {
	andrest.init();
});