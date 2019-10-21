"use strict";
var $ = function(id) {
    return document.getElementById(id); 
};

var calculateSalesTax = function(subtotal, tax_rate) {
    var sales_tax = subtotal * tax_rate;
    return sales_tax;
};

var calculateTotal = function(subtotal, tax_rate) {
    var total = calculateSalesTax(subtotal, tax_rate) + subtotal;
    return total;
};

var clearInput = function() {
    $("subtotal").value = "";
    $("tax_rate").value = "";
    $("sales_tax").value = "";
    $("total").value = "";
}

var processEntries = function() {
    var subtotal = parseFloat($("subtotal").value);
    var tax_rate = parseFloat($("tax_rate").value);
    
    if (isNaN(subtotal) || isNaN(tax_rate)) {
        alert("Both entries must be numeric");
    } else if (subtotal <= 0 || tax_rate <= 0) {
        alert("Both entries must be greater than zero");
    } else {
        $("sales_tax").value = calculateSalesTax(subtotal, tax_rate);
        $("total").value = calculateTotal(subtotal, tax_rate);
    }
};

window.onload = function() {
    $("calculate").onclick = processEntries;
    $("total").focus();
    $("clear").onclick = clearInput;
};