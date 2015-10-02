(function($){
	"use strict";
	
	// Fetch currency quotations and display the table
	var displayCurrencyQuotationTable = function(){
		$.doAjax({
			options: {
				url: "/Yaguarete/public/quotations"
			},
			handlers: {
				success: function(data) {
					var $response = $.parseJSON(data);
					
					$.each($response, function(i){
						
						var table = $('#quotation-table');
						 var row = $('<tr style="background-color:#FFF"></tr>').addClass('firstRow');
						 row.append($('<td class="description"></td>').text($response[i].currency.code));
						 row.append($('<td class="number"></td>').text($response[i].cashBuyPrice+' / '+$response[i].cashSellPrice));
						 row.append($('<td class="number"></td>').text($response[i].checkBuyPrice+' / '+$response[i].checkSellPrice));
						 row.append($('<td class="number"></td>').text($response[i].electronicBuyPrice+' / '+$response[i].electronicSellPrice));
						 table.append(row);
					});
				},
				error: function(data){
					console.log(data);
				},
				nonHandledError: function(data){
					console.log(data);
				}
			}
		});	
	}();
	
	
	
}(window.jQuery));