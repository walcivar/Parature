$(window).load(function(){

	//Resize del contenido
	if ($('#divcontent').length) {		
		var sizeText = $('.acontcont').height();
		var sizeImg = $('div#photo img').height();
		if(sizeText > sizeImg){
			$('.acontcont').parent().height(sizeText);
			$('.acontcont').parent().parent().height(sizeText);
			$('#divcontent').height(sizeText+125);
		} else {
			$('.acontcont').parent().height(sizeImg);
			$('.acontcont').parent().parent().height(sizeImg);
			$('#divcontent').height(sizeImg+125);
		}
		
		$('#divcontent').removeClass('halfsec10').removeClass('p10');
		$('#divcontent > div.grid_20_cont').removeClass('halfsec');
		$('#divcontent > div.grid_20_cont > div.grid_10').removeClass('halfsec10');
		$('#divcontent > div.grid_10').height(0).removeClass('halfsec10');
		$('#divcontent div#photo').height($('#divcontent div#photo img').height());
		var imageTop = $('#divcontent').height() - $('#divcontent div#photo img').height() + 1;
		$('#divcontent div#photo').css('top', imageTop + "px");
	}
	//Resize del contenido

	$('#personas').click(function()
    {
    	enlace('index.jsp');
    });
	$('#home-personas').click(function()
    {
    	enlace('index.jsp');
    });
    $('#empresas').click(function()
    {
    	enlace('index-empresas.jsp');    		
    });
	$('#banca-personal').click(function()
    {
    	enlace('index-banca-personal.jsp');
    });
	$('#banca-preferente').click(function()
    {
    	enlace('index-banca-preferente.jsp');
    });
	$('#cuentas-ahorro-no-login').click(function()
    {
    	enlace('cuentasyahorro.jsp');
    });
	$('#tarjetas-no-login').click(function()
    {
    	enlace('HtmlPage2.html');
    });
	$('#prestamos-no-login').click(function()
    {
    	enlace('prestamos.jsp');
    });
	$('#productosempresas-no-login').click(function()
    {
    	enlace('productos-empresas.jsp');
    });
	$('#seguros-no-login').click(function()
    {
    	enlace('seguros.jsp');
    });
	$('#cuentasempresas-ahorro-no-login').click(function()
    {
    	enlace('cuentasyahorro-empresas.jsp');
    });
	$('#tarjetasempresas-no-login').click(function()
    {
    	enlace('tarjetas-empresas.jsp');
    });
	$('#prestamosempresas-no-login').click(function()
    {
    	enlace('prestamos-empresas.jsp');
    });
	$('#serviciosempresas-no-login').click(function()
    {
    	enlace('servicios-empresas.jsp');
    });
	$('#home-empresas').click(function()
    {
    	enlace('index-empresas.jsp');
    });
	
	$('#cuentaspremium-ahorro-no-login').click(function()
	{
		enlace('cuentasyahorro-premium.jsp');
	});
	$('#tarjetaspremium-no-login').click(function()
	{
		enlace('tarjetas-premium.jsp');
	});
	$('#prestamospremium-no-login').click(function()
	{
		enlace('prestamos-premium.jsp');
	});
	$('#segurospremium-no-login').click(function()
	{
		enlace('seguros-premium.jsp');
	});
	$('#home-premium').click(function()
	{
		enlace('index-banca-preferente.jsp');
	});
	
	$('#cuentasvip-ahorro-no-login').click(function()
	{
		enlace('cuentasyahorro-banca-personal.jsp');
	});
	$('#tarjetasvip-no-login').click(function()
	{
		enlace('tarjetas-banca-personal.jsp');
	});
	$('#prestamosvip-no-login').click(function()
	{
		enlace('prestamos-banca-personal.jsp');
	});
	$('#segurosvip-no-login').click(function()
	{
		enlace('seguros-banca-personal.jsp');
	});
	$('#home-vip').click(function()
	{
		enlace('index-banca-personal.jsp');
	});
	
	/* Enlaces de interes, Headers y paginas generales */
	
	/*Banca Personal*/
	if ( $("#home-vip").length > 0 ) { 
		
		/*Linea*/
		$('#lineaBBVAPersonas').click(function()
		{
			enlace('lineaBBVA.jsp?tipoPagina=bancapersonal');
		});
		
		$('#lineaBBVAGeneral').click(function()
		{
			enlace('lineaBBVA.jsp?tipoPagina=bancapersonal');
		});
		
		$('#intereslineaBBVA').click(function()
		{
			enlace('lineaBBVA.jsp?tipoPagina=bancapersonal');
		});
		
		$('#lineaBancaPersonal').click(function()
		{
			enlace('lineaBBVA.jsp?tipoPagina=bancapersonal');
		});
		/*Linea*/
		
		/*Sucursales y Cajeros*/
		$("#sucursalesycajeros").click(function(e)
		{
			enlace('sucursalesycajeros.jsp?tipoPagina=bancapersonal');
		});
		
		$("#buscarAutoservicios").click(function(e)
		{
			enlace('sucursalesycajeros.jsp?tipoPagina=bancapersonal');
		});
		
		$("#interesSucursalesYCajeros").click(function(e)
		{
			enlace('sucursalesycajeros.jsp?tipoPagina=bancapersonal');
		});
		/*Sucursales y Cajeros*/
		
		/*Institucional*/
		
		$('#institucional').click(function()
		{
			enlace('informacioncorporativa.jsp?tipoPagina=bancapersonal');
		});
		/*Institucional*/
		
		/*Responsabilidad Social*/
		
		$('#responsabilidadSocial').click(function()
		{
			enlace('responsabilidadsocial.jsp?tipoPagina=bancapersonal');
		});
		
		$('#atoftalmologica').click(function()
		{
			enlace('responsabilidadsocial-atoftalmologica.jsp?tipoPagina=bancapersonal');
		});
								
		$('#capmaestros').click(function()
		{
			enlace('responsabilidadsocial-capmaestros.jsp?tipoPagina=bancapersonal');
		});
								
		$('#meriendaescolar').click(function()
		{
			enlace('responsabilidadsocial-meriendaescolar.jsp?tipoPagina=bancapersonal');
		});
								
		$('#actualidad').click(function()
		{
			enlace('responsabilidadsocial-actualidad.jsp?tipoPagina=bancapersonal');
		});
								
		$('#quetzal').click(function()
		{
			enlace('responsabilidadsocial-quetzal.jsp?tipoPagina=bancapersonal');
		});
		/*Responsabilidad Social*/
		
		/*Cultura Corporativa*/
		$('#culturaCorporativa').click(function()
		{
			enlace('culturacorporativa.jsp?tipoPagina=bancapersonal');
		});
		/*Cultura Corporativa*/
		
		/*Memoria y Balance Anual*/
		$('#balanceYMemoria').click(function()
		{
			enlace('balanceymemoria.jsp?tipoPagina=bancapersonal');
		});
		/*Memoria y Balance Anual*/
		
		/*Balances Trimestrales*/
		$('#balancesTrimestrales').click(function()
		{
			enlace('balancestrimestrales.jsp?tipoPagina=bancapersonal');
		});
		/*Balances Trimestrales*/
		
		/*Bonos Subordinados*/
		$('#bonosSubordinados').click(function()
		{
			enlace('bonossubordinados.jsp?tipoPagina=bancapersonal');
		});
		/*Bonos Subordinados*/
		
		/*Terminales de Autoservicio*/
		$('#interesTAS').click(function()
		{
			enlace('terminalesdeautoservicio.jsp?tipoPagina=bancapersonal');
		});
		
		$('#tasBancaPersonal').click(function()
		{
			enlace('terminalesdeautoservicio.jsp?tipoPagina=bancapersonal');
		});
		/*Terminales de Autoservicio*/
		
		/*Resto de enlaces de Interes*/		
		$('#interesBalance').click(function()
		{
			enlace('balanceymemoria.jsp?tipoPagina=bancapersonal');
		});
		
		$('#interesTrimestral').click(function()
		{
			enlace('balancestrimestrales.jsp?tipoPagina=bancapersonal');
		});
		
		$('#interesBonos').click(function()
		{
			enlace('bonossubordinados.jsp?tipoPagina=bancapersonal');
		});
		
		$('#interesRiesgos').click(function()
		{
			enlace('calificacionderiesgos.jsp?tipoPagina=bancapersonal');
		});
		
		
		$('#sucursalesEnl').click(function(){
			enlace('sucursales.jsp?tipoPagina=bancapersonal');
		});
		
		$('#lineaBBVAEnl').click(function(){
			enlace('lineaBBVA.jsp?tipoPagina=bancapersonal');
		});
		
		$('#contactoEnl').click(function(){
			enlace('HtmlPage3.html');
		});
		
		
		
		
		/*Resto de enlaces de Interes*/
	
	/*Personas*/	
	}else if( $("#home-personas").length > 0 ){
		
		/*Linea*/
		$('#lineaPersonas').click(function()
		{
			enlace('lineaBBVA.jsp?tipoPagina=personas');
		});
				
		
		$('#lineaBBVAPersonas').click(function()
		{
			enlace('lineaBBVA.jsp?tipoPagina=personas');
		});
		
		$('#lineaBBVAGeneral').click(function()
		{
			enlace('lineaBBVA.jsp?tipoPagina=personas');
		});
		
		$('#intereslineaBBVA').click(function()
		{
			enlace('lineaBBVA.jsp?tipoPagina=personas');
		});
		/*Linea*/	
		
		/*Sucursales y Cajeros*/
		$("#sucursalesycajeros").click(function(e)
		{
			enlace('sucursalesycajeros.jsp?tipoPagina=personas');
		});

		$("#buscarAutoservicios").click(function(e)
		{
			enlace('sucursalesycajeros.jsp?tipoPagina=personas');
		});
		
		$("#interesSucursalesYCajeros").click(function(e)
		{
			enlace('sucursalesycajeros.jsp?tipoPagina=personas');
		});
		/*Sucursales y Cajeros*/
		
		/*Institucional*/
		$('#institucional').click(function()
		{
			enlace('informacioncorporativa.jsp?tipoPagina=personas');
		});
		/*Institucional*/
		
		/*Responsabilidad Social*/
		$('#responsabilidadSocial').click(function()
		{
			enlace('responsabilidadsocial.jsp?tipoPagina=personas');
		});
		
		$('#atoftalmologica').click(function()
		{
			enlace('responsabilidadsocial-atoftalmologica.jsp?tipoPagina=personas');
		});
						
		$('#capmaestros').click(function()
		{
			enlace('responsabilidadsocial-capmaestros.jsp?tipoPagina=personas');
		});
						
		$('#meriendaescolar').click(function()
		{
			enlace('responsabilidadsocial-meriendaescolar.jsp?tipoPagina=personas');
		});
						
		$('#actualidad').click(function()
		{
			enlace('responsabilidadsocial-actualidad.jsp?tipoPagina=personas');
		});
						
		$('#quetzal').click(function()
		{
			enlace('responsabilidadsocial-quetzal.jsp?tipoPagina=personas');
		});
		/*Responsabilidad Social*/
		
		/*Cultura Corporativa*/
		$('#culturaCorporativa').click(function()
		{
			enlace('culturacorporativa.jsp?tipoPagina=personas');
		});
		/*Cultura Corporativa*/
		
		/*Memoria y Balance Anual*/
		$('#balanceYMemoria').click(function()
		{
			enlace('balanceymemoria.jsp?tipoPagina=personas');
		});
		/*Memoria y Balance Anual*/
		
		/*Balances Trimestrales*/
		$('#balancesTrimestrales').click(function()
		{
			enlace('balancestrimestrales.jsp?tipoPagina=personas');
		});
		/*Balances Trimestrales*/
		
		/*Bonos Subordinados*/
		$('#bonosSubordinados').click(function()
		{
			enlace('bonossubordinados.jsp?tipoPagina=personas');
		});
		/*Bonos Subordinados*/
		
		/*Terminales de Autoservicio*/
		$('#interesTAS').click(function()
		{
			enlace('terminalesdeautoservicio.jsp?tipoPagina=personas');
			
		});
		
		$('#tasPersonas').click(function()
		{
			enlace('terminalesdeautoservicio.jsp?tipoPagina=personas');
			
		});
		/*Terminales de Autoservicio*/
		
		/*Resto de enlaces de Interes*/
		$('#interesBalance').click(function()
		{
			enlace('balanceymemoria.jsp?tipoPagina=personas');
		});
				
		$('#interesTrimestral').click(function()
		{
			enlace('balancestrimestrales.jsp?tipoPagina=personas');
		});
				
		$('#interesBonos').click(function()
		{
			enlace('bonossubordinados.jsp?tipoPagina=personas');
		});
		
		$('#interesRiesgos').click(function()
		{
			enlace('calificacionderiesgos.jsp?tipoPagina=personas');
		});
		
		
		$('#sucursalesEnl').click(function(){
			enlace('sucursales.jsp?tipoPagina=personas');
		});
		
		$('#lineaBBVAEnl').click(function(){
			enlace('lineaBBVA.jsp?tipoPagina=personas');
		});
		
		$('#contactoEnl').click(function(){
			enlace('HtmlPage3.html');
		});
		
		/*Resto de enlaces de Interes*/

	/*Empresas*/	
	}else if( $("#home-empresas").length > 0 ){
		
		/*Linea*/
		$('#lineaEmpresas').click(function()
		{
			enlace('lineaBBVA.jsp?tipoPagina=empresas');
		});
		
		$('#lineaBBVAEmpresas').click(function()
		{
			enlace('lineaBBVA.jsp?tipoPagina=empresas');
		});
		
		$('#lineaBBVAGeneral').click(function()
		{
			enlace('lineaBBVA.jsp?tipoPagina=empresas');
		});
		
		$('#intereslineaBBVA').click(function()
		{
			enlace('lineaBBVA.jsp?tipoPagina=empresas');
		});
		/*Linea*/
		
		/*Sucursales y Cajeros*/
		$("#sucursalesycajeros").click(function(e)
		{
			enlace('sucursalesycajeros.jsp?tipoPagina=empresas');
		});

		$("#buscarAutoservicios").click(function(e)
		{
			enlace('sucursalesycajeros.jsp?tipoPagina=empresas');
		});
		
		$("#interesSucursalesYCajeros").click(function(e)
		{
			enlace('sucursalesycajeros.jsp?tipoPagina=empresas');
		});
		/*Sucursales y Cajeros*/
		
		/*Institucional*/
		$('#institucional').click(function()
		{
			enlace('informacioncorporativa.jsp?tipoPagina=empresas');
		});
		/*Institucional*/
		
		/*Responsabilidad Social*/
		$('#responsabilidadSocial').click(function()
		{
			enlace('responsabilidadsocial.jsp?tipoPagina=empresas');
		});
		
		$('#atoftalmologica').click(function()
		{
			enlace('responsabilidadsocial-atoftalmologica.jsp?tipoPagina=empresas');
		});
				
		$('#capmaestros').click(function()
		{
			enlace('responsabilidadsocial-capmaestros.jsp?tipoPagina=empresas');
		});
				
		$('#meriendaescolar').click(function()
		{
			enlace('responsabilidadsocial-meriendaescolar.jsp?tipoPagina=empresas');
		});
				
		$('#actualidad').click(function()
		{
			enlace('responsabilidadsocial-actualidad.jsp?tipoPagina=empresas');
		});
				
		$('#quetzal').click(function()
		{
			enlace('responsabilidadsocial-quetzal.jsp?tipoPagina=empresas');
		});
		/*Responsabilidad Social*/
		
		/*Cultura Corporativa*/
		$('#culturaCorporativa').click(function()
		{
			enlace('culturacorporativa.jsp?tipoPagina=empresas');
		});
		/*Cultura Corporativa*/
		
		/*Memoria y Balance Anual*/
		$('#balanceYMemoria').click(function()
		{
			enlace('balanceymemoria.jsp?tipoPagina=empresas');
		});
		/*Memoria y Balance Anual*/
		
		/*Balances Trimestrales*/
		$('#balancesTrimestrales').click(function()
		{
			enlace('balancestrimestrales.jsp?tipoPagina=empresas');
		});
		/*Balances Trimestrales*/
		
		/*Bonos Subordinados*/
		$('#bonosSubordinados').click(function()
		{
			enlace('bonossubordinados.jsp?tipoPagina=empresas');
		});
		/*Bonos Subordinados*/
		
		/*Terminales de Autoservicio*/
		$('#interesTAS').click(function()
		{
			enlace('terminalesdeautoservicio.jsp?tipoPagina=empresas');
		});
		/*Terminales de Autoservicio*/
		
		/*Resto de enlaces de Interes*/
		$('#interesBalance').click(function()
		{
			enlace('balanceymemoria.jsp?tipoPagina=empresas');
		});
				
		$('#interesTrimestral').click(function()
		{
			enlace('balancestrimestrales.jsp?tipoPagina=empresas');
		});
				
		$('#interesBonos').click(function()
		{
			enlace('bonossubordinados.jsp?tipoPagina=empresas');
		});
		
		$('#interesRiesgos').click(function()
		{
			enlace('calificacionderiesgos.jsp?tipoPagina=empresas');
		});
		
		$('#sucursalesEnl').click(function(){
			enlace('sucursales.jsp?tipoPagina=empresas');
		});
		
		$('#lineaBBVAEnl').click(function(){
			enlace('lineaBBVA.jsp?tipoPagina=empresas');
		});
		
		$('#contactoEnl').click(function(){
			enlace('HtmlPage3.html');
		});
		
		
		/*Resto de enlaces de Interes*/

	/*Banca Premium*/	
	}else if( $("#home-premium").length > 0 ){
		
		/*Linea*/
		$('#lineaPremium').click(function()
		{
			enlace('lineaBBVA.jsp?tipoPagina=bancapremium');
		});
		
		$('#lineaBBVAPremium').click(function()
		{
			enlace('lineaBBVA.jsp?tipoPagina=bancapremium');
		});

		$('#lineaBBVAGeneral').click(function()
		{
			enlace('lineaBBVA.jsp?tipoPagina=bancapremium');
		});
		
		$('#intereslineaBBVA').click(function()
		{
			enlace('lineaBBVA.jsp?tipoPagina=bancapremium');
		});
		/*Linea*/
		
		/*Sucursales y Cajeros*/
		$("#sucursalesycajeros").click(function(e)
		{
			enlace('sucursalesycajeros.jsp?tipoPagina=bancapremium');
		});

		$("#buscarAutoservicios").click(function(e)
		{
			enlace('sucursalesycajeros.jsp?tipoPagina=bancapremium');
		});
		
		$("#interesSucursalesYCajeros").click(function(e)
		{
			enlace('sucursalesycajeros.jsp?tipoPagina=bancapremium');
		});
		/*Sucursales y Cajeros*/
		
		/*Institucional*/
		$('#institucional').click(function()
		{
			enlace('informacioncorporativa.jsp?tipoPagina=bancapremium');
		});
		/*Institucional*/
		
		/*Responsabilidad Social*/
		$('#responsabilidadSocial').click(function()
		{
			enlace('responsabilidadsocial.jsp?tipoPagina=bancapremium');
		});
		
		$('#atoftalmologica').click(function()
		{
			enlace('responsabilidadsocial-atoftalmologica.jsp?tipoPagina=bancapremium');
		});
		
		$('#capmaestros').click(function()
		{
			enlace('responsabilidadsocial-capmaestros.jsp?tipoPagina=bancapremium');
		});
		
		$('#meriendaescolar').click(function()
		{
			enlace('responsabilidadsocial-meriendaescolar.jsp?tipoPagina=bancapremium');
		});
		
		$('#actualidad').click(function()
		{
			enlace('responsabilidadsocial-actualidad.jsp?tipoPagina=bancapremium');
		});
		
		$('#quetzal').click(function()
		{
			enlace('responsabilidadsocial-quetzal.jsp?tipoPagina=bancapremium');
		});
		/*Responsabilidad Social*/
		
		/*Cultura Corporativa*/
		$('#culturaCorporativa').click(function()
		{
			enlace('culturacorporativa.jsp?tipoPagina=bancapremium');
		});
		/*Cultura Corporativa*/
		
		/*Memoria y Balance Anual*/
		$('#balanceYMemoria').click(function()
		{
			enlace('balanceymemoria.jsp?tipoPagina=bancapremium');
		});
		/*Memoria y Balance Anual*/
		
		/*Balances Trimestrales*/
		$('#balancesTrimestrales').click(function()
		{
			enlace('balancestrimestrales.jsp?tipoPagina=bancapremium')
		});
		/*Balances Trimestrales*/
		
		/*Bonos Subordinados*/
		$('#bonosSubordinados').click(function()
		{
			enlace('bonossubordinados.jsp?tipoPagina=bancapremium')
		});
		/*Bonos Subordinados*/
		
		/*Terminales de Autoservicio*/
		$('#interesTAS').click(function()
		{
			enlace('terminalesdeautoservicio.jsp?tipoPagina=bancapremium')
		});
		
		$('#tasPremium').click(function()
		{
			enlace('terminalesdeautoservicio.jsp?tipoPagina=bancapremium')
		});
		/*Terminales de Autoservicio*/

		/*Resto de enlaces de Interes*/
		$('#interesBalance').click(function()
		{
			enlace('balanceymemoria.jsp?tipoPagina=bancapremium')
		});
						
		$('#interesTrimestral').click(function()
		{
			enlace('balancestrimestrales.jsp?tipoPagina=bancapremium')
		});
						
		$('#interesBonos').click(function()
		{
			enlace('bonossubordinados.jsp?tipoPagina=bancapremium')
		});
		
		$('#interesRiesgos').click(function()
		{
			enlace('calificacionderiesgos.jsp?tipoPagina=bancapremium')
		});
		
		$('#sucursalesEnl').click(function(){
			enlace('sucursales.jsp?tipoPagina=bancapremium');
		});
		
		$('#lineaBBVAEnl').click(function(){
			enlace('lineaBBVA.jsp?tipoPagina=bancapremium');
		});
		
		$('#contactoEnl').click(function(){
			enlace('HtmlPage3.html');
		});
		
		
		/*Resto de enlaces de Interes*/
	}
	
	/* Enlaces de interes, Headers y paginas generales */
	
	//$("#disponibilidad").selectmenu({ width: 168 });
		
    $("#lightboxsucursalescajeros > .ui-loading-container > .button-close").click(function(e) 
    { 
      //HideLoading('#lightboxsucursalescajeros');
      //e.stopPropagation();
    });
    /* abre tooltip de sucursales y cajeros  */
 
    
    /* cambio de fondo segun contenido  */
    /*
    var size_container = $(".grid_20_cont_half:last").outerHeight();
    //alert(size_container);
    if (size_container<404) {
    	$('#app').attr('id', 'app');
    	//alert("1");
    } else if (size_container>=404 && size_container<500) { 
    	//alert(size_container);
    	$('#app').attr('id', 'app2');
    	//alert("2");
    } else if (size_container>=500) {
    	$('#app').attr('id', 'app3');
    	//alert("3");
    }
    */
    /* cambio de fondo segun contenido  */
    

 
    /* cambio de pestanas  */   
	var url = window.location.pathname;
	var selector = "";

	if (url.indexOf('index') !== -1) {
		selector = 'home';
	} else if (url.indexOf('cuentasyahorro.jsp') !== -1 || url.indexOf('cuentasyahorro-empresas.jsp') !== -1 || url.indexOf('cuentasyahorro-premium.jsp') !== -1 || url.indexOf('cuentasyahorro-banca-personal.jsp') !== -1) {
		selector = 'cuentas-ahorro-no-login';
	} else if (url.indexOf('HtmlPage2.html') !== -1 || url.indexOf('tarjetas-empresas.jsp') !== -1 || url.indexOf('tarjetas-premium.jsp') !== -1 || url.indexOf('tarjetas-banca-personal.jsp') !== -1 || url.indexOf('mastercard-premium.jsp') !== -1 || url.indexOf('descuentos-premium.jsp') !== -1) {
		selector = 'tarjetas-no-login';
	} else if (url.indexOf('prestamos.jsp') !== -1 || url.indexOf('prestamos-empresas') !== -1 || url.indexOf('prestamos-premium.jsp') !== -1 || url.indexOf('prestamos-banca-personal.jsp') !== -1) {
		selector = 'prestamos-no-login';
	} else if (url.indexOf('seguros.jsp') !== -1 || url.indexOf('servicios-empresas.jsp') !== -1 || url.indexOf('seguros-premium.jsp') !== -1 || url.indexOf('seguros-banca-personal.jsp') !== -1) {
		selector = 'seguros-no-login';
	} else if (url.indexOf('posicion-global') !== -1) {
		selector = '';
	} else if (url.indexOf('productos-empresas.jsp') !== -1 || url.indexOf('pagonomina.jsp') !== -1 || url.indexOf('pagoproveedores.jsp') !== -1 || url.indexOf('operacionesaduaneras.jsp') !== -1 || url.indexOf('custodiacheques.jsp') !== -1 || url.indexOf('tarjetaempresarial.jsp') !== -1) {
		selector = 'productos-no-login';
	}

	
    var breadcrumbtext = ""
        $("div.contentBreadcrumb p a").each(function() {   	
        	breadcrumbtext = $("div.contentBreadcrumb p a").text();
        	if (breadcrumbtext.indexOf('index') !== -1) {
        		selector = 'home';
        	} else if (breadcrumbtext.indexOf('Cuentas y Ahorro') !== -1) {
        		selector = 'cuentas-ahorro-no-login';
        	} else if (breadcrumbtext.indexOf('Tarjetas') !== -1) {
        		selector = 'tarjetas-no-login';
        	} else if (breadcrumbtext.indexOf('Préstamos') !== -1) {
        		selector = 'prestamos-no-login';
        	} else if (breadcrumbtext.indexOf('Seguros') !== -1 || breadcrumbtext.indexOf('Servicios para empresas') !== -1) {
        		selector = 'seguros-no-login';
        	}

        });
	
	
	if (selector !== ""){
		$('#header-menu > ul > li[data-link=' + selector + ']').addClass('active');
	}
    /* cambio de pestanas  */
	
	
	/* cambio tamaño de combo asistencia  */
	if ($('#docAsistencia').length > 0) {
		$('#docAsistencia').selectmenu({ width: 150});
	}
	/* cambio tamaño de combo asistencia  */

	/* cambio tamaño de combo lugares de pago  */
	if ($('#docLugares').length > 0) {
		$('#docLugares').selectmenu({ width: 500});
		$('#docLugares').selectmenu({ height: 200});
	}
	/* cambio tamaño de combo lugares de pago  */
	
	if ($('#combRobotica').length > 0) {
		$('#combRobotica').selectmenu({width:259});
	}
    
});

/* lugares de pago  */
function lugarespago(objeto){
	$("div#col_lugares div:visible").hide();
	$('#'+objeto.value).show();
}
/* lugares de pago  */