/**
 * Manage user box in header region
 */

(function(L) 
{
  
    var $ = L.jQuery;
  
    L.onInit(function(context) 
    {
    	
    	// Date fields
    	$('input[data-type="date"]').each(function(){
    		// Set attribute placeholder
    		$(this).attr('placeholder', 'mm/dd/aaaa').placeholder();
    		
    		// Configure mask plugin
    		$(this).mask("99/99/9999");
    		
    		// Add change callback
    		$(this).change(function(){
        		// Validate date 
        		try{
        			$.datepicker.parseDate($(this).datepicker('option', 'dateFormat'), $(this).val());
        		}catch (e) {
        			// If date is not valid remove value and re-initialize placeholder
        			$(this).val(''); 
        			$(this).placeholder();
        		}
        	}); 
    	}); 
    	
    	// Number fields
    	$('.number').live('keypress', function(event){
    		return (event.which >= 48 && event.which <= 57) || (event.which == 46) || (event.which == 44) || (event.which == 8 || event.which == 0);
    	});
   
        var elementErrorId ="";
        var elementTooltipId ="";
                 
        jQuery.validator.setDefaults({ 
        	focusInvalid: false,
			focusCleanup: true,
			onfocusout: false,
			onkeyup: false,
			errorClass: 'error',
			errorPlacement: function(error, $element) 
			{
				var $container = $element.closest('.stepWizard').find('.c-mensajes-errorRefuerzo');
				
				if(($element.attr('type') == 'checkbox' || $element.attr('type') == 'radio') && $container.length != 0)
				{
					// Create error element and append it to error container
					var $errorelement = $('<li>');
					$errorelement.append(error);
					$container.append($errorelement);
					
					// Display error container
					$container.show();
					
					// Animate height (no scrolling, no removing errors)
					animateHeight($element.closest('.stepWizard'), null, true, true);
					
					// Scrollto (if not yet on screen)
					if(!$container.isOnScreen())
					{
						$(document.body).scrollTo($container, 'slow');
					}
					
				}
				else
				{    				
					var spacing = $element.hasClass('ui-autocomplete-input') ? 8 : 4;
					var tooltip = $element.orbitaltooltip({
						orbitalPosition: 0,
						spacing: spacing,
						offset: 0,
						tooltipClass: 'tooltip-container',
						html: '<div class="tooltip-body-error"><p class="title">Error</p><span>' + error.text() + '</span></div><div class="tooltip-bubble-error"></div>',
						autoHide: true,
						zindex: 1020
					});
					tooltip.enable();
					if($('.tooltip-body-error').length == 1){
						tooltip.reveal();
					}
					
					$element.hover(function()
					{
						$('.tooltip-container .tooltip-body-error').parents('.tooltip-container').hide();  
						tooltip.reveal();
					}, function(){
						// hides automatically
					});
					
					// Scrollto (if not yet on screen)
//					if(!$('.tooltip-body-error').isOnScreen())
//					{
//						$(document.body).scrollTo($('.tooltip-body-error'), 'slow');
//					}
				
				}
			},
			highlight: function(element, errorClass) 
			{
				jQuery.fn.highlightTooltipValidation($(element), errorClass);
			},
			unhighlight: function(element, errorClass) 
			{
				var $container = $(element).closest('.stepWizard').find('.c-mensajes-errorRefuerzo');
				if(($(element).attr('type') == 'checkbox' || $(element).attr('type') == 'radio') && $container.length != 0){
					if($container.find('li').length == 1){
						$container.hide();
					}
				}else{
					$('#orbitalTip_' + element.id).remove();
					$(element).removeClass(errorClass);
				}
			},
			onsubmit: function()
			{
				jQuery.fn.clearErrors();
				return false;
			}
        });     
        
    });  


})(BBVA);