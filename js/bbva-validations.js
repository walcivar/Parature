/**
 * Manage user box in header region
 */

(function(L) {
  
    var $ = L.jQuery;
  
    L.onInit(function(context) 
    {	
    	// Elements on which to bind the event.
        var elems = $('#formPagoServicios,#formPagoTarjetas,#formPagoServiciosCelularTigo,#savenoteTransfExt,#savenoteCheque, #savenote, #formCanonInformatico, #formDespachosAduaneros, #formLiquidacionExpedientes, #formPagoPrestamos, #formIVADespachantes');
    	
        elems.bind( "clickoutside", function(event)
        {
        	var visible = elems.is(':visible');
        	if (!visible)
        	{
	        	 var elem = $(this);        	
	        	 var target = $(event.target);
	        	
	        	 // Update the text to reference the event.target element.        	
	        	 var selector = target[0].tagName.toLowerCase()        	
	        			+ ( target.attr('id') ? '#' + target.attr('id')        	
	        			: target.attr('class') ? '.' + target.attr('class').replace( / /g, '.' )
	        	       	: '' );    
	        	
	        	if ( (selector!="button.btn.arrow-right")  &&  (selector!="span.btn-text") )
	        	{
	        		if ($('.tooltip-body-error').is(':visible'))
	        		{
	        			$('.tooltip-container .tooltip-body-error').parents('.tooltip-container').remove();
	        		}
	        	}
        	}
        });
    	
		

        // CUSTOM Methods
        jQuery.validator.addMethod('notEqualTo', function(value, element, param) 
        {
            // bind to the blur event of the target in order to revalidate whenever the target field is updated
            // TODO find a way to bind the event just once, avoiding the unbind-rebind overhead
            var target = $(param);
            if (this.settings.onfocusout) 
            {
                target.unbind(".validate-notEqualTo").bind("blur.validate-notEqualTo", function() 
                {
                    $(element).valid();
                });
            }
            return value != target.val();          
        },
        jQuery.validator.messages.notEqualTo);


        jQuery.validator.addMethod('exactlength', function(value, element, param) 
        {
            return this.optional(element) || this.getLength($.trim(value), element) == param;
        }, 
        jQuery.validator.messages.exactlength);


        jQuery.validator.addMethod("requireFieldsLogin",function(value,element,param) 
        {
            var chk=false;
            if(value!="")
            {
                chk=true
            };
            return chk;
        },
        jQuery.validator.messages.requireFieldsLogin);


        jQuery.validator.addMethod("username", function(value, element) 
        {
            return this.optional(element) || /^[a-z0-9\_]+$/i.test(value);
        },
        jQuery.validator.messages.username);

        jQuery.validator.addMethod("numberWithDecimals", function(value, element) {
               return this.optional(element) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\,\d+)?$/.test(value);
        
        }, jQuery.validator.messages.numberWithDecimals); 

        jQuery.validator.addMethod("date", function(value, element) 
        {
         var valid = true;
         try{
          $.datepicker.parseDate($(element).datepicker('option', 'dateFormat'), $(element).val());
         }catch (e) {
          valid = false;
         }
         return this.optional(element) || valid;
        }, jQuery.validator.format('Invalid date'));


        jQuery.validator.addMethod("maxWords", function(value, element, params) { 
            return this.optional(element) || value.match(/\b\w+\b/g).length < params; 
        }, $.format("Please enter {0} words or less.")); 
         
        jQuery.validator.addMethod("minWords", function(value, element, params) { 
            return this.optional(element) || value.match(/\b\w+\b/g).length >= params; 
        }, $.format("Please enter at least {0} words.")); 
         
        jQuery.validator.addMethod("rangeWords", function(value, element, params) { 
            return this.optional(element) || value.match(/\b\w+\b/g).length >= params[0] && value.match(/bw+b/g).length < params[1]; 
        }, $.format("Please enter between {0} and {1} words."));

        jQuery.validator.addMethod("letterswithbasicpunc", function(value, element) {
                return this.optional(element) || /^[a-z-.,()'\"\s]+$/i.test(value);
        }, "Letters or punctuation only please");  

        jQuery.validator.addMethod("alphanumeric", function(value, element) {
                return this.optional(element) || /^\w+$/i.test(value);
        }, "Letters, numbers, spaces or underscores only please");  

        jQuery.validator.addMethod("lettersonly", function(value, element) {
                return this.optional(element) || /^[a-z]+$/i.test(value);
        }, "Letters only please");         

        jQuery.validator.addMethod("nowhitespace", function(value, element) {
                return this.optional(element) || /^\S+$/i.test(value);
        }, "No white space please"); 

        jQuery.validator.addMethod("ziprange", function(value, element) {
                return this.optional(element) || /^90[2-5]\d\{2}-\d{4}$/.test(value);
        }, "Your ZIP-code must be in the range 902xx-xxxx to 905-xx-xxxx");



        /**
          * Return true, if the value is a valid date, also making this formal check dd/mm/yyyy.
          *
          * @example jQuery.validator.methods.date("01/01/1900")
          * @result true
          *
          * @example jQuery.validator.methods.date("01/13/1990")
          * @result false
          *
          * @example jQuery.validator.methods.date("01.01.1900")
          * @result false
          *
          * @example <input name="pippo" class="{dateITA:true}" />
          * @desc Declares an optional input element whose value must be a valid date.
          *
          * @name jQuery.validator.methods.dateITA
          * @type Boolean
          * @cat Plugins/Validate/Methods
          */
        jQuery.validator.addMethod(
                "dateITA",
                function(value, element) {
                        var check = false;
                        var re = /^\d{1,2}\/\d{1,2}\/\d{4}$/
                        if( re.test(value)){
                                var adata = value.split('/');
                                var gg = parseInt(adata[0],10);
                                var mm = parseInt(adata[1],10);
                                var aaaa = parseInt(adata[2],10);
                                var xdata = new Date(aaaa,mm-1,gg);
                                if ( ( xdata.getFullYear() == aaaa ) && ( xdata.getMonth () == mm - 1 ) && ( xdata.getDate() == gg ) )
                                        check = true;
                                else
                                        check = false;
                        } else
                                check = false;
                        return this.optional(element) || check;
                }, 
                "Please enter a correct date"
        );


        jQuery.validator.addMethod("time", function(value, element) {
                        return this.optional(element) || /^([01][0-9])|(2[0123]):([0-5])([0-9])$/.test(value);
                }, "Please enter a valid time, between 00:00 and 23:59"
        );

        /**
         * matches US phone number format 
         * 
         * where the area code may not start with 1 and the prefix may not start with 1 
         * allows '-' or ' ' as a separator and allows parens around area code 
         * some people may want to put a '1' in front of their number 
         * 
         * 1(212)-999-2345
         * or
         * 212 999 2344
         * or
         * 212-999-0983
         * 
         * but not
         * 111-123-5434
         * and not
         * 212 123 4567
         */
        jQuery.validator.addMethod("phone", function(phone_number, element) {
            phone_number = phone_number.replace(/\s+/g, ""); 
                return this.optional(element) || phone_number.length > 9 &&
                        phone_number.match(/^(1-?)?(\([2-9]\d{2}\)|[2-9]\d{2})-?[2-9]\d{2}-?\d{4}$/);
        }, "Please specify a valid phone number");

        //rules  
        jQuery.validator.addClassRules("requireFieldsLogin", 
        {      
            requireFieldsLogin: true
        });


        jQuery.validator.addClassRules("username", 
        {      
            username: true
        });


        jQuery.validator.addClassRules("exactlength", 
        {      
            exactlength: true
        });

  });

})(BBVA);


jQuery.fn.clearErrors = function()
{
	$('.tooltip-container .tooltip-body-error').parents('.tooltip-container').remove();
	$('.inline-validation-invalid').removeClass('inline-validation-invalid');
	$('.error').removeClass('error');
	$('.c-mensajes-errorRefuerzo:visible').hide();
}

/* helper methods to handle error image */
jQuery.fn.appendErrorImage = function(element)
{
	var $image = $('<div class="error-image"><img src="img/icon-alert-error.png" /></div>');
	
	var left = $(element).position().left + $(element).outerWidth() - 26;
	var margin = parseInt($(element).css('margin-top').replace(/px/g, ''));
	var top = $(element).position().top + $(element).outerHeight() - 26 + margin;

	$image.css({
		left: left,
		top: top
	});
	$(element).after($image);
};

jQuery.fn.highlightTooltipValidation = function($element, errorClass) 
{
	if(!$element.hasClass('hidden-validable-field')){
		$element.addClass(errorClass);
		//jQuery.fn.appendErrorImage($element);
	}
};
  
jQuery.fn.removeErrorImage = function(element)
{
	$(element).parent().find('.error-image').remove();
};