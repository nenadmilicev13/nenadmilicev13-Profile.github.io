const $ = jQuery.noConflict();

'use strict';
const DropMenu = {
	/*-------------------------------------------------------------------------------
		# Initialize
	-------------------------------------------------------------------------------*/
	init: function () {
        var arrow = $('.js-arrow');
		var dropdownMenu = $('.js-drop-menu');
		
		arrow.on('click', function() {
			var $this = $(this);
			var currentMobDropMenu= $this.siblings(dropdownMenu);
			dropdownMenu.not(currentMobDropMenu).slideUp();
			currentMobDropMenu.slideToggle();
		});
	}
};

export default DropMenu;