
BBVA.UI = {};

//;
/**
 * Initialize radio buttons
 */

/* depende de cada p�gina...
(function(L) {
  
  var $ = L.jQuery;
  
  L.onInit(function(context) {
    $('input:radio', context).screwDefaultButtons({
      checked: "url(../img/input-radio-checked.png)",
      unchecked: "url(../img/input-radio.png)",
      hover: "url(../img/input-radio-hover.png)",
      hoverChecked: "url(../img/input-radio-hover-checked.png)",
      disabled: "url(../img/input-radio.png)",
      disabledChecked: "url(../img/input-radio-checked.png)",
      width: 18,
      height: 19
    });
  });

})(BBVA);*/

/**
 * Adds functionality to fold and unfold the search input
 */

(function(L) {
  
  var $ = L.jQuery;
  
  L.onInit(function(context) {
  
  /*  $('#search-box', context)
      .focus(function() {
        $('#navigation-menu').addClass('search-box-focused');
      })
      .blur(function() {
        $('#navigation-menu').removeClass('search-box-focused');
      })*/
  });

})(BBVA);
/**
 * Manage errors
 */

(function(L) {
  
  var $ = L.jQuery;
  
  L.onInit(function(context) {
  /*  $("div.modal-message").dialog({
      draggable: false,
      minHeight: 100,
      modal: true,
      resizable: false,
      width: 638
    });*/
  });

})(BBVA);


/**
 * Manage gestor box in header region
 */

(function(L) {
  
  var $ = L.jQuery;
  
  L.onInit(function(context) {
   /* $('#info-gestor-panel', context).hide();
    $('.info-gestor', context).click(function() {
      $(this).parent().toggleClass('opened');
      $('#info-gestor-panel', context).toggle();
    });
    $('.info-gestor-despl', context).click(function() {
      $('li.gestor-name', context).removeClass('opened');
      $('#info-gestor-panel', context).toggle();
    })*/
  });

})(BBVA);

/**
 * Manage user box in header region
 */


(function(L) {
  
  var $ = L.jQuery;
  
  L.onInit(function(context) {
   /* $('#user-pref-list', context).hide();
    $('span.user-name', context).click(function() {
      $(this).parent().toggleClass('opened');
      $('#user-pref-list', context).toggle();
    });
    $('span.main-user', context).click(function() {
      $('li.user-pref', context).removeClass('opened');
      $('#user-pref-list', context).toggle();
    });

    $('li.user-pref', context).outside('click', function() {
      if ($(this).hasClass('opened')){  
        $(this).removeClass('opened');
        $('#user-pref-list', context).toggle();
      }
    });*/
  });

})(BBVA);

/**
 * Manage client activation wizard
 */

(function(L) {
  
  var $ = L.jQuery;
  
  L.onInit(function(context) {

  /*  $('#client-activation span.inline-help a').click(function() {
      var process = $(this.hash);
      if (process.length) {
        $(process).dialog('open');
      }
      return false;
    });

    $("div.progress-bar-active", context).css("width","0%");
    var $wizardClientActivation = $('#client-activation').opWizard({
      buttonsContainer: 'ul.buttons-pagination-bottom',
      buttonClose: '#button-close',
      buttonNext: '#button-next',
      buttonPrevious: '#button-previous',
      operation: '#form',
      progressStepValues: ['0%', '46%', '91%'],
      progressContainer: 'div.progress-bar-container',
      progressBar: 'div.progress-bar-active',
      progressStep: 'li.progress-bar-step',
      submit: function() {
        return true;
      },
      onClose: function() {
        // hide all tooltips
        $wizardClientActivation.find(':input').each(function() {
          var tooltip = $(this).data('tooltip');
          if (tooltip) {
            tooltip.disable();
            tooltip.dismiss();
          }
        });
        $('div.modal-form').dialog('close');
      },
      
      validate: function(step) {
        var $form = $wizardClientActivation.find('form');
        return $form.valid();
      }
    });*/
  });

})(BBVA);

/**
 * Ie7 arrow buttons
 */

(function(L) {
  
  var $ = L.jQuery;
  
  L.onInit(function(context) {
  
	  if($.browser.msie && $.browser.version == '7.0'){
		 $('.arrow-right.btn').each(function(){
			 $(this).append('<div class="arrow-right-ie"></div>');
		 });
		 
		 $('.arrow-left.btn').each(function(){
			 $(this).append('<div class="arrow-left-ie"></div>');
		 });
	  }
	  
  });

})(BBVA);
/**
 * Manage help tooltip
 */


(function(L) {
  
  var $ = L.jQuery;
  
  L.onInit(function(context) {
    $('img.tooltip-help', context).each(function() {
      var tooltipMsg = this.title;
      this.title = '';

      $(this).orbitaltooltip({
          calcOffsetOnShow: true,
          html:'<div class="tooltip-body"><span>' + tooltipMsg + '</span></div><div class="tooltip-bubble"></div>',
          offset: 0,
          orbitalPosition: 0,
          spacing: 4,
          tooltipClass: 'tooltip-container',
          zindex: 1020
        });
    })
  });

})(BBVA);
/**
 * Manage infield labels
 */

(function(L) {
  
  var $ = L.jQuery;
  
  L.onInit(function(context) {
    // open/close form panel
    $('label.in-field', context).inFieldLabels();
  });

})(BBVA);

(function(L) {
  
  var $ = L.jQuery;
  
  L.onInit(function(context) {

    getDocHeight = function() {
    var D = document;
    return Math.max(
      Math.max(D.body.scrollHeight, D.documentElement.scrollHeight),
      Math.max(D.body.offsetHeight, D.documentElement.offsetHeight),
      Math.max(D.body.clientHeight, D.documentElement.clientHeight)
    );
  }

  getDocWidth = function () {
    var D = document;
    return Math.max(
      Math.max(D.body.scrollWidth, D.documentElement.scrollWidth),
      Math.max(D.body.offsetWidth, D.documentElement.offsetWidth),
      Math.max(D.body.clientWidth, D.documentElement.clientWidth)
    );
  }


ShowLoading = function(element, options){

    var $loading = $(element);
    var $box = $loading.children(".ui-loading-container");
    //var doc = document;
    var width = getDocWidth();
    var height = getDocHeight();
    var defaults = {
      top:100,
	  width:undefined,
      zindex:undefined
    };

    var config = jQuery.extend({}, defaults, options);

    $loading.css("top", "0");
    $loading.css("left", "0");
    $loading.css("width", width);
    $loading.css("height", height);
    $loading.css("opacity", 0);

    if(typeof(config.top)==='undefined'){
      $box.css("top", defaults.top + window.pageYOffset );
    } else {
      $box.css("top", config.top + window.pageYOffset );
    }

    if(!(typeof(config.zindex)==='undefined')){
      $loading.css("z-index", config.zindex);
    }

    $loading.show();

    $(document).bind('DOMSubtreeModified', function() {
      var $body = $("body");
	  if(typeof(config.width)==='undefined'){
			$loading.css("width", $body.width());
		} else {
			$box.css("width", config.width );
		}
      $loading.css("height", $body.height());
      $loading.children("ui-loading-container").css("margin-left", "auto").css("margin-right", "auto");
    });

    $loading.animate({
      opacity:1
    }, 500);
  }

  HideLoading = function(element){
    var $loading = $(element);
    $loading.animate({
      opacity: 0
    }, 500, function(){
      $loading.hide();
      $(document).unbind('DOMSubtreeModified');
    });
  }

 });

})(BBVA);



