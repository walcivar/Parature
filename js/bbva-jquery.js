BBVA.jQuery = jQuery;
(function(L) {
  
  var ArrayP = Array.prototype,
  
  $break = {},
  
  /**
   * Toma un objeto array-like y retorna un array.
   *  
   * @method Array
   * @for CE
   * @param {Array|Arguments|NodeList} arrayLike Objeto a transformar en array
   * @param {Number} [from=0] Índice del primer elemento a incluir en el array de retorno.
   *   En caso de utilizar un valor negativo, se devuelven elementos desde el final del array
   * @return {Array} Array obtenido a partir del objeto arrayLike. En caso de suministrar 
   *   un array, se retornará una copia
   */  
  A = L.Array = function(arrayLike, from) {
    from = from || 0;
    return ArrayP.slice.call(arrayLike, from);
  };
  
  /**
   * Itera sobre cada elemento de un array ejecutando una función de callback.
   * El rango de elementos procesados se determina antes de la primera invocación de la
   * función de callback. Los elementos agregados al array tras la invocación de `each`
   * no se visitan. Los valores suministrados al callback corresponden al valor del elemento
   * en el momento de la visita.
   * @method each
   * @for CE.Array
   * @param {Array} a Array sobre el que realizar la iteración
   * @param {Function} fn Función de callback. Recibe tres argumentos: el valor del 
   *   ítem actual, su índice y el objeto sobre el que se itera
   * @param {Object} [context=undefined] Contexto de ejecución para la función de callback
   */
  // Si el array nativo implementa forEach, delegamos en él
  A.each = ArrayP.forEach ?
    function(a, fn, context) {
      return a.forEach(fn, context);
    } :
    function(a, fn, context) {
      var l = a.length, i;
      fn = L.bind(fn, context);
      for (i = 0; i < l; i += 1) {
        if (i in a) { // no se ejecuta el callback para valores undefined
          fn(a[i], i, a);
        }
      }
    };

  /**
   * Itera sobre un array en busca de un valor dado y devuelve su posición.
   * La comparación de valores se realiza mediante identidad.
   * @method indexOf
   * @for CE.Array
   * @param {Array} a Array en el que buscar
   * @param {Any} search Valor por localizar
   * @param {Number} [fromIndex=0] Posición de inicio de la búsqueda
   * @return {Number} Posición del valor en la lista o `-1` si la lista no lo incluye.
   */  
  A.indexOf = ArrayP.indexOf ?
    function(a, search, fromIndex) {
      return a.indexOf(search, fromIndex);
    } :
    function(a, search, fromIndex) {
      var l = a.length,
      i = fromIndex || 0;
      for ( ; i < l; i += 1) {
        if (a[i] === search) {
          return i;
        }
      }
      return -1;
    };
  
})(BBVA);
/**
 * @module core
 */

(function(L) {
  
  var stack = [],
  $ = L.jQuery;

  /**
   * Ejecuta todas las funciones de incialización
   * @method init
   * @for CE
   * @param context
   */ 
  L.init = function(context) {
    if (context && typeof context == 'function') {
      context = document;
    }
    context = context || document;
    L.Array.each(stack, function(fn) {
      fn(context);
    });
  };

  
  /**
   * Añade un método a la cola de inicialización de la interfaz.
   * @method onInit
   * @for CE
   * @param {Function} method
   */  
  L.onInit = function(method) {
    stack.push(method);
    return L;
  };
  
  
  $(document).ready(L.init);
  
})(BBVA);
