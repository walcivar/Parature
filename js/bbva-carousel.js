$(window).load(function(){
	(function(){
		function carouselStart() {
			var controllers = $("li.controller", "#home-carousel_pager");
			
			controllers.each(function(index, elem){
				controllers.eq(index).bind('click', function(){
					$("#home-carousel").rcarousel("goToPage", index);
				});
			});

			controllers.eq(0).addClass("active");
		}

		function pageLoaded(event, data) {
			var controllers = $("li.controller", "#home-carousel_pager");
			controllers.removeClass("active").eq( data.page ).addClass("active");
		}
		
		function startCarousel(carousel){
			try{
				carousel.find("#btn-slide1").bind('click', function(){
					window.location = "#sabias-que-1";
				});
		
				carousel.find("#btn-slide2").bind('click', function(){
					window.location = "#sabias-que-2";
				});
		
				carousel.find("#btn-slide3").bind('click', function(){
					window.location = "#sabias-que-3";
				});
				
				carousel.rcarousel({
					auto: {
						enabled: true,
						interval: 5000
					},
					width:958,
					height:265,
					step:1,
					speed:800,
					visible:1,
					navigation:	{next: '#home-carousel-next', prev: '#home-carousel-prev'},
					start: carouselStart,
					pageLoaded: pageLoaded
				});
			}catch(e){}
		}

		var url = null;
		preview = false;
		
		var arrayPath = window.location.pathname.split("/");
		var lastElem = arrayPath[arrayPath.length - 1];
		var isIndexPersonas = lastElem == "index.jsp" || lastElem == "" ? true : false;
		
		if(window.location.pathname==="/public/cms"){
			preview=(window.location.search.replace( "?action=", "" )==="xbuYA8Ibs8HF0jGpB7tta5mner67300aeA");
		}
		
		if(preview){
			url="/public/cms?action=PREVIEW";
		}else{ 
			url="/public/cms?action=GETPROMOTIONS";
		}
		
		if((!isIndexPersonas) && (!preview)){
			//como no es el index con promociones dinamicas, entonces se intenta mostrar el carousel no dinamico (si puede)
			startCarousel($("#home-carousel"));
			return;
		}
		
		$.ajax({
		  url: url,
		  type: "POST",
		  //data: {},
		  //contentType:"application/json; charset=utf-8",
		  //dataType:"json",
		  success: function(result){
				var proms =$.parseJSON(result);
				var countProm = 0;
				
				var carousel = $("#home-carousel");
				var carPager = $("#home-carousel_pager");
				
				carPager.append('<li id="home-carousel-prev" class="arrow"><img alt="Anterior" src="img/widget-pag_left.png" width="22" height="100"></li>');
				
				proms.sort(function(a, b) { 
				    return a.resource.order - b.resource.order;
				});
				
				//proms.reverse();

				for(var i in proms){
					var prom = proms[i];
					countProm = countProm + 1;
					
					carousel.append(
						'<div class="carousel-item">' +
		                  '<div class="content">' +
		                    '<div class="variable-text">' +
		                      prom.resource.shortDescription +
		                      prom.resource.fullDescription +
		                    '</div>' +
		                    '<div class="variable-img"> <img style="text-align: left;" src="' + prom.relativePath + '" alt=""/> </div>' +
		                  '</div>' +
		                '</div>'
			        );
					
					carPager.append('<li class="controller" value="' + countProm + '"><img alt="Se encuentra en..." src="img/widget-pag_R2.png"></li>');
				}
				
				carPager.append('<li id="home-carousel-next" class="arrow" ><img alt="Siguiente" src="img/widget-pag_right.png" width="22" height="100"></li>');
				
				startCarousel(carousel);
		  }
		});
	})();
});
