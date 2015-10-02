﻿<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Home.aspx.cs" Inherits="SitioBBVA.Home" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta charset="utf-8">    
    <title>BBVA :: Personas</title>

    <!-- include styles.jsp -->
    <link rel="stylesheet" type="text/css" href="css/widgets-tirica.css" media="all">
    <link rel="stylesheet" type="text/css" href="css/bbva-styles-tirica.css?v=1.0.0" media="all">
    <link rel="stylesheet" type="text/css" href="css/bbva-buttons-tirica.css" media="all">
    <link rel="stylesheet" type="text/css" href="css/jquery.jscrollpane-tirica.css" media="all">
    <link rel="stylesheet" type="text/css" href="css/jqueryui-tirica.css" media="screen">
    <link rel="stylesheet" type="text/css" href="css/bbva-components_forms-tirica.css" media="screen">
    <!-- eo include styles.jsp -->
    <!-- include styles-publico.jsp -->
    <link rel="stylesheet" type="text/css" href="css/styles-tirica.css?v=2.0.0" media="all">
    <!-- eo include styles-publico.jsp -->
    <!-- <script type="text/javascript" src="js/currencyQuotations.js" charset="utf-8" ></script> -->
    <script type="text/javascript">

        var userAgent = navigator.userAgent || navigator.vendor || window.opera;
        var mobile = sessionStorage.getItem("mobile");
        if ((userAgent.match(/iPhone/i) || userAgent.match(/Android/i)) && mobile == null) {
            window.location.href = 'descargarapp.jsp';
        }

    </script>
