//
// Check for valid email syntax
function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function closeForm() {
  document.contactform.name.value = '';
  document.contactform.email.value = '';
  document.contactform.message.value = '';
  document.contactform.phone.value = '';

  $('.cd-popup').removeClass('is-visible');
  $('.notification').addClass('is-visible');
  $('#notification-text').html("Thanks for contacting us!");
}

$(document).ready(function($) {

  /* ------------------------- */
  /* Contact Form Interactions */
  /* ------------------------- */
  $('#contact').on('click', function(event) {
    event.preventDefault();

    $('.contact').addClass('is-visible');
  });

  //close popup when clicking x or off popup
  $('.cd-popup').on('click', function(event) {
    if ($(event.target).is('.cd-popup-close') || $(event.target).is('.cd-popup')) {
      event.preventDefault();
      $(this).removeClass('is-visible');
    }
  });

  //close popup when clicking the esc keyboard button
  $(document).keyup(function(event) {
    if (event.which == '27') {
      $('.cd-popup').removeClass('is-visible');
    }
  });

  /* ----------------- */
  /* Handle submission */
  /* ----------------- */
  $('#contactform').submit(function() {
    var name = $('#name').val();
    var email = $('#email').val();
    var phone = $('#phone').val();
    var message = $('#message').val();

    if (validateEmail(email)) {
      $('.email').addClass('invalid');
      if (name) {
        if (message) {

          // Handle submitting data somewhere
          // For a tutorial on submitting the form to a Google Spreadsheet, see:
          // https://notnaturaltutorials.wordpress.com/2016/03/20/submit-form-to-spreadsheet/

          /*
            var googleFormsURL = "https://docs.google.com/forms/d/1dHaFG67d7wwatDtiVNOL98R-FwW1rwdDwdFqqKJggBM3nFB4/formResponse";
            // replace these example entry numbers
            var spreadsheetFields = {
              "entry.212312005": name,
              "entry.1226278897": email,
              "entry.1835345325": message
            }
            $.ajax({
              url: googleFormsURL,
              data: spreadsheetFields,
              type: "POST",
              dataType: "xml",
              statusCode: {
                0: function() {

                },
                200: function() {

                }
              }
            });
*/

          closeForm();

        } else {
          $('#notification-text').html("<strong>Please let us know what you're thinking!</strong>");
          $('.notification').addClass('is-visible');
        }
      } else {
        $('#notification-text').html('<strong>Please provide a name.</strong>');
        $('.notification').addClass('is-visible');
      }
    } else {
      // $('#notification-text').html('<strong>Please use a valid email address.</strong>');
      // $('.notification').addClass('is-visible');
      $('.email').addClass('invalid');
    }
    

    return false;
  });
});
/*----------------------------------------------------*/
/* MOBILE DETECT FUNCTION
/*----------------------------------------------------*/
var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};



