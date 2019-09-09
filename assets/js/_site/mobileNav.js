const $ = jQuery.noConflict();

'use strict';
const mobileNav = {
	/*-------------------------------------------------------------------------------
		# Initialize
	-------------------------------------------------------------------------------*/
	 init: function () {
        var mainHeaderBtn = $('.js-main-header-btn');
        var mainNav = $('.js-main-nav');

	 	mainHeaderBtn.on('click', function() {
	 		mainNav.slideToggle();
	 	});
    }
};

export default mobileNav;