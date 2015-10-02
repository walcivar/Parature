/*Js para asistencia*/

var refreshCaptchaAsist = function refreshCaptchaAsist() {
	$.doAjax({
		dataType: "text",
		options: {
			data: {
				action: "GET_CAPTCHA"
			},
			url: "/public/mailSender"
		},
		handlers: {
			success: function (datasrc) {
				$("#captchaimgAsist").attr("src", 'data:image/png;base64,' + datasrc);
			},
			handledError: function(){$.showApplicationError();},
			nonHandledError: function(){$.showApplicationError();}
		}
	});
	
	return refreshCaptchaAsist;
};

$(document).ready(function() {
	refreshCaptchaAsist();
}); 


// remove all previously added click event handlers if any
$("#captcha_refresh_asist").off("click");

$(document).on("click", "#captcha_refresh_asist", function(e) {
	refreshCaptchaAsist();
	e.preventDefault();
});



function validateForm(){
	if ($("#phone").val()==""){
		$("#asist-form-error").show();
		s.sendFormEvent("e",s.pageName,"asistencia","telefono:valor nulo");
		return false;
	}
	var x = $("#mail").val();
	if (x==""){
		$("#asist-form-error").show();
		s.sendFormEvent('e',s.pageName,'asistencia','email:valor nulo');
		return false;
	}
	var atpos=x.indexOf("@");
	var dotpos=x.lastIndexOf(".");
	if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length){
		$("#asist-form-error").show();
		s.sendFormEvent('e',s.pageName,'asistencia','otros campos:valor nulo');
		return false;
	}
	return true;
}
	
function controlarEnviarMail(){
	if ($("#formAsist").valid() && validateForm()) {
		 var errorHandler = function(jqXHR) {
			// refresh captcha
			refreshCaptchaAsist();
			$("input[name='captcha-field-asist']").val(""); // erase captcha value
			$("#asist-form-error").show();
		}; 
	
		$.doAjax({
			options: {
				url: "/public/mailSender",
				data: {
					action: "CAPCHA_CHECK",  
					captcha: $("input[name='captcha-field-asist']").val()
				},
				async: false
			},
			handlers: {
				success: function (data, textStatus, jqXHR) {
					/* $("#cajaErrorServicio").css("display", "none");
					$("#cajaError").css("display", "none"); */
					sendMail();
				},
				nonHandledError: function(data, textStatus, jqXHR) {
					 errorHandler.call(this, jqXHR);
				},
				 error: {
					400: function (jqXHR) { errorHandler.call(this, jqXHR); },
					401: function (jqXHR) { errorHandler.call(this, jqXHR); },
					403: function (jqXHR) { errorHandler.call(this, jqXHR); }
				} 
			}
		});
		
	}else{
		$("#asist-form-error").show();
		refreshCaptchaAsist();
	}
	return
}
		
function sendMail(){
	var dialog = '<div id="dialog-confirm" title="Enviar mail" class="hidden">' +
	 ' <p><span class="ui-icon ui-icon-alert" style="float: left; margin: 0 7px 20px 0;"></span>Usted está por enviar un correo electrónico con los datos cargados... Esta seguro?</p> '+
	 ' </div>' ;
	 
	var lightBox = '<div id="lightbox-loading" class="ui-loading hidden "> '+
						'<div class="ui-loading-container"> '+
						'<section class="ui-loading-content"> '+
							'<header> '+
								'<p>Enviando Correo Electr&oacute;nico</p> '+
							'</header> '+
							'<div class="loading"> '+
								'<p><img src="img/ico-modal-cargando.gif" alt="Procesando Solicitud..."></p> '+
							'</div> '+
							'<article> '+								
								'<p><span><strong>Por favor espere. Se est&aacute;? realizando la Solicitud.</strong></span></p> '+
							'</article> '+
						'</section> '+
						'</div> '+
					'</div>'; 
	
	$("body").append(dialog);
	$("body").append(lightBox);
	$("#asist-form-error").hide();
	$("#dialog-confirm").dialog({
	      resizable: false,
	      height:140,
	      modal: true,
	      buttons: {
	        "Enviar Mail": function() {
	       	  var element = "#lightbox-loading";
	       	  var tipo = "ASIST";
	       	  if ($("#insurance-asist").is(":visible")){
	       		tipo = "SEGURO";
	       	  }
	       	$( this ).dialog( "close" ); 
	       	$("#dialog-confirm").hide();
	       	$(element).show();
	          var texto = "Nombre:" + $("#name").val();
	          texto += "\nNro Documento: " + $("#document").val();
	          texto += "\nTelefono: " + $("#phone").val();
	          texto += "\nE-Mail: " + $("#mail").val();
	          texto += "\nDisponibilidad: " + $("#docAsistencia").val();
	          texto += "\nProducto que te Interesa: " + $("#producto").val();
	          $.post('/public/mailSender', 
	        	{ 
	        	  text: texto,
	        	  subject : "Asistencia Cliente",
	        	  type: tipo,
	        	  action: "SEND_MAIL"
	        	 }
	          ).done(function(){
	        	  $(element).hide();
	        	  alert("Su correo fue enviado correctamente.");
	        	  s.sendFormEvent("s",s.pageName,"asistencia"); 
	          }).fail(function(data , textStatus, jqXHR){
	        	  $(element).hide();
	        	  alert("Ha ocurrido un error al enviar el correo electr&oacute;nico. Intente de nuevo m&aacute;s tarde.");
	        	  s.sendFormEvent("e",s.pageName,"asistencia","error del servidor");
	          });
	        },
	        "Cancelar": function() {
	          $( this ).dialog( "close" );
	          $("#dialog-confirm").hide();
	          refreshCaptchaAsist();
	        }
	      }
	    });
}	