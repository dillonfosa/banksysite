$(document).ready(function () {
    $('.button-collapse').sideNav({
        menuWidth: 400, // Default is 240
        edge: 'right', // Choose the horizontal origin
        closeOnClick: true
        
    });
    
    
    var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       false,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null // optional scroll container selector, otherwise use window
  }
);
    
    
    
    new WOW().init();
    echo.init({
        offset: 100
        , throttle: 250
        , unload: false
        , callback: function (element, op) {
            console.log(element, 'has been', op + 'ed')
        }
    });
    
});

$(document).ready(function ($) {
        $('.image img').click(function (event) {
            // detect data-id for later
            var id = $(this).data('id');
            // grab src to replace #featured
            var src = $(this).attr('src');
            // set featured image
            var img = $('#featured img');
            img.fadeOut('fast', function () {
                $(this).attr({
                    src: src
                , });
                $(this).fadeIn('fast');
            });
        });
    });

$(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal').modal({
      dismissible: true, // Modal can be dismissed by clicking outside of the modal
      opacity: .5, // Opacity of modal background
      inDuration: 300, // Transition in duration
      outDuration: 300, // Transition out duration
      startingTop: '4%', // Starting top style attribute
      endingTop: '10%', // Ending top style attribute
    
    }
  );
  });
    
 $(document).ready(function(){
      $('.slider').slider();
    });

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});


document.addEventListener('DOMContentLoaded', function(){
	$('.preloader-background').delay(1700).fadeOut('slow');
	
	$('.preloader-wrapper')
		.delay(1700)
		.fadeOut();
});



