(function ($) {
	'use strict';
	$('section').addClass('slide');
	$('pre > code').each(function (idx, code) {
		var $code = $(code);
		$code.html($.trim($code.html()));
	});
})(jQuery);
