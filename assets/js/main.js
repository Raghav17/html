(function ($) {
    "use strict";

	// Convert All Image to SVG
    $('img.svg').each(function() {
         var $img = $(this),
             imgID = $img.attr('id'),
             imgClass = $img.attr('class'),
             imgURL = $img.attr('src');

         $.get(imgURL, function(data) {
             // Get the SVG tag, ignore the rest
             var $svg = $(data).find('svg');

             // Add replaced image's ID to the new SVG
             if (typeof imgID !== 'undefined') {
                 $svg = $svg.attr('id', imgID);
             }
             // Add replaced image's classes to the new SVG
             if (typeof imgClass !== 'undefined') {
                 $svg = $svg.attr('class', imgClass);
             }

             // Remove any invalid XML tags as per http://validator.w3.org
             $svg = $svg.removeAttr('xmlns:a');

             // Replace image with new SVG
             $img.replaceWith($svg);
         }, 'xml');

    });
	
	//countdown
	$('#count_down_start').countdown('2017/11/29', function (event) {
		$(this).html(event.strftime('<ul><li>%D<span>Days</span></li><li>%H<span>Hours</span></li><li>%M<span>Mins</span></li><li>%S<span>Secs</span></li></ul>'));
	});
	
	//window resize
    var wWidth = $(window).width();
    var isMobile = wWidth < 768;
    $(window).on('resize',function(){
        wWidth = $(window).width();
        isMobile = wWidth < 768;
    });
	
	//meanmenu
	if($.fn.meanmenu){
		$('.mainmenu').meanmenu({
			meanScreenWidth: 767
		});
		$('.mean-nav .dropdown').removeClass('dropdown');
	}
	
	$('.banner_area_slider').owlCarousel({
		items: 1,
		loop:true,
		autoplay:true,
		smartSpeed: 1000,
		autoplayTimeout: 2000
		
	});
	$('.overview_slider').owlCarousel({
		items: 1,
		nav: true,
		loop:true,
		autoplay:true,
		navText: ['<i class="ion-ios-arrow-thin-left"></i>','<i class="ion-ios-arrow-thin-right"></i>'],
		smartSpeed: 1000,
		autoplayTimeout: 1500
	});
	
	//related post blog
    $('.related_post_slider').owlCarousel({
        loop:false,
        margin:30,
        autoplay: false,
        dots: false,
        autoplayHoverPause: true,
        autoplaySpeed:3000,
        nav:true,
        navText: ['<img src="assets/img/components/left_arrow.png" alt="right arrow">','<img src="assets/img/components/right_arrow.png" alt="right arrow">'],
        responsive:{
            0:{
                items:1
            },
            300:{
                items:1
            },
            480:{
                items:1
            },
            768:{
                items:1
            },
            1000:{
                items:2
            }
        }
    });
	var wWidth = $(window).width();

    var googleMapSelector = $('#contactgoogleMap'),
        myCenter = new google.maps.LatLng(40.705311,-74.258188);
    function initialize() {
        var mapProp = {
            center: myCenter,
            zoom: 10,
            scrollwheel: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}]
        };
		var map = new google.maps.Map(document.getElementById("contactgoogleMap"), mapProp);
		
		var marker=new google.maps.Marker({
		  position:myCenter,
		  animation:google.maps.Animation.BOUNCE,
		  icon:'asset/img/map-marker.png'
		});
		
		var infowindow = new google.maps.InfoWindow({
			content: "We are here"
		});
		infowindow.open(map,marker);

		marker.setMap(map);
		setTimeout(function(){
			$('.gm-style-iw').parent().addClass('hello');
		},1000);
	}
    if (googleMapSelector.length) {
        google.maps.event.addDomListener(window, 'load', initialize);
    }
})(jQuery);