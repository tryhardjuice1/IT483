$(document).ready(function() {
    $("p").hide();
    $("h2").hover(function(){
        $(this).next().show();
    },
        function() {
        $(this).next().hide();
    }
                 );
}); // end ready