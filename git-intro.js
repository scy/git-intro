(function ($) {
	'use strict';
	$.deck('.slide');
	hljs.tabReplace = '  ';
	hljs.initHighlightingOnLoad();
	$(document).bind('deck.change', function (ev, from, to) {
		var $from = $.deck('getSlide', from);
		var $to = $.deck('getSlide', to);
		$from.find('.repeat-animation').removeClass('animated');
		$to.find('.repeat-animation').addClass('animated');
	});
})(jQuery);
