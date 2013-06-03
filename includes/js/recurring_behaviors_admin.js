(function($) {
	Drupal.behaviors.commerce_cnp = {
		attach: function (context, settings) {
			// Behaviors when loading
			if ( jQuery("#edit-parameter-payment-method-settings-payment-method-settings-is-recurring").is(":checked") ) {
				jQuery( ".form-item-parameter-payment-method-settings-payment-method-settings-periodicity" ).show();
				jQuery( ".form-item-parameter-payment-method-settings-payment-method-settings-recurring-method" ).show();
				if ( jQuery("#edit-parameter-payment-method-settings-payment-method-settings-recurring-method-subscription").is(":checked") ) {
					jQuery(".form-item-parameter-payment-method-settings-payment-method-settings-indefinite").show(); 
				}
				else{
					jQuery(".form-item-parameter-payment-method-settings-payment-method-settings-indefinite").hide();
				}
			}
			else{
				jQuery( ".form-item-parameter-payment-method-settings-payment-method-settings-periodicity" ).hide();
				jQuery( ".form-item-parameter-payment-method-settings-payment-method-settings-recurring-method" ).hide();
				if ( !jQuery("#edit-parameter-payment-method-settings-payment-method-settings-recurring-method-subscription").is(":checked") ){
					jQuery(".form-item-parameter-payment-method-settings-payment-method-settings-indefinite").hide(); 
				}
				else{
					if( !jQuery("#edit-parameter-payment-method-settings-payment-method-settings-is-recurring").is(":checked") ) {
						jQuery(".form-item-parameter-payment-method-settings-payment-method-settings-indefinite").hide();
					}
					else {
					jQuery(".form-item-parameter-payment-method-settings-payment-method-settings-indefinite").show();
					}
				}
			}
			
			jQuery("#edit-parameter-payment-method-settings-payment-method-settings-is-recurring").click(function(e) {
				if( jQuery("#edit-parameter-payment-method-settings-payment-method-settings-is-recurring").is(":checked") ) {
					jQuery( ".form-item-parameter-payment-method-settings-payment-method-settings-periodicity" ).show();
					jQuery( ".form-item-parameter-payment-method-settings-payment-method-settings-recurring-method" ).show();
					if ( jQuery("#edit-parameter-payment-method-settings-payment-method-settings-recurring-method-subscription").is(":checked") ){
						jQuery(".form-item-parameter-payment-method-settings-payment-method-settings-indefinite").show(); 
					}
					else {
						jQuery(".form-item-parameter-payment-method-settings-payment-method-settings-indefinite").hide();
					}
				}
				else {
					jQuery( ".form-item-parameter-payment-method-settings-payment-method-settings-periodicity" ).hide();
					jQuery( ".form-item-parameter-payment-method-settings-payment-method-settings-recurring-method" ).hide();
					jQuery(".form-item-parameter-payment-method-settings-payment-method-settings-indefinite").hide();
				}
			});
			
			jQuery("#edit-parameter-payment-method-settings-payment-method-settings-recurring-method-subscription").click(function(e) {
				if ( jQuery("#edit-parameter-payment-method-settings-payment-method-settings-recurring-method-subscription").is(":checked") ) {
					jQuery(".form-item-parameter-payment-method-settings-payment-method-settings-indefinite").show(); 
				}
				else {
					jQuery(".form-item-parameter-payment-method-settings-payment-method-settings-indefinite").hide(); 
				}
			});
			 
		}	
	}
})(jQuery);