// ----------------------------------------------------- SPECIFIC -------------------------------------------- //

function pushIt(){
$('a.internal').click(function(e) {
				var href = $(this).attr("href");
				var theId = $(this).attr("id");
				loadContent(href);
					// HISTORY.PUSHSTATE
				history.pushState('', 'New URL: '+href, href);
				e.preventDefault();

});
			
			// THIS EVENT MAKES SURE THAT THE BACK/FORWARD BUTTONS WORK AS WELL
			window.onpopstate = function(event) {
				console.log("pathname: "+location.pathname);
				loadContent(location.pathname);
			};
	}

function loadContent(url){
		$('#contentbox').load(url + ' #contentbox > *');
	}
		$(window).load(function() {
			
	$('#cmu').fitText();
	$('#intl, #ff').fitText(0.7);
		});
		
function menuHighlight() {
var url = (window.location.href).split("/").pop();
console.log("The Current URL is " +url);
  $('a[href="/faces/'+url+'"]').addClass('active');
  $('a').not('a[href="/faces/'+url+'"]').removeClass('active');
}
        		
		
  function mobileNav() {
      var padSize = parseFloat($("body").css("font-size") * 30);
  var wrapHeight = $('#contentwrap').height() + padSize;
$('#nav').css('height', wrapHeight);
  
  $('#hamburger').click(function() {
  if ($('#nav').offset().left === 0) {
  $('#nav').animate({
    left: '-100%'});
$('#contentwrap').animate({
  left: '0px'});
 $('#navbar').animate({
 left: '0px;' });
  } else {
      $('#nav').animate({
    left: '0px'});
$('#contentwrap').animate({
  left: '75%'});
 $('#navbar').animate({
 left: '75%' });
 }
 });
 
 $('.action').each(function() {
	var name = $(this).attr("name");
	$(this).parent().append($('.submenu-mobile[name=' + name + ']'));
	});
 
 $('.action').click(function() {          
            var name = $(this).attr("name");
            var content = $('.submenu-mobile[name=' + name + ']');
            $('.submenu-mobile').not(content).hide('fast');
            content.slideToggle('slow');
             $(this).addClass('active');
             $('.action').not(this).removeClass('active');
        }); 
  $('.submenu-mobile li').click(function() {
        $(this).addClass('active');
        });
 
  }
  
  
  
 function checkWidth() {
        var windowsize = $(window).width();
        if (windowsize < 640) {
            //if the window is less than 440px wide then turn on mobileNav
                $('#nav').removeClass('navWide').addClass('mobileNav');
                $('#hamburger').show();
				$('.submenu').removeClass('submenu').addClass('submenu-mobile');
                mobileNav();
				$('#humanitiesctr-small').css('display', 'none');
                
        } else {
        $('#nav').removeClass('mobileNav').addClass('navWide');
		$('.submenu-mobile').removeClass('submenu-mobile').addClass('submenu');
        $('#hamburger').hide();
        $('#contentwrap').css({
  left: '0px'});
 $('#navbar').css({
 left: '0px' });
    }
    }
	
$.fn.exists = function(callback) {
  var args = [].slice.call(arguments, 1);

  if (this.length) {
    callback.call(this, args);
  }

  return this;
};
		// ----------------------------------------------------- FITTEXT -------------------------------------------- //

(function( $ ){

  $.fn.fitText = function( kompressor, options ) {

    // Setup options
    var compressor = kompressor || 1,
        settings = $.extend({
          'minFontSize' : Number.NEGATIVE_INFINITY,
          'maxFontSize' : Number.POSITIVE_INFINITY
        }, options);

    return this.each(function(){

      // Store the object
      var $this = $(this);

      // Resizer() resizes items based on the object width divided by the compressor * 10
      var resizer = function () {
        $this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
      };

      // Call once to set.
      resizer();

      // Call on resize. Opera debounces their resize by default.
      $(window).on('resize.fittext orientationchange.fittext', resizer);

    });

  };

})( jQuery );