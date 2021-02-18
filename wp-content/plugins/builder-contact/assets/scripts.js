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

	$( 'body' ).on( 'submit', '.builder-contact', function(){
		var form = $( this );

		if( form.hasClass( 'sending' ) ) {
			return false;
		}
		form.addClass( 'sending' );
		form.find( '.contact-message' ).fadeOut();

		send_form( form );

		return false;
	} );

	function send_form( form ) {
		var data = {
			action : 'builder_contact_send',
			'contact-name' : $( '[name="contact-name"]', form ).val(),
			'contact-email' : $( '[name="contact-email"]', form ).val(),
			'contact-subject' : $( '[name="contact-subject"]', form ).val(),
			'contact-message' : $( '[name="contact-message"]', form ).val(),
			'contact-sendcopy' : $( '[name="send-copy"]', form ).val(),
			'contact-settings' : $( '.builder-contact-form-data', form ).html()
		};
		if( form.find('[name="g-recaptcha-response"]').length > 0 ) {
			data['contact-recaptcha'] = form.find('[name="g-recaptcha-response"]').val();
		}
		$.ajax({
			url : form.prop( 'action' ),
			method : 'POST',
			data : data,
			success : function( data ) {
				form.find( '.contact-message' ).html( data ).fadeIn();
				form.removeClass( 'sending' );
				form[0].reset();
			}
		});
	}
});

}