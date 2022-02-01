jQuery(function () { 
  let startX = null;
  let endX = null;
  let isMoved = false;
  const swipeThreshold = 70;
 
  jQuery('.js-drawerTarget').on("touchstart", updateStartX);
  jQuery('.js-drawerTarget').on("touchmove", updateMoveXInfo);
  jQuery('.js-drawerTarget').on("touchend", drawerDeactivateWhenSwiped);

  jQuery('.js-drawer').click(function() {
    jQuery('.js-drawerScope').toggleClass('is-active');
    toggleBooleanAttribute('.js-drawer', 'aria-expanded');
  });

  function updateStartX(event) {
    startX = event.originalEvent.touches[0].pageX;
  }
  function updateMoveXInfo(event) {
    endX = event.originalEvent.touches[0].pageX;
	  isMoved = true;
  }
  function drawerDeactivateWhenSwiped(event) {
	  const moveX = endX - startX;
	  if(isMoved && moveX > swipeThreshold) {
      jQuery('.js-drawerScope').toggleClass('is-active');
      toggleBooleanAttribute('.js-drawer', 'aria-expanded');
	  } 
	  isMoved = false;
  }
});


function toggleBooleanAttribute(selectorName, attributeName) {
  const $selector = jQuery(selectorName);
  $selector.attr(attributeName, $selector.attr(attributeName) == "false");
}