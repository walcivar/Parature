
/* Funcion para centralizar los enlaces*/
function enlace(url,target){
	if (!target) {
		window.location.href = url;
		//document.location = url;
	} else {
		window.open(url ,target);
	}	
}


function enlaceDescargaSiteCatalyst(enl , prodName , fileName, target){
	var s=s_gi('bbvaparaguay');
	s.linkTrackVars='prop17,eVar17,events';
	s.linkTrackEvents='event17';
	s.prop17=prodName+":"+fileName;
	s.eVar17=s.prop17;
	s.events='event17';
	s.tl(this,'d',enl);
	enlace(enl, target);
}


function enlaceSiteCatalyst( enl , target ){
	var s=s_gi('bbvaparaguay');
	s.linkTrackVars='prop18,eVar18,events';
	s.linkTrackEvents='event18';
	s.prop18=enl;
	s.eVar18=s.prop18;
	s.events='event18';
	s.tl(this,'e',s.prop18);
	enlace(enl, target);
}


function enlaceSiteCatalystVideo( nombreVideo , enl, target ){
	var s=s_gi('bbvaparaguay');
	s.linkTrackVars='eVar23,events';
	s.linkTrackEvents='event23'; 
	s.eVar23=nombreVideo; 
	s.events='event23'; 
	s.tl(this,'o','videos:reproduccion'); 
	enlace(enl, target);

}

function loginEvent(userSha, isPerson){
	var s=s_gi('bbvaparaguay');
	s.linkTrackVars='prop14,prop15,prop16,eVar14,eVar15,eVar16,events';
	s.linkTrackEvents='event22'; 
	s.events='event22';
	s.eVar14='logado';
	s.prop14='logado';
	s.eVar15=userSha;
	s.prop15=userSha;
	s.eVar16=(isPerson)?'personas':'empresas';
	s.prop16=s.eVar16; 
	s.tl(this,'o','login'); 
	
}
/* Funcion para centralizar los enlaces*/