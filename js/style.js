  $(document).ready(function () {

    //menu active
    $('ul li a').click(function () {
      $('li a').removeClass("active");
      $(this).addClass("active");
    });

    //On menu click active
    $(".c-header_menu").click(function () {
      $(this).toggleClass('menubarclick');
      $(".fullmenu").slideToggle('active');
      // $("main").slideToggle('active');
    });

    //Interior products category
    $('#pro-upcoming').owlCarousel({
      items: 1.2,
      loop: true,
      autoplay: true,
      margin: 20,
      nav: false,
      center: true,
      dots: false,
      responsive: {
        0: {
          items: 1,
          center: false,
        },
        600: {
          items: 1,
          center: false,
        },
        1000: {
          items: 1.2,
        }
      }
    });

    $('#pro-ongoing').owlCarousel({
      items: 1.2,
      loop: true,
      autoplay: true,
      margin: 20,
      nav: false,
      center: true,
      dots: false,
      responsive: {
        0: {
          items: 1,
          center: false,
        },
        600: {
          items: 1,
          center: false,
        },
        1000: {
          items: 1.2,
        }
      }
    });
    //product inner page
    $('#testimonial').owlCarousel({
      items: 2,
      loop: true,
      autoplay: false,
      margin: 20,
      nav: false,
      dots: true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 2,
        }
      }
    });

    $('#news').owlCarousel({
      items: 1,
      loop: true,
      autoplay: false,
      margin: 20,
      nav: false,
      dots: true
    });

    //Home page banner
    var banner = $('.banner-slider').stepCycle({
      autoAdvance: true,
      transition: 'fade',
      childSelector: '.banner_slide',
      transitionTime: .75,
      navContainerSelector: '.banner-slider_nav',
      navDotClass: 'banner-slider_nav_item',
      navItemTemplate: '<li class="banner-slider_nav_item banner-slider_nav_item--is-selected"><a href="#">&bull;</a></li>',
      navSelectedClass: 'banner-slider_nav_item--is-selected',
      transitionBegin: function ($oldSlide, $newSlide) {
        console.log('slide transition begin', $oldSlide, $newSlide);
      },
      transitionComplete: function ($oldSlide, $newSlide) {
        console.log('slide transition complete', $oldSlide, $newSlide);
      }
    });


    //Home page enquriy form
    $(document).on('focus', '.en-form li label input, .en-form li label textarea, .en-form li label select', function () {
      $(this).parent('.en-form li label').addClass('active');
    });

    $('.en-form li label input, .en-form li label textarea').each(function () {
      if ($(this).val() != '') {
        $(this).parent('.en-form li label').addClass('active');
      }
    });

    //contact form
    $(document).on('focus', '.conta-form li label input, .conta-form li label textarea, .conta-form li label select', function () {
      $(this).parent('.conta-form li label').addClass('active');
    });

    $('.conta-form li label input, .conta-form li label textarea').each(function () {
      if ($(this).val() != '') {
        $(this).parent('.conta-form li label').addClass('active');
      }
    });
    //Hide header on scroll
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('.header').outerHeight();

    $(window).scroll(function (event) {
      didScroll = true;
    });

    setInterval(function () {
      if (didScroll) {
        hasScrolled();
        didScroll = false;
      }
    }, 250);

    function hasScrolled() {
      var st = $(this).scrollTop();

      // Make sure they scroll more than delta
      if (Math.abs(lastScrollTop - st) <= delta)
        return;

      // If they scrolled down and are past the navbar, add class .nav-up.
      // This is necessary so you never see what is "behind" the navbar.
      if (st > lastScrollTop && st > navbarHeight) {
        // Scroll Down

        $('.header').removeClass('nav-down').addClass('nav-up');
      } else {
        // Scroll Up
        if (st + $(window).height() < $(document).height()) {
          $('.header').removeClass('nav-up').addClass('nav-down');
        }
      }

      lastScrollTop = st;
    }

    $(window).on("scroll", function () {
      var hari = $(window).scrollTop();

      if (hari >= 30) {
        $('.header').addClass('fixed');
      } else {
        $('.header').removeClass('fixed');
      }
    });
    
    //Client Number scrolling
    jQuery(window).scroll(startCounter);

    function startCounter() {
      var hT = jQuery('.love_counter').offset().top,
        hH = jQuery('.love_counter').outerHeight(),
        wH = jQuery(window).height();
      if (jQuery(window).scrollTop() > hT + hH - wH) {
        jQuery(window).off("scroll", startCounter);
        jQuery('.love_count').each(function () {
          var $this = jQuery(this);
          jQuery({
            Counter: 0
          }).animate({
            Counter: $this.text()
          }, {
            duration: 2000,
            easing: 'swing',
            step: function () {
              $this.text(Math.ceil(this.Counter) + '+');
            }
          });
        });
      }
    }

    //Product page defaultopen
    document.getElementById("defaultOpen").click();

  });

  //Product tab
  function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }

  function scroll_to_div(div_id) {
    $('html,body').animate({
        scrollTop: $("#" + div_id).offset().top
      },
      'slow');
  }