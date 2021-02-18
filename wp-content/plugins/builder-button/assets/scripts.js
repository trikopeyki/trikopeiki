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

jQuery(function($){

	$( 'body' ).on( 'click', 'a.scroll-next-row', function(){
		var $this = $( this );
		var row = $( this ).closest( '.themify_builder_row' ).next();
		$( 'body, html' ).animate( {
			scrollTop: row.offset().top
		}, 800, function(){
			if( $( '#headerwrap.fixed-header' ).length > 0 ) {
				$( 'body, html' ).animate( {
					scrollTop: row.offset().top - $( '#headerwrap.fixed-header' ).outerHeight()
				}, 200 );
			}
		} );

		$( 'body' ).trigger( 'builder_button_scroll_to_next_row', [$this] );

		return false;
	} );

	$( 'body' ).on( 'click', 'a.modules-reveal', function(){
		var $this = $( this ),
			modules = $this.closest( '.module' ).nextAll();
		modules.fadeIn();

		/* if there are Map modules that need refreshing, SO #19245804 */
		modules.find( '.map-container' ).each(function(){
			if( typeof $( this ).data( 'gmap_object' ) == 'object' ) {
				google.maps.event.trigger( $( this ).data( 'gmap_object' ), 'resize' );
			}
		});

		if( $this.data( 'behavior' ) == 'toggle' ) {
			$this.addClass( 'modules-show-less' )
				.removeClass( 'modules-reveal' )
				.find( 'span' )
					.text( $this.data( 'lesslabel' ) );
		} else {
			$this.fadeOut( 'slow' );
		}

		$( 'body' ).trigger( 'builder_button_reveal_modules', [$this] );

		return false;
	} );

	$( 'body' ).on( 'click', 'a.modules-show-less', function(){
		var $this = $( this ),
			modules = $this.closest( '.module' ).nextAll();
		modules.fadeOut();
		$this.addClass( 'modules-reveal' )
			.removeClass( 'modules-show-less' )
			.find( 'span' )
				.text( $this.data( 'label' ) );

		$( 'body' ).trigger( 'builder_button_show_less', [$this] );
		return false;
	} );

	$(document).ready(function(){
		if ( $('.module-button .lightbox').length ) {
			Themify.LoadAsync(themify_vars.url+'/js/themify.gallery.js',Themify.GalleryCallBack, null, null, function(){
				return ('undefined' !== typeof ThemifyGallery);
			});
		}

		$('.builder_button').on({
			mouseenter: function () {
			var $hover = $(this).data('hover'),
			$remove = $(this).data('remove');
			if($hover){
				$(this).addClass($hover);
				$(this).removeClass($remove);
			}
		},
		mouseleave: function () {
			var $hover = $(this).data('hover'),
			$remove = $(this).data('remove');
			if($hover){
				$(this).removeClass($hover);
				$(this).addClass($remove);
			}
		}
		});
	});
});

}
/*
     FILE ARCHIVED ON 08:50:56 Nov 10, 2017 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 15:31:53 Feb 18, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots.policy: 0.242
  CDXLines.iter: 18.474 (3)
  RedisCDXSource: 18.524
  captures_list: 152.376
  esindex: 0.011
  LoadShardBlock: 109.089 (3)
  PetaboxLoader3.resolve: 39.418
  PetaboxLoader3.datanode: 98.533 (4)
  exclusion.robots: 0.252
  load_resource: 65.842
*/