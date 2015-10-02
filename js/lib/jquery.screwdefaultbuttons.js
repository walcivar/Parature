/*!
 * ScrewDefaultButtons! v1.2.3
 * http://screwdefaultbuttons.com/
 *
 * Licensed under a Creative Commons Attribution-ShareAlike 3.0 Unported License  
 * http://creativecommons.org/licenses/by-sa/3.0/
 *
 * by Matt Solano 
 * http://mattsolano.com
 *
 * Date: Fri September 2 2011
 *
 */	
 
(function($) {

	$.fn.screwDefaultButtons = function(options) {
		
		var screw = this;
		screw.options = $.extend($.fn.screwDefaultButtons.defaults, options);
		
		screw.checkedImage = screw.options.checked;
		screw.uncheckedImage = screw.options.unchecked;
		screw.hoverImage = screw.options.hover;
		screw.hoverCheckedImage = screw.options.hoverChecked;
		screw.disabledImage = screw.options.disabled;
		screw.disabledCheckImage = screw.options.disabledChecked;
		screw.selectAllBtn = screw.options.selectAll;
		screw.width = screw.options.width;
		screw.height = screw.options.height;
		
		var thisCheckName;
		
		var checkPath = screw.checkedImage.slice(4,-1);
		var uncheckPath = screw.uncheckedImage.slice(4,-1);

		var hoverPath = screw.hoverImage.slice(4,-1);
		var hoverCheckedkPath = screw.hoverCheckedImage.slice(4,-1);

		var disabledPath = screw.disabledImage.slice(4,-1);
		var disabledCheckPath = screw.disabledCheckImage.slice(4,-1);
		
		var typeElement = null;
		var $container = null;
		var isHover = {};
		screw.isHover = isHover;
		
		$('body').append('<img class="preloadCheck" src="' + checkPath + '" width="0" height="0" />');
		$('body').append('<img class="preloadUnCheck" src="' + uncheckPath + '" width="0" height="0"  />');
		
		$('body').append('<img class="preloadHover" src="' + hoverPath + '" width="0" height="0" />');
		$('body').append('<img class="preloadHoverChecked" src="' + hoverCheckedkPath + '" width="0" height="0"  />');
		
		$('body').append('<img class="preloadDisabled" src="' + disabledPath + '" width="0" height="0" />');
		$('body').append('<img class="preloadDisabledCheck" src="' + disabledCheckPath + '" width="0" height="0"  />');
		
		$('.preloadCheck').fadeOut(0);
		$('.preloadUnCheck').fadeOut(0);
		
		$('.preloadHover').fadeOut(0);
		$('.preloadHoverChecked').fadeOut(0);
		
		$('.preloadDisabled').fadeOut(0);
		$('.preloadDisabledCheck').fadeOut(0);
		
		if($(this).is(":radio")){
			// ------------ Styled Radio Buttons ---------------
			var radioButton = $(this);
			typeElement = 'radio';
			
			$(radioButton).wrap('<div class="styledRadio" ></div>').hide();
			
			$container = radioButton.parents('.styledRadio');

			$container.css({backgroundImage:screw.uncheckedImage, width: screw.width, height:screw.height});
			$(radioButton).filter(':checked').parent().addClass('checked').css({"background-image":screw.checkedImage});
			
			
			if (screw.disabledImage !== false || screw.disabledCheckImage !== false ){
				$(radioButton).filter(':disabled').each(function(){
					if ($(this).is(':checked')){
						$(this).parent().addClass('disabled').css({"background-image":screw.disabledCheckImage});	
					}
					else {
						$(this).parent().addClass('disabled').css({"background-image":screw.disabledImage});	
					}
				});
			}
			
			
			$(radioButton).each(function(){
				var radioButtonClass = $(this).attr('class');
				var radioButtonClick = $(this).attr('onclick');
				$(this).parent().addClass(radioButtonClass);
				$(this).parent().attr('onclick',radioButtonClick );
			});
			
			$container.click(function(e){
				if(!($(this).hasClass('disabled'))){
				
					thisCheckName = $(this).find("input:radio").attr("name");
		
					if(!($(this).hasClass('checked'))){
						$('.selected').removeClass('selected');
						$(this).addClass('checked').addClass('selected')
						//.css({backgroundImage:screw.checkedImage})
						.css({backgroundImage:isHover[$(this).find('input:radio').attr('id')]?((screw.hoverCheckedImage!==false)?screw.hoverCheckedImage:screw.checkedImage):screw.checkedImage})
						.find('input:radio')
							.attr('checked','checked')
							.trigger('change');
							
						$('.styledRadio').each(function(){
							otherCheckName = $(this).find("input:radio").attr("name");
							if(otherCheckName == thisCheckName){
								if(!($(this).hasClass('selected'))){
									if($(this).hasClass('disabled')){
										$(this).removeClass('checked')
										.css({backgroundImage:screw.disabledImage});
									}
									else {
										$(this).removeClass('checked')
										.css({backgroundImage:screw.uncheckedImage});
									}	
								}
							}
						});
						
						$(this).find('input:radio').trigger('click');
						
					}
				}
			}).hover(
				function(){
					var $this = $(this);
					isHover[$this.find('input:checkbox').attr('id')] = true;
					
					if(!($this.hasClass('disabled'))){
						if(!($this.hasClass('checked'))){
							$this.css({backgroundImage:screw.hoverImage});
						} else {
							$this.css({backgroundImage:screw.hoverCheckedImage});
						}
					}
				},
				function(){
					var $this = $(this);
					isHover[$this.find('input:checkbox').attr('id')] = false;
					
					if(!($this.hasClass('disabled'))){
						if(!($this.hasClass('checked'))){ 
							$this.css({backgroundImage:screw.uncheckedImage});
						} else {
							$this.css({backgroundImage:screw.checkedImage});
						}
					}
				
				}
			);
			
			$container.next('label').click(function(e){
				var labelFor = $(this).attr('for');
				var radioForMatch = $('input:radio').filter('#' + labelFor);
				if(!($(radioForMatch).is(':disabled'))){
					var thisCheckName = radioForMatch.attr("name");
					if (!(radioForMatch.parent().hasClass("checked"))){
						$('.selected').removeClass('selected');
						radioForMatch.attr('checked','checked').trigger('change');
						radioForMatch.parent().addClass('checked').addClass('selected')
							//.css({backgroundImage:screw.checkedImage});
							.css({backgroundImage:isHover[labelFor]?((screw.hoverCheckedImage!==false)?screw.hoverCheckedImage:screw.checkedImage):screw.checkedImage});
							
						$container.each(function(){
							//otherCheckName = $(this).find("input:radio").attr("name");
							//if(otherCheckName == thisCheckName){
								if(!($(this).hasClass('selected'))){
									if($(this).hasClass('disabled')){
										$(this).removeClass('checked')
										.css({backgroundImage:screw.disabledImage});
									}
									else {
										$(this).removeClass('checked')
										.css({backgroundImage:screw.uncheckedImage});
									}
								}
							//}
						});
						
					}
				}
			}).hover(
				function(){
					var labelFor = $(this).attr('for');
					var radioForMatch = $('input:radio').filter('#' + labelFor);
					isHover[labelFor] = true;
					
					if(!($(radioForMatch).is(':disabled'))){
						
						if (!(radioForMatch.parent().hasClass("checked"))){
							radioForMatch.parent().css({backgroundImage:screw.hoverImage});
						} else {
							radioForMatch.parent().css({backgroundImage:screw.hoverCheckedImage});
						}
					}
				},
				function(){
					var labelFor = $(this).attr('for');
					var radioForMatch = $('input:radio').filter('#' + labelFor);
					isHover[labelFor] = false;
					
					if(!($(radioForMatch).is(':disabled'))){
						
						if (!(radioForMatch.parent().hasClass("checked"))){
							radioForMatch.parent().css({backgroundImage:screw.uncheckedImage});
						} else {
							radioForMatch.parent().css({backgroundImage:screw.checkedImage});
						}
					}
				}
			);
			
			$container.css({"background-repeat":"no-repeat"});
			// ------------------------------------------------
			
		}
		else if ($(this).is(":checkbox")){
			
			// -------------- Styled Checkboxes ---------------
			var checkbox = $(this);
			typeElement = 'checkbox';
			
			$(checkbox).wrap('<div class="styledCheckbox" ></div').hide();
			
			$container = checkbox.parents('.styledCheckbox');
			
			$container.css({backgroundImage:screw.uncheckedImage, width: screw.width, height:screw.height});
			$(checkbox).filter(':checked').parent().addClass('checked').css({"background-image":screw.checkedImage});
			
			if (screw.disabledImage !== false || screw.disabledCheckImage !== false ){
				$(checkbox).filter(':disabled').each(function(){
					if ($(this).is(':checked')){
						$(this).parent().addClass('disabled').css({"background-image":screw.disabledCheckImage});	
					}
					else {
						$(this).parent().addClass('disabled').css({"background-image":screw.disabledImage});	
					}
				});
			}
			
			$(checkbox).each(function(){
				var checkboxClass = $(this).attr('class');
				var checkboxClick = $(this).attr('onclick');
				
				$(this).parent().addClass(checkboxClass);
				$(this).parent().attr('onclick',checkboxClick );
			});
			
			$container.click(function(){
												
				if(!($(this).hasClass('disabled'))){
					
					if(!($(this).hasClass('checked'))){
						$(this).addClass('checked')
						//.css({"background-image":screw.checkedImage})
						.css({backgroundImage:isHover[$(this).find('input:checkbox').attr('id')]?((screw.hoverCheckedImage!==false)?screw.hoverCheckedImage:screw.checkedImage):screw.checkedImage})
						.find('input:checkbox')
							.attr('checked','checked')
							.trigger('change');	
					}
					else{
						$(this).removeClass('checked')
						//.css({"background-image":screw.uncheckedImage})
						.css({backgroundImage:isHover[$(this).find('input:checkbox').attr('id')]?((screw.hoverImage!==false)?screw.hoverImage:screw.uncheckedImage):screw.uncheckedImage})
						.find('input:checkbox')
							.removeAttr('checked','checked')
							.trigger('change');
						/*$(screw.selectAllBtn).removeAttr('checked','checked')
							.parent('.styledCheckbox')
							.removeClass('checked')
							.css({"background-image":screw.uncheckedImage});*/
					}
					
					if (screw.selectAllBtn != null){	
					
						if ($(this).find('input:checkbox').is(screw.selectAllBtn)){
							if($(this).hasClass('checked')){
								$(checkbox).each(function(){
									if (!($(this).parent().hasClass('disabled'))) {
										$(this).attr('checked','checked')
										.trigger('change')
										.parent('.styledCheckbox')
										.addClass('checked')
										.css({"background-image":screw.checkedImage});
									}
								});
							}
							else {
								$(checkbox).each(function(){
									if (!($(this).parent().hasClass('disabled'))) {
										$(this).removeAttr('checked','checked')
										.trigger('change')
										.parent('.styledCheckbox')
										.removeClass('checked')
										.css({"background-image":screw.uncheckedImage});
									}
								});
							}
						} else {
						
							var radioDisabled = $container.filter('.disabled').length;
							var radioAll = $container.find(screw.selectAllBtn).length;
							var radioCheck = $container.filter('.checked').not('.disabled').not(screw.selectAllBtn).length;
							var radioTotal = $container.length;
							var radioAllCheck = $container.find(screw.selectAllBtn).parent().hasClass('checked')?1:0;
							
							
							if ((radioTotal - radioAll - radioDisabled) === (radioCheck - radioAllCheck)) {
								$(screw.selectAllBtn).attr('checked','checked')
									.parent('.styledCheckbox')
									.addClass('checked')
									.css({"background-image":screw.checkedImage});
							} else {
								$(screw.selectAllBtn).removeAttr('checked','checked')
									.parent('.styledCheckbox')
									.removeClass('checked')
									.css({"background-image":screw.uncheckedImage});
							}
						
						}
					}

					//$(this).find('input:checkbox').trigger('click');
				
				}
			}).hover(
				function(){
					var $this = $(this);
					isHover[$this.find('input:checkbox').attr('id')] = true;
					
					if(!($this.hasClass('disabled'))){
						if(!($this.hasClass('checked'))){
							$this.css({backgroundImage:screw.hoverImage});
						}else{
							$this.css({backgroundImage:screw.hoverCheckedImage});
						}
					}
				},
				function(){
					var $this = $(this);
					isHover[$this.find('input:checkbox').attr('id')] = true;
					
					if(!($this.hasClass('disabled'))){
						if(!($this.hasClass('checked'))){ 
							$this.css({backgroundImage:screw.uncheckedImage});
						} else {
							$this.css({backgroundImage:screw.checkedImage});
						}
					}
				
				}
			);
			
			$container.next('label').click(function(){
				var labelFor = $(this).attr('for');
				var checkForMatch = $('input:checkbox').filter('#' + labelFor);
				if (!(checkForMatch.parent().hasClass("checked"))){
					if ( $.browser.msie ) {
					  if( $.browser.version == 7.0 || $.browser.version == 8.0 ){
						 checkForMatch.attr('checked','checked')
						 .trigger('change')
						.parent('.styledCheckbox')
						.addClass('checked')
						//.css({"background-image":screw.checkedImage}); 
						.css({backgroundImage:isHover[labelFor]?((screw.hoverCheckedImage!==false)?screw.hoverCheckedImage:screw.checkedImage):screw.checkedImage});
					
						if (checkForMatch.is(screw.selectAllBtn)){
							$(checkbox).each(function(){
								$(this).attr('checked','checked')
								.trigger('change')
								.parent('.styledCheckbox')
								.addClass('checked')
								.css({"background-image":screw.checkedImage});
							});
						}
					
					  }
					}
				}	
				else if (checkForMatch.parent().hasClass("checked")){
					if ( $.browser.msie ) {
					  if( $.browser.version == 7.0 || $.browser.version == 8.0 ){
						checkForMatch.removeAttr('checked','checked')
							.trigger('change')
							.parent('.styledCheckbox')
							.removeClass('checked')
							//.css({"background-image":screw.uncheckedImage});
							.css({backgroundImage:isHover[labelFor]?((screw.hoverImage!==false)?screw.hoverImage:screw.uncheckedImage):screw.uncheckedImage});
						
					  
						$(screw.selectAllBtn).removeAttr('checked','checked')
							.trigger('change')
							.parent('.styledCheckbox')
							.removeClass('checked')
							.css({"background-image":screw.uncheckedImage});
						
					  }
					}
				}
			}).hover(
				function(){
					var labelFor = $(this).attr('for');
					var checkForMatch = $('input:checkbox').filter('#' + labelFor);
					isHover[labelFor] = true;
					
					if(!($(checkForMatch).is(':disabled'))){
						
						if (!(checkForMatch.parent().hasClass("checked"))){
							checkForMatch.parent().css({backgroundImage:screw.hoverImage});
						} else {
							checkForMatch.parent().css({backgroundImage:screw.hoverCheckedImage});
						}
					}
				},
				function(){
					var labelFor = $(this).attr('for');
					var checkForMatch = $('input:checkbox').filter('#' + labelFor);
					isHover[labelFor] = false;
					
					if(!($(checkForMatch).is(':disabled'))){
						
						if (!(checkForMatch.parent().hasClass("checked"))){
							checkForMatch.parent().css({backgroundImage:screw.uncheckedImage});
						} else {
							checkForMatch.parent().css({backgroundImage:screw.checkedImage});
						}
					}
				}
			);
			
			$container.css({"background-repeat":"no-repeat"});
			// ------------------------------------------------
		}
		
		/*
		$('.styledRadio').find('input:radio').css({"display":"inline-block"}).css({"position":"relative"}).css({"top":"-20px"});
		$('.styledCheckbox').find('input:checkbox').css({"display":"inline-block"}).css({"position":"relative"}).css({"top":"-20px"});
		*/
		
		var enable = function(elem){
			var e = $container.find(elem);
			var p = e.parent();
			
			if (p.hasClass('disabled')){
				e.removeAttr('disabled');
				p.removeClass('disabled');
			}
		};
		
		var enableAll = function(elem){
			$container.each(function(index, elem){
				var p = $container.eq(index);
				enable(p.find('input:' + typeElement));
			});
		};
		
		var disable = function(elem){
			var e = $container.find(elem);
			var p = e.parent();
			
			if (!p.hasClass('disabled')){
				e.attr('disabled', 'disabled');
				p.addClass('disabled');
			}			
		};
		
		var disableAll = function(elem){
			$container.each(function(index, elem){
				var p = $container.eq(index);
				disable(p.find('input:' + typeElement));
			});		
		};
		
		var isChecked = function(elem){
			return $container.find(elem).parent().hasClass('checked');
		};
		
		var check = function(elem){
			$container.find(elem).parent().click();
		};
		
		var uncheck = function(elem){
			var parent = $container.find(elem).parent();
			
			if(parent.hasClass('checked')){
				parent.removeClass('checked')
					.css({backgroundImage:isHover[$(this).find('input:' + typeElement).attr('id')]?((screw.hoverImage!==false)?screw.hoverImage:screw.uncheckedImage):screw.uncheckedImage})
					.find('input:' + typeElement)
						.removeAttr('checked','checked')
						.trigger('change');
			}
			
		};
		
		var uncheckAll = function(){
			$container.each(function(index, elem){
				var p = $container.eq(index);
				if (p.hasClass('checked')){
					uncheck(p.find('input:' + typeElement));
				}
			});
		}
		
		this.enable = enable;
		this.enableAll = enableAll;
		this.disable = disable;
		this.disableAll = disableAll;
		this.isChecked = isChecked;
		this.check = check;
		this.uncheck = uncheck;
		this.uncheckAll = uncheckAll;
		return this;
		
	}
	
	
	$.fn.screwDefaultButtons.defaults = {
		checked: 			"url(images/radio_Checked.jpg)",
		unchecked:			"url(images/radio_Unchecked.jpg)",
		hover:				false,
		hoverChecked:		false,
		disabled:			false,
		disabledChecked:	false,
		selectAll:  		null,
		//class:				null,
		width:				20,
		height:				20
	};



})(jQuery);
