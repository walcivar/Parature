/**
 * @module core
 */
   
if (typeof BBVA === 'undefined') {
  /**
   * Objeto base de la biblioteca CE.
   * @class CE
   * @static
   */
  // no se declara la variable, es intencionadamente global
  BBVA = {};

};


(function(L) {
  
  var bind = L.bind = function(fn, context) {
    return function() {
      return fn.apply(context, arguments);
    }
  };
  
  
})(BBVA);

