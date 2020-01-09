jQuery(function(){
  $(document).ready(function() {
     $('#div2').hide();
  });
        jQuery('.showSingle').click(function(){
              jQuery('.targetDiv').hide();
              jQuery('#div'+$(this).attr('target')).fadeIn(1000);
        });
});



var lFollowX = 0,
		lFollowY = 0,
		x = 0,
		y = 0,
		friction = 1 / 30;

function moveBackground() {
	x += (lFollowX - x) * friction;
	y += (lFollowY - y) * friction;

	//  translate = 'translateX(' + x + 'px, ' + y + 'px)';
	translate = 'translateX(' + x + 'px) translateY(' + y +'px)';

	$('.animate-this').css({
	'-webit-transform': translate,
	'-moz-transform': translate,
	'transform': translate
	});

	window.requestAnimationFrame(moveBackground);
}

$(window).on('mousemove click', function(e) {

	var isHovered = $('.animate-this:hover').length > 0;
	console.log(isHovered);

	//if(!$(e.target).hasClass('animate-this')) {
	if(!isHovered) {
		var lMouseX = Math.max(-300, Math.min(300, $(window).width() / 2 - e.clientX)),
				lMouseY = Math.max(-300, Math.min(300, $(window).height() / 2 - e.clientY));

		lFollowX = (20 * lMouseX) / 100;
		lFollowY = (10 * lMouseY) / 100;
	}
});
moveBackground();


(function() {

  var quotes = $(".quotes");
  var quoteIndex = -1;

  function showNextQuote() {
    ++quoteIndex;
    quotes.eq(quoteIndex % quotes.length)
      .fadeIn(1000)
      .delay(500)
      .fadeOut(1000, showNextQuote);
  }

  showNextQuote();

})();
