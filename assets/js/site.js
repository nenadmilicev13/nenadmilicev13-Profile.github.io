
import Sliders from './_site/sliders';
import AnimateEl from './_site/animateEl';
import DropMenu from './_site/dropMenu';
import MobileNav from './_site/mobileNav';

jQuery(function () {
	// Slick Slider
	Sliders.init();

	// Animate
	AnimateEl.init();

	// Drop-menu
	DropMenu.init();

	// MobileNav
	MobileNav.init();

	console.log('hello');
});
