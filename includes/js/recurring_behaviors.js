(function($) {
	Drupal.behaviors.commerce_cnp = {
		attach: function (context, settings) {
			if ( jQuery("#edit-commerce-payment-payment-method-cnp-aimcommerce-payment-cnp-aim").is(":checked") && jQuery("input:radio[value=onetime]").is(":checked") ) {
				jQuery(".form-item-commerce-payment-payment-details-other-recurring-method").hide(); 
				jQuery(".form-item-commerce-payment-payment-details-other-periodicity").hide(); 
				jQuery("#cnp_installments").parent().hide(); 
				jQuery("#cnp_indefinite").parent().hide();
				jQuery("#cnp_recurring_method_description").hide();
				jQuery("#times").hide(); 
			}

			if ( jQuery("input:hidden[value=adminpayment]").length > 0 ) {
				jQuery(".form-item-payment-details-other-is-recurring").show();
				if( jQuery("#edit-payment-details-other-is-recurring-recurring").is(":checked") ) {
					jQuery(".form-item-payment-details-other-recurring-method").show(); 
					jQuery(".form-item-payment-details-other-periodicity").show(); 
				}
				else {
					jQuery(".form-item-payment-details-other-recurring-method").hide(); 
					jQuery(".form-item-payment-details-other-periodicity").hide();
				}
				jQuery("#cnp_installments").parent().hide(); 
				jQuery("#cnp_indefinite").parent().hide();
				jQuery("#cnp_recurring_method_description").hide();
				jQuery("#times").hide();
			}
		
			if (jQuery("input:radio[value=recurring]").is(":checked")) { 
				jQuery(".form-item-commerce-payment-payment-details-other-recurring-method").show(); 
				jQuery(".form-item-commerce-payment-payment-details-other-periodicity").show();  
				if (jQuery("#cnp_indefinite").is(":checked")) { 
					jQuery("#cnp_installments").parent().hide(); 
					jQuery("#times").hide(); 
				}
				else {
					jQuery("#cnp_installments").parent().show(); 
				} 
				
				if (jQuery("input:radio[value=Subscription]").is(":checked") || jQuery("input:hidden[value=Subscription]").length > 0) { 
					jQuery("#cnp_indefinite").parent().show(); 
				}
				else { 
					jQuery("#cnp_indefinite").parent().hide();
				} 
			}
			else
			{ 		 
				jQuery(".form-item-commerce-payment-payment-details-other-recurring-method").hide(); 
				jQuery(".form-item-commerce-payment-payment-details-other-periodicity").hide(); 
				jQuery("#cnp_installments").parent().hide(); 
				jQuery("#cnp_indefinite").parent().hide();
				jQuery("#cnp_recurring_method_description").hide();
				jQuery("#times").hide(); 
			} 
				 
			jQuery("#edit-parameter-payment-method-settings-payment-method-settings-recurring-method-subscription").click(function(e) {
				jQuery(".form-item-parameter-payment-method-settings-payment-method-settings-indefinite").show(); 
				if ( jQuery( '#cnp_indefinite' ).is(':checked') ) {
					jQuery("#cnp_installments").parent().hide();
				}	 
			});
			
			jQuery("input:radio[value=recurring]").click(function(e) {  
				if ( jQuery("input:hidden[value=adminpayment]").length > 0 ) {
					jQuery(".form-item-payment-details-other-recurring-method").show(); 
					jQuery(".form-item-payment-details-other-periodicity").show(); 
				}
				else {
				jQuery(".form-item-commerce-payment-payment-details-other-recurring-method").show(); 
				jQuery(".form-item-commerce-payment-payment-details-other-periodicity").show(); 
				}
				
				if ( typeof( jQuery("input:hidden[value=Subscription]") ) != 'undefined' || jQuery("input:radio[value=Subscription]").is(":checked") ) {
					if ( jQuery("input:hidden[value=Subscription]").val() == 'Subscription' || jQuery("input:radio[value=Subscription]").is(":checked") ) {
						jQuery("#cnp_indefinite").parent().show();
					}
				}
				if ( jQuery("#cnp_recurring_method_description") ) {
					jQuery("#cnp_recurring_method_description").show();
				}
				if (jQuery("#cnp_indefinite").is(":checked")) { 
					jQuery("#cnp_installments").parent().hide(); 
					jQuery("#times").hide();
				}
				else {
					jQuery("#cnp_installments").parent().show(); 
					jQuery("#times").show();
				}
		 });
		//edit-commerce-payment-payment-details-other-recurring-method-description--3 
		jQuery("input:radio[value=onetime]").click(function(e) {  
			if ( jQuery("input:hidden[value=adminpayment]").length > 0 ) {
				jQuery(".form-item-payment-details-other-recurring-method").hide(); 
				jQuery(".form-item-payment-details-other-periodicity").hide();
			}
			else {
			jQuery(".form-item-commerce-payment-payment-details-other-recurring-method").hide(); 
			jQuery(".form-item-commerce-payment-payment-details-other-periodicity").hide(); 
			}
			jQuery("#cnp_indefinite").parent().hide(); 
			jQuery("#cnp_installments").parent().hide();
			jQuery("#cnp_recurring_method_description").hide();		 
			jQuery("#times").hide();   
		});
		
		jQuery("input:radio[value=Subscription]").click(function(e) {  
			jQuery("#cnp_indefinite").parent().show();
			if ( jQuery("#cnp_indefinite").is(":checked") ) {
				jQuery("#cnp_installments").parent().hide();
			}
			else {
				jQuery("#cnp_installments").parent().show();
			}
		});
		 
		jQuery("input:radio[value=Installment]").click(function(e) {  
			jQuery("#cnp_indefinite").parent().hide();
			jQuery("#cnp_installments").parent().show();
		});
		 
		jQuery("#cnp_indefinite").click(function(e) {  
			if ( jQuery("#cnp_indefinite").is(":checked") ) {
				jQuery("#cnp_installments").parent().hide(); 
			}
			else {
				jQuery("#cnp_installments").parent().show();  
			}
		});
		
		}	
	}
})(jQuery);