</head>
<body class="home">
    <form id="form2" runat="server">
    <div>
        <!-- SiteCatalyst code version: H.26.1.
    -				Copyright 1996-2013 Adobe, Inc. All Rights Reserved
    -				More info available at http://www.omniture.com -->
    <script type="text/javascript" src="js/lib/s_code.js"></script>
    <div>        
        <div class="container_20">           
            <div id="wrap-frame">
                <div class="c-structural_header">                    
                    <!-- include header.jsp -->
                    <header id="ph_usuario" role="banner">
                        <h1 class="logo_bbva">
                            <span tabindex="0" class="subtitle-logo">
                                <a href="#" onclick="javascript:enlace('index.jsp');"><img itemprop="logo" src="img/logobbva.png" alt="BBVA - Banca Electrónica" width="156" height="90" /></a>
                                <span id="personas" class="active first">Personas</span>
                                <span id="banca-personal" class="not-active">Banca Personal</span>
                                <span id="banca-preferente" class="not-active">Banca Premium</span>
                                <span id="empresas" class="not-active last">Empresas y Pymes</span>
                            </span>
                        </h1>
                        <div class="c-menu-auxiliar_R2">
                            <ul>
                                <li class="oficinas">
                                    <a href="#" onclick="javascript:enlace('sucursales.jsp');">
                                        <span class="enlace">Sucursales</span>
                                    </a>
                                </li><!--y cajeros automáticos-->
                                <li class="tlf">
                                    <a href="#" onclick="javascript:enlace('lineaBBVA.jsp');">
                                        <span tabindex="0" class="lineaBBVA enlace" id="lineaBBVAGeneral">
                                            Línea BBVA 417 6000
                                        </span>
                                    </a>
                                </li>
                                <li class="mail last">
                                    <a href="#" onclick="javascript:enlace('HtmlPage3.html');">
                                        <span class="enlace">Contáctenos</span>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <!-- include accesoUsuario.jsp -->

                        <section id="client-access" style="width:320px">

                            <h1 id="client-button" class="personasfisicas">
                                <span>Acceso de usuarios</span>
                            </h1>

                            <h1 id="clavefacil-button" class="claveFacil">
                                <span>Solicitar clave de acceso</span>
                            </h1>


                            <!-- include acceso.jsp -->

                            <section id="client-access-panel" class="hidden acceso_usuario_panel">

                                <form class="login-form" action="" method="post" name="login" id="login" data-error="" autocomplete="off">
                                    <input name="origen" value="bbvanet2" type="hidden">
                                    <input name="eai_URLDestino" value="" type="hidden">
                                    <!-- TODO En principio solo usuario particulares -->
                                    <input type="hidden" name="userType" id="userType" value="AUTH_PERSON">
                                    <input type="hidden" name="compDocType" id="compDocType" value="D">
                                    <fieldset>
                                        <legend class="indented">Datos de acceso</legend>

                                        <section class="error validationSummaryWrapper hidden" id="login-form-error">
                                            <h1 id="titleError">Rellene los datos</h1>
                                            <div id="validationSummaryOutput"></div>
                                        </section>

                                        <fieldset id="documentType">
                                            <label for="docType">
                                                <span class="c-form-combo" id="combo">
                                                    <select id="docType" name="docType" data-graphic-product="" style="display: none;" aria-disabled="false">
                                                        <option value="D" selected>N&uacute;mero de documento</option>
                                                        <option value="C">N&uacute;mero de cuenta</option>
                                                        <option value="T">N&uacute;mero de tarjeta de cr&eacute;dito</option>
                                                    </select>
                                                </span>
                                            </label>
                                        </fieldset>

                                        <label for="ruc" id="ruc" class="hidden">
                                            <span class="indented">R.U.C.</span>
                                            <input type="text" name="ruc" id="ruc" value="" class="requireFieldsLogin minlength-5 bbva-input-text login-field" maxlength="20" placeholder="R.U.C.">
                                        </label>

                                        <label for="documento">
                                            <span class="indented">Documento</span>
                                            <input type="text" name="documento" id="documento" class="requireFieldsLogin bbva-input-text login-field" maxlength="20" placeholder="N&uacute;mero de documento">
                                        </label>

                                        <label for="contrasena">
                                            <span class="indented">Contrase&ntilde;a</span>
                                            <input type="password" id="access-pin" name="access-pin" class="requireFieldsLogin minlength-4 bbva-input-text login-field" maxlength="10" placeholder="Clave de acceso">
                                        </label>

                                    </fieldset>

                                    <fieldset class="seguCode">
                                        <p class="normas_uso"><a href="#" onclick="javascript:enlace('seguridad.jsp');">Normas de seguridad</a></p>

                                        <p class="olvidaste_contrasena"><a href="#" id="passolvidada">&iquest;Olvidaste la contrase&ntilde;a?</a></p>

                                        <img src="img/hr.png" alt="" width="212" height="3" />

                                        <h2>C&oacute;digo de seguridad</h2>

                                        <div class="captcha_enter">
                                            <div class="captcha_btn">
                                                <div>
                                                    <button id="login_refresh" class="btn smaller left" type="button">
                                                        <i class="icon refresh"></i>
                                                    </button>
                                                </div>
                                                <div>
                                                    <button id="helpcaptcha" class="btn smaller left" type="button">
                                                        <i class="icon help"></i>
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="captcha_img" id="captchaimgDiv"></div>
                                        </div>

                                        <label>
                                            <span class="indented"></span>
                                            <input type="text" name="captcha-field" id="captcha-field" class="requireFieldsLogin minlength-4 bbva-input-text login-field-captcha" maxlength="4" placeholder="Escribe el c&oacute;digo que aparece arriba" />
                                        </label>

                                        <button type="submit" form="login" id="button-login" class="btn large btn-login"><span>Entrar</span></button>
                                    </fieldset>

                                    <!-- rollover -->
                                    <img src="img/hr.png" style="padding-top:10px;" alt="" width="212" height="3" />

                                    <div>
                                        <img id="certificado1" src="img/certificacion_1.png" hover="img/certificacion_1_over.png" class="certificado1" alt="Certificado..." width="53" height="30" />
                                        <img id="certificado2" src="img/certificacion_2.png" hover="img/certificacion_2_over.png" class="certificado2" alt="Certificado..." width="49" height="30" />
                                    </div>
                                    <!--eo rollover -->


                                </form>
                                <p class="old_web_access hidden"><a href="https://www.bbva.com.py/scgi-bin/loginpj.cgi?acceso=empresa&origen=Tirica">Para acceder a la web anterior, click aqu&iacute;</a></p>
                            </section>
                        </section>
                        <!-- eo include accesoUsuario.jsp -->
                    </header>
                    <!-- EO include header.jsp -->
                    <!-- include navigation.jsp -->
                    <nav id="header-menu" class="c-estructural-navegacionPrincipal_R2">
                        <ul>
                            <li class="home first" data-link="home">
                                <span id="home-personas" class="link" tabindex="0">
                                    <span></span>
                                </span>
                            </li>
                            <li class="cuentas_tarjetas" data-link="cuentas-ahorro-no-login">
                                <span id="cuentas-ahorro-no-login" class="link" tabindex="0">
                                    <span>Cuentas y Ahorro</span>
                                </span>
                            </li>
                            <li class="ahorro_inversion" data-link="tarjetas-no-login">
                                <span id="tarjetas-no-login" class="link" tabindex="0">
                                    <span>Tarjetas</span>
                                </span>
                            </li>
                            <li class="creditos_hipotecas" data-link="prestamos-no-login">
                                <span id="prestamos-no-login" class="link" tabindex="0">
                                    <span>Préstamos</span>
                                </span>
                            </li>
                            <li class="seguros last" data-link="seguros-no-login">
                                <span id="seguros-no-login" class="link" tabindex="0">
                                    <span>Seguros</span>
                                </span>
                            </li>
                        </ul>
                    </nav>
                    <!-- eo include navigation.jsp -->
                </div>
                <!-- contentmhPublic  -->



                <div class="contentmhPublic" id="contentPublic">

                    <div class="wrapper"><img src="img/panel.png" /></div>
                    <!-- eo grid_20 -->
                    <div class="grid_20 gridinteriorhome top25">
                        <div class="grid_15">
                            <!-- grid_15_three_third  -->
                            <div class="grid_15_three_third">

                                <section class="athird">
                                    <header>
                                        <h1><a href="#" onclick="javascript:enlace('robotica_educativa.jsp');">Laboratorio de Robótica BBVA</a></h1>
                                        <img src="img/50/robotica.png" alt="" />
                                    </header>
                                    <p>
                                        Un espacio para que niños y jóvenes desarrollen capacidades académicas y habilidades competitivas por medio de plataformas
                                        innovadoras  de educación, a través de la Robótica.
                                    </p>
                                    <footer> <a href="#" onclick="javascript:enlace('robotica_educativa.jsp');">Más información <img src="img/arrow-link.gif" alt="" width="4" height="7" /></a> </footer>
                                </section>

                                <section class="athird">
                                    <header>
                                        <h1><a href="#" onclick="javascript:enlace('prestamosvehiculos.jsp');">Préstamos para Automóviles</a></h1>
                                        <img src="img/50/prestamos_coches.png?v=1.0" alt="" width="48" height="48" />
                                    </header>
                                    <p> Tener el auto que querés ahora es así de fácil. Para vehículos 0km o usados de hasta 10 años. </p>
                                    <footer> <a href="#" onclick="javascript:enlace('prestamosvehiculos.jsp');">Más información <img src="img/arrow-link.gif" alt="" width="4" height="7" /></a> </footer>
                                </section>

                                <section class="athird last">
                                    <header>
                                        <h1><a href="#" onclick="javascript:enlace('prestamoshipotecarios.jsp');">Préstamos Hipotecarios</a></h1>
                                        <img src="img/50/compra_vivienda.png?v=1.0" alt="" width="48" height="48" />
                                    </header>
                                    <p>Con fondos propios y tasas convenientes.<br /><br /></p>
                                    <footer> <a href="#" onclick="javascript:enlace('prestamoshipotecarios.jsp');">Más información <img src="img/arrow-link.gif" alt="" width="4" height="7" /></a> </footer>
                                </section>

                            </div>
                            <!-- eo grid_15_three_third  -->
                            <div class="divider"><img src="img/line-divider.png" alt="" width="700" height="2" /></div>


                            <!-- grid_15_three_third  -->
                            <div class="grid_15_three_third">

                                <section class="athird">
                                    <header>
                                        <h1><a href="#" onclick="javascript:enlace('http://www.beneficiosbbva.com.py','_blank');">Beneficios con tus tarjetas BBVA</a></h1>
                                        <img src="img/50/beneficios.png?v=1.0" alt="" />
                                    </header>
                                    <p>Conocé todos los beneficios y ventajas de tener una Tarjeta de crédito BBVA.</p>
                                    <footer> <a href="#" onclick="javascript:enlace('http://www.beneficiosbbva.com.py','_blank');">Todos los beneficios <img src="img/arrow-link.gif" alt="" width="4" height="7" /></a> </footer>
                                </section>

                                <section class="athird">
                                    <header>
                                        <h1><a href="#" onclick="javascript:enlace('lavado-dinero.jsp');">Prevención Lavado de Dinero</a></h1>
                                        <img src="img/50/seguridad.png" alt="" />
                                    </header>
                                    <p>Políticas y principios de BBVA en materia de prevención de lavado de dinero, de la financiación del terrorismo y la financiación de la proliferación de armas de destrucción masiva.</p>
                                    <footer> <a href="#" onclick="javascript:enlace('lavado-dinero.jsp');">Más información <img src="img/arrow-link.gif" alt="" width="4" height="7" /></a> </footer>
                                </section>


                            </div>
                            <!-- eo grid_15_three_third  -->
                            <div class="divider"><img src="img/line-divider.png" alt="" width="700" height="2" /></div>


                            <div class="grid_15_two_half">

                                <section class="ahalf">
                                    <header style="margin-bottom:10px">
                                        <h1>Cotizaciones</h1>
                                    </header>

                                    <table id="quotation-table" class="quotation-table">
                                        <caption>
                                            <span class="indented">Tabla de Cotizaciones</span>
                                        </caption>
                                        <thead>
                                            <tr class="firstRow">
                                                <th class="firstColumn" rowspan="2">
                                                    <div class="col-decoration">Moneda</div>
                                                </th>
                                                <th>
                                                    <div class="col-decoration">Efectivo</div>
                                                </th>
                                                <th>
                                                    <div class="col-decoration">Cheque</div>
                                                </th>
                                                <th class="lastColumn">
                                                    <div class="col-decoration">BBVANet</div>
                                                </th>
                                            </tr>
                                            <tr>
                                                <th class="firstColumn"><div align="center">Compra / Venta</div></th>
                                                <th><div align="center">Compra / Venta</div></th>
                                                <th class="lastColumn">
                                                    <div class="col-decoration" style="padding-left:0px !important; text-align:center">Compra / Venta</div>
                                                </th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr style="background-color:#FFF" class="firstRow">
                                                <td class="description">USD</td>
                                                <td class="number">5290 / 5415</td>
                                                <td class="number">5310 / 5425</td>
                                                <td class="number">5330 / 5400</td>
                                            </tr>
                                            <tr style="background-color:#FFF" class="firstRow">
                                                <td class="description">EUR</td>
                                                <td class="number">5860 / 6300</td>
                                                <td class="number">5840 / 6220</td>
                                                <td class="number">5880 / 6200</td>
                                            </tr>
                                        </tbody>

                                    </table>

                                </section>

                                <section class="ahalf last">
                                    <header>
                                        <h1>
                                            <a href="#" onclick="javascript:enlace('pago-nominas.jsp');">Cuenta tu mundo / Pago de Salarios</a>
                                        </h1>
                                    </header>
                                    <p class="short">Descubrí los beneficios pensados para los que cobran salarios en el BBVA.</p>
                                    <div class="section-images" style="margin-top:10px">  <img src="img/nomina-chico.png" width="142" height="113" /> </div>
                                    <button class="btn small contenidoLink buttonCotizaciones" type="button" onclick="javascript:enlace('pago-nominas.jsp');"><span>Más info</span></button>
                                </section>
                            </div>
                        </div>
                        <!-- eo grid_15 -->
                        <div class="grid_5">
                            <section class="news">
                                <header class="header">
                                    <h1>Somos BBVA</h1>
                                </header>
                                <ul>
                                    <li>
                                        <h2><a href="#" id="institucional">Institucional</a></h2>
                                        <span>Conoce el BBVA</span>
                                    </li>
                                    <li>
                                        <h2><a href="#" onclick="javascript:enlace('rsc-home.jsp');" style="display:block">Negocio Responsable</a></h2><!-- id="responsabilidadSocial" -->
                                        <span>Conoce nuestros programas</span>
                                    </li>
                                    <li>
                                        <h2><a href="#" onclick="javascript:enlace('https://careers.bbva.com/paraguay/','_blank');">RRHH</a></h2>
                                        <span>Trabaja en el BBVA</span>
                                    </li>
                                    <li>
                                        <h2><a href="#" onclick="javascript:enlace('euromoney2015.jsp');">Distinciones</a></h2>
                                        <span>Conoce los reconocimientos al BBVA</span>
                                    </li>
                                    <li class="last">
                                        <h2><a href="#" onclick="javascript:enlace('seguridad.jsp');">Seguridad</a></h2>
                                        <span>En BBVA trabajamos por tu seguridad</span>
                                    </li>
                                </ul>
                            </section>            <aside class="links">
                                <ul>
                                    <li class="first">
                                        <h2>
                                            <a href="#" onclick="javascript:enlace('prestamoshipotecarios.jsp');" style="display:block">
                                                <span>Hipotecario</span>
                                            </a>
                                        </h2>
                                    </li>
                                    <li>
                                        <h2>
                                            <a href="#" onclick="javascript:enlace('http://www.beneficiosbbva.com.py/universos/','_blank');" style="display:block">
                                                <span>Universos</span>
                                            </a>
                                        </h2>
                                    </li>
                                    <li>
                                        <h2>
                                            <a href="#" onclick="javascript:enlace('http://www.beneficiosbbva.com.py/experience/','_blank');" style="display:block">
                                                <span>Experience</span>
                                            </a>
                                        </h2>
                                    </li>
                                    <li class="last">
                                        <h2>
                                            <a href="#" onclick="javascript:enlace('canales.jsp');" style="display:block">
                                                <span>Servicios 24hs.</span>
                                            </a>
                                        </h2>
                                    </li>
                                </ul>
                            </aside>
                        </div>
                    </div>

                    <!-- NUEVOS ENLACES -->

                    <div class="grid_20 plus gridinteriorhomefoot">
                        <section class="five-large first">
                            <header>
                                <h1>BBVA Net<br /><br /></h1>
                            </header>
                            <div class="content-section">
                                <p>Descubre las ventajas de operar a través de BBVA Net</p>
                                <img src="img/canales_bbva.png" alt="" width="62" height="73" />
                            </div>
                            <footer> <a href="#" onclick="javascript:enlace('bbvanet.jsp');">Más información <img src="img/arrow-link.gif" alt="" width="4" height="7" /></a></footer>
                        </section>

                        <section class="five-large">
                            <header>
                                <h1>BBVA en tu móvil<br /><br /></h1>
                            </header>
                            <div class="content-section">
                                <p>Podrás realizar múltiples gestiones estés donde estés</p>
                                <img src="img/canales_movil.png" alt="" width="62" height="73">
                                <div class="clear">
                                    <a href="https://play.google.com/store/apps/details?id=py.com.bbva.ibbva2" target="_blank" style="display: block; float: left;">
                                        <img src="img/apps_google_play_small.png" alt="Google Play" width="30" height="30">
                                    </a>

                                    <a href="https://itunes.apple.com/py/app/bbva-paraguay/id646009101?mt=8" target="_blank" style="display: block; float: left; margin-left:5px">
                                        <img src="img/apps_app_store_small.png" alt="App Store" width="30" height="30">
                                    </a>
                                </div>
                            </div>
                            <footer> <a href="#" onclick="javascript:enlace('bancamovil.jsp');">Más información <img src="img/arrow-link.gif" alt="" width="4" height="7" /></a></footer>
                        </section>

                        <section class="five-large">
                            <header>
                                <h1>Línea BBVA<br /><br /></h1>
                            </header>
                            <div class="content-section">
                                <p>
                                    Ponemos a tu servicio la línea BBVA<br />
                                    <strong>24 horas al día, 365 días al año</strong><br />
                                </p>
                                <img src="img/canales_linea_bbva.png" alt="" width="62" height="73" />
                            </div>
                            <footer> <a href="#" onclick="javascript:enlace('lineaBBVA.jsp');">Más información <img src="img/arrow-link.gif" alt="" width="4" height="7" /></a></footer>
                        </section>

                        <section class="five-large">
                            <header>
                                <h1>Terminales de Autoservicio y Cajeros</h1>
                            </header>
                            <div class="content-section">
                                <p>Descubre todo lo que podés realizar desde los cajeros y terminales de autoservicio.</p>
                                <img src="img/canales_cajeros.png" alt="" width="62" height="73">
                            </div>
                            <footer> <a href="#" onclick="javascript:enlace('terminalesdeautoservicio.jsp');">Más información <img src="img/arrow-link.gif" alt="" width="4" height="7" /></a></footer>
                        </section>

                        <section class="five-large last">
                            <header>
                                <h1>Calidad de Atención<br />BBVA<br /></h1>
                            </header>
                            <div class="content-section">
                                <p>Descubre como podemos ayudarte estés donde estés.</p>
                                <img src="img/canales_responde.png" alt="" width="62" height="73" />
                            </div>
                            <footer> <a href="#" onclick="javascript:enlace('bbva-responde.jsp');">Más información <img src="img/arrow-link.gif" alt="" width="4" height="7" /></a></footer>
                        </section>
                    </div>
                    <!-- Fin NUEVOS ENLACES -->


                    <div class="grid_20 footerhome">


                        <!-- include enlacesinteres.jsp -->
                        <aside class="footer">
                            <ul>
                                <li class="first op1">
                                    <h2>INFORMACIÓN ÚTIL</h2>
                                    <ul class="">
                                        <li> <a href="#" onclick="javascript:enlace('media/tasas/tasas-2015.pdf', '_blank');" title="Tarifas y Comisiones"><span>Tarifas y Comisiones</span></a> </li>
                                        <li> <a href="#" onclick="javascript:enlace('lugaresdepago-general.jsp');" title="¿Donde pago mi Tarjeta BBVA?"><span>¿Donde pago mi Tarjeta BBVA?</span></a> </li>
                                        <li>
                                            <a href="#" onclick="javascript:enlace('formularios-contratos.jsp');" title="Formularios y contratos">
                                                <span>Formularios y contratos</span>
                                            </a>
                                        </li>
                                        <li> <a href="#" onclick="javascript:enlace('bienes_adjudicados.jsp');" title="Bienes Adjudicados"><span>Bienes Adjudicados</span></a> </li>
                                        <li> <a href="#"><span>&nbsp;</span></a> </li>
                                    </ul>
                                </li>
                                <li class="op2">
                                    <h2>INFORMACIÓN CORPORATIVA</h2>
                                    <ul class="">
                                        <li> <a href="#" id="interesBalance" title="Balance y Memoria Anual"><span>Balance y Memoria Anual</span></a> </li>
                                        <li> <a href="#" id="interesTrimestral" title="Balances Trimestrales"><span>Balances Trimestrales</span></a> </li>
                                        <li> <a href="#" id="interesBonos" title="Bonos Subordinados"><span>Bonos Subordinados</span></a> </li>
                                        <li> <a href="#" id="interesRiesgos" title="Calificación de Riesgos"><span>Calificación de Riesgos</span></a> </li>
                                        <li>
                                            <a href="#" onclick="javascript:enlace('informe-gobierno-corporativo.jsp');" title="Informe Anual de Gobierno Corporativo">
                                                <span>Informe Anual de Gobierno Corporativo</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="op3">
                                    <h2>LINKS DE INTERÉS</h2>
                                    <ul class="">
                                        <li> <a href="#" onclick="enlaceSiteCatalyst('http://www.bbva.com/' , '_blank');" title="www.bbva.com"><span>www.bbva.com</span></a> </li>
                                        <li> <a href="#" onclick="javascript:enlace('https://www.bbvaresearch.com/', '_blank');" title="BBVA Research"><span>BBVA Research</span></a> </li>
                                        <li> <a href="#" onclick="javascript:enlace('http://prensa.bbva.com/', '_blank');" title="Prensa BBVA"><span>Sala de Prensa BBVA</span></a> </li>
                                        <li> <a href="#" onclick="javascript:enlace('https://www.centrodeinnovacionbbva.com/', '_blank');" title="BBVA Centro de Innovación"><span>BBVA Centro de Innovación</span></a> </li>
                                        <li> <a href="#" onclick="javascript:enlace('http://www.bbvasocialmedia.com/', '_blank');" title="BBVA Social Media"><span>BBVA Social Media</span></a> </li>

                                    </ul>
                                </li>
                                <li class="last op4">
                                    <h2>BBVA EN REDES SOCIALES</h2>
                                    <ul class="redes-sociales">
                                        <li> <a href="#" onclick="javascript:enlace('https://www.facebook.com/BBVAParaguay', '_blank');" title="Facebook" class="face"><span>Facebook</span></a> </li>
                                        <li> <a href="#" onclick="javascript:enlace('https://twitter.com/BBVAParaguay', '_blank');" title="Twitter" class="tw"><span>Twitter</span></a> </li>
                                        <li> <a href="#" onclick="javascript:enlace('http://youtube.com/user/bbvaparaguay', '_blank');" title="YouTube" class="ytube"><span>YouTube</span></a> </li>
                                        <!-- <li> <a href="#" title="RSS" class="rss"><span>RSS</span></a> </li> -->
                                    </ul>
                                </li>
                            </ul>
                        </aside>
                        <!-- eo include enlacesinteres.jsp -->
                    </div>
                </div>

                <!-- eo contentmhPublic  -->
            </div>
            <!-- eo wrap-frame -->
        </div>
        <!-- eo container_20 -->
        <!-- include footer.jsp -->
        <footer class="footer-bottom">
            <ul>
                <li>
                    <a href="#" onclick="javascript:enlace('seguridad.jsp');" title="Seguridad">Seguridad</a>
                </li>
                <li>
                    <a href="#" onclick="javascript:enlace('aviso-legal.jsp');" title="Aviso legal">Aviso Legal</a>
                </li>
                <li>
                    <a href="#" onclick="javascript:enlace('https://www.bbva.com.py/scgi-bin/loginpf.cgi?acceso=persona');" title="Banca Web Anterior"><span>Banca Web Anterior</span></a>
                </li>
            </ul>
            <span class="copyright" itemprop="legalName">BBVA Paraguay S.A.</span>
        </footer>
        <!-- eo include footer.jsp -->
    </div>
    <!-- eo app -->
    <!-- include lightboxnormas.html -->
    <div id="lightboxnormas" class="ui-loading hidden">
        <div class="ui-loading-container">
            <p class="button-close">
                <span><img src="img/ico-cerrar.gif" alt="Cerrar" width="19" height="19" /></span>
            </p>
            <section class="ui-loading-content">
                <header>
                    <p>Normas de Seguridad</p>
                </header>
                <article class="content-box">
                    <p><span>Recomendamos que NO revele su clave de acceso, es de uso personal, privado, secreto e intransferible. Para todo efecto, será considerado como el equivalente a la firma electrónica. Recuerde que Usted es el único responsable de su manejo y adecuada aplicación por lo que libera a BBVA de toda responsabilidad en caso de que sea utilizado por otras personas.</span></p>
                    <p class="last"><span>Tenga presente que BBVA S.A. NUNCA solicitará vía e-mail datos personales, número de cuenta, contraseñas o ninguna otra información confidencial.</span></p>
                </article>
            </section>
        </div>
    </div>
    <!-- eo include lightboxnormas.html -->
    <!-- include lightboxloadinglogin.html -->
    <!-- activity indicator -->
    <div id="lightbox-loading-indicator" align="center" class="ui-loading hidden">
        <div class="ui-loading-container">
            <section class="ui-loading-content">
                <div class="loading">
                    <header>
                        <p>Ingresando al Sistema</p>
                    </header>
                    <p><img src="img/ico-modal-cargando.gif" alt="" width="42" height="42" /></p>
                </div>
                <article>
                    <p><span><strong>Por favor, espere un momento...</strong></span></p>
                </article>
            </section>
        </div>
    </div>
    <!-- eo include lightboxloadinglogin.html -->

    <div id="lightboxpass" class="ui-loading hidden">
        <div class="ui-loading-container">
            <p class="button-close">
                <span><img src="img/ico-cerrar.gif" alt="Cerrar" width="19" height="19" /></span>
            </p>
            <section class="ui-loading-content">
                <header>
                    <p>¿Olvidaste tu contraseña?</p>
                </header>
                <article class="content-box">
                    <p><span>Te entregamos una nueva Clave BBVA en cualquiera de nuestras Sucursales durante el horario de atención al público de Lunes a Viernes.</span></p>
                    <p class="last"><span>También puedes solicitar una nueva contraseña llamando a nuestro Call Center al 417-6000 o al 0800-11-2282. Este servicio se encuentra disponible las 24 hs. del día, los 7 días de la semana.</span></p>
                </article>
                <hr>
                <div class="columns">
                    <div class="column-left">
                        <input id="lost-password-search" type="text" class="text search large" placeholder="Localizar oficina más cercana" />
                        <p class="lostPasswordtitle"><span class="lostPasswordResultSearchTitle">Casa Matriz</span></p>
                        <img src="img/mapa-olvido-password.png" alt="Mapa oficina" width="271" height="200" />
                    </div>
                    <div class="column-middle">

                        <article id="office-Address-panel" class="officeAddressPanel">
                            <p><span>Nuestros gestores pueden restablecer tu contraseña en:</span></p>
                            <p class="titleAddress"><span>Casa Matriz</span></p>
                            <p><span>Avda. Mariscal López esquina Torreani Viera</span></p>
                            <p>
                                <span>
                                    Tel: (021) 417 6000<br>
                                    Lunes a viernes de 8:45hs a 13.30hs
                                </span>
                            </p>
                        </article>
                    </div>
                    <div class="column-right">
                        <article id="lost-password-contact-info-content" class="lostPasswordContactInfoContent">
                            <p class="title-operatoria">Mientras puedes operar por:</p>

                            <div id="phone-contact-content"><p>Línea BBVA 417 6000</p></div>
                            <img src="img/separador-boxpass.png" width="200" height="3" />
                            <div id="phone-contact"><p>0800-22-2282</p></div>
                            <img src="img/separador-boxpass.png" width="200" height="3" />
                            <div id="self-service-contact-content"><p>Cajeros automáticos</p></div>
                        </article>
                    </div>
                </div>
            </section>
        </div>
    </div>

    <div id="lightboxcert" class="ui-loading hidden">
        <div class="ui-loading-container">
            <p class="button-close">
                <span><img src="img/ico-cerrar.gif" alt="Cerrar" width="19" height="19" /></span>
            </p>
            <section class="ui-loading-content">
                <header>
                    <p>Certificados de Seguridad</p>
                </header>
                <article class="content-box">
                    <p><span>Nombre de Sitio: www.bbva.com.py</span></p>
                    <p><span>Estado de certificación SSL: Válido (07-Oct.- 2011 a 05-Dec-2012)</span></p>
                    <p><span>Empresa/Organización:</span></p>
                    <p><span>BANCO VILBAO VIZCAYA ARGENTARIA PARAGUAY SA</span></p>
                    <p><span>Transmisión de datos cifrados: Este sitio web puede proteger información privada  mediante un Certificado SSL. La información   intercambiada con cualquier dirección que comience con https se cifra con SSL antes de la transmisión.</span></p>
                    <p class="last"><span>Identidad verificada:<br />Se ha verificado que BANCO BILBAO VIZCAYA ARGENTARIA PARAGUAY SA es el propietario u operador del sitio web ubicado en www.bbva.com.py. Los registros oficiales confirman que BANCO BILBAO BIZCAYA ARGENTARIA PARAGUAY SA es una empresa válida.</span></p>
                </article>
            </section>
        </div>
    </div>


    <!-- include lightboxsucursalescajeros.html -->
    <div id="lightboxsucursalescajeros" class="ui-loading hidden">
        <div class="ui-loading-container">
            <p class="button-close">
                <span><img src="img/ico-cerrar.gif" alt="Cerrar" width="19" height="19" /></span>
            </p>
            <section class="ui-loading-content">
                <header>
                    <p>Sucursales y cajeros automáticos</p>
                </header>
                <div class="columns">
                    <div class="column-left">
                        <input id="lost-password-search" type="text" class="text search large" placeholder="Localizar oficina más cercana" />
                        <p class="lostPasswordtitle"><span class="lostPasswordResultSearchTitle">Casa Matriz</span></p>
                    </div>
                    <div class="column-left">

                    </div>
                </div>
            </section>
        </div>
    </div>

    <!-- eo include lightboxsucursalescajeros.html -->

    <div id="alert-noaceptar-terminos" class="info-alert-msg-container hidden">
        <div class="info-alert-msg">
            <div class="column-left">
                <img src="img/info-alert.png" alt="Alerta" width="22" height="20" />
            </div>
            <div class="column-middle">
                <p>
                    <span>No Aceptar los Términos y Condiciones implica la desconexión de BBVANet. Si es tu decisión pulsa de nuevo No Aceptar. En el caso de querer acceder, por favor pulsa Aceptar.</span>
                </p>
            </div>
        </div>
        <div class="info-alert-msg-bubble">
        </div>
    </div>

    <div id="lightboxhelpcaptcha" class="lightbox ui-loading hidden">
        <div class="ui-loading-container">
            <p class="button-close">
                <span><img src="img/ico-cerrar.gif" alt="Cerrar" width="19" height="19" /></span>
            </p>
            <section class="ui-loading-content">
                <header>
                    <p>Ayuda</p>
                </header>
                <article class="content-box">
                    <p><span>Para proteger la seguridad de su acceso, BBVA incorpora comprobación vía código visual de seguridad: CAPTCHA. </span></p>
                    <p class="last"><span>Los CAPTCHA son códigos aleatorios visuales o auditivos y que el usuario debe ingresar manualmente, según aparece en pantalla. Si tiene problemas para leer el código puede generar un nuevo código.</span></p>
                </article>
            </section>
        </div>
    </div>

    <!-- include js-jquery.jsp -->
    <!--[if gte IE 9]>
        <link rel="stylesheet" href="css/bbva-ie.css" />
    <![endif]-->
    <!--[if IE 8]>
        <link rel="stylesheet" href="css/bbva-ie8.css" />
    <![endif]-->
    <!--[if lte IE 7]>
        <link rel="stylesheet" href="css/bbva-ie7.css" />
    <![endif]-->
    <script type="text/javascript" src="js/lib/jquery.min.js"></script>
    <script type="text/javascript" src="js/lib/jquery-ui-compilation.js" charset="utf-8"></script>
    <script type="text/javascript" src="js/lib/jquery.ui.selectmenu.js" charset="utf-8"></script>
    <script type="text/javascript" src="js/lib/jquery.validate.js" charset="utf-8"></script>
    <script type="text/javascript" src="js/lib/localization/messages_es.js" charset="utf-8"></script>
    <script type="text/javascript" src="js/lib/jquery.infieldlabel.js" charset="utf-8"></script>
    <script type="text/javascript" src="js/lib/jquery.screwdefaultbuttons.js" charset="utf-8"></script>
    <script type="text/javascript" src="js/bbva-plugin-orbitaltooltip.js" charset="utf-8"></script>
    <script type="text/javascript" src="js/lib/jquery.regexp_selector.js" charset="utf-8"></script>
    <script type="text/javascript" src="js/lib/jquery.outside.js" charset="utf-8"></script>
    <script type="text/javascript" src="js/lib/jquery.placeholder.js" charset="utf-8"></script>
    <script type="text/javascript" src="js/lib/jquery.mousewheel.js" charset="utf-8"></script>
    <script type="text/javascript" src="js/lib/jquery.jscrollpane.js" charset="utf-8"></script>
    <script type="text/javascript" src="js/lib/jquery.ui.rcarousel.js" charset="utf-8"></script>
    <script type="text/javascript" src="js/lib/jquery.blockUI.1.33.js" charset="utf-8"></script>

    <script type="text/javascript" src="js/messages.js" charset="utf-8"></script>
    <script type="text/javascript" src="js/messages-es.js" charset="utf-8"></script>
    <script type="text/javascript" src="js/yaguarete.utils.js" charset="utf-8"></script>
    <script type="text/javascript" src="js/yaguarete.errorhandler.js" charset="utf-8"></script>
    <script type="text/javascript" src="js/login.js" charset="utf-8"></script>
    <script type="text/javascript" src="js/bbva-core.js" charset="utf-8"></script>
    <script type="text/javascript" src="js/bbva-jquery.js" charset="utf-8"></script>
    <script type="text/javascript" src="js/bbva-ui.js" charset="utf-8"></script>
    <script type="text/javascript" src="js/bbva-commons.js" charset="utf-8"></script>
    <script type="text/javascript" src="js/bbva-login-box.js" charset="utf-8"></script>
    <script type="text/javascript" src="js/bbva-validations.js" charset="utf-8"></script>
    <script type="text/javascript" src="js/bbva-validations-login.js" charset="utf-8"></script>
    <script type="text/javascript" src="js/bbva-validations-forms.js" charset="utf-8"></script>
    <script type="text/javascript" src="js/currencyQuotations.js" charset="utf-8"></script>
    <script type="text/javascript" src="js/jsSHA/sha.js" charset="utf-8"></script>
    <script type="text/javascript" src="js/jsSHA/sha512.js" charset="utf-8"></script>


    <!--[if lt IE 9]>
        <script src="js/html5shiv-printshiv.js"></script>
    <![endif]-->
    <!-- eo include js-jquery.jsp -->
    <!-- include js-jquery-publico.jsp -->

    <script type="text/javascript" src="js/bbva-public-general.js"></script>
    <script type="text/javascript" src="js/bbva-links-publico.js"></script>
    <script type="text/javascript" src="js/modernizr.js"></script>
    <!-- eo include js-jquery-publico.jsp -->
    <!-- Error layer -->
    <div id="error-aplication" class="ui-loading hidden">
        <div class="ui-loading-container">
            <section class="container-modal error-modal">
                <header>
                    <p id="close-modal" class="close-modal"><img src="img/ico-cerrar.gif" alt="Cerrar" width="19" height="19" /></p>
                </header>
                <article class="container-box content-modal">
                    <section class="c-error-messages">
                        <div class="container-error-messages">
                            <h2> <span class="icon-error"><img src="img/ico-light-error.png" alt="Cerrar" width="31" height="32" /></span> <span>Se ha producido un error en la aplicaci&oacute;n</span> </h2>
                            <div id="description-error-text" class="variable-text">
                                <p>Por favor, int&eacute;ntalo pasados unos minutos. Disculpa las molestias.</p>
                            </div>
                        </div>
                    </section>
                </article>
            </section>
        </div>
    </div>
    <!-- Error layer -->

    <div id="lightboxtermycond" class="ui-loading hidden">
        <div class="ui-loading-container">
            <section class="ui-loading-content">


                <div id="term-personas" class="hidden">
                    <header>
                        <p>
                            Términos y condiciones de los servicios electrónicos de BBVA
                            Paraguay
                        </p>
                    </header>
                    <menu class="acciones-menu" role="toolbar" type="toolbar">
                        <li class="js-tooltip savePDF" tabindex="0">
                            <img alt="Descargar"
                                 title="Descargar" id="termConditionDownloadTirica"
                                 src="img/ico-section-save.png" width="16" height="21" role="button"> <span class="comment hidden">Descargar</span>
                        </li>
                        <li class="js-tooltip print-Data" tabindex="1">
                            <img alt="Imprimir datos" title="Imprimir datos"
                                 src="img/ico-section-print.png" role="button" width="16" height="21" /> <span class="comment hidden">Imprimir datos</span>
                        </li>
                    </menu>
                    <article class="content-scrolled">

                        <p>1. Cláusulas generales</p>
                        <p>
                            <span>
                                1.1 El acceso y/o utilización de cualquiera de los
                                SERVICIOS ELECTRONICOS (BBVA NET, LÍNEA BBVA Y TERMINALES DE
                                AUTOSERVICIO (TAS) “BBVA NET, el contacto telefónico a la LINEA BBVA
                                y el usufructo de cualquiera de sus funcionalidades, y/o la
                                utilización de las TERMINALES DE AUTOSERVICIO (TAS)”, implican el
                                conocimiento y la aceptación de estos Términos y Condiciones.
                            </span>
                        </p>
                        <p>
                            <span>
                                1.2 Los servicios de “BBVA NET BANCA DE PERSONAS” y “BBVA
                                NET BANCA DE EMPRESAS” prestados a través del servicio BBVA NET, así
                                como las prestaciones brindadas por la LINEA BBVA, y las TERMINALES
                                DE AUTOSERVICIOS (TAS) son de uso exclusivo de clientes del BANCO
                                BILBAO VIZCAYA ARGENTARIA PARAGUAY S.A. (en esta solicitud el BBVA o
                                el Banco).
                            </span>
                        </p>
                        <p>
                            <span>
                                1.3 BBVA se reserva el derecho, sin necesidad de aviso
                                previo, de ampliar, restringir, suprimir, cancelar y/o modificar los
                                servicios que se ofrecen a través de los SERVICIOS ELECTRÓNICOS, sin
                                que por ello se diere lugar a derecho de reclamo alguno por parte de
                                los clientes y/o usuarios. El Usuario reconoce que los Servicios
                                Electrónicos son opcionales y voluntarios y proveídos por el BBVA con
                                la única finalidad de prestar mayor facilidad y comodidad al Usuario,
                                por lo que se lo libera expresamente de toda responsabilidad cuando
                                el Servicio no pueda ser utilizado, cualquiera sea la razón, en el
                                entendimiento de que quedan vigentes las demás formas tradicionales
                                de realizar las operaciones.
                            </span>
                        </p>
                        <p>
                            <span>
                                1.4 Será facultativo para BBVA conceder el acceso a cada
                                uno de los bienes, productos y/o la prestación de los servicios que
                                pudieran ofrecerse a través de los SERVICIOS ELECTRÓNICOS,
                                encontrándose sujeta su aprobación al cumplimiento de las
                                condiciones, modalidades y características que la entidad establezca
                                al efecto en cada caso. El BBVA no estará obligado a cumplir con las
                                instrucciones impartidas si el cliente no contare con los fondos
                                suficientes para ello. También podrá diferirlas en el tiempo en caso
                                de inconvenientes técnicos y/u horarios de cortes/compensaciones. El
                                usuario admite que las instrucciones cursadas al BBVA tienen el
                                carácter de definitivas e irrevocables. El usuario toma conocimiento
                                de que en todas aquellas cuentas y/o depósitos sobre los cuales pueda
                                efectuar operaciones, no deben pesar medidas cautelares de ninguna
                                especie, y que toda operación a efectuarse no podrá constituir una
                                supresión o disminución de garantías existentes en favor del BBVA.
                                Consecuentemente, el usuario asume las responsabilidades derivadas de
                                lo dispuesto en el Art. 422 del Código Civil.
                            </span>
                        </p>
                        <p>
                            <span>
                                1.5 La información, bienes, productos y/o servicios que
                                se ofrezcan a través de los SERVICIOS ELECTRÓNICOS están sujetos a
                                cambios, pudiendo incluso no encontrarse tal información, bienes,
                                productos y/o servicios ofrecidos disponibles temporal o
                                permanentemente, así como estar limitada ya sea en todas las áreas
                                geográficas del país, o a determinadas zonas o áreas geográficas y/o
                                del exterior.
                            </span>
                        </p>
                        <p>
                            <span>
                                1.6 BBVA no será responsable por cualquier pérdida que
                                los clientes pudieran sufrir en relación a las inversiones y/o
                                contrataciones formalizadas y que pudiera suscitarse en función de
                                las variaciones propias del mercado.
                            </span>
                        </p>
                        <p>
                            <span>
                                1.7 BBVA no es responsable de las fallas o defectos que
                                pudieran presentar los productos, bienes y/o servicios, que no sean
                                propios del BBVA de los que se tenga conocimiento mediante el acceso
                                a este sitio o las páginas web a las que se acceda a través de él.
                            </span>
                        </p>
                        <p>
                            <span>
                                1.8 BBVA no se responsabiliza por los daños y perjuicios
                                que pudieran resultar como consecuencia de las demoras,
                                interrupciones y defectos que pudieran existir en las transmisiones,
                                así como tampoco de los virus o fallas del sistema o líneas, o como
                                producto del uso incorrecto, involuntario o deliberado, de las
                                funcionalidades habilitadas en los SERVICIOS ELECTRÓNICOS.
                            </span>
                        </p>
                        <p>
                            <span>
                                1.9 El cliente por este medio releva expresamente al BBVA
                                del deber del secreto bancario, teniendo en cuenta que, pese al
                                esfuerzo y mecanismos de seguridad implementados por el BBVA, la
                                información, instrucción, datos, etc. de cualquier carácter pueden
                                ser interceptados por terceros. BBVA queda eximida de toda
                                responsabilidad en supuestos que se cometan ilícitos que afecten a
                                cualquier información que atañe al cliente, porque la misma
                                trascienda, o sufra cualquier daño o perjuicio en su persona o
                                bienes, por efecto de terceros (hackers, crackers o phreakers) que,
                                valiéndose de medios informáticos y de telecomunicaciones, accedan de
                                manera local o remota en forma no autorizada a informaciones
                                reservadas del cliente que le están vedada.
                            </span>
                        </p>
                        <p>
                            <span>
                                1.10 En el caso que alguna de las condiciones contenidas
                                en el presente documento, o partes del mismo, resulten inaplicables
                                por nulas, dicha nulidad no afectará al resto del contrato que
                                seguirá surtiendo pleno efecto en lo que se refiere a las demás
                                cláusulas, las que se mantendrán absolutamente válidas, y en cuanto
                                resulte comprensible (Artículo 365º del Código Civil).
                            </span>
                        </p>
                        <p>
                            <span>
                                1.11 Los SERVICIOS ELECTRÓNICOS desarrollados por el BBVA
                                son accesibles a través de los siguientes canales: a) sitio web en
                                Internet: www.bbva.com.py en adelante “el sitio” u otro
                                posteriormente indicado por el BBVA; o, b) las líneas telefónicas
                                595-21-417-6000 o 0800-11-2282 (sin costo); o, c) el uso de las
                                TERMINALES DE AUTOSERVICIOS ubicado en cualquiera de las sucursales
                                del BBVA; o d) cualquier otro medio comunicado por el BBVA.
                            </span>
                        </p>
                        <p>
                            <span>
                                1.12 La operativa que regirá los servicios electrónicos
                                de BBVA se ajustarán a lo dispuesto en el Anexo que se adjunta, el
                                cual forma parte integrante del presente.
                            </span>
                        </p>
                        <p>2. CLAVE BBVA</p>
                        <p>
                            <span>
                                2.1 La CLAVE BBVA es una identificación o firma
                                electrónica, al cual se le atribuye el mismo valor jurídico que la
                                firma manuscrita y cuyo uso produce los mismos efectos legales que
                                una firma manuscrita, conforme lo establece igualmente la Ley
                                4017/2010
                            </span>
                        </p>
                        <p>
                            <span>
                                2.2 La CLAVE BBVA es única, exclusiva para la
                                empresa/persona solicitante, privada, secreta e intransferible.
                            </span>
                        </p>
                    </article>
                </div>


                <div id="term-empresas" class="hidden">
                    <header>
                        <p>
                            Suscripción a los servicios electrónicos: bbva net, banca móvil,
                            línea bbva y terminales de autoservicio (TAS)
                        </p>
                    </header>
                    <article class="content-scrolled">
                        <p>
                            <span>
                                Para la adhesión a los Servicios Electrónicos del BBVA
                                Paraguay S.A., se requiere la firma y aceptación del presente
                                documento de suscripción en todos los términos y condiciones
                                estipulados en el mismo, por parte del usuario.
                            </span>
                        </p>

                        <p>
                            <span>
                                1. Detalle de operaciones y servicios disponibles en los
                                Canales Electrónicos del BBVA Paraguay S.A.:
                            </span>
                        </p>

                        <p>
                            1.1 Mediante estos servicios, dependiendo del perfil solicitado
                            y del canal utilizado, se pueden realizar las siguientes operaciones:
                        </p>

                        <div class="item-list">
                            <div style="display: table-cell;">
                                <ul style="margin-right: 7em">
                                    <li>Depósitos en cuenta</li>
                                    <li>Consultas de saldos de cuenta</li>
                                    <li>Extractos de Cuentas</li>
                                    <li>Traspasos de Cuentas</li>
                                    <li>Pago de Tarjetas de Crédito</li>
                                    <li>Pago a Proveedores</li>
                                    <li>Solicitudes de Chequeras</li>
                                    <li>Compra/Venta de divisas</li>
                                    <li>Impresión de Facturas</li>
                                </ul>
                            </div>
                            <div style="display: table-cell;">
                                <ul>
                                    <li>Servicio de Pago de salarios por Nómina</li>
                                    <li>
                                        Consulta de Cotización para Operaciones en Moneda
                                        Extranjera
                                    </li>
                                    <li>
                                        Consultas de Operaciones Bancarias, incluyendo
                                        Transferencias al Exterior
                                    </li>
                                    <li>Consulta y Obtención de Calificación de Riesgos</li>
                                    <li>Pago de Impuestos y Servicios Públicos y Privados</li>
                                    <li>Pago de despachos aduaneros</li>
                                    <li>Transferencias a terceros</li>
                                    <li>Transferencias a Otros Bancos</li>
                                </ul>
                            </div>
                        </div>
                        <p>
                            <span>
                                Los servicios detallados no son taxativos, por lo que el
                                Banco se reserva el derecho unilateral, de decidir en cualquier
                                instancia la ampliación y la limitación sin rigor de preaviso, de la
                                lista actual de opciones vigentes de Servicios Electrónicos
                                habilitados en la plataforma BBVA Net y demás canales electrónicos
                                sujetos a la presente suscripción.
                            </span>
                        </p>
                        <p>
                            <span style="margin-left: 18%; text-decoration: underline; text-align: center; font-weight: bold;">
                                Términos y Condiciones de adhesión a los servicios electrónicos del
                                BBVA Paraguay S.A.
                            </span>
                        </p>
                        <p>1. Cláusulas generales</p>
                        <p>
                            <span>
                                a. El acceso y/o utilización de cualquiera de los
                                SERVICIOS ELECTRONICOS (BBVA NET, LÍNEA BBVA Y TERMINALES DE
                                AUTOSERVICIO (TAS) “BBVA NET, el contacto telefónico a la LINEA BBVA
                                y el usufructo de cualquiera de sus funcionalidades, y/o la
                                utilización de las TERMINALES DE AUTOSERVICIO (TAS)”, implican el
                                conocimiento y la aceptación de estos Términos y Condiciones.
                            </span>
                        </p>
                        <p>
                            <span>
                                b. Los servicios de “BBVA NET BANCA DE PERSONAS” y “BBVA
                                NET BANCA DE EMPRESAS” prestados a través del servicio BBVA NET, así
                                como las prestaciones brindadas por la LINEA BBVA, y las TERMINALES
                                DE AUTOSERVICIOS (TAS) son de uso exclusivo de clientes del BANCO
                                BILBAO VIZCAYA ARGENTARIA PARAGUAY S.A. (en esta solicitud el BBVA o
                                el Banco).
                            </span>
                        </p>
                        <p>
                            <span>
                                c. BBVA se reserva el derecho, sin necesidad de aviso
                                previo, de ampliar, restringir, suprimir, cancelar y/o modificar los
                                servicios que se ofrecen a través de los SERVICIOS ELECTRÓNICOS, sin
                                que por ello se diere lugar a derecho de reclamo alguno por parte de
                                los clientes y/o usuarios. El Usuario reconoce que los Servicios
                                Electrónicos son opcionales y voluntarios y proveídos por el BBVA con
                                la única finalidad de prestar mayor facilidad y comodidad al Usuario,
                                por lo que se lo libera expresamente de toda responsabilidad cuando
                                el Servicio no pueda ser utilizado, cualquiera sea la razón, en el
                                entendimiento de que quedan vigentes las demás formas tradicionales
                                de realizar las operaciones.
                            </span>
                        </p>
                        <p>
                            <span>
                                d. Será facultativo para BBVA conceder el acceso a cada
                                uno de los bienes, productos y/o la prestación de los servicios que
                                pudieran ofrecerse a través de los SERVICIOS ELECTRÓNICOS,
                                encontrándose sujeta su aprobación al cumplimiento de las
                                condiciones, modalidades y características que la entidad establezca
                                al efecto en cada caso. El BBVA no estará obligado a cumplir con las
                                instrucciones impartidas si el cliente no contare con los fondos
                                suficientes para ello. También podrá diferirlas en el tiempo en caso
                                de inconvenientes técnicos y/u horarios de cortes/compensaciones. El
                                usuario admite que las instrucciones cursadas al BBVA tienen el
                                carácter de definitivas e irrevocables. El usuario toma conocimiento
                                de que en todas aquellas cuentas y/o depósitos sobre los cuales pueda
                                efectuar operaciones, no deben pesar medidas cautelares de ninguna
                                especie, y que toda operación a efectuarse no podrá constituir una
                                supresión o disminución de garantías existentes en favor del BBVA.
                                Consecuentemente, el usuario asume las responsabilidades derivadas de
                                lo dispuesto en el Art. 422 del Código Civil.
                            </span>
                        </p>
                        <p>
                            <span>
                                e. La información, bienes, productos y/o servicios que se
                                ofrezcan a través de los SERVICIOS ELECTRÓNICOS están sujetos a
                                cambios, pudiendo incluso no encontrarse tal información, bienes,
                                productos y/o servicios ofrecidos disponibles temporal o
                                permanentemente, así como estar limitada ya sea en todas las áreas
                                geográficas del país, o a determinadas zonas o áreas geográficas y/o
                                del exterior.
                            </span>
                        </p>
                        <p>
                            <span>
                                f. BBVA no será responsable por cualquier pérdida que los
                                clientes pudieran sufrir en relación a las inversiones y/o
                                contrataciones formalizadas y que pudiera suscitarse en función de
                                las variaciones propias del mercado.
                            </span>
                        </p>
                        <p>
                            <span>
                                g. BBVA no es responsable de las fallas o defectos que
                                pudieran presentar los productos, bienes y/o servicios, que no sean
                                propios del BBVA de los que se tenga conocimiento mediante el acceso
                                a este sitio o las páginas web a las que se acceda a través de él.
                            </span>
                        </p>
                        <p>
                            <span>
                                h. BBVA no se responsabiliza por los daños y perjuicios
                                que pudieran resultar como consecuencia de las demoras,
                                interrupciones y defectos que pudieran existir en las transmisiones,
                                así como tampoco de los virus o fallas del sistema o líneas, o como
                                producto del uso incorrecto, involuntario o deliberado, de las
                                funcionalidades habilitadas en los SERVICIOS ELECTRÓNICOS.
                            </span>
                        </p>
                        <p>
                            <span>
                                i. El cliente por este medio releva expresamente al BBVA
                                del deber del secreto bancario, teniendo en cuenta que, pese al
                                esfuerzo y mecanismos de seguridad implementados por el BBVA, la
                                información, instrucción, datos, etc. de cualquier carácter pueden
                                ser interceptados por terceros. BBVA queda eximida de toda
                                responsabilidad en supuestos que se cometan ilícitos que afecten a
                                cualquier información que atañe al cliente, porque la misma
                                trascienda, o sufra cualquier daño o perjuicio en su persona o
                                bienes, por efecto de terceros (hackers, crackers o phreakers) que,
                                valiéndose de medios informáticos y de telecomunicaciones, accedan de
                                manera local o remota en forma no autorizada a informaciones
                                reservadas del cliente que le están vedada.
                            </span>
                        </p>
                        <p>
                            <span>
                                j. En el caso que alguna de las condiciones contenidas en
                                el presente documento, o partes del mismo, resulten inaplicables por
                                nulas, dicha nulidad no afectará al resto del contrato que seguirá
                                surtiendo pleno efecto en lo que se refiere a las demás cláusulas,
                                las que se mantendrán absolutamente válidas, y en cuanto resulte
                                comprensible (Artículo 365º del Código Civil).
                            </span>
                        </p>
                        <p>
                            <span>
                                k. Los SERVICIOS ELECTRÓNICOS desarrollados por el BBVA
                                son accesibles a través de los siguientes canales: a) sitio web en
                                Internet: www.bbva.com.py en adelante “el sitio” u otro
                                posteriormente indicado por el BBVA; o, b) las líneas telefónicas
                                595-21-417-6000 o 0800-11-2282 (sin costo); o, c) el uso de las
                                TERMINALES DE AUTOSERVICIOS ubicado en cualquiera de las sucursales
                                del BBVA; o d) cualquier otro medio comunicado por el BBVA.
                            </span>
                        </p>
                        <p>
                            <span>
                                l. La operativa que regirá los servicios electrónicos de
                                BBVA se ajustarán a lo dispuesto en el Anexo que se adjunta, el cual
                                forma parte integrante del presente.
                            </span>
                        </p>
                        <p>2. CLAVE BBVA</p>
                        <p>
                            <span>
                                a. La CLAVE BBVA es una identificación o firma
                                electrónica, al cual se le atribuye el mismo valor jurídico que la
                                firma manuscrita y cuyo uso produce los mismos efectos legales que
                                una firma manuscrita, conforme lo establece igualmente la Ley
                                4017/2010
                            </span>
                        </p>
                        <p>
                            <span>
                                b. La CLAVE BBVA es única, exclusiva para la
                                empresa/persona solicitante, privada, secreta e intransferible.
                            </span>
                        </p>
                        <p>
                            <span>
                                c. El usuario del servicio es el único responsable de
                                asegurar el uso secreto de cada clave y de garantizar su correcta y
                                adecuada utilización por parte de los usuarios. El usuario acepta la
                                prueba de la existencia de las órdenes cursadas por él, que surjan de
                                los elementos que componen los registros del sistema informático del
                                BBVA y así también toda prueba que sea hábil para acreditar la orden
                                emanada, especialmente los documentos electrónicos que valdrán como
                                original. A este efecto, el usuario faculta al BBVA a utilizar
                                cualquier sistema idóneo para acreditar la pertenencia de la orden
                                cursada. El usuario renuncia expresamente a cuestionar la idoneidad o
                                habilidad de esa prueba, considerándose la presente como condición
                                esencial de ingreso al sistema. Cualquier error, inexactitud o
                                insuficiencia incurrida por el usuario en la orden o instrucción
                                cursada serán de su exclusiva responsabilidad, quedando relevado el
                                BBVA de la corrección de los mismos. En el caso de órdenes
                                contradictorias el BBVA podrá no cumplir con ninguna de ellas. No
                                obstante, podrá el BBVA corregirlos y aplicar la orden a su
                                entendimiento, sin que ello genere ningún tipo de responsabilidad
                                para el mismo.
                            </span>
                        </p>
                        <p>
                            <span>
                                d. El BBVA por seguridad del usuario desactivará
                                automáticamente el acceso al servicio al registrarse sucesivamente el
                                ingreso incorrecto del Password en 5 (cinco) oportunidades en una
                                misma sesión.
                            </span>
                        </p>
                        <p>
                            <span>
                                e. El usuario del servicio asume plena responsabilidad
                                por las consecuencias del uso indebido o no autorizado que terceros
                                hagan respecto de cada CLAVE BBVA que se le haya asignado; liberando
                                expresamente de toda responsabilidad a BBVA por reclamos civiles,
                                penales o de cualquier otro tipo que pudieran presentarse en tales
                                casos.
                            </span>
                        </p>
                        <p>
                            <span>
                                f. BBVA se reserva el derecho de tomar las medidas que
                                considere más apropiadas según las circunstancias de cada caso
                                particular denunciado de la forma idónea expresada en el ítem
                                anterior por la empresa/persona.
                            </span>
                        </p>
                        <p>
                            <span>
                                g. El usuario se obliga a cambiar la CLAVE BBVA otorgadas
                                por el BBVA en la primera vez que accede a los servicios, a fin de
                                resguardar su seguridad y confidencialidad.
                            </span>
                        </p>
                        <p>3. Terminación</p>
                        <p>
                            <span>
                                a. Cualquier cláusula del presente que reglamenta los
                                servicios electrónicos de BBVA podrá ser modificada total o
                                parcialmente por el BBVA y será comunicado por medio fehaciente al
                                cliente, el cual deberá expresar, por escrito, su disconformidad con
                                dicha modificación en el plazo de cinco (5) días posteriores a la
                                notificación, vencido el cual, se tendrá por aceptada. Ante la
                                respuesta negativa del titular de la cuenta, el BBVA podrá proceder
                                de conformidad al artículo siguiente.
                            </span>
                        </p>
                        <p>
                            <span>
                                b. El BBVA podrá, en cualquier momento y sin necesidad de
                                expresión de causa, suspender o interrumpir la prestación de los
                                Servicios Electrónicos. El incumplimiento por parte del usuario de
                                cualquiera de las obligaciones asumidas, o cualquiera de las
                                condiciones convenidas en la presente, ocasionará automáticamente la
                                caducidad del servicio, además de su obligación de indemnizar al BBVA
                                de cualquier daño o perjuicio que el uso irregular le haya
                                ocasionado.
                            </span>
                        </p>
                        <p>4. Legislación Aplicable</p>
                        <p>
                            <span>
                                a. Para todos los efectos derivados de la presente, el
                                usuario se somete a la legislación y jurisdicción de los tribunales
                                ordinarios de la ciudad de Asunción, Capital de la República del
                                Paraguay.
                            </span>
                        </p>
                        <p>5. Aceptación, conformidad y firmas</p>
                        <p>
                            <span>
                                Declaro poseer capacidad legal suficiente para
                                suscribirme a los SERVICIOS ELECTRÓNICOS, y en tal carácter
                                manifiesto haber leído en su totalidad y estar en conocimiento de los
                                Términos y Condiciones, expresando mediante mi aprobación electrónica
                                en este mismo acto la aceptación y conformidad con los mismos.
                            </span>
                        </p>

                    </article>
                </div>
                <section class="container-box">
                    <hr />
                    <article>
                        <p class="last"><span>Pulsa Aceptar si estás conforme con los Términos y Condiciones de los servicios electrónicos de BBVA Paraguay:</span></p>
                    </article>
                </section>
                <div class="buttons">
                    <button type="button" id="btncancelarcondiciones" class="btn large"><span>No Aceptar</span></button>
                    <button type="button" id="btnaceptarcondiciones" class="btn large"><span>Aceptar</span></button>
                </div>
            </section>
        </div>
    </div>    

    <script type="text/javascript">
        $(document).on('ready', function () {
            if ($("#empresas").hasClass("active")) {
                $('#term-empresas').removeClass('hidden');
                $('#term-personas').addClass('hidden');
                $('#term-personas').css('display', 'none');
            }
            else {
                $('#term-empresas').addClass('hidden');
                $('#term-personas').removeClass('hidden');
                $('#term-empresas').css('display', 'none');
            }
        })
    </script>

    <script type="text/javascript" src="js/bbva-carousel.js"></script>
    <script type="text/javascript">
        /*
        // You may give each page an identifying name, server, and channel onthe next lines.
        s.pageName="personas:home";
        s.hier1="personas:home";
        s.server=window.location.host;
        s.channel="personas";
        s.pageType="";
        s.prop1="personas:home";
        s.prop2="";
        s.prop3="";
        s.prop4="";
        s.prop5="";
        s.prop12="castellano"; // TIRICA todo en castellano
        s.prop14="no logado";
        s.prop36="publica";

        // Conversion Variables
        s.campaign="";
        s.state="";
        s.zip="";
        s.events="";
        s.products="";
        s.purchaseID="";
        s.eVar2="";
        s.eVar3="";
        s.eVar4="";
        s.eVar5="";
        s.eVar12=s.prop12;
        s.eVar14=s.prop14;
        s.eVar36=s.prop36;
        var s_code=s.t();if(s_code)document.write(s_code)*/
    </script>
    <script type="text/javascript">
        /*if(navigator.appVersion.indexOf('MSIE')>=0)document.write(unescape('%3C')+'\!-'+'-'*/
    </script><noscript>
        <img src="http://namespace.112.2o7.net/b/ss/bbvabbvaparaguaydev/1/H.26.1.--NS/0"
             height="1" width="1" border="0" alt="" />
    </noscript>
    </div>
    </form>
</body>       
</html>
