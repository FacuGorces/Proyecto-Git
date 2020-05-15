$(document).ready(function(){

    // ABRIR O CERRAR MENÚ DE NAVEGACIÓN EN CELULARES
    $("#navBarIconMenu").on("click", function() {
        $("#navBarItems").slideToggle();
    });

    $('.doctor').hover(function(){
        $(this).find('.doctorInfo').fadeIn(400); // EFECTO HOVER
    }, function(){
        $(this).find('.doctorInfo').fadeOut(400); // EFECTO MOUSE OUT
    });

});