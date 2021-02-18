var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

var Themibox = {};

(function($) {

Themibox = {

	topOffset: '50%',

	init: function(config) {
		// private
		this.isFrameLoading = false;
		this.lightboxOpen = false;

		if ( $('body').hasClass( 'iphone' ) ) {
			window.addEventListener( 'orientationchange', this.doOnOrientationChange );
		}

		// public
		this.config = config;
		this.bindEvents();
		this.setupLightbox();
	},

	doOnOrientationChange: function() {
		if ( $('body').hasClass( 'post-lightbox' ) ) {
			window.setTimeout(function(){
				Themibox.topOffset = $(window).scrollTop();
				$("#post-lightbox-wrap").animate({ top: Themibox.topOffset }, 400 );
			}, 400);
		}
	},

	bindEvents: function() {
		var $body = $('body');

		$body.on('click', '.themify-lightbox', this.clickLightBox);
		$body.on('click', '.close-lightbox', this.closeLightBox);

		// lightbox navigation
		$body.on('click', '.lightbox-prev', this.clickLightBoxPrev);
		$body.on('click', '.lightbox-next', this.clickLightBoxNext);

		$(document).keyup(this.keyUp);

		// Set up overlay
		jQuery('<div/>', {id: 'pattern', class: 'overlay'}).appendTo('body').on('click', this.closeLightBox);

	},

	setupLightbox: function() {
		$('<div id="post-lightbox-wrap">'+themifyShop.themibox.close+'<div id="post-lightbox-container"><div class="carousel"></div></div></div><a href="#" class="lightbox-direction-nav lightbox-prev">»</a><a href="#" class="lightbox-direction-nav lightbox-next">«</a>')
			.hide()
			.prependTo('body');
	},

	clickLightBox: function(e) {
		var url = $(this).attr('href');
		Themibox.isFrameLoading = true;

		$('body').addClass('post-lightbox');
		$('.overlay').hide().fadeIn(800);
		$('<div/>', {id: 'loader'}).appendTo('body');
		//$('#pagewrap').hide();
		$('#post-lightbox-container').empty();

		$('<div class="post-lightbox-iframe"/>').load(url + ' #pagewrap', function(){
			$('#loader').remove();

			if ( $('body').hasClass( 'iphone' ) ) {
				Themibox.topOffset = $(window).scrollTop() + 10;
			}

			$("#post-lightbox-wrap")
				.show()
				.css('top', Themibox.getDocHeight())
				.animate({
					top: Themibox.topOffset
				}, 800 );

			$('.lightbox-direction-nav').show();

			var prev = $(this).contents().find('.post-nav .prev a');
			var next = $(this).contents().find('.post-nav .next a');

			if(prev.length == 0){
				$('.lightbox-prev').hide();
			}

			if(next.length == 0){
				$('.lightbox-next').hide();
			}

			// also for the form should exit the lightbox
			$(this).contents().find("form").attr('target', '_top');

			Themibox.isFrameLoading = false; // update current status
			Themibox.lightboxOpen = true;

			// ((((( Broadcast Event ))))))
			$('body').trigger('themiboxloaded');

		}).iframeAutoHeight().appendTo('#post-lightbox-container');

		e.preventDefault();
	},

	closeLightBox: function(e) {

		//$('#pagewrap').show();
		$('#post-lightbox-wrap').animate({
			top: Themibox.getDocHeight()
		}, 800, function() {
			// Animation complete.
			$('.overlay').fadeOut(800, function(){
				$('body').removeClass('post-lightbox');
				$('#post-lightbox-container').empty().parent().hide();
				$('.lightbox-direction-nav').hide();
				$(window).resize(); // fix issue
			});
		});

		Themibox.lightboxOpen = false; // update current status

		// ((((( Broadcast Event ))))))
		$('body').trigger('themiboxclosed');

		e.preventDefault();
	},

	getDocHeight: function(){
		var D = document;
		return Math.max(
			Math.max(D.body.scrollHeight, D.documentElement.scrollHeight),
			Math.max(D.body.offsetHeight, D.documentElement.offsetHeight),
			Math.max(D.body.clientHeight, D.documentElement.clientHeight)
		);
	},

	clickLightBoxPrev: function(e) {
		var link = $('#post-lightbox-iframe').contents().find('.post-nav .prev a').attr('href');
		link += '?post_in_lightbox=1';

		if($(this).hasClass('click-disabled')){
			return false;
		}

		$(this).addClass('click-disabled');

		Themibox.loadLightboxPost(link);

		e.preventDefault();
	},

	clickLightBoxNext: function(e) {
		var link = $('#post-lightbox-iframe').contents().find('.post-nav .next a').attr('href');
		link += '?post_in_lightbox=1';

		if($(this).hasClass('click-disabled')){
			return false;
		}

		$(this).addClass('click-disabled');

		Themibox.loadLightboxPost(link);
		e.preventDefault();
	},

	loadLightboxPost: function(url) {
		var box = $('<div/>');
		$('<div/>', {id: 'loader'}).appendTo('body');
		Themibox.isFrameLoading = true;

		$('#post-lightbox-wrap, .lightbox-direction-nav').hide();
		$('#post-lightbox-container').empty();

		$('<div class="post-lightbox-iframe"/>').load(url + ' #pagewrap', function(){
			$('#loader').remove();

			$("#post-lightbox-wrap")
				.show()
				.css('top', Themibox.getDocHeight())
				.animate({
					top: 0
				}, 800 );

			$('.lightbox-direction-nav').removeClass('click-disabled').show();

			var prev = $(this).contents().find('.post-nav .prev a');
			var next = $(this).contents().find('.post-nav .next a');

			if(prev.length == 0){
				$('.lightbox-prev').hide();
			}

			if(next.length == 0){
				$('.lightbox-next').hide();
			}

			// also for the form should exit the lightbox
			$(this).contents().find("form").attr('target', '_top');

			Themibox.isFrameLoading = false;

		}).iframeAutoHeight().appendTo('#post-lightbox-container');
	},

	keyUp: function(e) {
		if(Themibox.isFrameLoading && e.keyCode == 27){
			Themibox.cancelLightBox();
		}

		if (Themibox.lightboxOpen && e.keyCode == 27) {
			$('.close-lightbox').trigger('click');
			$('#loader').remove();
		}
	},

	cancelLightBox: function() {

		//$('#pagewrap').show();
		$('.overlay').hide();
		$('body').removeClass('post-lightbox');
		$('#post-lightbox-container').empty().parent().hide();
		$('.lightbox-direction-nav').hide();
		$('#loader').remove();

		$(window).resize(); // fix issue

		Themibox.isFrameLoading = false;

		// ((((( Broadcast Event ))))))
		$('body').trigger('themiboxcanceled');
	}
};
})(jQuery);

}
/*
     FILE ARCHIVED ON 09:00:20 Nov 10, 2017 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 15:31:39 Feb 18, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  LoadShardBlock: 212.823 (3)
  exclusion.robots.policy: 0.276
  captures_list: 236.431
  esindex: 0.01
  PetaboxLoader3.resolve: 373.854
  RedisCDXSource: 1.877
  PetaboxLoader3.datanode: 194.456 (4)
  CDXLines.iter: 18.821 (3)
  load_resource: 427.26
  exclusion.robots: 0.287
*/