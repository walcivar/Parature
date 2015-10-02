if (!Array.prototype.forEach)
{
  Array.prototype.forEach = function(fun /*, thisp*/)
  {
    var len = this.length;
    if (typeof fun != "function")
      throw new TypeError();

    var thisp = arguments[1];
    for (var i = 0; i < len; i++)
    {
      if (i in this)
        fun.call(thisp, this[i], i, this);
    }
  };
}

/**
	$.namespace( 'jQuery.bbva' );
	$.namespace( 'jQuery.bbva.debug' );
	$.bbva.test1 = function()
	{
		alert( 'test1 function' );
	};
	$.bbva.debug.test2 = function()
	{
		alert( 'test2 function' );
	};
	// usage
	$.bbva.test1();
	$.bbva.debug.test2();
**/
(function($){
	$.namespace = function() {
		var a=arguments, o=null, i, j, d;
		for (i=0; i<a.length; i=i+1) {
			d=a[i].split(".");
			o=window;
			for (j=0; j<d.length; j=j+1) {
				o[d[j]]=o[d[j]] || {};
				o=o[d[j]];
			}
		}
		return o;
	};
}(jQuery));

(function($){
	$.isFunction = function(obj) {
		return !!(obj && obj.constructor && obj.call && obj.apply);
	};
}(jQuery));

/**
Evento que se produce cuando se realiza el evento indicado fuera del elemento en cuestion
Ejemplo:
	$('.panel-tab').outside('click', function() {
		$('#panel').stop(true, true).slideUp('slow');
	});
 **/
(function($){
    $.fn.outside = function(ename, cb)
    {
        return this.each(function()
        {
            var $this = $(this),
            self = this;

            $(document).bind(ename, function tempo(e)
            {
                if(e.target !== self && !$.contains(self, e.target))
                {
                    cb.apply(self, [e]);
                    if(!self.parentNode) $(document.body).unbind(ename, tempo);
                }
            });
        });
    };
}(jQuery));


/*** LiveSearch ***/
(function($)
{
	$.fn.livesearch = function(source, options){

		var $this = $(this);
		
		if ($this.length <= 0){
			return $this;
		}
		
		var $results = null;
		var id = $this.eq(0).attr('id');
		var resultsId = id + "-results";
		var autocomplete_init = false;
		var jsp;
		
		var scrollPaneOptions = {
			verticalGutter: 0,
			autoReinitialiseDelay: 0,
			showArrows: true,
			contentWidth:132,
			verticalArrowPositions: 'after',
			horizontalArrowPositions: 'after'
		};
		
		var config = {
			source: source,
			ulId: resultsId,
			open: function(event, ui){
			
				if (autocomplete_init === false) {
				
					$results = $("#" + resultsId);
					$results.removeClass('ui-corner-all');
					$results.find('.ui-menu-item').find('a').removeClass('ui-corner-all');
					jsp = $results.jScrollPane(scrollPaneOptions).data('jsp');
					
					autocomplete_init = true;
					
				} else {

				   jsp.reinitialise(scrollPaneOptions);
				   
				}
				
				$this.addClass("livesearch");
			}, 
			close: function(event, ui) {
				$this.removeClass("livesearch");
			}
		};
		
		config = $.extend({}, config, options);
		
		$this.autocomplete(config);
		
		return $this;
		
	};

})(jQuery);
/*** End of LiveSearch ***/