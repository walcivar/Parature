/**
 * Yaguarete Utils
 * ---------------
 * This file encapsulates several utility functions used in Yaguarete.
 * Please, update "Dependencies" section whenever you add any function with strong dependencies on external libraries and its versions.
 *
 *
 * Dependencies
 * ------------
 * This section must specify dependency libraries and its version. Please, note that order is critical when importing libraries.
 * 		+ jquery-1.7.2
 * 		+ jshashtable-2.1
 * 		+ jquery.numberformatter-1.2.3
 */

jQuery.extend({
	
	/**
	 * Formats given amount parameter adding thousands separator.
	 * By default, locale will be as specified in html lang attribute. If html lang attribute is missing, then default value is "es".
	 * @param amount Required. Must be a number or a string convertible to a number.
	 * @param locale Optional. Language used to format amount number ("es", "us", etc...).
	 * @returns Locale formatted amount.
	 */
	formatAmount: function (amount, locale) {
		var number = undefined;
		locale = locale || $("html").attr("lang") || "es";
		
		if ($.isNumeric(amount)) {
			number = $.formatNumber(amount.toString(),
					{
						format:"#,###.00",
						locale: locale
					}
				);
			if (number == "") {
				number = 0;
			}
		} else {
			throw {
				name: "NaNError",
				message: "Given amount parameter must be a number or convertible to a number."
			};
		}
		
		return number;
	},
	
	/**
	 * Redirects to a target URL with the ability to send POST data together.
	 * @param target The target URL.
	 * @param values An object of values to be sent as parameters.
	 * @param method Request method to use. POST by default.
	 */
	redirect: function (target, values, method) {
		values = values || {}; // Force values to be an object
		$.extend(values, $.buildCsrfTokenObject());
		$().redirect(target, values, method);
	},
	
	/**
	 * Builds a CSRF token object which can be used to configure XHR headers.
	 * @return Object containing CSRF token key/value pair.
	 */
	buildCsrfTokenObject: function () {
		var csrfToken = $("body").data("csrf-token");
		var csrfTokenObject = {};
		if (csrfToken !== undefined) {
			csrfTokenObject = {"X-Csrf-Token": csrfToken};
		}
		return csrfTokenObject;
	}
	
});