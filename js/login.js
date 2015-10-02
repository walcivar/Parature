// @author medianet
(function ($) {
	//"use strict";
	
	//$('form.login-form').submit(function(event) {
	$(document).on("submit", "form.login-form", function(event){
		ShowLoading('#lightbox-loading-indicator');
		$("#button-login").attr("disabled", "disabled");
		$('form.login-form').data("error", "");
		$("section#login-form-error").hide();
		$("#client-access-panel").removeClass("large"); 
		if ($(this).valid()) {
		//if(true){
			var errorHandler = function(jqXHR) {
				$("#button-login").removeAttr("disabled");
				HideLoading('#lightbox-loading-indicator');
				// refresh captcha
				refreshCaptcha();
				var message = jqXHR.message;
				$("input[name='ruc']").val(""); //erase value
				$("#documento").val(""); // erase value
				$("input[name='access-pin']").val(""); // erase value
				$("input[name='captcha-field']").val(""); // erase captcha value
				//$("#login-form-error").find("div#validationSummaryOutput").html(message)
				$('form.login-form').data("error", message);
				$('#login-form-error div').html(message);
				$('#login-form-error').show();
				$("#client-access-panel").addClass("large");
	            
			};
			
			$.doAjax({
				options: {
					url: "/Yaguarete/j_spring_security_check",
					data: {
						username: $("input[name='documento']").val(),
						password: $("input[name='access-pin']").val(),
						captcha: $("input[name='captcha-field']").val(),
						userType: $("input[name='userType']").val(),
						docType: $("select[name='docType'] option:selected").val(),
						ruc:$("input[name='ruc']").val(),
						compDocType:$("input[name='compDocType']").val(),
						source: $("input[name='origen']").val()
					},
					async: false
				},
				handlers: {
					success: function (data, textStatus, jqXHR) {
						$("#cajaErrorServicio").css("display", "none");
						$("#cajaError").css("display", "none");
						
						
						switch (jqXHR.status) {
							case 200: // User is authenticated and conditions accepted.
							    var shaObj = new jsSHA($("input[name='documento']").val() + $("input[name='ruc']").val(), "ASCII");
							    var hash = shaObj.getHash("SHA-512", "HEX");
								
							    //Se comenta el envío de login para que no vaya aborted.
							    //loginEvent(hash, (!($("input[name='ruc']").val()) || ($("input[name='ruc']").val()).length === 0));
								//Se pone un timeout para esperar que termine el evento de etiquetado.
								window.top.location = "/Yaguarete/index";
								
								break;
							case 202: // User is authenticated but conditions are not accepted.
								$("body").data("csrf-token", jqXHR.getResponseHeader("X-Csrf-Token"));
								HideLoading('#lightbox-loading-indicator');
								ShowLoading('#lightboxtermycond', {top:110, zindex:9990});
								$('.content-scrolled').jScrollPane({
									showArrows: true,
									verticalArrowPositions: 'after',
									horizontalArrowPositions: 'after'
								});
								 errorHandler.call(this, jqXHR);
								 $("#login-form-error").hide();
								break;
						}
					},
					nonHandledError: function(data, textStatus, jqXHR) {
						
						$("#button-login").removeAttr("disabled");
						HideLoading('#lightbox-loading-indicator');
						$.showApplicationError({ text: data.message });
						refreshCaptcha();
					},
					error: {
						400: function (jqXHR) { errorHandler.call(this, jqXHR); },
						401: function (jqXHR) { errorHandler.call(this, jqXHR); },
						403: function (jqXHR) { errorHandler.call(this, jqXHR); }
					}
				}
			});
			
		}
		event.preventDefault();
	});
	

	// Closure used to save the status about clicking on cancel conditions
	var conditionsButton = (function() {
		var cancelled = false;
		return {
			isCancelClicked : function() {
				return cancelled;
			},
			cancel : function() {
				cancelled = true;
			}
		};
	}());
	
	$(document).on("click", "#btncancelarcondiciones", function(e) {
		// The following block of code was imported from bbva-validations-login, but added the use of a closure to keep condition acceptance status
		var $btn = $(this);
		var $alert = $("#alert-noaceptar-terminos");
		var position = $btn.offset();

		if (!conditionsButton.isCancelClicked()) {
			conditionsButton.cancel();
			$alert.css("top", position.top - 9);
			$alert.css("left", position.left - 3 - $alert.width());
			$alert.css("z-index", 9995);
			$alert.css("opacity", 0);
			$alert.show();
			$alert.animate({
				opacity : 1
			}, 500);
		} else {
			$alert.hide();
			HideLoading('#lightboxtermycond');
			
			// This will log the user out. This ajax call is needed since the user is already logged in but has not accepted conditions to get into the site.
			// Leave it with empty handlers to tolerate errors.
			$.doAjax({
				options: {
					url: "/Yaguarete/j_spring_security_logout",
    				blockUI: false
				},
				handlers: {
					success: function(){},
					handledError: function(){},
					nonHandledError: function(){}
				}
			});
		}
	});
	
	
	$(document).on("click", "#btnaceptarcondiciones", function(e) {
		HideLoading('#lightboxtermycond');
		ShowLoading('#lightbox-loading-indicator');
		
		$.doAjax({
			options: {
				url: "/Yaguarete/login/acceptConditions",
			},
			handlers: {
				success: function (data) {
					var shaObj = new jsSHA($("input[name='documento']").val(), "ASCII");
				    var hash = shaObj.getHash("SHA-512", "HEX");
				    //loginEvent(hash, (!($("input[name='ruc']").val()) || ($("input[name='ruc']").val()).length === 0));
					window.top.location = "/Yaguarete/index";
				},
				nonHandledError: function () { window.top.location = "./500.html"; }
			}
		});			
	});
	
	
	// remove all previously added click event handlers if any
	$("#login_refresh").off("click");
	$(document).on("click", "#login_refresh", function(e) {
		refreshCaptcha();
		e.preventDefault();
	});
	
	var refreshCaptcha = function refreshCaptcha() {
		$.doAjax({
			options: {
				form: $("#captchaForm"),
				url: "/Yaguarete/public/captcha/refresh"
			},
			handlers: {
				success: function (data) {
					$("#captchaimgDiv").html(data);
					var d = new Date();
					var appendImg = $('#captchaimg').attr('src') +'?'+ d.getMilliseconds();
					$("#captchaimg").attr("src", appendImg); 
				},
				handledError: function(){$.showApplicationError();},
				nonHandledError: function(){$.showApplicationError();}
			}
		});
		return refreshCaptcha;
	};
	
	/*$(document).ready(function(){
		refreshCaptcha();
	});*/
	
	$(document).on("click", "#client-button", function(e) {
		refreshCaptcha();		
	});
	
	
}(window.jQuery));
