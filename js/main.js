var andrest = andrest || {};

andrest.init = function() {
	andrest.setDOMObjs();
	andrest.email = 'info@andrest.me';
	$('.myEmail').attr({href: 'mailto:'+andrest.email}).html(andrest.email);
	window.onhashchange = function(){
		var section = location.hash;
	};
	$('#projects a').hover(
		function(){
			$(this).children().children('div').show();
		},
		function(){
			$(this).children().children('div').hide();
		}
	);
	window.onhashchange = function(){
		var hash = location.hash;
		if(hash.length <= 1) {
			andrest.DOM.overlay.fadeOut();
		} else {
			andrest.DOM.overlay.fadeIn();
			andrest.DOM.overlayContent.fadeOut(andrest.fadeDur(), function(){
				andrest.DOM.overlayContent.html($(hash).html());
				andrest.DOM.overlayContent.fadeIn(andrest.fadeDur());
				var currElem = andrest.DOM.projects.filter('[href="'+hash+'"]');
				var nextHash = currElem.next('a').attr('href') || $(andrest.DOM.projects[0]).attr('href');
				var prevHash = currElem.prev('a').attr('href') || $(andrest.DOM.projects[andrest.DOM.projects.length-1]).attr('href');
				andrest.DOM.nextCtrl.attr('href',nextHash);
				andrest.DOM.prevCtrl.attr('href',prevHash);
				andrest.DOM.lastVimeos = andrest.DOM.overlayContent.find('iframe.vimeo');
				console.log(andrest.DOM.lastVimeos);
			});
		}
		andrest.DOM.lastVimeos.each(function(){
			if(this.contentWindow && this.contentWindow.postMessage) this.contentWindow.postMessage({"method": "pause"}, '*');
		});
		//andrest.DOM.lastVimeos = $(hash).find('iframe.vimeo');
		andrest.lastHash = hash;
	};
	window.onhashchange();
	andrest.DOM.overlay.click(function(){
		location.hash = '#';
	});
	andrest.DOM.overlay.children().click(function(e){
		e.stopPropagation();
	});
	setInterval(andrest.recalculateVimeoHeight, 100);
};

andrest.setDOMObjs = function() {
	andrest.DOM = {
		overlay: $('#overlay'),
		window: $(window),
		projects: $('#projects').children('a')
	};
	andrest.DOM.overlayContent = andrest.DOM.overlay.find('#overlay-content');
	andrest.DOM.nextCtrl = andrest.DOM.overlay.find('#next-item');
	andrest.DOM.prevCtrl = andrest.DOM.overlay.find('#prev-item');
	andrest.DOM.lastVimeos = $();
};

andrest.recalculateVimeoHeight = function() {
	andrest.DOM.overlayContent.find('iframe.vimeo').each(function(){
		 var vid = $(this);
		 vid.height(Math.floor(vid.width() * 0.56));
	});
};

andrest.fadeDur = function() {
	return andrest.lastHash.length <= 1 ? 0 : 400;
}

andrest.lastHash = '#';

$(function() {
	andrest.init();
});