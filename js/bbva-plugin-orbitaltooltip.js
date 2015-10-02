/*
 * OrbitalTooltip jQuery Plugin (http://www.userfirstinteractive.com/)
 * @author Scott D. Brooks 
 * @created by UserFirst Interactive (creations@userfirstinteractive.com)
 * 
 * @version 0.1
 * 
 * @changelog
 * v 0.1 	->	Starting release [Nov. 26, 2008]
 * 
 */
(function($) {
	
	// Decalre important math functions
	Math.cot = function(x) { return 1 / Math.tan(x); }
	
	function degrees_to_radians(deg) {
    	return deg * (Math.PI/180);
	}
	
	function radians_to_degrees(rad) {
    	return rad * (180/Math.PI);
	}	

	// calculates the size of the opposite side
	function calculate_opposite_side(adjacent, degrees) {
		return Math.round(Math.tan(degrees_to_radians(degrees)) * adjacent);
	}
	
	// calculates the size of the adjacent side
	function calculate_adjacent_side(opposite, degrees) {
		return Math.round(Math.cot(degrees_to_radians(degrees)) * opposite);
	}
	
	function calculate_degrees_from_sides(adjacent, opposite) {
		return radians_to_degrees(Math.atan(opposite / adjacent));
	}
	// End Math functions
	
	function childWidth(children) {
	  if (typeof children == "undefined" || children.size() === 0) {
		return 0;
	  }
	  var newWidth = children.outerWidth?children.outerWidth():(children.width?children.width():0);
	  
	  children.each(function(){
		var child = $(this);
		var childs = child.children();
		var elemWidth = child.outerWidth?child.outerWidth():(child.width?child.width():0);
		
		if (childs.size() > 0) {
		  var cWidth = childWidth(childs);
		  elemWidth = (elemWidth>cWidth)?elemWidth:cWidth;
		}
		newWidth = (newWidth>elemWidth)?newWidth:elemWidth;
	  });
	  return newWidth;
	}
	
    $.extend({
        orbitaltooltip: {
            version: 0.1,
            defaults: {
	        	orbitalPosition: 	180,								// the tooltip's position in degrees from the center of the object (0 or 360 degrees being top, 90 right, 180 bottom, 270 left... and everything in between).
	        	tooltipClass: 		'orbitaltooltip-default-bottom',	// class for the tooltip
	        	spacing: 			5,									// spacing from the edge of the object requesting a tooltip
	        	offset: 			0, 									// depending on the side of display, move the tooltip closer or further from the top left (so -10 would move the tooltip closer to the left when displayed on top or bottom)
	        	html:				'<p>sample text</p>',				// HTML within the tooltip
				htmlFrom:			undefined,							// selector for html included in document
	        	//revealStyle: 		'fade',  							// not currently in use
	        	//orbit:				false,  							// not currently in use
	        	//orbitInterval:		500,  								// not currently in use
				forcePosition:		undefined,							// left, top
				autoHide:			true,
				hideTooltips:		false,
				zindex:				undefined,
				id:					undefined,
				calcOffsetOnShow:	false
            }
        }
    });
    
    $.fn.extend({
        orbitaltooltip: function(options) {
            var options 		= jQuery.extend({}, jQuery.orbitaltooltip.defaults, options);
            var orbTooltip 		= this;
			var thetooltip;
            var uniqueID 		= '';
            var tooltipPosition;
			var disabled        = false;
            // add divs for each item
			
			this.enable = function(){
				disabled = false;
			}
			
			this.disable = function(){
				disabled = true;
			}

			this.reveal = function(){
				//var theTooltip = jQuery("#" + uniqueID);
				position(thetooltip, tooltipPosition[0], tooltipPosition[1]);
				//this.fadeIn(200);
			};

			this.dismiss = function(){
				//var theTooltip = jQuery("#" + uniqueID);
				thetooltip.fadeOut(200);
			};
			
			this.tooltip = function(){return thetooltip;}
			
			this.recalcPosition = function(){
				tooltipPosition = calculatePosition(orbTooltip, thetooltip, options.orbitalPosition, options.spacing, options.offset);
				thetooltip.css("position","absolute");
				thetooltip.css("top",tooltipPosition[0]);
				thetooltip.css("left",tooltipPosition[1]);
			};
			
			/*+++
			function position(element,x,y)
			{
				element.stop(true, true);		
				element.css("position","absolute");
				element.css("top",y);
				element.css("left",x);
				revealTooltip(element);
			}
			+++*/
			
			if (options.htmlFrom === undefined){	//the standar way
				
				if (options.id !== undefined){
					if($("#" + options.id).length > 0)
						throw new Error("Ya existe un elemento con el id: " + options.id);
					else
						uniqueID = options.id;
				}else{
					uniqueID = 'orbitalTip_' + this.attr("id");
				}
				//jQuery("body").append(jQuery(document.createElement('div')).html(options.html).addClass(options.tooltipClass).attr("id",uniqueID).css("display","none"));
				jQuery(document.createElement('div')).html(options.html).addClass(options.tooltipClass).attr("id",uniqueID).css("display","none").appendTo('body');
				thetooltip = jQuery("#" + uniqueID);
				
				if ($.browser.msie && $.browser.version === "7.0"){
					//debugger;
					var w = childWidth(thetooltip.children(':first'));
					thetooltip.width(w);
					//thetooltip.width(thetooltip.children(':first').outerWidth());
				}
				
				if (options.zindex !== undefined) {
					thetooltip.css('z-index', options.zindex);
				}
			} else {
				
				if (typeof options.htmlFrom == 'string'){
					var $elem = $('#' + options.htmlFrom).eq(0);
					uniqueID = $elem.attr("id");
					thetooltip = $elem;
					//jQuery("body").append(jQuery(document.createElement('div')).html(options.html).addClass(options.tooltipClass).attr("id",uniqueID).css("display","none"));
				} else {
					uniqueID = 'orbitalTip_' + this.attr("id");
					//jQuery("body").append(jQuery(document.createElement('div')).html('Error en selector htmlFrom.').addClass(options.tooltipClass).attr("id",uniqueID).css("display","none"));
					jQuery(document.createElement('div')).html(options.html).addClass(options.tooltipClass).attr("id",uniqueID).css("display","none").appendTo('body');
					thetooltip = jQuery("#" + uniqueID);
					
					if ($.browser.msie && $.browser.version === "7.0"){
						thetooltip.width(thetooltip.children(':first').outerWidth());
					}
					
					if (options.zindex !== undefined){
						thetooltip.css('z-index', options.zindex);
					}
				}
				
			}
        	
			// skip initial position calc. if they are choosing to have the tooltip orbit
			//if (options.orbit != true) {
				if (options.forcePosition) {
					tooltipPosition = options.forcePosition;
				}
				else {
					tooltipPosition = calculatePosition(orbTooltip, thetooltip, options.orbitalPosition, options.spacing, options.offset);
				}
			//}
			
        	//var fly_orbit = false;

            return this.hover(
                function(e) {
					if(disabled)
						return;
					
					if (options.hideTooltips === true) {
						var $tooltips = $('[id^="orbitalTip_"]');
						$.each($tooltips, function(i, obj){
							var $tooltipObj = $tooltips.eq(i);
							if ($tooltipObj.css('display') !== 'none')
								$tooltipObj.hide();
						});
						
					}
					
					if (options.calcOffsetOnShow === true) {
						tooltipPosition = calculatePosition(orbTooltip, thetooltip, options.orbitalPosition, options.spacing, options.offset);
					}
					
                	/*if (options.orbit == true) {
                		  Causing lock-up at the moment.  Will investigate further at a later date
                		var position = options.orbitalPosition;
                		fly_orbit = true;
                		while (fly_orbit) {
                			position = position + 1;
                			if (position > 360) { position = 1; }
                			tooltipPosition = calculatePosition(orbTooltip, jQuery("#" + uniqueID), position, options.spacing);
                			setTimeout("move_along_orbit(jQuery('#' + uniqueID), tooltipPosition)", options.orbitInterval);
                		}
                		
                		alert('orbiting functionality is not currently functioning');
                  	} else {*/
						if (options.autoHide || (!options.autoHide && thetooltip.eq(0).css('display') === 'block')) {
							position(thetooltip, tooltipPosition[0], tooltipPosition[1]);
						}
                	/*}*/
                },
                function(e) {
					// off hover
					if (options.autoHide){
						//fly_orbit = false;
						hideTooltip(thetooltip);
					}
                }
            );
        }
    });
    
	function move_along_orbit(tooltip, tooltipPosition)
	{	
		tooltip.fadeOut(50);
		tooltip.css("position","absolute");
		tooltip.css("top",tooltipPosition[1]);
		tooltip.css("left",tooltipPosition[0]);
		tooltip.fadeIn(50);		
	}

	function position_top(element_to_add_tooltip, tooltip, spacing)
	{	
		// var element_width = element_to_add_tooltip.width() + get_horizontal_padding(element_to_add_tooltip);
		// var element_height = element_to_add_tooltip.height() + get_vertical_padding(element_to_add_tooltip);
	
		var tooltip_width = tooltip.width();
		var tooltip_height = tooltip.height();

		var coordinates = element_to_add_tooltip.offset()
		var x = coordinates.left + ((element_width / 2) - (tooltip_width / 2));
		var y = coordinates.top - tooltip_height;
		
		position(tooltip, x, y);
	}
	
	function get_vertical_padding(element)
	{	
		var vertical_padding = parseInt(element.css('padding-top')) + parseInt(element.css('padding-bottom'));
		vertical_padding = vertical_padding + parseInt(element.css('border-top-width')) + parseInt(element.css('border-bottom-width'));
		
		return vertical_padding;
	}
	
	
	function get_horizontal_padding(element)
	{	
		var horizontal_padding = parseInt(element.css('padding-right')) + parseInt(element.css('padding-left'));
		horizontal_padding = horizontal_padding + parseInt(element.css('border-right-width')) + parseInt(element.css('border-left-width'));
		
		return horizontal_padding;
	}
	
	function calculatePosition(element_to_add_tooltip, tooltip, orbitalPosition, spacing, offset)
	{
		if (!(element_to_add_tooltip && element_to_add_tooltip.length > 0)) {
			return;
		}
		
		var position = new Array();		// x=[0], y=[1]
				
		var element_center = get_element_center_coordinates(element_to_add_tooltip);
		var tooltip_center = get_element_center_coordinates(tooltip);

		// error checking on degrees
		if (orbitalPosition > 360 || orbitalPosition < 0 ) {
			alert('You have misconfigured your orbitalTooltip - please choose from an orbit between 0-360 degrees for the object: #' + orbitalTooltip.attr("id"));
			position[0] = 0;
			position[1] = 0;
			return position;
		}
		//debugger;
		var adjacent = element_to_add_tooltip.height() / 2;
		var opposite = element_to_add_tooltip.width() / 2;
		
		var angle_to_corner = calculate_degrees_from_sides(adjacent, opposite);
				
		var topleft_indegrees = Math.round(360 - angle_to_corner);
		var topright_indegrees = Math.round(angle_to_corner);
		var bottomright_indegrees = Math.round(180 - angle_to_corner);
		var bottomleft_indegrees = Math.round(180 + angle_to_corner);

		switch (true)
		{
			// All right angles within element
			case ((orbitalPosition == 0) || (orbitalPosition == 360)):  // top
				position[0] = element_center[0] - Math.round(tooltip.width() / 2);
				position[1] = element_center[1] - Math.round(element_to_add_tooltip.height() / 2) - (tooltip.height() + spacing);
				break;
			case (orbitalPosition == 90):  // right
				position[0] = element_center[0] + Math.round(element_to_add_tooltip.width() / 2) +  spacing;
				position[1] = element_center[1] - Math.round(tooltip.height() / 2);
				break;
			case (orbitalPosition == 180):  // bottom
				position[0] = element_center[0] - Math.round(tooltip.width() / 2);
				position[1] = element_center[1] + Math.round(element_to_add_tooltip.height() / 2) + spacing;
				break;
			case (orbitalPosition == 270):  // left
				position[0] = element_center[0] - Math.round(element_to_add_tooltip.width() / 2) - (tooltip.width() + spacing);
				position[1] = element_center[1] - Math.round(tooltip.height() / 2);
				break;
			// Quadrants - between angles bisecting the corners of the object
			case (((orbitalPosition >= topleft_indegrees) && (orbitalPosition < 360)) || (orbitalPosition < topright_indegrees)):  		// top
				if (orbitalPosition >= topleft_indegrees) {
					degrees_from_bisector = 360 - orbitalPosition;
					var tt_shift = 1 - calculate_opposite_side((element_to_add_tooltip.height()/2), degrees_from_bisector);
					tt_shift = tt_shift - calculate_opposite_side((tooltip.height()/2), degrees_from_bisector);
				} 
				if (orbitalPosition < topright_indegrees) {  
					degrees_from_bisector = orbitalPosition;
					var tt_shift = calculate_opposite_side((element_to_add_tooltip.height()/2), degrees_from_bisector);
					tt_shift = tt_shift + calculate_opposite_side((tooltip.height()/2), degrees_from_bisector);
				}
				position[0] = element_center[0] + offset + tt_shift - Math.round(tooltip.width()/2); 
				position[1] = element_center[1] - Math.round(element_to_add_tooltip.height() / 2) - (tooltip.height() + spacing);
				break;
			case ((orbitalPosition >= topright_indegrees) && (orbitalPosition < bottomright_indegrees)):  	// right
				if (orbitalPosition < 90) {  
					degrees_from_bisector = 90 - orbitalPosition;
					var tt_shift = 1 - calculate_opposite_side((element_to_add_tooltip.width()/2), degrees_from_bisector);
				} else {  
					degrees_from_bisector = orbitalPosition - 90;
					var tt_shift = calculate_opposite_side((element_to_add_tooltip.width()/2), degrees_from_bisector);
				}		
				position[0] = element_center[0] + Math.round(element_to_add_tooltip.width() / 2) + spacing;
				position[1] = element_center[1] + offset + tt_shift - Math.round(tooltip.height()/2); 
				break;
			case ((orbitalPosition >= bottomright_indegrees) && (orbitalPosition < bottomleft_indegrees)):  // bottom
				if (orbitalPosition < 180) {  
					degrees_from_bisector = 180 - orbitalPosition;
					var tt_shift = calculate_opposite_side((element_to_add_tooltip.height()/2), degrees_from_bisector);
				} else {  
					degrees_from_bisector = orbitalPosition - 180;
					var tt_shift = 1 - calculate_opposite_side((element_to_add_tooltip.height()/2), degrees_from_bisector);
				}
				position[0] = element_center[0] + offset + tt_shift - Math.round(tooltip.width()/2); 
				position[1] = element_center[1] + Math.round(element_to_add_tooltip.height()/2) + spacing;
				break;
			case ((orbitalPosition >= bottomleft_indegrees) && (orbitalPosition < topleft_indegrees)):  	// left
				if (orbitalPosition < 270) {  
					degrees_from_bisector = 270 - orbitalPosition;
					var tt_shift = calculate_opposite_side((element_to_add_tooltip.width()/2), degrees_from_bisector); 
				} else {  
					degrees_from_bisector = orbitalPosition - 270;
					var tt_shift = 1 - calculate_opposite_side((element_to_add_tooltip.width()/2), degrees_from_bisector); 
				}	
				position[0] = element_center[0] - Math.round(element_to_add_tooltip.width() / 2) - (tooltip.width() + spacing);
				position[1] = element_center[1] + offset + tt_shift - Math.round(tooltip.height()/2); 
				break;
		}
		
		return position;
	}
	
	function position(element,x,y)
	{
		element.stop(true, true);		
		element.css("position","absolute");
		element.css("top",y);
		element.css("left",x);
		revealTooltip(element);
	}
	
	function get_element_center_coordinates(element)
	{	
		//debugger;
		var center_of_element = new Array();
		
		var element_top_left_coords = element.offset()	

		center_of_element[0] = element_top_left_coords.left + Math.round((element.width() + get_horizontal_padding(element)) / 2);
		center_of_element[1] = element_top_left_coords.top + Math.round((element.height() + get_vertical_padding(element)) / 2);
		
		return center_of_element;
	}	
	
	function revealTooltip(tooltip)
	{
		tooltip.fadeIn(200);
	}
	
	function hideTooltip(tooltip)
	{
		tooltip.fadeOut(200);
	}
		    
})($);