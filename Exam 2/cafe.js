$(document).ready(function() {  
    
    //preload images
    $("img").each(function() {
    var imageURL = $(this).attr("href");    	
    var galleryImage = new Image();
	galleryImage.src = imageURL;
    });
    
    //hide info images
    $("li img:nth-child(2)").hide();
    
    //hover function to display info images
    $("li img:first-child").hover(function(){
        $(this).hide();
        $(this).next().show();
    },
        function() {
        $(this).next().hide();
        $(this).show();
    });
    
    var total = 0;
    var totalItems = "";
    $("#espresso").click(function(){
        total = total + 1.95;
        totalItems = totalItems + "Espresso - $1.95\n"
        $("#text").val(totalItems);
        $("h3").html("Total: $" + total.toFixed(2));
    });
    
    $("#latte").click(function(){
        total = total + 2.95;
        totalItems = totalItems + "Latte - $2.95\n"
        $("#text").val(totalItems);
        $("h3").html("Total: $" + total.toFixed(2));
    });
    
    $("#cappuccino").click(function(){
        total = total + 3.45;
        totalItems = totalItems + "Cappuccino - $3.45\n"
        $("#text").val(totalItems);
        $("h3").html("Total: $" + total.toFixed(2));
    });
    
    $("#coffee").click(function(){
        total = total + 1.75;
        totalItems = totalItems + "Coffee - $1.75\n"
        $("#text").val(totalItems);
        $("h3").html("Total: $" + total.toFixed(2));
    });
    
    $("#biscotti").click(function(){
        total = total + 1.95;
        totalItems = totalItems + "Biscotti - $1.95\n"
        $("#text").val(totalItems);
        $("h3").html("Total: $" + total.toFixed(2));
    });
    
    $("#scone").click(function(){
        total = total + 2.95;
        totalItems = totalItems + "Scone - $2.95\n"
        $("#text").val(totalItems);
        $("h3").html("Total: $" + total.toFixed(2));
    });
    
    $("button:nth-child(1)").click(function(){
        window.location.href = "checkout.html";
    });
    
    $("button:nth-child(2)").click(function(){
        $("#text").val("");
        $("h3").html("Total: ");
        total = 0;
        totalItems = "";
    });
});