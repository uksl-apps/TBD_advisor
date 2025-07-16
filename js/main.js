(function($){
    "use strict";
    jQuery(document).on('ready', function () {
		// Menu JS
        /*==============================================================*/
        $('.navbar .navbar-nav li a, .main-banner .btn, .ctr-area .btn, .welcome-area .link-btn').on('click', function(e){
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - 50
            }, 1500);
            e.preventDefault();
        });

        $(document).on('click','.navbar-collapse.in',function(e) {
            if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
                $(this).collapse('hide');
            }
        });
		
		$('.navbar .navbar-nav li a').on('click', function(){
			$('.navbar-collapse').collapse('hide');
		});
		
		
        /* Header Sticky
		========================================================*/
        $(window).on('scroll',function() {
            if ($(this).scrollTop() > 50){  
                $('.header-sticky').addClass("is-sticky");
            }
            else{
                $('.header-sticky').removeClass("is-sticky");
            }
        });
		
		
		/* Home Slides
        ========================================================*/
        $('.home-slides').owlCarousel({
            items:1,
            loop:true,
            autoplay:true,
            nav:true,
            responsiveClass:true,
            dots:false,
            autoplayHoverPause:true,
            mouseDrag:true,
            navText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
            ],
        });
		$(".home-slides").on("translate.owl.carousel", function(){
            $(".main-banner h4").removeClass("animated fadeInDown").css("opacity", "0");
            $(".main-banner h1").removeClass("animated fadeInUp").css("opacity", "0");
            $(".main-banner p").removeClass("animated zoomIn").css("opacity", "0");
            $(".main-banner .btn").removeClass("animated fadeInDown").css("opacity", "0");
        });
        $(".home-slides").on("translated.owl.carousel", function(){
            $(".main-banner h4").addClass("animated fadeInDown").css("opacity", "1");
            $(".main-banner h1").addClass("animated fadeInUp").css("opacity", "1");
            $(".main-banner p").addClass("animated zoomIn").css("opacity", "1");
            $(".main-banner .btn").addClass("animated fadeInDown").css("opacity", "1");
        });
        
        // Counter
        /*==============================================================*/
        $(".count").counterUp({
            delay: 20,
            time: 1500
        });
        
        // Team Slider
        /*==============================================================*/
        $('.team-slider').owlCarousel({
            loop: true,
            autoplay:true,
            nav: false,
            mouseDrag: true,
            autoplayHoverPause: true,
            responsiveClass: true,
            dots: true,
            navText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
            ],
            responsive:{
                0:{
                    items:1,
                },
                768:{
                    items:2,
                },
                1200:{
                    items:3,
                }
            }
        });
        
        
        // Shorting
        /*==============================================================*/
        $(function(){
            $('.shorting').mixItUp();
        });
        
        /* Zoom Gallery
        ========================================================*/
        $('.popup-btn').magnificPopup({
            type: 'image',
            gallery:{
                enabled:true
            }
        });
		
		/* Popup Video
        ========================================================*/
        $('.popup-youtube').magnificPopup({
			disableOn: 320,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false
		});
        
        /* Ripple Effect
        ========================================================*/
        $('.ripple-effect, .ripple-playing').ripples({
            resolution: 512,
            dropRadius: 25,
            perturbance: 0.04,
        });
		
		
		/* Text Animation
        ========================================================*/
		var TxtType = function(el, toRotate, period) {
			this.toRotate = toRotate;
			this.el = el;
			this.loopNum = 0;
			this.period = parseInt(period, 10) || 2000;
			this.txt = '';
			this.tick();
			this.isDeleting = false;
		};

		TxtType.prototype.tick = function() {
			var i = this.loopNum % this.toRotate.length;
			var fullTxt = this.toRotate[i];

			if (this.isDeleting) {
			this.txt = fullTxt.substring(0, this.txt.length - 1);
			} else {
			this.txt = fullTxt.substring(0, this.txt.length + 1);
			}

			this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

			var that = this;
			var delta = 200 - Math.random() * 100;

			if (this.isDeleting) { delta /= 2; }

			if (!this.isDeleting && this.txt === fullTxt) {
			delta = this.period;
			this.isDeleting = true;
			} else if (this.isDeleting && this.txt === '') {
			this.isDeleting = false;
			this.loopNum++;
			delta = 500;
			}

			setTimeout(function() {
			that.tick();
			}, delta);
		};

		window.onload = function() {
			var elements = document.getElementsByClassName('typewrite');
			for (var i=0; i<elements.length; i++) {
				var toRotate = elements[i].getAttribute('data-type');
				var period = elements[i].getAttribute('data-period');
				if (toRotate) {
				  new TxtType(elements[i], JSON.parse(toRotate), period);
				}
			}
			// INJECT CSS
			var css = document.createElement("style");
			css.type = "text/css";
			css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
			document.body.appendChild(css);
		};
        
        /* Tooltip
        ========================================================*/
        $(function () {
            $('[data-toggle="tooltip"]').tooltip()
        });
		
		/* WOW JS
        ========================================================*/
		new WOW().init();
		
        
        // Blog Slider
        /*==============================================================*/
        $('.blog-slider').owlCarousel({
            loop: true,
            autoplay:true,
            nav: false,
            mouseDrag: true,
            autoplayHoverPause: true,
            responsiveClass: true,
            dots: true,
            navText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
            ],
            responsive:{
                0:{
                    items:1,
                },
                768:{
                    items:2,
                },
                1200:{
                    items:3,
                }
            }
        });
        
        // Partner Slider
        /*==============================================================*/
        $('.partner-slider').owlCarousel({
            loop: true,
            autoplay:true,
            nav: false,
            mouseDrag: true,
            autoplayHoverPause: true,
            responsiveClass: true,
            dots: true,
            navText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
            ],
            responsive:{
                0:{
                    items:2,
                },
                768:{
                    items:4,
                },
                1200:{
                    items:6,
                }
            }
        });
		
		/* Go To Top
        ========================================================*/
        $(function(){
            //Scroll event
            $(window).on('scroll', function(){
                var scrolled = $(window).scrollTop();
                if (scrolled > 300) $('.go-top').fadeIn('slow');
                if (scrolled < 300) $('.go-top').fadeOut('slow');
            });  
            //Click event
            $('.go-top').on('click', function() {
                $("html, body").animate({ scrollTop: "0" },  500);
            });
        });
    });


    // Page Loader
    /*==============================================================*/
    jQuery(window).on('load', function() {
        $('.preloader').fadeOut();
    });
}(jQuery));