/////////////////////// ready
$(document).ready(function() {
  // Front slider.
  $('.front #top').height($(window).height());
  if (isMobile.any() == null)
  {
    $('body').addClass("support-fixed");
  }

  // Carousels.
  $('#mission .carousel.main ul').carouFredSel({
    auto: {
      timeoutDuration: 8000
    },
    responsive: true,
    prev: '.mission_prev',
    next: '.mission_next',
    width: '100%',
    scroll: {
      items: 1,
      duration: 1000,
      easing: "easeOutExpo"
    },
    items: {
          width: '2000',
      height: 'variable', //  optionally resize item-height
      visible: {
        min: 1,
        max: 1
      }
    },
    mousewheel: false,
    swipe: {
      onMouse: true,
      onTouch: true
      }
  });

  $('#tweets .carousel.main ul').carouFredSel({
    auto: {
      timeoutDuration: 8000
    },
    responsive: true,
    // prev: '.tweets_prev',
    // next: '.tweets_next',
    pagination  : ".tweets_pag",
    width: '100%',
    scroll: {
      items: 1,
      duration: 1000,
      easing: "easeOutExpo"
    },
    items: {
          width: '2000',
      height: 'variable', //  optionally resize item-height
      visible: {
        min: 1,
        max: 1
      }
    },
    mousewheel: false,
    swipe: {
      onMouse: true,
      onTouch: true
      }
  });



  $(window).bind("resize",updateSizes_vat).bind("load",updateSizes_vat);
  function updateSizes_vat(){
    $('#mission .carousel.main ul').trigger("updateSizes");
    $('#tweets .carousel.main ul').trigger("updateSizes");


  }
  updateSizes_vat();


  /*----------------------------------------------------*/
  // Sticky.
  /*----------------------------------------------------*/
  $("#top2").sticky({
    topSpacing:0,
    getWidthFrom: 'body',
    responsiveWidth: true
  });

    /*----------------------------------------------------*/
    // PRELOADER CALLING
    /*----------------------------------------------------*/
    $("body.onepage").queryLoader2({
        //barColor: "#fff",
        //backgroundColor: "#000",
        percentage: true,
        barHeight: 3,
        completeAnimation: "fade",
        minimumTime: 200
    });



	/*----------------------------------------------------*/
	// PARALLAX CALLING
	/*----------------------------------------------------*/
	$(window).bind('load', function () {
		parallaxInit();
	});
	function parallaxInit() {
		testMobile = isMobile.any();

		if (testMobile == null)
		{
			$('.parallax .bg1').addClass("bg-fixed").parallax("50%", 0.5);
		}
	}
	parallaxInit();




  /*----------------------------------------------------*/
  // prettyPhoto
  /*----------------------------------------------------*/
  $("a[rel^='prettyPhoto']").prettyPhoto({animation_speed:'normal',theme:'dark',social_tools:false,allow_resize: true,default_width: 500,default_height: 344});


  /*----------------------------------------------------*/
  // MENU SMOOTH SCROLLING
  /*----------------------------------------------------*/
  $(".navbar_ .nav a, .menu_bot a, .scroll-to").bind('click',function(event){

      //$(".navbar_ .nav a a").removeClass('active');
      //$(this).addClass('active');
      // var headerH = $('#top1').outerHeight();
      var headerH = $('#top2').outerHeight();

      if ($(this).attr("href")=="#home") {
        $("html, body").animate({
          scrollTop: 0 + 'px'
          // scrollTop: $($(this).attr("href")).offset().top + 'px'
        }, {
            duration: 1200,
            easing: "easeInOutExpo"
        });
      }
      else {
        $("html, body").animate({
          scrollTop: $($(this).attr("href")).offset().top - headerH + 'px'
          // scrollTop: $($(this).attr("href")).offset().top + 'px'
        }, {
            duration: 1200,
            easing: "easeInOutExpo"
        });
      }



      event.preventDefault();
  });

  /*----------------------------------------------------*/
  // Appear
  /*----------------------------------------------------*/
  $('.animated').appear(function() {
    // console.log("111111111111");
      var elem = $(this);
      var animation = elem.data('animation');
      if ( !elem.hasClass('visible') ) {
        var animationDelay = elem.data('animation-delay');
        if ( animationDelay ) {
          setTimeout(function(){
              elem.addClass( animation + " visible" );
          }, animationDelay);
        } else {
          elem.addClass( animation + " visible" );
        }
      }
  });

  $('.yjsg-round-progress').appear(function() {
    var elem = $(this);
    var animationDelay = elem.data('animation-delay');
    if ( animationDelay ) {
      setTimeout(function(){
          $(elem).yjsgroundprogress();
      }, animationDelay);
    } else {
      $(elem).yjsgroundprogress();
    }
  });

  // Animate number
  $('.animated-number').appear(function() {
    var elem = $(this);
    var b = elem.text();
    var d = elem.data('duration');
    var animationDelay = elem.data('animation-delay');
    if ( !animationDelay ) { animationDelay = 0; }
    elem.text("0");

    setTimeout(function(){
      elem.animate({ num: b }, {
        duration: d,
        step: function (num){
          this.innerHTML = (num).toFixed(0)
        }
      });
    }, animationDelay);
  });


});

/////////////////////// load
$(window).load(function() {


    /*----------------------------------------------------*/
    // LOAD
    /*----------------------------------------------------*/
    //$('#load').fadeOut(2000).remove();
    $("#load").fadeOut( 200, function() {
        $(this).remove();
    });



});