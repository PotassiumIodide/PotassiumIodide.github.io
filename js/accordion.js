jQuery(function () { 
  jQuery('.js-accordionTrigger').click(function() {
		const scopeSelectorID = jQuery(this).attr('aria-controls');
		const isActive = !(jQuery(this).attr('aria-expanded') == 'false');
		let $mainTarget = jQuery(this).parent().next('.js-accordionTarget');
		const allTargets = `#${scopeSelectorID} .js-accordionTarget`;

		jQuery(allTargets).slideUp(500);
		jQuery('.js-accordionTrigger').attr('aria-expanded', false);
		console.log($mainTarget);

		if (!isActive) {
		  $mainTarget.slideDown(500);
		  jQuery(this).attr('aria-expanded', !isActive);
		  $mainTarget.attr('aria-hidden', isActive);
		}
  });
});