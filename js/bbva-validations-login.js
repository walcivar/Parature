/**
 * Manage user box in header region
 */

$(document).ready(function()
{	
	$('form.login-form').validate(
    {
        focusInvalid: false,
        focusCleanup: true,
        onblur: false,
        onfocusout: false,
        onkeyup: false,
        rules: 
        {
          "access-pin": {
              required: { //is previous field valid
                depends: function(){
                			var isDocumentValid = $("#documento").valid();
                            return isDocumentValid;
                     	}
              },
              minlength: function(){
          			  var isDocumentValid = $("#documento").valid();
          			  if(isDocumentValid){
          				return 6;
          			  }else{
          				return 0;
          			  }
              }
          },
          "captcha-field": {
        	  required: { //are previous fields valid
                  depends: function(){
                	  		var isDocumentValid = $("#documento").valid();
                  			var isAccessPinValid = $("#access-pin").valid();
                              return (isDocumentValid && isAccessPinValid);
                       	}
                },
                minlength: function(){
            	  		var isDocumentValid = $("#documento").valid();
              			var isAccessPinValid = $("#access-pin").valid();
              			if(isDocumentValid && isAccessPinValid){
              				return 4;
              			  }else{
              				return 0;
              			  }
                   	}
            }
        },
        errorPlacement: function(error, element) 
        {
        	  /**
        	   * Modificado por @medianet
        	   */
        	  if($('form.login-form').data("error").length>0){
        		  	$('#login-form-error div').html($('form.login-form').data("error"));
        		  	
        	  }else{
					$('#login-form-error div').html(error.text());
        	  }
        	  $('#login-form-error').show();
            $("#client-access-panel").addClass("large");
        },

        highlight: function(element, errorClass) 
        {
            errorClass = 'error-noicon';          
            $('label[for="' + element.id + '"]').addClass(errorClass);
            $(element).addClass(errorClass);          
        },

        unhighlight: function(element, errorClass) 
        {
            errorClass = 'error-noicon';           
            $('label[for="' + element.id + '"]').removeClass(errorClass);
            $(element).removeClass(errorClass);
        }
        // @author capgemini modified medianet. SubmitHandler deleted @see login.js
//        ,submitHandler: function(form) 
//        { 
//          try
//          {
//              var isFirstClickCancelCond = true;
//      
//              ShowLoading('#lightboxtermycond', {top:110, zindex:9990});  
//
//              $('.content-scrolled').jScrollPane(
//              {
//                showArrows: true,
//                verticalArrowPositions: 'after',
//                horizontalArrowPositions: 'after'
//              });
//                  
//              $("#btncancelarcondiciones").click(function(e)
//              {
//					var $btn = $(this);
//					var $alert = $("#alert-noaceptar-terminos");
//					var position = $btn.offset();
//					
//					if (isFirstClickCancelCond) 
//					{
//						isFirstClickCancelCond = false;						 
//						 $alert.css("top", position.top - 9);
//						 $alert.css("left", position.left - 3 - $alert.width());
//						 $alert.css("z-index", 9995);
//						 $alert.css("opacity", 0);
//						 $alert.show();
//						 $alert.animate({
//						    opacity:1
//						 }, 500);
//					} 
//					else 
//					{
//					  $alert.hide();
//					  isFirstClickCancelCond = true;	
//					  HideLoading('#lightboxtermycond');
//					}
//              });
//
//              $("#btnaceptarcondiciones").click(function(e)
//              {                
//            	  form.submit();
//              });
//          }
//          catch(ex)
//          {
//        	  debugger;
//          }         
//       }        

    });

	 $('form').each(function() 
	 {
	      $(':input:regex(class, minlength-[0-9]*)', this).each(function() 
	      {
	        var classes = $(this).attr('class').split(' '),
	        minlength_rule = /^minlength-([0-9]*$)/,
	        result;
	        
	        for (var i = 0; i < classes.length; i++) {
	          result = classes[i].match(minlength_rule);
	          if (result != null) {
	            $(this).rules('add', {
	              minlength: result[1]
	            });
	          }
	        }
	      });
	      
	      // @author medianet
	      $(':input:regex(class, maxlength-[0-9]*)', this).each(function() 
	      {
	    	
	        var classes = $(this).attr('class').split(' '),
	        maxlength_rule = /^maxlength-([0-9]*$)/,
	        result;
	        
	        for (var i = 0; i < classes.length; i++) {
	          result = classes[i].match(maxlength_rule);
	          if (result != null) {
	            $(this).rules('add', {
	              maxlength: result[1]
	            });
	          }
	        }
	      });
	    
	      $(':input:regex(class, length-[0-9]*)', this).each(function() 
	      {
	        var classes = $(this).attr('class').split(' '),
	        length_rule = /^length-([0-9]*$)/,
	        result;
	        
	        for (var i = 0; i < classes.length; i++) {
	          result = classes[i].match(length_rule);
	          if (result != null) {
	            $(this).rules('add', {
	              exactlength: result[1]
	            });
	          }
	        }
	      });
	
	      $(':input:regex(class, equalto-[a-z|-]*)', this).each(function() 
	      {
	        var classes = $(this).attr('class').split(' '),
	        rule = /^equalto-([a-z|-]*$)/,
	        result;
	        
	        for (var i = 0; i < classes.length; i++) {
	          result = classes[i].match(rule);
	          if (result != null) {
	            $(this).rules('add', {
	              equalTo: '#' + result[1]
	            });
	          }
	        }
	      });
	      
	      $(':input:regex(class, requireFieldsLogin)', this).each(function() 
	      {
	        var classes = $(this).attr('class').split(' '),
	        rule = 'requireFieldsLogin',
	        result;
	        
	        for (var i = 0; i < classes.length; i++) {
	          result = classes[i].match(rule);
	          if (result != null) {
	            $(this).rules('add', {
	              requireFieldsLogin: result[0]
	            });
	          }
	        }
	      });
	});
	 $("#login-form-error").hide();
	 $("#captcha-field").removeClass('error-noicon');
	 $("#access-pin").removeClass('error-noicon');
	 $("#documento").removeClass('error-noicon');
	 
});