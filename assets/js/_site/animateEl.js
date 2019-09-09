const $ = jQuery.noConflict();

'use strict';
const AnimateEl = {

	/*-------------------------------------------------------------------------------
		# Initialize
	-------------------------------------------------------------------------------*/
	init: function () {
		new WOW().init();

		// function animateElInit(selector) {
		// 	var $animationEl = selector;
		// 	var $window = $(window);
		// 	var visibleClass = 'is-visible';
		  
		// 	function checkIfInView() {
		// 	  var windowHeight = $window.height();
		// 	  var windowTopPosition = $window.scrollTop();
		// 	  var windowBottomPosition = (windowTopPosition + windowHeight);
		  
		// 	  $animationEl.each(function() {
		// 		var $element = $(this);
		// 		var elementHeight = $element.outerHeight();
		// 		var elementTopPosition = $element.offset().top + windowHeight / 6;
		// 		var elementBottomPosition = (elementTopPosition + elementHeight);
		  
		// 		//check to see if this current container is within viewport
		// 		if ((elementBottomPosition >= windowTopPosition) && (elementTopPosition <= windowBottomPosition)) {
		// 		  $element.addClass(visibleClass);
		// 		}
		// 	  });
		// 	}
		  
		// 	$window.on('scroll resize', checkIfInView);
		// 	$window.trigger('scroll');
		//   }
		  
		//   var animateEl = $('.is-animate');
		//   animateElInit(animateEl);
	}
};

export default AnimateEl;
