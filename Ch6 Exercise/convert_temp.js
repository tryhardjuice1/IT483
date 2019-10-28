"use strict";
var $ = function(id) { return document.getElementById(id); };


var clearTextBoxes = function() {
    $("degrees_entered").value = "";
    $("degrees_computed").value = "";
};

var toCelsius = function() {
    document.getElementById("degree_label_1").innerHTML = "Enter F degrees:";
    document.getElementById("degree_label_2").innerHTML = "Degrees Celsius";
    clearTextBoxes();
};

var toFahrenheit = function() {
    document.getElementById("degree_label_1").innerHTML = "Enter C degrees:";
    document.getElementById("degree_label_2").innerHTML = "Degrees Fahrenheit";
    clearTextBoxes();
};

var convertTemp = function() {
    var finalDegree = 0;
    var degree = parseFloat($("degrees_entered").value);
    if (isNaN(degree)) {
        alert("You must enter a valid number for degrees.");
    }
    else if($("to_celsius").checked) {
        $("degrees_computed").value = ((degree - 32) * (5/9)).toFixed(0);
    }
    else if($("to_fahrenheit").checked) {
        $("degrees_computed").value = ((degree * (9/5)) + 32).toFixed(0);
    }
};

window.onload = function() {
    $("convert").onclick = convertTemp;
    $("to_celsius").onclick = toCelsius;
    $("to_fahrenheit").onclick = toFahrenheit;
	$("degrees_entered").focus();
};