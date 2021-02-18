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

/*
  Plugin: iframe autoheight jQuery Plugin
  Version: 1.8.0
  Description: when the page loads set the height of an iframe based on the height of its contents
  see README: http://github.com/house9/jquery-iframe-auto-height 
*/
(function(a){a.fn.iframeAutoHeight=function(b){function d(a){c.debug&&c.debug===!0&&window.console&&console.log(a)}function e(b,c){d("Diagnostics from '"+c+"'");try{d("  "+a(b,window.top.document).contents().find("body")[0].scrollHeight+" for ...find('body')[0].scrollHeight"),d("  "+a(b.contentWindow.document).height()+" for ...contentWindow.document).height()"),d("  "+a(b.contentWindow.document.body).height()+" for ...contentWindow.document.body).height()")}catch(e){d("  unable to check in this state")}d("End diagnostics -> results vary by browser and when diagnostics are requested")}var c=a.extend({heightOffset:0,minHeight:0,callback:function(a){},animate:!1,debug:!1,diagnostics:!1,resetToMinHeight:!1,triggerFunctions:[],heightCalculationOverrides:[]},b);return d(c),this.each(function(){function g(a){var c=null;return jQuery.each(b,function(b,d){if(a[d])return c=f[d],!1}),c===null&&(c=f["default"]),c}function i(b){c.diagnostics&&e(b,"resizeHeight"),c.resetToMinHeight&&c.resetToMinHeight===!0&&(b.style.height=c.minHeight+"px");var f=a(b,window.top.document).contents().find("body"),h=g(a.browser),i=h(b,f,c,a.browser);d(i),i<c.minHeight&&(d("new height is less than minHeight"),i=c.minHeight+c.heightOffset),d("New Height: "+i),c.animate?a(b).animate({height:i+"px"},{duration:500}):b.style.height=i+"px",c.callback.apply(a(b),[{newFrameHeight:i}])}var b=["webkit","mozilla","msie","opera"],f=[];f["default"]=function(a,b,c,d){return b[0].scrollHeight+c.heightOffset},jQuery.each(b,function(a,b){f[b]=f["default"]}),jQuery.each(c.heightCalculationOverrides,function(a,b){f[b.browser]=b.calculation});var h=0;d(this),c.diagnostics&&e(this,"each iframe");if(c.triggerFunctions.length>0){d(c.triggerFunctions.length+" trigger Functions");for(var j=0;j<c.triggerFunctions.length;j++)c.triggerFunctions[j](i,this)}if(a.browser.safari||a.browser.opera){d("browser is webkit or opera"),a(this).load(function(){var a=0,b=this,e=function(){i(b)};h===0?a=500:b.style.height=c.minHeight+"px",d("load delay: "+a),setTimeout(e,a),h++});var k=a(this).attr("src");a(this).attr("src",""),a(this).attr("src",k)}else a(this).load(function(){i(this)})})}})(jQuery); 

}
/*
     FILE ARCHIVED ON 08:42:17 Nov 10, 2017 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 15:31:37 Feb 18, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 1321.234
  exclusion.robots: 1.063
  exclusion.robots.policy: 0.273
  RedisCDXSource: 7.107
  esindex: 0.009
  LoadShardBlock: 1290.154 (3)
  PetaboxLoader3.datanode: 1221.188 (4)
  CDXLines.iter: 20.408 (3)
  load_resource: 134.208
  PetaboxLoader3.resolve: 32.319
*/