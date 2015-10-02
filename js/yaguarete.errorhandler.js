/**
 * Yaguarete Error Handler
 * -----------------------
 * This is a jQuery plugin which includes encapsulated Ajax call to consistently handle errors and several error-related functions used in Yaguarete.
 * Please, update "Dependencies" section whenever you add any function with strong dependencies on external libraries and its versions.
 *
 *
 * Dependencies
 * ------------
 * This section must specify dependency libraries and its version. Please, note that order is critical when importing libraries.
 * 		+ jquery-1.7.2.js
 * 		+ bbva-general.js
 * 		+ jquery.blockUI.1.33.js
 */

jQuery.extend({
	
	/**
	 * Encapsulates jQuery $.ajax function to provide a consistent error handling.
	 * 
	 * @param args A set of key/value pairs that configure the Ajax request and error handling. All arguments are optional. Possible key values are options, handlers and params.
	 * 
	 * @param args.options A set of key/value pairs that configure the Ajax request.
	 *        args.options[form] A form (native or jquery object) that will be used to automatically configure url, context and data options.
	 *        args.options[url] A string containing the URL to which the request is sent. If a form is provided as parameter, url will be its action attribute by default.
	 *        args.options[data] Data to be sent to the server. When making a doAjax call providing a form as argument, such form will be serialized and sent as data by default. If no form is provided as argument, object must be Key/Value pairs and will be converted to a query string, if not already a string. If value is an Array, jQuery serializes multiple values with same key.
	 *        args.options[requestType] The type of request to make ("POST" or "GET"), default is "POST".
	 *        args.options[context] This object will be made the context of all Ajax-related callbacks. When making a doAjax call providing a form as argument, such form context will be used by default.
	 *        args.options[contentType] When sending data to the server, use this content type. Default is "application/x-www-form-urlencoded; charset=UTF-8", which is fine for most cases.
	 *        args.options[async] By default, all requests are sent asynchronously (i.e. this is set to true by default). If you need synchronous requests, set this option to false.
	 *        args.options[webflow] This boolean tells doAjax that the request is done to a Spring Webflow's flow. So, it will add _eventId and ajaxSource parameters. Default is false.
	 *        args.options[eventId] If webflow option is true, this parameters is the name of the transition that will be fired in the flow.
	 *        args.options[fragments] If webflow option is true, this parameters is the name of the fragment that will be rendered in the flow.
	 * 		  args.options[blockUI] If blockUI option is true, a block UI layers is showed while ajax request is working.
	 * @param args.handlers A set of key/value pairs that configure error handling and response management.
	 *        args.handlers[success] A function to be called if the request succeeds. The function gets passed three arguments: The data returned from the server, formatted according to the dataType parameter; a string describing the status; and the jqXHR (in jQuery 1.4.x, XMLHttpRequest) object.
	 *        args.handlers[before] A pre-request callback function that can be used to modify the jqXHR (in jQuery 1.4.x, XMLHTTPRequest) object before it is sent. Use this to set custom headers, etc. The jqXHR and settings maps are passed as arguments. This is an Ajax Event. Returning false in the before function will cancel the request.
	 *        args.handlers[complete] A function to be called when the request finishes (after success and error callbacks are executed).
	 *        args.handlers[handledError] A function that implements what to do if an expected error occurs, typically 4xx http status code. By default, it shows application error modal layer.
	 *        args.handlers[nonHandledError] A function that implements what to do if an unexpected error occurs, typically 5xx htt status code. By default, it redirects to the fatal error page.
	 *        args.handlers[error] A set of key/function pairs that configure error handling based on response http status code.
	 *        args.handlers[error][400] By default executes handledError function.
	 *        args.handlers[error][405] By default executes nonHandledError function.
	 *        args.handlers[error][500] By default executes nonHandledError function.
	 *
	 * @param args.params A set of key/value pairs that configure additional parameters for the Ajax request. Key/value pairs will be parsed as GET parameters and sent within the request URL in format "&key=value". The developer is free to use whatever key/value he needs. 
	 */
	doAjax: function (args) {
		// Force all parameters to be maps
		var options =  $.extend({}, args.options);
		var handlers =  $.extend({}, args.handlers);
		var params = $.extend({}, args.params);
		
		var formAction = undefined;
		var formContext = undefined;
		var $submitForm = options.form != undefined ? options.form : undefined;
		// if a form is passed via arguments, force it to be a jquery object
		if ($submitForm !== undefined) {
			if (!($submitForm instanceof jQuery)) {
				$submitForm = $($submitForm);
			}			
			formAction = $submitForm.attr("action");
			formContext = $submitForm[0];
		}
		
		var url = options.url || formAction;
		if (url !== undefined) {
			var requestType = options.requestType || "POST";
			var context = options.context || formContext || window;
			var contentType = options.contentType || "application/x-www-form-urlencoded;charset=UTF-8"; // application/x-www-form-urlencoded is by default. Added ";charset=UTF-8"
			var async = options.async !== undefined ? options.async : true;
			var fragments = "";
			var data = $submitForm !== undefined ? $submitForm.serialize() : options.data || {};
			$.extend(data, params);
			var isWebflow = options.webflow || false;
			var blockUI = options.blockUI !== undefined ? options.blockUI : true;
			if (isWebflow) {
				var webFlowParams = {
						ajaxSource: true,
						_eventId: options.eventId
					};
				if (options.fragments !== undefined && options.fragments !== "") { webFlowParams["fragments"] = options.fragments; }
				// data must be a query string or an object. If it is an object, it will be converted to query string by jquery ajax.
				if (typeof data === "string") { // data is query string
					data = data + "&" + $.param(webFlowParams);
				} else { // data is object
					$.extend(data, webFlowParams);
				}
			}
			
			// Force callbacks to be a map and deepcopy handlers
			var callbacks = $.extend(true, {}, handlers);
			callbacks.error = callbacks.error || {};
			
			// Apply default callbacks
			callbacks.success = callbacks.success || function(){};
			callbacks.before = callbacks.before || 
				function() {
					if(blockUI){
						$.blockUI({ message: null });
					}
				};
			callbacks.complete = callbacks.complete || function(){
				if(blockUI){
					$.unblockUI({ message: null });
				}
			};
			callbacks.handledError = callbacks.handledError || 
				function(args) {
//					$.showApplicationError({ text: args.message });
					$.showNonFatalError({ text: args.message, onClose: args.onClose });
				};
			callbacks.nonHandledError = callbacks.nonHandledError || 
				function(args) {
					$.showFatalError({ text: args.message });
				};
			callbacks.error[0] = callbacks.error[0] || function(){};
			callbacks.error[400] = callbacks.error[400] || callbacks.handledError;
			callbacks.error[403] = callbacks.error[403] || function(){window.top.location = "./403.html";};
			callbacks.error[405] = callbacks.error[405] || callbacks.nonHandledError;
			callbacks.error[500] = callbacks.error[500] || callbacks.nonHandledError;
				
			if ($.isFunction(callbacks.success) && $.isFunction(callbacks.before) && $.isFunction(callbacks.handledError) && $.isFunction(callbacks.nonHandledError) && $.isFunction(callbacks.error[400]) && $.isFunction(callbacks.error[405]) && $.isFunction(callbacks.error[500])) {				
				// Execute ajax call
				$.ajax({
					type: requestType,
					context: context,	// This is critical in order to get callback functions working properly in desired scope
					data: data,         // Data to be sent to the server. It is converted to a query string, if not already a string.
					url: url,
					async: async,
					contentType: contentType,
					headers: $.buildCsrfTokenObject(),
					beforeSend: callbacks.before,
					complete: callbacks.complete,
					success: function (data, textStatus, jqXHR) {
						callbacks.success.call(this, data, textStatus, jqXHR);
					},
					error: function (jqXHR, textStatus, errorThrown) {
						var $xml = $(jqXHR.responseText);
						var text = $xml.find("message").text();
						var redirect = $xml.find("redirectTo").text();
						var onClose = null;
						
						if (redirect.trim() != "") {
							onClose = function() {
								window.top.location = redirect;
							};
						}
						
						var httpStatusCode = jqXHR.status;
						if (callbacks.error[httpStatusCode] !== undefined) {
							callbacks.error[httpStatusCode].call(this, { message: text, onClose: onClose, redirectUrl:redirect });
						} else {
							callbacks.nonHandledError.call(this, { message: text });
						}
					}
				});
			} else {
				jQuery.error("Optional callbacks must be function type.");
			}
		} else {
			jQuery.error("Ajax request URL can not be null.")
		}
	},
	
	/**
	 * Shows a modal layer with error messages. By default, it shows generic application error messages.
	 * 
	 * @param args A set of key/value pairs to specify title and text messages (i.e. $.showApplicationError({ title: "Error!", text: "This is an error example" });)
	 */
	showApplicationError: function (args) {
		
		/*var args = $.extend({}, args);
		var title = args.title || txt_error_applicationError_title;
		var text = args.text || txt_error_applicationError_text;
		
		$("#error-aplication").find("span.icon-error").next("span").html(title);
		$("#error-aplication").find("div#description-error-text").children("p").html(text.replace(/'/g, ""));
		
		ShowLoading('#error-aplication', {top:110});
		
		if ('onClose' in args) {
			$("#error-aplication").find("p#close-modal").bind("click", args.onClose);
		}*/
		
	},
	
	/**
	 * Shows a modal layer with inactivity error messages.
	 */
	showInactivityError: function () {
		//ShowLoading('#error-inactivity', {top:110});
	},
	
	/**
	 * Shows a modal layer with inactivity warning messages.
	 */
	showInactivityWarning: function () {
		ShowLoading('#logout-warning', {top:110});
	},
	
	hideInactivityWarning: function () {
		HideLoading('#logout-warning');
	},
	
	/** 
	 * Redirects to an error page forcing to exit the application.
	 */
	showFatalError: function() {
		window.top.location = "./500.html";
	},
	
	/**
	 * Redirects to an error page without forcing to exit the application.
	 */
	showNonFatalError: function(args) {
		
		var args = $.extend({}, args);
		var title = args.title || txt_error_applicationError_title;
		var text = args.text || txt_error_applicationError_text;

		$("#error-aplication").find("span.icon-error").next("span").html(title);
		$("#error-aplication").find("div#description-error-text").children("p").html(text.replace(/'/g, ""));
		
		ShowLoading('#error-aplication', {top:110});
		/*
		if ('onClose' in args && args.onClose != null) {
			$("#error-aplication").find("p#close-modal").bind("click", args.onClose);
		} else {
			$("#error-aplication").find("p#close-modal").bind("click", function() {
				//window.top.location = $("#flowExecutionUrlContainer").attr("action");
			});
		}*/

		
	}
});
