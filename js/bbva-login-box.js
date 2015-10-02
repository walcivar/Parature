/**
 * Manage login box in header region
 */

$(document).ready(function() 
{
	$.fn.preload = function() 
	{
		this.each(function()
    		  {
          			$('<img/>')[0].src = this;
    		  });
	}
	
	//Usage:
	$(['img/boxLoginError.png','img/boxLogin.png']).preload();

    $('input').placeholder();    

    /* custom select */
    if (!$.browser.opera) 
    {
      // select element styling
      $('select.select').each(function()
      {
        var title = $(this).attr('title');
        if( $('option:selected', this).val() != ''  ) 
        {
          title = $('option:selected',this).text();
        }
        $(this)
          .css({'z-index':10,'opacity':0,'-khtml-appearance':'none'})
          .after('<span class="select">' + title + '</span>')
          .change(function()
          {
            val = $('option:selected',this).text();
            $(this).next().text(val);
          })
      });
    };  
    
    // doctype combo
    $('#docType').selectmenu({ width: 209 }).change(function() {
        
		var ltdocType = $("select[name=docType] option:selected").text();
        var ltdocTypeName = $('select[name=docType] option:selected').attr('name');

        $("input[name=documento]").attr("placeholder",ltdocType); 

        switch (ltdocTypeName) {
          case 'doc':
            $("input[name=documento]").addClass('validateDoc');
            $("input[name=documento]").removeClass('validateAccount');
            $("input[name=documento]").removeClass('creditcard');
            $("input[name=documento]").removeClass('validateClient');
            break;
          case 'account':
            $("input[name=documento]").addClass('validateAccount');
            $("input[name=documento]").removeClass('creditcard');
            $("input[name=documento]").removeClass('validateDoc');            
            $("input[name=documento]").removeClass('validateClient');
            break;
          case 'creditCard':
            $("input[name=documento]").addClass('creditcard');
            $("input[name=documento]").removeClass('validateAccount');
            $("input[name=documento]").removeClass('validateDoc');            
            $("input[name=documento]").removeClass('validateClient');
            break;
          case 'client':
            $("input[name=documento]").addClass('validateClient');
            $("input[name=documento]").removeClass('validateAccount');
            $("input[name=documento]").removeClass('creditcard');
            $("input[name=documento]").removeClass('validateDoc'); 
            break;  
        }
    });
    
    // open/close login panel
	var closeLoginPanel = function(panel, instant){
		if ($('h1:first', panel).hasClass('opened')) {
			if(instant === undefined){
				instant = false;
			}
			if(instant){
				$('#client-access-panel').hide();
				$('h1:first', panel).removeClass('opened');
			}else{
				$('#client-access-panel').slideUp(function(){
					$('h1:first', panel).removeClass('opened');
				});
			}
		}
	};
	$('.empresas').click(function() {
//		window.top.location = 'https://www.bbva.com.py/scgi-bin/loginpj.cgi?acceso=empresa';
		$("#ruc").attr('readonly', false); 
		$("#ruc").val("");
		$("#userType").val("AUTH_COMPANY");
		$(".old_web_access").show();
		var $link = $(this);
		if($link.hasClass('opened')){
			$('#client-access-panel').animate({width: 0, height:0}, 'fast', function(){
				$link.removeClass('opened');
				$(this).hide();
			});
		} else {
			$link.addClass('opened');
			$("#ruc").show();
			$("#documentType").hide();
			$('#client-access-panel').show().animate({width: '218px', height:'453px'}, '900', function(){

			});
		}
	});
	
	$('.personasfisicas').click(function() {
		$("#userType").val("AUTH_PERSON");
		$("#ruc").val("");
		$("#ruc").attr('readonly', true);
		$(".old_web_access").hide();
		var $link = $(this);
		if($link.hasClass('opened')){
			$('#client-access-panel').animate({width: 0, height:0}, 'fast', function(){
				$link.removeClass('opened');
				$(this).hide();
			});
		} else {
			$link.addClass('opened');
			$('#client-access-panel').show().animate({width: '218px', height:'453px'}, '900', function(){
				
			});
		}
	});
	
    $('.claveFacil').click(function() {
    	window.top.location = "genclavewizard1.jsp";
	});
	
	
	$('.ui-selectmenu-dropdown').click(function(){
		$('.ui-selectmenu-menu').css('z-index', '10000');
	});
	
	$('#client-access').outside('click', function() {
		closeLoginPanel(this);
	});

    // rollover certifications
    $('#certificado1, #certificado2').hover(function() 
    {
      var currentImg = $(this).attr('src');
      $(this).attr('src', $(this).attr('hover'));
      $(this).attr('hover', currentImg);
    }, function() 
    {
      var currentImg = $(this).attr('src');
      $(this).attr('src', $(this).attr('hover'));
      $(this).attr('hover', currentImg);
    }).click(function()
    {
		window.open('https://seal.certisur.com/getseal?host_name=www.bbva.com.py&lang=es&version=1.0_VC_M_R',
				'Certificado','location=0,menubar=0,status=0,width=550,height=450');

    });

	/* autocomplete help password */
	$(function(){

		$( "#lost-password-search").livesearch(
			[
				"ASUNCION, Avda. Mariscal Lope...",
				"ASUNCION, Avda. Eusebio Ayala",
				"ASUNCION, Ruta acceso Sur c/B...",
				"ASUNCION, Torreani Viera",
			]
		);
	});
	
    $("#lightboxcert > .ui-loading-container > .button-close").click(function(e) 
    {
      HideLoading('#lightboxcert');
      e.stopPropagation();
    });

    /* open tooltip normas de uso */
    $("#normasseguridad").click(function(e)
    {
      ShowLoading('#lightboxnormas', {top:110, width:550});
    });

    $("#lightboxnormas > .ui-loading-container > .button-close").click(function(e) 
    { 
      HideLoading('#lightboxnormas');
      e.stopPropagation();
    });
    
    /* open tooltip help captcha */
    $("#helpcaptcha").click(function(e)
    {
      ShowLoading('#lightboxhelpcaptcha', {top:110, width:550});
    });
    
    $("#lightboxhelpcaptcha > .ui-loading-container > .button-close").click(function(e) 
    { 
      HideLoading('#lightboxhelpcaptcha');
      e.stopPropagation();
    });

    /*open window olvido contraseña */
    $("#passolvidada").click(function()
    { 
      ShowLoading('#lightboxpass', {top:110});      
    });
    
    $("#lightboxpass > .ui-loading-container > .button-close").click(function(e) 
    {
      HideLoading('#lightboxpass');
      e.stopPropagation();
    });

	$('#accesoUsuario').outside('click', function(e) {
		
		var cmp = e.srcElement;
		
		if ($("#acces_user_panel").hasClass('visible')) {
			if (cmp !== 'lightboxhelpcaptcha' || cmp !== 'lightboxnormas' || cmp !== 'lightboxpass' || cmp !== 'lightboxcert' || cmp !== 'lightboxtermycond'){
				var $source = $(cmp);
				var $ancestor = $source.closest('#lightboxhelpcaptcha, #lightboxnormas, #lightboxpass, #lightboxcert, #lightboxtermycond');
				
				if ($ancestor.length <= 0) {
					$("#acces_user_panel").hide();
				}
				
			}
		}
	});

    // error message
    $('#login-form-error').hide();

});