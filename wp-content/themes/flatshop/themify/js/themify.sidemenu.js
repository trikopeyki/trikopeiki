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

;(function($) {

	'use strict';

	var defaults = {
			panel: '#mobile-menu',
			close: '',
			side: 'right',
			speed: 250
		};

	function SideMenu ( element, options ) {
		this.element = element;
		this.settings = $.extend( {}, defaults, options );
		this._defaults = defaults;
		this.panelVisible = false;
		this.panelCleanName = this.settings.panel.replace( /#|\.|\s/g, function(match) {
			var replacements = { '#':'', '\.':'', ' ':'-' };
			return replacements[match]; } );
		this.init();
	}

	SideMenu.prototype = {
		init: function () {
			var self = this;
			$(this.element).on('click', function(e) {
				e.preventDefault();
				if ( self.panelVisible ) {
					self.hidePanel();
				} else {
					self.showPanel();
				}
			});
			if ( '' !== self.settings.close ) {
				$(self.settings.close).on('click', function(e) {
					e.preventDefault();
					self.hidePanel();
				});
			}
			$('body').addClass('sidemenu-active').on( 'scrollhighlightstart.themify', function() {
				if ( self.panelVisible ) {
					self.hidePanel();
				}
			}).on( 'sidemenushow.themify', function(e, emitterPanel, side) {
				if ( emitterPanel !== self.settings.panel ) {
					self.hidePanel( side );
				}
			});
		},
		showPanel: function () {
			var thisPanel = this.settings.panel;
			$(thisPanel).removeClass('sidemenu-off').addClass('sidemenu-on').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
				$(this).trigger( 'sidemenuaftershow.themify', [thisPanel] );
			});
			$('body').addClass(this.panelCleanName + '-visible sidemenu-' + this.settings.side).trigger('sidemenushow.themify', [thisPanel, this.settings.side]);
			this.panelVisible = true;
		},
		hidePanel: function ( side ) {
			var thisPanel = this.settings.panel, cssClass = this.panelCleanName + '-visible';
			$(thisPanel).removeClass('sidemenu-on').addClass('sidemenu-off');
			if ( side !== this.settings.side ) {
				cssClass += ' sidemenu-' + this.settings.side;
			}
			$('body').removeClass(cssClass).trigger('sidemenuhide.themify', [thisPanel]);
			this.panelVisible = false;
		}
	};

	$.fn.themifySideMenu = function ( options ) {
		if ( 'string' === typeof options ) {
			var self = $( this ).data( 'SideMenu' );
			if ( self ) {
				if ( 'show' == options ) {
					self.showPanel();
				}
				if ( 'hide' == options ) {
					self.hidePanel();
				}
			}
		} else {
			return this.each(function() {
				if ( !$.data( this, 'SideMenu' ) ) {
					$.data( this, 'SideMenu', new SideMenu( this, options ) );
				}
			});
		}
	};

})(jQuery);

}
/*
     FILE ARCHIVED ON 09:27:30 Nov 10, 2017 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 15:31:35 Feb 18, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 294.095
  exclusion.robots: 0.255
  exclusion.robots.policy: 0.244
  RedisCDXSource: 136.735
  esindex: 0.01
  LoadShardBlock: 129.29 (3)
  PetaboxLoader3.datanode: 102.398 (4)
  CDXLines.iter: 24.74 (3)
  PetaboxLoader3.resolve: 74.911 (2)
  load_resource: 100.166
*/