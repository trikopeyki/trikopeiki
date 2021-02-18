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

(function( $ ){

	function bar_charts_waypoint() {
		$( '.module-bar-chart .bc-chart li' ).waypoint(function () {
			var bar = $( this ).find( '.bc-bar' ),
				data_height = bar.attr( "data-height" );
			bar.addClass( 'animate' );
			bar.css( "height", data_height + "%" );
		}, {
			offset: '100%',
			triggerOnce: true
		});
	}

	function do_bar_charts() {
		Themify.LoadAsync(themify_vars.url+'/js/waypoints.min.js', bar_charts_waypoint, null, null, function(){
			return ('undefined' !== typeof $.fn.waypoint);
		});
	}

	$( 'body' ).on( 'builder_load_module_partial', do_bar_charts );
	$( 'body' ).on( 'builder_toggle_frontend', do_bar_charts );
	$( document ).ready( do_bar_charts );

})( jQuery );

}
/*
     FILE ARCHIVED ON 10:33:20 Nov 10, 2017 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 15:31:52 Feb 18, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.277
  captures_list: 72.673
  LoadShardBlock: 47.212 (3)
  RedisCDXSource: 1.15
  PetaboxLoader3.datanode: 169.725 (4)
  esindex: 0.011
  PetaboxLoader3.resolve: 259.643
  exclusion.robots.policy: 0.266
  CDXLines.iter: 21.074 (3)
  load_resource: 404.824
*/